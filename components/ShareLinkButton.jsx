"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };
  return (
    <button
      onClick={handleClick}
      className="hover:bg-orange-100 hover:text-slate-700 border px-2 py-1 rounded text-slate-500 text-sm flex gap-1 items-center"
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "Link copied!" : "Share link"}
    </button>
  );
}
