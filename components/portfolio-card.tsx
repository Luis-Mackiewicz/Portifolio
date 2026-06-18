"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { listOfWebsites } from "@/lib/data/lists";
import Modal from "./modal";
import { cardProps } from "./technology-card";

export function WebsiteGrid() {
  return listOfWebsites.map((card) => (
    <PortfolioCard
      key={card.id}
      icon={card.icon}
      title={card.title}
      description={card.description}
      link={card.link}
    >
      {card.name}
    </PortfolioCard>
  ));
}

function PortfolioCard({
  children,
  title,
  icon,
  description,
  link,
}: cardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="
          w-full
          flex
          flex-col
          items-center
          text-center
          gap-3
          p-4
          sm:p-6
          rounded-2xl
          bg-gray-800/40
          border
          border-indigo-500/10
          text-indigo-50
          font-jet
          transition-all
          duration-200
          hover:bg-gray-800
          hover:border-indigo-500/30
          hover:-translate-y-0.5
          cursor-pointer
        "
      >
        {icon && (
          <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center">
            <Image
              src={icon}
              alt={title ?? "Project thumbnail"}
              width={240}
              height={135}
              className="object-contain w-20 h-20 sm:w-28 sm:h-28"
            />
          </div>
        )}
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-indigo-50">
            {children}
          </h3>
          <p className="text-xs sm:text-sm text-indigo-200/60 line-clamp-2">
            {description}
          </p>
          <span className="inline-block text-xs font-semibold text-indigo-400 border border-indigo-500/20 rounded-full px-3 py-1 mt-1">
            Ver projeto →
          </span>
        </div>
      </button>
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            title={title}
            description={description}
            link={link}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
