import Link from "next/link";
import { Activity, Bot, Orbit, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { icon: Activity, label: "Activation velocity", value: "+34%" },
  { icon: Orbit, label: "Partner pathways", value: "128" },
  { icon: ShieldCheck, label: "Trust index", value: "99.2" },
  { icon: Bot, label: "Automation score", value: "87" },
];

export function FutureDesign() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_18%_10%,var(--future-bg-start)_0%,var(--future-bg-mid)_45%,var(--future-bg-end)_100%)] text-[var(--future-text-main)]">
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-[var(--future-glow-cyan)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-8 h-64 w-64 rounded-full bg-[var(--future-glow-blue)] blur-3xl" />

      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 md:px-10 md:py-14">
        <div className="space-y-4">
          <Badge className="rounded-full border border-[var(--future-accent)] bg-[var(--future-panel-strong)] text-[var(--future-accent-faint)] hover:bg-[var(--future-panel-strong)]">
            Future
          </Badge>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[var(--future-text-strong)] md:text-6xl">
            Futuristic, high-contrast, and built for a forward-looking digital product brand.
          </h1>
          <p className="max-w-2xl text-[var(--future-text-muted)] md:text-lg">
            This direction prioritizes dark depth, energetic accents, and crisp data-oriented presentation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-[var(--future-accent)] px-6 font-semibold text-[var(--future-accent-text)] hover:bg-[var(--future-accent-hover)]">
              <Link href="#metrics">Launch Preview</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[var(--future-accent)] bg-[var(--future-panel-strong)] px-6 text-[var(--future-text-main)]"
            >
              <Link href="#design-tokens">View Design Tokens</Link>
            </Button>
          </div>
        </div>

        <div id="metrics" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <Card
              key={metric.label}
              className="rounded-2xl border-[var(--future-border)] bg-[var(--future-panel)] text-[var(--future-text-main)]"
            >
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center gap-2 text-sm font-medium text-[var(--future-text-muted)]">
                  <metric.icon className="size-4 text-[var(--future-accent)]" />
                  {metric.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-semibold tracking-tight text-[var(--future-text-strong)]">{metric.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          id="design-tokens"
          className="rounded-2xl border border-[var(--future-border)] bg-[var(--future-panel)] p-5 text-sm text-[var(--future-text-muted)]"
        >
          Tone: modern and technical, with strong readability for dashboards and partner operations.
        </div>
      </section>
    </main>
  );
}
