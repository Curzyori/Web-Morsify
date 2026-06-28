import { Download, Package } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

interface DownloadFile {
  name: string;
  url: string;
}

interface DownloadSectionProps {
  title: string;
  latestVersion: string;
  versionLabel: string;
  files: DownloadFile[];
  sourceCodeLabel: string;
  sourceUrl: string;
  githubRepo: string;
  brandColor: "blue" | "purple";
}

const brandStyles = {
  blue: {
    gradient: "from-blue-600 to-blue-400",
    badge: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  purple: {
    gradient: "from-purple-600 to-purple-400",
    badge: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  },
};

export function DownloadSection({
  title,
  latestVersion,
  versionLabel,
  files,
  sourceCodeLabel,
  sourceUrl,
  githubRepo,
  brandColor,
}: DownloadSectionProps) {
  const styles = brandStyles[brandColor];

  return (
    <section id="download" className="py-24 px-4 bg-secondary/30">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>

        {/* Version Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 ${styles.badge}`}>
          <Package className="h-4 w-4" />
          <span className="text-sm font-medium">
            {versionLabel} {latestVersion}
          </span>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {files.map((file, index) => (
            <a key={index} href={file.url} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className={`bg-gradient-to-r ${styles.gradient}`}>
                <Download className="h-5 w-5 mr-2" />
                {file.name}
              </Button>
            </a>
          ))}
        </div>

        {/* Source Code Link */}
        <Card className="inline-block">
          <CardContent className="py-4 px-6">
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              <GitHubIcon className="h-5 w-5" />
              <span>{sourceCodeLabel}</span>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
