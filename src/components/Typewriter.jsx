import { useEffect, useState } from "react";

/** Types and deletes each word in `words` in a loop. Pass a stable array (module constant). */
export default function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduce) { setTxt(words[0]); return undefined; }
    const w = words[i];
    let t;
    if (!del && txt === w) t = setTimeout(() => setDel(true), 1600);
    else if (del && txt === "") { setDel(false); setI((i + 1) % words.length); }
    else t = setTimeout(() => setTxt(del ? w.slice(0, txt.length - 1) : w.slice(0, txt.length + 1)), del ? 35 : 75);
    return () => clearTimeout(t);
  }, [txt, del, i, words, reduce]);

  return (
    <span className="inline-block min-h-[1.2em]" aria-label={words[0]}>
      <span className="grad" aria-hidden="true">{txt}</span>
      {!reduce && <span className="caret" aria-hidden="true" />}
    </span>
  );
}
