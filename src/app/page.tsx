import Image from "next/image";

export default function Home() {
  return (
    <main className="px-44 h-screen border">
      <div className="relative w-[120px] h-[120px]">
        <Image src="/img/avatar.jpg" alt="profil pic" fill className="rounded-lg object-cover" />
      </div>
    </main>
  );
}
