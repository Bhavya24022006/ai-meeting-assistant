"use client";

import { useEffect, useState } from "react";

type HealthResponse = {
  status: string;
  service: string;
  env: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export function HealthStatus() {
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");
  const [detail, setDetail] = useState("Checking backend…");

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_URL}/health`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const body = (await response.json()) as HealthResponse;
        setState("ok");
        setDetail(`${body.service} (${body.env})`);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        setState("error");
        setDetail("Backend is not reachable. Start FastAPI on port 8000.");
      });

    return () => controller.abort();
  }, []);

  const color =
    state === "ok"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : state === "error"
        ? "border-red-200 bg-red-50 text-red-800"
        : "border-zinc-200 bg-white text-zinc-600";

  return (
    <div className={`rounded-lg border px-4 py-3 text-sm ${color}`}>
      <p className="font-medium">
        {state === "ok"
          ? "API healthy"
          : state === "error"
            ? "API unavailable"
            : "Checking API"}
      </p>
      <p className="mt-1">{detail}</p>
    </div>
  );
}
