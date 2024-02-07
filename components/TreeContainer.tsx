"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useCenteredTree } from "../lib/helpers";
import { data } from "../lib/data";
import { TreeOrientationButton } from "./TreeOrientationButton";
import { NodePathButton } from "./NodePathButton";
const Tree = dynamic(() => import("react-d3-tree"), { ssr: false });

export const TreeContainer = () => {
  const [dimensions, translate, containerRef] = useCenteredTree();
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center w-full pb-2 gap-1 sm:gap-3">
        <TreeOrientationButton /> <NodePathButton />
      </div>
      <div
        className="w-full border-solid border-primary border-[1px] flex grow-[2] rounded-lg"
        ref={containerRef}
      >
        <Tree
          data={data}
          translate={translate}
          dimensions={dimensions}
          draggable={true}
          zoomable={true}
          orientation="horizontal"
        />
      </div>
    </div>
  );
};
