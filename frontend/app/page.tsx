import { HealthStatus } from "./HealthStatus";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-8 px-6 py-16">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          Phase 1
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          AI Meeting Assistant
        </h1>
        <p className="text-base leading-7 text-zinc-600">
          Upload a meeting recording to get a raw transcript, a domain-refined
          transcript, and structured minutes, decisions, and action items. The
          processing pipeline will be added in later phases.
        </p>
      </div>
      <HealthStatus />
    </main>
  );
}
