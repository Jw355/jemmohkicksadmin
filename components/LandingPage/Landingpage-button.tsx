"use client";
import { useRouter } from "next/navigation";

interface ButtonLandingProps {
  children: React.ReactNode;
}

export const ButtonLanding = ({ children }: ButtonLandingProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/Dashboard/");
  };

  return <span onClick={onClick}>{children}</span>;
};
