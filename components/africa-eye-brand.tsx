import Image from "next/image";

export function AfricaEyeBrand() {
  return (
    <div className="inline-flex max-w-full rounded-[1.25rem] border border-white/10 bg-stone-950/70 p-4 shadow-2xl backdrop-blur-sm">
      <Image
        src="/images/afeye-logo.png"
        alt="BBC Africa Eye"
        width={640}
        height={160}
        className="h-auto w-full max-w-[30rem] object-contain"
        priority
      />
    </div>
  );
}
