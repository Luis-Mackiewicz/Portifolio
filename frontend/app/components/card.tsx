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
  className?: string;
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
      className="flex items-center justify-center p-30 min-w-40 max-w-100"
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
  className,
  link,
}: cardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        className={`
    flex 
    flex-col 
    gap-4
    items-center 
    justify-center 
    rounded-2xl 
    bg-linear-to-r
    from-indigo-900
    via-indigo-400
    to-indigo-900
    text-indigo-50
    font-jet 
    font-bold 
    shadow-lg 
    shadow-indigo-500/30 
    transition-all 
    duration-300 
    hover:shadow-indigo-100/30
    hover:scale-105 
    lg:cursor-target
    ${className}
  `}
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

        <span className="whitespace-nowrap text-center">{children}</span>
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
