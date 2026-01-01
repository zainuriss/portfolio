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
        {/* Greeting Page */}
        <div className="flex flex-nowrap flex-row justify-around items-center min-h-screen w-full">
          <div className="w-full flex flex-wrap flex-col justify-between md:max-w-5xl max-w-2xl px-8 space-y-10">
            <div className="flex flex-row justify-between gap-4">
              <a
                href=""
                className={`items-center w-max gap-4 flex-row flex text-white px-7 py-2 bg-[#82c0cc]/10 rounded-md border border-[#82c0cc]/30 backdrop-blur-2xl hover:bg-[#82c0cc]/25 hover:-translate-y-0.5 hover:border-[#82c0cc]/50 transition-all ease-in-out duration-300`}
              >
                <h1 className="text-sm">Portfolio</h1>
                {/* <Image alt="logo univ" src={UPN} className="w-5" /> */}
              </a>
              <div className="flex flex-row gap-2">
                <a
                  href="https://wa.me/6289673799600"
                  className={`items-center w-max gap-4 flex-row flex text-green-500 px-7 py-2 bg-green-500/10 rounded-md border border-green-500/30 backdrop-blur-2xl hover:bg-green-500/25 hover:-translate-y-0.5 hover:border-green-500/50 transition-all ease-in-out duration-300`}
                >
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} className="" />
                </a>
                <a
                  href="https://www.instagram.com/zainuriss_/"
                  className={`items-center w-max gap-4 flex-row flex text-pink-600 px-7 py-2 bg-pink-600/10 rounded-md border border-pink-600/30 backdrop-blur-2xl hover:bg-pink-600/25 hover:-translate-y-0.5 hover:border-pink-600/50 transition-all ease-in-out duration-300`}
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} className="" />
                </a>
                <a
                  href="mailto:zzainuri.me@gmail.com"
                  className={`items-center w-max gap-4 flex-row flex text-blue-600 px-7 py-2 bg-blue-600/10 rounded-md border border-blue-600/30 backdrop-blur-2xl hover:bg-blue-600/25 hover:-translate-y-0.5 hover:border-blue-600/50 transition-all ease-in-out duration-300`}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
            </div>
            <div className="flex md:flex-row flex-col-reverse gap-y-10 items-center justify-between">
              <div className="flex flex-col space-y-4">
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
                    <FontAwesomeIcon icon={["fas", "up-right-from-square"]} className="" />
                    {/* <Image alt="logo univ" src={UPN} className="w-5" /> */}
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="rounded-full border-4 border-[#82c0cc] bg-transparent md:w-72 md:h-72 w-56 h-56"></div>
                <div className="absolute">
                  <Image
                    alt="profile"
                    src={Avatar}
                    className="rounded-full md:w-3xs w-48 object-cover group-hover:drop-shadow-md transition-all duration-500 ease-in-out"
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
