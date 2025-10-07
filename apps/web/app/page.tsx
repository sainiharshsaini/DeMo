import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Gradient } from "@repo/ui/gradient";
import { TurborepoLogo } from "@repo/ui/turborepo-logo";
import { prisma } from "@repo/db";

export default async function Page() {

  const user = await prisma.user.findFirst()

  return (
    <div>
      {user?.name ?? "No user added yet"}
      {user?.email ?? "No user email"}
    </div>
  );
}
