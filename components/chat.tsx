"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUp, LoaderCircle } from "lucide-react";

const API_URL = "https://chatbot-fsys.onrender.com/api/chat";
const HEALTH_URL = "https://chatbot-fsys.onrender.com/health";

const suggestions = [
  "What are you studying?",
  "Where have you worked?",
  "Which projects should I look at?",
];

type Role = "user" | "assistant";

type Message = {
  role: Role;
  content: string;
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [waitNote, setWaitNote] = useState("Thinking");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    void fetch(HEALTH_URL, { signal: controller.signal }).catch(() => undefined);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!loading) {
      setWaitNote("Thinking");
      return;
    }
    const timer = window.setTimeout(() => {
      setWaitNote("Waking up the server. The first answer can take a minute.");
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, loading, error, waitNote]);

  async function ask(question: string) {
    const text = question.trim();
    if (!text || loading) return;

    const history = messages.slice(-8);
    setMessages((current) => [...current, { role: "user", content: text }]);
    setDraft("");
    setError("");
    setLoading(true);

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 90000);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
        signal: controller.signal,
      });
      const data = (await response.json().catch(() => null)) as
        | { reply?: string; error?: string }
        | null;

      if (!response.ok || !data?.reply) {
        setError(data?.error || "I couldn't answer that just now. Please try again.");
        return;
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply as string },
      ]);
    } catch (err) {
      const aborted = err instanceof DOMException && err.name === "AbortError";
      setError(
        aborted
          ? "This is taking a while. The server may be waking up. Please try again."
          : "I couldn't reach the assistant. Please try again in a moment.",
      );
    } finally {
      window.clearTimeout(timer);
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void ask(draft);
  }

  return (
    <section id="ask" className="scroll-mt-24 border-t border-white/10 bg-navy py-20 text-mist sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-ice uppercase">Ask</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-mist sm:text-4xl">
            Ask me anything
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ice/85">
            I answer from the information on this site.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => void ask(suggestion)}
              disabled={loading}
              className="rounded-full border border-ice/30 bg-white/5 px-4 py-2 text-sm text-mist transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl bg-white text-navy shadow-xl ring-1 ring-ice/25">
          <div className="max-h-[28rem] min-h-56 space-y-3 overflow-y-auto bg-mist/40 px-4 py-5 sm:px-5">
            {messages.length === 0 && !loading ? (
              <p className="text-sm leading-relaxed text-ocean">
                Ask about coursework, internships, or projects. If it isn&apos;t on this site, I&apos;ll say so. The first answer after a pause can take a minute while the server wakes up.
              </p>
            ) : null}
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <p
                  className={
                    message.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-md bg-navy px-4 py-2.5 text-sm leading-relaxed text-mist"
                      : "max-w-[85%] rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-sm leading-relaxed text-navy ring-1 ring-pacific/20"
                  }
                >
                  {message.content}
                </p>
              </div>
            ))}
            {loading ? (
              <div className="flex justify-start">
                <p className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm text-ocean ring-1 ring-pacific/20">
                  <LoaderCircle className="size-4 animate-spin" />
                  {waitNote}
                </p>
              </div>
            ) : null}
            {error ? (
              <p className="text-sm text-ocean" role="alert">
                {error}
              </p>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-pacific/15 bg-white px-3 py-3 sm:px-4">
            <label htmlFor="portfolio-question" className="sr-only">
              Question
            </label>
            <input
              id="portfolio-question"
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              maxLength={600}
              placeholder="Ask about Aryan"
              disabled={loading}
              className="h-11 min-w-0 flex-1 rounded-full border border-pacific/25 bg-mist/30 px-4 text-sm text-navy outline-none placeholder:text-ocean/70 focus:border-pacific focus:ring-2 focus:ring-pacific/30 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !draft.trim()}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-pacific text-navy transition-colors hover:bg-ice disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send question"
            >
              <ArrowUp className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
