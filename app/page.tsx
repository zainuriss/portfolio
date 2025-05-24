import Image from "next/image";
import MyImage from "../public/sample.png";
import Logo from "../public/logo accent.png";
import { EB_Garamond, Lexend } from "next/font/google";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoopText from "./components/LoopText";

library.add(fab, fas);
const ebGaramond = EB_Garamond({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        className={` ${lexend.className} flex flex-col justify-center items-center min-h-screen bg-neutral-900 w-full`}
      >
        {/* Greeting Page */}
        <div className="flex flex-nowrap flex-row justify-around items-center min-h-screen w-full">
          <div className="w-full flex justify-center items-center text-center flex-col">
            <h1
              className={`lg:text-[15em]/50 text-8xl text-neutral-800/30 font-bold`}
            >
              PORT
            </h1>
            <h1
              className={`lg:text-[15em]/50 text-8xl text-neutral-800/30 font-bold`}
            >
              FOLIO
            </h1>
          </div>

          <div className="absolute w-full flex justify-around ">
            <div className="w-full flex flex-wrap lg:flex-row flex-col-reverse justify-around place-content-around h-screen items-center">
              <div className="flex lg:flex-col flex-row items-center gap-4 transition-all ease-in-out duration-300">
                <a
                  href="https://wa.me/6289673799600"
                  className="text-white hover:text-neutral-900 hover:bg-[#82c0cc] p-4 rounded-full transition-all ease-in-out duration-300 hover:scale-110 w-14"
                >
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                </a>
                <a
                  href="https://www.instagram.com/zainuriss_/"
                  className="text-white hover:text-neutral-900 hover:bg-[#82c0cc] p-4 rounded-full transition-all ease-in-out duration-300 hover:scale-110 w-14"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                <a
                  href="mailto:zzainuri.me@gmail.com"
                  className="text-white hover:text-neutral-900 hover:bg-[#82c0cc] p-4 rounded-full transition-all ease-in-out duration-300 hover:scale-110 w-14"
                >
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                </a>
              </div>
              <div className="flex">
                <h1
                  className={`lg:text-8xl text-6xl flex flex-col text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#82c0cc] to-[#006494]`}
                >
                  Heyyo,
                </h1>
              </div>
              <div className={`gap-4 lg:flex-col flex-row flex`}>
                <a
                  href="#about"
                  className="lg:text-base text-xs relative inline-block text-white font-semibold px-1 py-0 mx-[-1] transition-all duration-300 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-[#82c0cc] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:text-neutral-900 overflow-hidden"
                >
                  <span className="relative z-10">About me</span>
                </a>

                <a
                  href="#skills"
                  className="lg:text-base text-xs relative inline-block text-white font-semibold px-1 py-0 mx-[-1] transition-all duration-300 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-[#82c0cc] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:text-neutral-900 overflow-hidden"
                >
                  <span className="relative z-10">Skills</span>
                </a>

                <a
                  href="#projects"
                  className="lg:text-base text-xs relative inline-block text-white font-semibold px-1 py-0 mx-[-1] transition-all duration-300 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-[#82c0cc] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:text-neutral-900 overflow-hidden"
                >
                  <span className="relative z-10">Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Page */}
        <div
          id="about"
          className="relative w-full min-h-screen bg-neutral-900 text-white px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
        >

          {/* TEXT SECTION */}
          <div className="z-10 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug text-center md:text-left">
              About me
            </h1>
            <p className={`md:text-lg text-xs leading-relaxed text-gray-300 text-justify md:text-left`}>
              Seorang lulusan{" "}
              <span className="bg-[#82c0cc] text-neutral-900 font-semibold">
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

          <div className="relative group md:z-10 z-0 flex justify-center items-center bg-none md:bg-neutral-900 h-full p-20">
            <div className="bg-gradient-to-t from-neutral-900 to-transparent absolute z-20 w-full h-1/2 bottom-0"></div>
            <div className="bg-gradient-to-t from-neutral-900 to-transparent absolute z-20 w-full h-1/2 bottom-0"></div>
            <Image
            alt="logo"
            src={Logo}
            className="absolute z-0 h-full object-contain w-full group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out"
            />
            <Image
              alt="profile"
              src={MyImage}
              className="absolute z-10 md:h-11/12 h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </>
  );
}
