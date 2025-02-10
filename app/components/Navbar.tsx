import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserDropdown from "./UserDropdown";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
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
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        {user ? (
          <UserDropdown userImage={user.picture} />
        ) : (
          <div className="flex items-center gap-x-4">
            <Button variant={"secondary"} asChild>
              <RegisterLink>Sign Up</RegisterLink>
            </Button>
            <Button asChild>
              <LoginLink>Login</LoginLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
