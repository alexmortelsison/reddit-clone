import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="h-[10vh] w-full flex items-center border-b px-5 lg:px-14 justify-between">
      <Link href={"/"} className="flex items-center gap-x-3">
        <Image
          src={"/reddit-full.svg"}
          alt="logo"
          width={40}
          height={40}
          className="h-10 w-fit"
        />
        <Image
          src={"/logo-name.svg"}
          alt="logo"
          width={40}
          height={40}
          className="h-9 w-fit hidden lg:block"
        />
      </Link>
      <ModeToggle />
    </nav>
  );
}
