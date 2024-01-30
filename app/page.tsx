"use client";

import Image from "next/image";
import Tree from "react-d3-tree";
import { useCenteredTree } from "@/lib/helpers";

const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

export default function Home() {
  const [dimensions, translate, containerRef] = useCenteredTree();
  return (
    <main style={containerStyles} ref={containerRef}>
      <Tree
        data={orgChart}
        dimensions={dimensions}
        translate={translate}
        draggable={true}
        zoomable={true}
        orientation="vertical"
      />
    </main>
  );
}
