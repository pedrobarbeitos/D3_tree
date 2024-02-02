'use client'

import { useCallback, useState } from "react";

type Translate = { x: number; y: number };
type Dimensions = { width: number; height: number };

export const useCenteredTree = (defaultTranslate: Translate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = useState<Translate>(defaultTranslate);
  const [dimensions, setDimensions] = useState<Dimensions | undefined>(undefined);
  const containerRef = useCallback((containerElem: HTMLElement | null) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setDimensions({ width, height });
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [dimensions, translate, containerRef] as const;
};
