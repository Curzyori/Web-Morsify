"use client";

import { Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface InstallationProps {
  title: string;
  subtitle: string;
  code: string;
  brandColor: "blue" | "purple";
}

export function Installation({ title, subtitle, code, brandColor }: InstallationProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="text-foreground/60 text-center mb-12">{subtitle}</p>

        <div className="relative">
          <div className="absolute left-4 top-3">
            <Terminal className="h-5 w-5 text-foreground/40" />
          </div>

          <pre className="bg-secondary/50 rounded-lg p-4 pl-12 pr-12 overflow-x-auto">
            <code className="text-sm font-mono text-foreground/80">{code}</code>
          </pre>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="absolute right-2 top-2"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
