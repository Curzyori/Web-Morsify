import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";
import { DownloadSection } from "@/components/DownloadSection";
import { Preview } from "@/components/Preview";
import { Zap, Volume2, Repeat, Languages, Sliders, ShieldCheck } from "lucide-react";

async function getGitHubStars(repo: string): Promise<number> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count || 0;
  } catch {
    return 0;
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const stars = await getGitHubStars("Curzyori/morsify");

  const navProps = {
    locale,
    logo: "/logo.png",
    githubRepo: "Curzyori/morsify",
    stars,
    brandColor: "purple" as const,
  };

  const heroProps = {
    logo: "/logo.png",
    name: "Morsify",
    tagline: locale === "id" 
      ? "Transmitter kode Morse untuk Android dengan mode Senter & Suara"
      : "Morse code transmitter for Android with Flashlight & Sound modes",
    brandColor: "purple" as const,
    ctaPrimary: locale === "id" ? "Unduh APK" : "Download APK",
    ctaSecondary: locale === "id" ? "Lihat di GitHub" : "View on GitHub",
    githubRepo: navProps.githubRepo,
    downloadUrl: "https://github.com/Curzyori/morsify/releases/tag/V1.0.0",
  };

  const featuresProps = {
    title: locale === "id" ? "Fitur Utama" : "Key Features",
    features: [
      {
        title: locale === "id" ? "Multi-channel Transmit" : "Multi-channel Transmit",
        description: locale === "id"
          ? "Kirim sinyal Morse melalui flash kamera, bunyi bip suara, atau keduanya."
          : "Transmit Morse signals via camera flash, sound beep, or both.",
        icon: Zap,
      },
      {
        title: locale === "id" ? "Audio Rendah Latensi" : "Low-Latency Audio",
        description: locale === "id"
          ? "Didukung oleh engine SoundPool untuk pemutaran suara dit/dat yang bersih."
          : "Powered by SoundPool engine for clean dit/dat sound playback.",
        icon: Volume2,
      },
      {
        title: locale === "id" ? "Mode Auto Loop" : "Auto Loop Mode",
        description: locale === "id"
          ? "Mengulang pengiriman sinyal secara otomatis untuk siaran pesan terus-menerus."
          : "Automatically repeat signals to broadcast continuous messages.",
        icon: Repeat,
      },
      {
        title: locale === "id" ? "Kontrol Kecepatan" : "Speed Control",
        description: locale === "id"
          ? "Atur waktu kecepatan sinyal dari 60ms (cepat) hingga 240ms (lambat)."
          : "Fine-tune speed timing from 60ms (fast) up to 240ms (slow).",
        icon: Sliders,
      },
      {
        title: locale === "id" ? "Dukungan Dua Bahasa" : "Bilingual Support",
        description: locale === "id"
          ? "Mudah beralih antarmuka antara Bahasa Indonesia dan Bahasa Inggris."
          : "Easily toggle between English and Bahasa Indonesia interfaces.",
        icon: Languages,
      },
      {
        title: locale === "id" ? "Konfigurasi Donasi Dinamis" : "Dynamic Donate Config",
        description: locale === "id"
          ? "Memuat alamat donasi kripto secara dinamis dari file konfigurasi JSON lokal dan remote."
          : "Loads crypto donation addresses dynamically from local and remote JSON.",
        icon: ShieldCheck,
      },
    ],
    brandColor: "purple" as const,
  };

  const installationProps = {
    title: locale === "id" ? "Instalasi" : "Installation",
    subtitle: locale === "id" ? "Build dari Source" : "Build from Source",
    code: "git clone https://github.com/Curzyori/morsify.git\ncd morsify\n./gradlew assembleDebug",
    brandColor: "purple" as const,
  };

  const downloadProps = {
    title: locale === "id" ? "Unduh" : "Download",
    latestVersion: "v1.0.0",
    versionLabel: locale === "id" ? "Versi Terbaru" : "Latest Version",
    files: [{ name: "Morsify-V1.0.0.apk", url: "https://github.com/Curzyori/morsify/releases/download/V1.0.0/Morsify-V1.0.0.apk" }],
    sourceCodeLabel: "Source Code",
    sourceUrl: "https://github.com/Curzyori/morsify",
    githubRepo: navProps.githubRepo,
    brandColor: "purple" as const,
  };

  const previewProps = {
    images: [
      { src: "/images/dash.jpg", alt: "Morsify Dashboard" },
    ],
  };

  const footerProps = {
    copyright: "© 2026 Curzyori",
    githubRepo: navProps.githubRepo,
    licenseName: "Apache-2.0",
    licenseUrl: "https://github.com/Curzyori/morsify/blob/main/LICENSE",
  };

  return (
    <>
      <Navbar {...navProps} />
      <Hero {...heroProps} />
      <Features {...featuresProps} />
      <Installation {...installationProps} />
      <Preview {...previewProps} />
      <DownloadSection {...downloadProps} />
      <Footer {...footerProps} />
    </>
  );
}
