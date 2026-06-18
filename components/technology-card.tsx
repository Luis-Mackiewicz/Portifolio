"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { listOfTechnologies } from "@/lib/data/lists";
import Modal from "./modal";

export interface cardProps {
  onClick?: () => void;
  children?: React.ReactNode;
  title?: string;
  icon?: string;
  description?: string;
  link?: string;
  className?: string;
}

export function TechnologyGrid() {
  return listOfTechnologies.map((card) => (
    <TechCard
      key={card.id}
      icon={card.icon}
      title={card.title}
      description={card.description}
      link={card.link}
    >
      {card.name}
    </TechCard>
  ));
}

function TechCard({
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
          flex
          flex-col
          items-center
          justify-center
          gap-1
          p-2
          sm:gap-2
          sm:p-3
          rounded-xl
          bg-gray-800/40
          border
          border-indigo-500/10
          text-indigo-50
          font-jet
          text-[10px]
          sm:text-xs
          font-semibold
          transition-all
          duration-200
          hover:bg-gray-800
          hover:border-indigo-500/30
          hover:-translate-y-0.5
          cursor-target
        "
      >
        {icon && (
          <Image
            src={icon}
            alt={title ?? "Technology icon"}
            width={24}
            height={24}
            className="object-contain sm:w-7 sm:h-7"
          />
        )}
        <span className="text-center leading-tight">{children}</span>
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
