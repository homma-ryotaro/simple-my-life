"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const SideNav = () => {
  const router = useRouter();

  const handleGoBack = () => router.back();

  const handleGoComment = () => {
    const element: any = document.getElementById("comment");
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Button size={"icon"} variant={"ghost"} onClick={handleGoBack}>
        <ArrowLeft size={20} />
      </Button>
    </>
  );
};

export default SideNav;
