"use client";
import Image from "next/image";
import Avatar from "../public/ava.webp";
import UPN from "../public/logo-upn.png";
import Logo from "../public/logo accent.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoopText from "./components/LoopText";
import { useEffect } from "react";

library.add(fab, fas);
export default function Home() {
  const highlightTextAnimated = () => {
    useEffect(() => {
      const target = document.getElementById("highlightTextAnimated");
      if (!target) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            target.classList.add("highlight-animate");
            observer.unobserve(target); // agar animasinya sekali aja
          }
        },
        { threshold: 0.6 } // trigger saat 60% elemen kelihatan
      );

      observer.observe(target);

      return () => observer.disconnect();
    }, []);
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center min-h-screen bg-neutral-900 w-full`}
      >
        {/* Header */}
        <header className="fixed top-0 z-[999] w-full flex justify-center my-4">
          <nav className="z-1 w-11/12 flex flex-row justify-between gap-4 bg-neutral-100/10 rounded-md border border-neutral-50/30 backdrop-blur-2xl py-2 px-4">
              <a
                href=""
                className={`items-center w-max gap-4 flex-row flex text-white px-7 py-2 bg-[#82c0cc]/10 rounded-md border border-[#82c0cc]/30 backdrop-blur-2xl hover:bg-[#82c0cc]/25 hover:-translate-y-0.5 hover:border-[#82c0cc]/50 transition-all ease-in-out duration-300`}
              >
                <Image alt="logo univ" src={Logo} className="w-5" />
                <h1 className="text-sm md:block hidden">Faiz Zainuri</h1>
              </a>
              <div className="flex flex-row gap-2">
                <button
                  className={`cursor-pointer items-center w-max gap-4 flex-row flex text-red-500 p-2 bg-red-500/10 rounded-md border border-red-500/30 backdrop-blur-2xl hover:bg-red-500/25 hover:-translate-y-0.5 hover:border-red-500/50 transition-all ease-in-out duration-300`}
                >
                  <FontAwesomeIcon icon={["fas", "language"]} className="" />
                </button>
                <button
                  className={`hidden cursor-pointer items-center w-max gap-4 flex-row dark:flex text-yellow-600 p-2 bg-yellow-600/10 rounded-md border border-yellow-600/30 backdrop-blur-2xl hover:bg-yellow-600/25 hover:-translate-y-0.5 hover:border-yellow-600/50 transition-all ease-in-out duration-300`}
                >
                  <FontAwesomeIcon icon={["fas", "sun"]} className="" />
                </button>
                <button
                  className={`dark:hidden cursor-pointer items-center w-max gap-4 flex-row flex text-gray-600 p-2 bg-gray-600/10 rounded-md border border-gray-600/30 backdrop-blur-2xl hover:bg-gray-600/25 hover:-translate-y-0.5 hover:border-gray-600/50 transition-all ease-in-out duration-300`}
                >
                  <FontAwesomeIcon icon={["fas", "moon"]} className="" />
                </button>
              </div>
          </nav>
        </header>

        {/* Greeting Page */}
        <div className="flex flex-nowrap flex-row justify-center items-center min-h-screen w-full">  
          <div className="w-full flex flex-wrap flex-col justify-between md:max-w-5xl max-w-2xl px-8 space-y-10 mt-24 md:mt-0">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10 items-center justify-between">
              <div className="flex flex-col space-y-4 md:order-first order-last">
                <div className="flex flex-col leading-normal w-full">
                  <h1 className="text-white">Heyyo, </h1>
                  <h1
                    className={`lg:text-4xl text-2xl flex flex-col font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#82c0cc] to-[#006494]`}
                  >
                    I'm Faiz Zainuri
                  </h1>
                  <p
                    className={`md:text-base text-sm text-gray-300 text-left mt-2 max-w-xl`}
                  >
                    A student from Indonesia, currently based in Yogyakarta. I'm
                    passionate about building responsive and accessible web
                    applications. I'm also interested in UI/UX design and web
                    performance optimization.
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <a
                    href=""
                    className={`items-center w-max gap-4 flex-row flex text-white px-7 py-2 bg-[#82c0cc]/10 rounded-md border border-[#82c0cc]/30 backdrop-blur-2xl hover:bg-[#82c0cc]/25 hover:-translate-y-0.5 hover:border-[#82c0cc]/50 transition-all ease-in-out duration-300`}
                  >
                    <h1 className="text-sm">Contact me</h1>
                    <FontAwesomeIcon icon={["fas", "square-arrow-up-right"]} className="" />
                    {/* <Image alt="logo univ" src={UPN} className="w-5" /> */}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="flex items-center justify-center">
                  <div className="rounded-full border-4 border-[#82c0cc] bg-transparent md:w-72 md:h-72 w-56 h-56"></div>
                    <Image
                      alt="profile"
                      src={Avatar}
                      className="absolute rounded-full md:w-3xs w-48 object-cover group-hover:drop-shadow-md transition-all duration-500 ease-in-out"
                    />
                </div>
                </div>
            </div>
          </div>
        </div>

        {/* About Page */}
        <div
          id="about"
          className="relative w-full min-h-screen bg-neutral-900 text-white px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
        >
          <div className="z-10 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug text-center md:text-left">
              About me
            </h1>
            <p
              className={`md:text-lg text-xs leading-relaxed text-gray-300 text-justify md:text-left`}
            >
              Seorang lulusan{" "}
              <span
                id="highlightTextAnimated"
                className="bg-[#82c0cc] text-neutral-900 font-semibold transition-colors duration-500"
              >
                Rekayasa Perangkat Lunak
              </span>{" "}
              yang energik, disiplin, dan mampu bekerja dalam tim. Pengalaman
              organisasi membentuk jiwa tanggung jawab dan keahlian dalam
              situasi kerja bawah tekanan. Mempunyai pengetahuan dasar
              operasional komputer dan terbiasa melakukan tugas dengan aturan
              sistematis serta efisien. Semangat dalam mempelajari hal-hal baru
              dan dapat memberikan dukungan maksimal bagi kesuksesan perusahaan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
