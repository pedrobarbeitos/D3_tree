import { ChevronRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export function TreeOrientationButton() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRightIcon className="h-4 w-4" />
    </Button>
  );
}
