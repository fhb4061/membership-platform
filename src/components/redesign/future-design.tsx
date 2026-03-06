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
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_18%_10%,#132546_0%,#0b132d_45%,#050812_100%)] text-[#e6f4ff]">
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-[#22d3ee]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-8 h-64 w-64 rounded-full bg-[#3b82f6]/20 blur-3xl" />

      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 md:px-10 md:py-14">
        <div className="space-y-4">
          <Badge className="rounded-full border border-[#67e8f9] bg-[#10243f] text-[#ccf8ff] hover:bg-[#10243f]">
            Future
          </Badge>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f0f9ff] md:text-6xl">
            Futuristic, high-contrast, and built for a forward-looking digital product brand.
          </h1>
          <p className="max-w-2xl text-[#cfe8ff] md:text-lg">
            This direction prioritizes dark depth, energetic accents, and crisp data-oriented presentation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full bg-[#67e8f9] px-6 font-semibold text-[#07111f] hover:bg-[#8ef2ff]">
              Launch Preview
            </Button>
            <Button variant="outline" className="rounded-full border-[#67e8f9] bg-[#10243f] px-6 text-[#d8f6ff]">
              View Design Tokens
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.label} className="rounded-2xl border-[#2d4f8b] bg-[#0f1b35] text-[#e6f4ff]">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center gap-2 text-sm font-medium text-[#cfe8ff]">
                  <metric.icon className="size-4 text-[#67e8f9]" />
                  {metric.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-semibold tracking-tight text-[#f0f9ff]">{metric.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl border border-[#2d4f8b] bg-[#0f1b35] p-5 text-sm text-[#cfe8ff]">
          Tone: modern and technical, with strong readability for dashboards and partner operations.
        </div>
      </section>
    </main>
  );
}
