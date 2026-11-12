"use client";

import { useState } from "react";
import { CONTACT_KINDS, CONTACT_LIMITS, CONTACT_TO } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

// The contact form. It posts to /api/contact, which emails the studio. If
// sending fails the visitor is shown the email address so the message is not lost.
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const out = await res.json().catch(() => null);
      if (res.ok && out?.ok) {
        setStatus("sent");
        return;
      }
      setError(out?.error || "The message could not be sent.");
    } catch {
      setError("The message could not be sent.");
    }
    setStatus("error");
  }

  if (status === "sent") {
    return (
      <div className="v-form v-form--sent" role="status">
        <h2 className="v-h3">Message sent.</h2>
        <p>Thank you. We reply within one day.</p>
      </div>
    );
  }

  return (
    <form className="v-form" onSubmit={onSubmit}>
      <div className="v-form__row">
        <label className="v-field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required maxLength={CONTACT_LIMITS.name} />
        </label>
        <label className="v-field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={CONTACT_LIMITS.email} />
        </label>
      </div>
      <div className="v-form__row">
        <label className="v-field">
          <span>Company <em>optional</em></span>
          <input name="company" type="text" autoComplete="organization" maxLength={CONTACT_LIMITS.company} />
        </label>
        <label className="v-field">
          <span>What is it?</span>
          <select name="kind" defaultValue={CONTACT_KINDS[0]}>
            {CONTACT_KINDS.map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="v-field">
        <span>The project</span>
        <textarea
          name="message"
          rows={7}
          required
          minLength={10}
          maxLength={CONTACT_LIMITS.message}
          placeholder="What you’re making, the timeline, the deliverables and any references."
        />
      </label>

      {/* Hidden from people. Automated form-fillers complete it and are ignored. */}
      <div className="v-form__trap" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="v-form__foot">
        <button className="v-form__send" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
          <span className="v-arr" aria-hidden="true">&rarr;</span>
        </button>
        <span className="v-form__promise">We reply within one day.</span>
      </div>

      {status === "error" && (
        <p className="v-form__error" role="alert">
          {error} You can also email <a href={`mailto:${CONTACT_TO}`}>{CONTACT_TO}</a>.
        </p>
      )}
    </form>
  );
}
