import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-4xl font-semibold tracking-tight text-white md:text-5xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2 className="mt-10 text-2xl font-semibold text-white md:text-3xl" {...props} />
    ),
    p: (props) => <p className="mt-4 leading-8 text-stone-300" {...props} />,
    ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-stone-300" {...props} />,
    li: (props) => <li {...props} />,
    strong: (props) => <strong className="font-semibold text-white" {...props} />,
    ...components,
  };
}
