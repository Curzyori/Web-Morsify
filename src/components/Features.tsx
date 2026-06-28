import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesProps {
  title: string;
  features: Feature[];
  brandColor: "blue" | "purple";
}

const brandStyles = {
  blue: {
    iconBg: "bg-blue-500/10 text-blue-500",
    iconHover: "group-hover:bg-blue-500/20",
  },
  purple: {
    iconBg: "bg-purple-500/10 text-purple-500",
    iconHover: "group-hover:bg-purple-500/20",
  },
};

export function Features({ title, features, brandColor }: FeaturesProps) {
  const styles = brandStyles[brandColor];

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div
                    className={cn(
                      "inline-flex items-center justify-center rounded-lg p-3 transition-colors",
                      styles.iconBg,
                      styles.iconHover
                    )}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
