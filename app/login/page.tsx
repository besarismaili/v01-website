"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.refresh();
      router.push("/admin");
    }
  };

  return (
    <main data-page="login" style={{ minHeight: "70vh", padding: "64px 18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "320px" }}>
        <div style={{ marginBottom: "32px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: "42px", margin: "0 0 8px", textTransform: "uppercase" }}>V01</h1>
          <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--fg-mute)", margin: 0 }}>Studio Console</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {error && <div style={{ padding: "12px", border: "1px solid rgba(224,138,118,0.3)", color: "#e08a76", fontSize: "12px", fontFamily: "var(--mono)" }}>{error}</div>}

          <div>
            <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: ".28em", textTransform: "uppercase", color: "var(--fg-mute)", marginBottom: "8px" }} htmlFor="login-email">Email</label>
            <input
              id="login-email"
              name="email"
              autoComplete="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: "100%", background: "transparent", border: "1px solid var(--line)", padding: "11px 14px", fontFamily: "var(--mono)", fontSize: "13px", color: "var(--fg)", outline: "none" }}
              required
            />
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: ".28em", textTransform: "uppercase", color: "var(--fg-mute)", marginBottom: "8px" }} htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: "100%", background: "transparent", border: "1px solid var(--line)", padding: "11px 14px", fontFamily: "var(--mono)", fontSize: "13px", color: "var(--fg)", outline: "none" }}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ marginTop: "8px", padding: "14px", border: "1px solid var(--fg)", background: "var(--fg)", color: "#0b0d0e", fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", cursor: loading ? "not-allowed" : "pointer" }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
