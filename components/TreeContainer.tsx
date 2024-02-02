"use client";

import React from "react";

import dynamic from "next/dynamic";
import { useCenteredTree } from "../lib/helpers";
const Tree = dynamic(() => import("react-d3-tree"), { ssr: false });

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

export const TreeContainer = () => {
  const [dimensions, translate, containerRef] = useCenteredTree();
  return (
    <div id="22323" className="w-[700px] h-[900px] " ref={containerRef}>
      <Tree
        data={orgChart}
        translate={translate}
        dimensions={dimensions}
        draggable={true}
        zoomable={true}
        orientation="horizontal"
      />
    </div>
  );
};
