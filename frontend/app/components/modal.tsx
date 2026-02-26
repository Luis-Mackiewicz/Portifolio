import React from "react";
import { cardProps } from "./card";
import { useEffect } from "react";
import Link from "next/link";

interface ModalProps extends cardProps {
  description?: string;
  link?: string;
  onClose: () => void;
}

export default function Modal({
  title,
  description,
  link,
  onClose,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed flex items-center justify-center z-50 inset-0 bg-black/70">
      <div className="relative bg-gray-900 text-white rounded-xl shadown-xl w-11/12 max-w-lg p-6 flex flex-col gap-6">
        <button
          onClick={onClose}
          className="absolute top-1 right-3.5 text-white text-2xl fontt-bold hover:text-red-500 transition-colors"
        >
          x
        </button>

        {title && <h2 className="text-2xl font-bold">{title}</h2>}
        {description && <p className="text-gray-300">{description}</p>}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-sky-600 text-gray-900 font-bold px-4 py-2 rounded-lg text-center hover:bg-sky-700 transition-colors duration-300"
          >
            Ver mais
          </a>
        )}
      </div>
    </div>
  );
}

/*
 */
