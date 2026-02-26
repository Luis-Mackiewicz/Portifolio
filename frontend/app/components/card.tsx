import Image from "next/image";
import React, { useState } from "react";
import { listOfTechnologies, listOfWebsites } from "./lists";
import Modal from "./modal";

export interface cardProps {
  onClick?: () => void;
  children?: React.ReactNode;
  title?: string;
  icon?: string;
  description?: string;
  link?: string;
}

export const technologyCards = listOfTechnologies.map((card) => {
  return (
    <Card
      key={card.id}
      icon={card.icon}
      title={card.title}
      description={card.description}
      link={card.link}
    >
      {card.name}
    </Card>
  );
});

export const websiteCards = listOfWebsites.map((card) => {
  return (
    <Card
      key={card.id}
      icon={card.icon}
      title={card.title}
      description={card.description}
      link={card.link}
    >
      {card.name}
    </Card>
  );
});

export default function Card({
  children,
  title,
  icon,
  description,
  link,
}: cardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        className="flex flex-col gap-4 items-center justify-center 
                   rounded-2xl bg-linear-to-tr from-lime-500 via-sky-700 to-sky-900 
                   text-white font-jet font-bold shadow-lg shadow-sky-500/30 
                   transition-all duration-300 hover:shadow-lime-400/40 
                   hover:scale-105 cursor-target"
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

      {isModalOpen && (
        <Modal
          title={title}
          description={description}
          link={link}
          onClose={closeModal}
        />
      )}
    </>
  );
}
