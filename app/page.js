import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image src="/images/background.jpg" alt="Background" className="grayscale" fill={true} priority />
      <div className="absolute w-full h-full bg-neutral-900 opacity-60">hello</div>
    </main>
  );
}
