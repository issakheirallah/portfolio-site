export function BbcBadge() {
  return (
    <div className="absolute left-4 top-4 z-20 flex gap-1" aria-hidden="true">
      {["B", "B", "C"].map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="flex h-7 w-7 items-center justify-center bg-white text-[0.65rem] font-bold tracking-[0.08em] text-black shadow-lg"
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
