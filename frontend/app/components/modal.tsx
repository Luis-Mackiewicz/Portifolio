import React from "react";
import { cardProps } from "./card";
import { useEffect } from "react";
import Link from "next/link";
import { div } from "three/src/nodes/math/OperatorNode.js";

interface ModalProps extends cardProps {
  description?: string;
  link?: string;
  onClose: () => void;
}

export default function Modal({
  title,
  description,
  link,
  icon,
  onClose,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed flex items-center justify-center z-50 inset-0 bg-linear-to-r from-gray-700 via-gray-900 to-black/90
"
    >
      <div
        className="
        relative 
        bg-linear-to-r
         from-gray-700 via-gray-900 to-black
         text-indigo-50 rounded-xl shadown-xl w-11/12 
        max-w-lg p-6 flex flex-col gap-6"
      >
        <button
          onClick={onClose}
          className="absolute top-1 right-3.5 text-indigo-50 text-2xl font-black hover:text-red-500 transition-colors lg:cursor-target cursor-pointer"
        >
          x
        </button>

        {title && (
          <h2 className=" flex items-center justify-center  text-4xl font-bold">
            {title}
          </h2>
        )}

        {description && <p className="text-gray-300">{description}</p>}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-linear-to-r from-indigo-900 via-indigo-400 to-indigo-900
 text-indigo-50 font-bold px-4 py-2 rounded-lg text-center hover:bg-lime-500/30 transition-colors duration-300 lg:cursor-target"
          >
            Ir ao site
          </a>
        )}
      </div>
    </div>
  );
}

/*
 */
