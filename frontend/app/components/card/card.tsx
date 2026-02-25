import React from "react";
import { useState } from "react";

const [count, setCount] = useState();

export interface cardProps {
  name: string;
  src: string;
  className: string;
  onclick: () => void;
  children: React.ReactNode;
}

export default function Card({
  name,
  src,
  className,
  onclick,
  children,
}: cardProps) {
  return <div></div>;
}

function somar(a: number, b: number) {
  return a + b;
}
