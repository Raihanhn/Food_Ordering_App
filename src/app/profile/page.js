"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;
  if (status === "login") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data?.user.image;

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <form className="max-w-md mx-auto ">
        <div className="flex gap-4 items-center ">
          <div className="">
            <div className=" rounded-lg p-2 relative">
              <Image
                className="rounded-lg w-full h-full mb-1 "
                src={userImage}
                width={250}
                height={250}
                alt={"avatar"}
              />
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="grow">
            <input type="text" placeholder="First and last name" />
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}
