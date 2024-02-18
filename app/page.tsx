import Image from "next/image";
import { TreeContainer } from "@/components/TreeContainer";

export default function Home() {
  return (
    <main className="w-full h-full flex grow">
      <TreeContainer />
    </main>
  );
}
