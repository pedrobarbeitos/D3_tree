"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useCenteredTree } from "../lib/helpers";
import { data } from "../lib/data";
const Tree = dynamic(() => import("react-d3-tree"), { ssr: false });

export const TreeContainer = () => {
  const [dimensions, translate, containerRef] = useCenteredTree();
  return (
    <div
      className="w-full border-solid border-primary border-2 flex grow"
      ref={containerRef}
    >
      <Tree
        data={data}
        translate={translate}
        dimensions={dimensions}
        draggable={true}
        zoomable={true}
        orientation="vertical"
      />
    </div>
  );
};
