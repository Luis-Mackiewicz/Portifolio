import { title } from "process";
import React from "react";
import Image from "next/image";

export const listOfTechnologies = [
  {
    id: 1,
    name: "HTML",
    title: "html",
    icon: "/skills-icon/html.png",
  },
  {
    id: 2,
    name: "CSS",
    title: "css",
    icon: "/skills-icon/css.png",
  },
  {
    id: 3,
    name: "JS",
    title: "js",
    icon: "/skills-icon/js.png",
  },
  {
    id: 4,
    name: "TS",
    title: "ts",
    icon: "/skills-icon/ts.png",
  },
  {
    id: 5,
    name: "Tailwindcss",
    title: "tailwindcss",
    icon: "/skills-icon/tailwindcss.png",
  },
  {
    id: 6,
    name: "React",
    title: "react",
    icon: "/skills-icon/react.png",
  },
  {
    id: 7,
    name: "React-hook-form",
    title: "react-hook-form",
    icon: "/skills-icon/react-hook-form.png",
  },
  {
    id: 8,
    name: "Tanstack",
    title: "tanstack",
    icon: "/skills-icon/tanstack.png",
  },
  {
    id: 9,
    name: "Zod",
    title: "zod",
    icon: "/skills-icon/zod.png",
  },
  {
    id: 10,
    name: "Next",
    title: "next",
    icon: "/skills-icon/next.png",
  },
  {
    id: 11,
    name: "Shadcn",
    title: "shadcn",
    icon: "/skills-icon/shadcn.png",
  },
  {
    id: 12,
    name: "Node",
    title: "node",
    icon: "/skills-icon/node.png",
  },
  {
    id: 13,
    name: "Nest",
    title: "nest",
    icon: "/skills-icon/nest.png",
  },
  {
    id: 14,
    name: "Postgress",
    title: "postgress",
    icon: "/skills-icon/postgress.png",
  },
  {
    id: 15,
    name: "Prisma",
    title: "prisma",
    icon: "/skills-icon/prisma.png",
  },
  {
    id: 16,
    name: "Docker",
    title: "docker",
    icon: "/skills-icon/docker.png",
  },
  {
    id: 17,
    name: "Figma",
    title: "figma",
    icon: "/skills-icon/figma.png",
  },
  {
    id: 18,
    name: "Jest",
    title: "jest",
    icon: "/skills-icon/jest.png",
  },
  {
    id: 19,
    name: "Git",
    title: "git",
    icon: "/skills-icon/git.png",
  },
];

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

export default function Card({
  onClick: onclick,
  children,
  title,
  icon,
}: cardProps) {
  return (
    <div
      onClick={onclick}
      className={`flex flex-col gap-4 items-center justify-center rounded-2xl bg-linear-to-br from-lime-500 via-sky-500 to-neutral-900 text-white font-jet font-bold shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-lime-400/40 hover:scale-105 cursor-target`}
    >
      {icon && (
        <Image
          src={icon}
          alt={title ?? "Technology icon"}
          width={40}
          height={40}
          className="object-contain"
        />
      )}
      {children}
    </div>
  );
}
