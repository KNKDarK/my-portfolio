"use client";

import { useEffect, useState } from "react";

const words = [
  "Aspiring Software Engineer",
  "Full Stack Developer",
  "Problem Solver",
  "Open Source Contributor",
];

const TYPE_SPEED = 90;
const DELETE_SPEED = 30;
const PAUSE = 1800;
const SWITCH_DELAY = 250;

export default function Typewriter({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];

    if (!deleting && text.length < word.length) {
      const timeout = setTimeout(
        () => setText(word.slice(0, text.length + 1)),
        TYPE_SPEED
      );
      return () => clearTimeout(timeout);
    }

    if (!deleting && text.length === word.length) {
      const timeout = setTimeout(() => setDeleting(true), PAUSE);
      return () => clearTimeout(timeout);
    }

    if (deleting && text.length > 0) {
      const timeout = setTimeout(
        () => setText(word.slice(0, text.length - 1)),
        DELETE_SPEED
      );
      return () => clearTimeout(timeout);
    }

    if (deleting && text.length === 0) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, SWITCH_DELAY);
      return () => clearTimeout(timeout);
    }

    return;
  }, [text, deleting, index]);

  return (
    <span className={`inline-flex items-baseline whitespace-nowrap ${className}`}>
      <span className="text-emerald-400">{text}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[2px] animate-pulse bg-emerald-400"
        style={{ height: "1em" }}
      />
    </span>
  );
}
