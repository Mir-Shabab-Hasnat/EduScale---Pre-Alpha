
// import Image from "next/image";
// import { Navbar } from "../components/navbar"
// import { Hero } from "../components/Hero";
// import { Footer } from "../components/Footer";
// import { useEffect, useState } from "react";
import PageWrapper from "@/components/new/container/page-wrapper";
import HeroSection from "@/components/new/homepage/hero";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


// type Theme = "light" | "dark" | "system";


export default async function Home() {
  
  const user = await currentUser();

  if (!user?.id) {
    console.log("No user")
    return (
      <PageWrapper>
      <div className="flex flex-col max-w-[70rem]">
        <HeroSection />
      </div>
    </PageWrapper>
    )
  }

  const userSettings = await prisma.user.findUnique(
    {
      where: {
        userId: user.id
      },
      
      
    }
  )

  if (!userSettings && user) {
    redirect("/wizard")
  }

  console.log(user?.lastName)
  console.log(userSettings?.userId)

  return (
    <PageWrapper>
      <div className="flex flex-col max-w-[70rem]">
        <HeroSection/>
      </div>
    </PageWrapper>
  );

  // const [theme, setTheme] = useState<Theme>("system");
  // useEffect(() => {
  //   const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
  //     .matches
  //     ? "dark"
  //     : "light";
  //   const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
  //   setTheme(savedTheme);
  //   const themeToApply =
  //     savedTheme === "system" ? systemPreference : savedTheme;
  //   document.documentElement.classList.toggle("dark", themeToApply === "dark");
  // }, []);
  // const handleThemeChange = (newTheme: Theme) => {
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  //   if (newTheme === "system") {
  //     const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
  //       .matches
  //       ? "dark"
  //       : "light";
  //     document.documentElement.classList.toggle(
  //       "dark",
  //       systemPreference === "dark",
  //     );
  //   } else {
  //     document.documentElement.classList.toggle("dark", newTheme === "dark");
  //   }
  // };
  // return (
  //   <main className="min-h-screen bg-black text-white">
  //     <Navbar />
  //     <Hero />
  //     <Footer theme={theme} setTheme={handleThemeChange}/>
  //   </main>
  // );
}



