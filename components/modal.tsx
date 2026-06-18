"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cardProps } from "./technology-card";

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
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const modal = modalRef.current;
        if (!modal) return;
        const focusable = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose],
  );

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      modalRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    }, 0);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
      previousFocusRef.current?.focus();
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Modal"}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="
          relative
          bg-gray-900
          border border-indigo-500/10
          rounded-2xl
          shadow-2xl
          w-11/12
          max-w-md
          p-6
          flex
          flex-col
          gap-5
        "
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="
            absolute
            top-3 right-3
            size-8
            flex items-center justify-center
            rounded-full
            bg-gray-800
            text-indigo-200
            text-lg
            hover:bg-gray-700
            hover:text-indigo-50
            transition-colors
            duration-200
            cursor-pointer
          "
        >
          ×
        </button>

        {icon && (
          <div className="flex justify-center pt-4">
            <Image
              src={icon}
              alt={title ?? "Icon"}
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        )}

        {title && (
          <h2 className="text-center text-2xl font-bold font-jet text-indigo-50">
            {title}
          </h2>
        )}

        {description && (
          <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center">
            {description}
          </p>
        )}

        {link && (
          <>
            <div className="border-t border-indigo-500/10" />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar site de ${title ?? link}`}
              className="
                w-full
                inline-block
                bg-indigo-600
                hover:bg-indigo-500
                text-indigo-50
                font-semibold
                font-jet
                px-4
                py-2.5
                rounded-xl
                text-center
                text-sm
                transition-colors
                duration-200
                cursor-pointer
              "
            >
              Ir ao site →
            </a>
          </>
        )}
      </motion.div>
    </div>
  );
}
