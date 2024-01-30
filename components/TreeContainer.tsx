"use client";

import React from "react";
import Tree from "react-d3-tree";
import { useCenteredTree } from "../lib/helpers";

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
    <div
      id="22323"
      className="w-[700px] h-[900px] border-solid border-2 border-sky-500"
      ref={containerRef}
    >
      <Tree
        data={orgChart}
        translate={translate}
        draggable={true}
        zoomable={true}
        orientation="vertical"
      />
    </div>
  );
};
