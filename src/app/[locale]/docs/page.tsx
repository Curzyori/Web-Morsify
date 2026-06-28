import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, CheckCircle, Settings, Download, Zap } from "lucide-react";

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

export default async function DocsPage({
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

  const isIndo = locale === "id";

  return (
    <>
      <Navbar {...navProps} />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">
            {isIndo ? "Dokumentasi Morsify" : "Morsify Documentation"}
          </h1>
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-purple-500" />
              {isIndo ? "Pendahuluan" : "Introduction"}
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              {isIndo 
                ? "Morsify adalah aplikasi pemancar kode Morse yang bersih dan ringan untuk Android. Aplikasi ini menerjemahkan input teks Anda menjadi sinyal visual yang presisi menggunakan lampu kilat kamera, bunyi bip pendengaran, atau keduanya. Sangat cocok untuk tujuan pendidikan, latihan radio amatir, atau pensinyalan darurat portabel."
                : "Morsify is a clean, lightweight Morse code transmitter app for Android. It translates your text input into precise visual signals using the camera flash, auditory beeps, or both, making it perfect for educational purposes, amateur radio practices, or portable emergency signaling."}
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-purple-500" />
              {isIndo ? "Fitur" : "Features"}
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Real-time Encode</strong> — 
                  {isIndo 
                    ? " Mengonversi teks secara instan ke representasi kode Morse saat Anda mengetik."
                    : " Instantly converts typed text to Morse code representation."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Live Highlight</strong> — 
                  {isIndo
                    ? " Sorotan karakter & urutan simbol yang aktif selama transmisi berlangsung."
                    : " Highlight active character & symbol sequence during transmission."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Auto Loop Mode</strong> — 
                  {isIndo
                    ? " Mengulang transmisi secara otomatis setelah selesai."
                    : " Automatically loops transmission after completion."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Speed Control</strong> — 
                  {isIndo
                    ? " Sesuaikan kecepatan waktu dari 60ms (cepat) hingga 240ms (lambat)."
                    : " Fine-tune speed timing from 60ms (fast) up to 240ms (slow)."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Language Toggle</strong> — 
                  {isIndo
                    ? " Beralih antarmuka bahasa dengan mudah lewat dialog Pengaturan."
                    : " Easily toggle between English and Bahasa Indonesia interfaces."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Dynamic Donate Config</strong> — 
                  {isIndo
                    ? " Alamat donasi dimuat dinamis dari konfigurasi JSON lokal dan jarak jauh."
                    : " Crypto addresses loaded dynamically from local and remote JSON config."}
                </span>
              </li>
            </ul>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Download className="h-6 w-6 text-purple-500" />
              {isIndo ? "Instalasi" : "Installation"}
            </h2>
            <p className="text-foreground/70 mb-4">
              {isIndo 
                ? "Unduh APK versi terbaru langsung dari halaman rilis GitHub:"
                : "Download the latest APK from the GitHub releases page:"}
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <p className="text-sm font-mono text-foreground/80">
                <a href="https://github.com/Curzyori/morsify/releases" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                  https://github.com/Curzyori/morsify/releases
                </a>
              </p>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">{isIndo ? "Build dari Source" : "Build from Source"}</h3>
            <div className="bg-secondary/50 rounded-lg p-4">
              <pre className="text-sm font-mono text-foreground/80 overflow-x-auto">
{`# Clone the repository
git clone https://github.com/Curzyori/morsify.git
cd morsify

# Build the APK
./gradlew assembleDebug`}
              </pre>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-purple-500" />
              {isIndo ? "Spesifikasi Teknologi" : "Tech Stack"}
            </h2>
            <ul className="space-y-2 text-foreground/70">
              <li><strong>Platform:</strong> Android (Min SDK 26, Target SDK 35)</li>
              <li><strong>Language:</strong> Kotlin</li>
              <li><strong>UI Framework:</strong> Jetpack Compose with Material Design 3</li>
              <li><strong>Architecture:</strong> Single-Activity, ViewModel State</li>
              <li><strong>Engine:</strong> SoundPool (Low-Latency Audio dit/dat)</li>
              <li><strong>License:</strong> Apache-2.0</li>
            </ul>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-500" />
              {isIndo ? "Cara Kerja" : "How It Works"}
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              {isIndo
                ? "Morsify mengambil input teks Anda dan langsung memecahnya menjadi karakter. Setiap karakter dipetakan ke pola dit (·) dan dat (−) standar ITU-R M.1677-1. Aplikasi kemudian melakukan iterasi pada pola-pola ini menggunakan generator waktu berpresisi tinggi untuk menyalakan lampu kilat kamera atau memutar file audio low-latency menggunakan SoundPool secara sinkron."
                : "Morsify takes your text input and instantly breaks it down into characters. Each character is mapped to the standard ITU-R M.1677-1 dit (·) and dat (−) pattern. The app then iterates through these patterns using a high-precision timer to toggle the camera flashlight or play low-latency audio via SoundPool synchronously."}
            </p>
          </section>
        </div>
      </main>

      <Footer 
        copyright="© 2026 Curzyori"
        githubRepo="Curzyori/morsify"
        licenseName="Apache-2.0"
        licenseUrl="https://github.com/Curzyori/morsify/blob/main/LICENSE"
      />
    </>
  );
}
