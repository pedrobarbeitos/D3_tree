import { CommitIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export function NodePathButton() {
  return (
    <Button variant="outline" size="icon">
      <CommitIcon className="h-4 w-4" />
    </Button>
  );
}
