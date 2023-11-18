"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState("");
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName }),
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile saved!",
      error: "Error",
    });
  }

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
    }
  }

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

      <div className="max-w-md mx-auto ">
        <div className="flex gap-4 items-center ">
          <div className="">
            <div className=" rounded-lg p-2 relative max-w-[120px]">
              <Image
                className="rounded-lg w-full h-full mb-1 "
                src={userImage}
                width={250}
                height={250}
                alt={"avatar"}
              />
              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="border border-gray-300 cursor-pointer rounded-lg p-2 text-center block ">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
              type="text"
              placeholder="First and last name"
            />
            <input
              type="email"
              disabled={true}
              value={session.data?.user.email}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
