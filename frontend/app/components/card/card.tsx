import React from "react";

export const listOfTechnologies = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JS" },
  { id: 4, name: "TS" },
  { id: 5, name: "Tailwindcss" },
  { id: 6, name: "React" },
  { id: 7, name: "React-hook-form" },
  { id: 8, name: "Tanstack" },
  { id: 9, name: "Zod" },
  { id: 10, name: "Next" },
  { id: 11, name: "Shadcn" },
  { id: 12, name: "Node" },
  { id: 13, name: "Nest" },
  { id: 14, name: "Postgress" },
  { id: 15, name: "Prisma" },
  { id: 16, name: "Docker" },
  { id: 17, name: "Figma" },
  { id: 18, name: "Jest" },
  { id: 19, name: "Git" },
];

export interface cardProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const technologyCards = listOfTechnologies.map((card) => {
  return <Card key={card.id}>{card.name}</Card>;
});

export default function Card({ onClick: onclick, children }: cardProps) {
  return (
    <div
      onClick={onclick}
      className={`flex items-center justify-center rounded-2xl bg-linear-to-tr from-neutral-900 via-sky-500 to-lime-400 text-white font-jet font-bold shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-lime-400/40 hover:scale-105 cursor-target`}
    >
      {children}
    </div>
  );
}
