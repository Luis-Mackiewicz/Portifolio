import React, { useState } from "react";
import Image from "next/image";
import Modal from "./modal";
import { listOfTechnologies, listOfWebsites } from "./lists";

export interface cardProps {
  onClick?: () => void;
  children?: React.ReactNode;
  title?: any;
  icon?: any;
}

export const technologyCards = listOfTechnologies.map((card) => {
  return (
    <Card key={card.id} icon={card.icon} title={card.title}>
      {card.name}
    </Card>
  );
});

export const websiteCards = listOfWebsites.map((card) => {
  return (
    <Card key={card.id} icon={card.icon} title={card.title}>
      {card.name}
    </Card>
  );
});

export default function Card({
  onClick: onclick,
  children,
  title,
  icon,
}: cardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const HandleClick = () => {
    if (onclick) {
      onclick();
      setIsModalOpen(true);
    }
  };

  return (
    <div
      onClick={onclick}
      className={`flex flex-col gap-4 items-center justify-center rounded-2xl bg-linear-to-tr from-lime-500 via-sky-700 to-sky-900 text-white font-jet font-bold shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-lime-400/40 hover:scale-105 cursor-target`}
    >
      {icon && (
        <Image
          src={icon}
          alt={title ?? "Technology icon"}
          width={36}
          height={36}
          className="object-contain"
        />
      )}
      {children}
    </div>
  );
}
