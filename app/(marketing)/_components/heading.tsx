"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your
        <Image
          src="/wikis.png"
          width={42}
          height={42}
          alt="wikis"
          className="m-2 inline-flex"
        />
        <span className="underline decoration-from-font underline-offset-4">
          wiki
        </span>
        <Image
          src="/docs.png"
          width={38}
          height={38}
          alt="docs"
          className="m-2 inline-flex"
        />
        <span className="underline decoration-from-font underline-offset-4">
          docs
        </span>
        ,
        <br /> &amp;
        <Image
          src="/projects.png"
          width={52}
          height={52}
          alt="projects"
          className="m-2 inline-flex"
        />
        <span className="underline decoration-from-font underline-offset-4">
          projects
        </span>
        . Together.
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        VersaNote is a connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter VersaNote
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get VersaNote free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
