import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image src="/images/background.jpg" alt="Background" fill={true} priority />
    </main>
  );
}
