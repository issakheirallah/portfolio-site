export function AfricaEyeBrand() {
  return (
    <div className="inline-flex max-w-full flex-wrap items-center gap-4 rounded-[1.5rem] border border-white/10 bg-stone-950/70 px-5 py-5 shadow-2xl backdrop-blur-sm">
      <div className="flex gap-2">
        {["B", "B", "C"].map((letter, index) => (
          <div
            key={`${letter}-${index}`}
            className="flex h-14 w-14 items-center justify-center bg-white text-3xl font-bold tracking-[0.06em] text-black sm:h-16 sm:w-16"
          >
            {letter}
          </div>
        ))}
      </div>

      <div className="bg-[#c91717] px-6 py-4 sm:px-10 sm:py-5">
        <span className="text-2xl font-semibold uppercase tracking-[0.18em] text-white sm:text-3xl">
          Africa Eye
        </span>
      </div>
    </div>
  );
}
