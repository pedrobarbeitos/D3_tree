"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useCenteredTree } from "../lib/helpers";
import { data } from "../lib/data";
import { TreeOrientationButton } from "./TreeOrientationButton";
import { NodePathButton } from "./NodePathButton";
import { SearchTreeInput } from "./SearchTreeInput";
import { Folder, File } from "lucide-react";
import { Button } from "@/components/ui/button";
const Tree = dynamic(() => import("react-d3-tree"), { ssr: false });

interface NodeDatum {
  name: string;
  type?: string;
}

interface ForeignObjectProps {
  width: number;
  height: number;
  x: number;
}

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}: {
  nodeDatum: NodeDatum;
  foreignObjectProps: ForeignObjectProps;
  toggleNode: any;
}) => (
  <foreignObject {...foreignObjectProps}>
    <Button
      variant="secondary"
      className="flex flex-col justify-center items-center bg-popover w-[250px] h-[75px] rounded-lg text-sm"
      onClick={toggleNode}
    >
      {nodeDatum.type === "folder" ? (
        <Folder strokeWidth={1} />
      ) : (
        <File strokeWidth={1} />
      )}
      {nodeDatum.name}
    </Button>
  </foreignObject>
);

export const TreeContainer = () => {
  const [dimensions, translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 300, y: 250 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -125 };
  const separation = { siblings: 1, nonSiblings: 2 };

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center w-full pb-2 gap-1 sm:gap-3">
        <TreeOrientationButton /> <NodePathButton /> <SearchTreeInput />
      </div>
      <div
        className="w-full border-solid border-muted border-[1px] flex grow-[2] rounded-lg"
        ref={containerRef}
      >
        <Tree
          data={data}
          translate={translate}
          dimensions={dimensions}
          separation={separation}
          draggable={true}
          zoomable={true}
          orientation="vertical"
          pathClassFunc={() => "!stroke-muted stroke-[1px]"}
          nodeSize={nodeSize}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
        />
      </div>
    </div>
  );
};
