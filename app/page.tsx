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
        <div className="flex flex-nowrap flex-row justify-around items-center h-auto w-full">
          <div className="w-full flex justify-center flex-col ml-10">
            <h1 className={`text-[15em]/50 text-neutral-800/30 font-bold`}>
              PORT
            </h1>
            <h1 className={`text-[15em]/50 text-neutral-800/30 font-bold`}>
              FOLIO
            </h1>
          </div>

          <div className="absolute w-full flex justify-around">
            <div className="w-full flex justify-around items-center">
              <div className="flex flex-col items-center gap-4 transform transition ease-in-out duration-500">
                <a
                  href="https://wa.me/6289673799600"
                  className="text-[#82c0cc] hover:text-neutral-900 hover:bg-[#82c0cc] p-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110 w-14"
                >
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                </a>
                <a
                  href="https://www.instagram.com/zainuriss_/"
                  className="text-[#82c0cc] hover:text-neutral-900 hover:bg-[#82c0cc] p-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110 w-14"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                <a
                  href="mailto:zzainuri.me@gmail.com"
                  className="text-[#82c0cc] hover:text-neutral-900 hover:bg-[#82c0cc] p-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110 w-14"
                >
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                </a>
              </div>
              <div className="flex">
                <h1
                  className={`text-8xl flex flex-col text-left text-[#82c0cc] font-bold`}
                >
                  Heyyo,
                </h1>
              </div>
              <div className={`gap-4 flex-col flex text-[#82c0cc]`}>
                <a
                  href="#about"
                  className="relative inline-block px-3 py-1 text-neutral-700 font-semibold transition-transform duration-300 hover:scale-105 hover:text-[#82c0cc] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-green-300 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                >
                  About me
                </a>

                <a
                  href="#skills"
                  className="relative inline-block px-3 py-1 text-neutral-700 font-semibold transition-transform duration-300 hover:scale-105 hover:text-[#82c0cc] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-green-300 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  className="relative inline-block px-3 py-1 text-neutral-700 font-semibold transition-transform duration-300 hover:scale-105 hover:text-[#82c0cc] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-green-300 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
