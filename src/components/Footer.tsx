import { GitHubIcon, HeartIcon } from "@/components/ui/Icons";

interface FooterProps {
  copyright: string;
  githubRepo: string;
  licenseName?: string;
  licenseUrl?: string;
}

export function Footer({ copyright, githubRepo, licenseName, licenseUrl }: FooterProps) {
  return (
    <footer className="border-t border-foreground/10 py-8 px-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">{copyright}</p>

        <div className="flex items-center gap-4">
          {licenseName && licenseUrl && (
            <a
              href={licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${licenseName} license (opens in new tab)`}
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              {licenseName}
            </a>
          )}

          <a
            href={`https://github.com/${githubRepo}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub (opens in new tab)"
            className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://donate.curzy.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Support the project on Donate (opens in new tab)"
            className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            <HeartIcon className="h-4 w-4" />
            <span>Donate</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
