import Image from "next/image";
import MyImage from "../public/test.png";
import { EB_Garamond, Lexend } from "next/font/google";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, fas);
const ebGaramond = EB_Garamond({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        className={` ${lexend.className} flex justify-center items-center min-h-screen bg-neutral-900 w-full`}
      >
        {/* Greeting Page */}
        <div className="flex flex-nowrap flex-row justify-around items-center w-full">
          <div className="w-full flex justify-center items-center text-center flex-col">
            <h1
              className={`lg:text-[15em]/50 text-8xl text-neutral-800/30 font-bold tracking-widest`}
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
              <div className="flex lg:flex-col flex-row items-center gap-4 transform transition ease-in-out duration-500">
                <a
                  href="https://wa.me/6289673799600"
                  className="text-white hover:text-neutral-900 hover:bg-[#82c0cc] p-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110 w-14"
                >
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                </a>
                <a
                  href="https://www.instagram.com/zainuriss_/"
                  className="text-white hover:text-neutral-900 hover:bg-[#82c0cc] p-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110 w-14"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                <a
                  href="mailto:zzainuri.me@gmail.com"
                  className="text-white hover:text-neutral-900 hover:bg-[#82c0cc] p-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110 w-14"
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
              <div className={`gap-4 lg:flex-col flex-row flex text-[#82c0cc]`}>
                <a
                  href="#about"
                  className="lg:text-base text-xs relative inline-block text-[#82c0cc] font-semibold px-1 py-0 mx-[-1] transition-all duration-300 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-[#82c0cc] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:text-neutral-900 overflow-hidden rounded"
                >
                  <span className="relative z-10">About me</span>
                </a>

                <a
                  href="#skills"
                  className="lg:text-base text-xs relative inline-block text-[#82c0cc] font-semibold px-1 py-0 mx-[-1] transition-all duration-300 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-[#82c0cc] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:text-neutral-900 overflow-hidden rounded"
                >
                  <span className="relative z-10">Skills</span>
                </a>

                <a
                  href="#projects"
                  className="lg:text-base text-xs relative inline-block text-[#82c0cc] font-semibold px-1 py-0 mx-[-1] transition-all duration-300 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-[#82c0cc] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:text-neutral-900 overflow-hidden rounded"
                >
                  <span className="relative z-10">Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
