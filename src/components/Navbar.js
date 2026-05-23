import Link from "next/link";
import { Caprasimo } from "next/font/google";

const caprasimo = Caprasimo({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center">
        <div className="flex flex-row w-[90%] h-full items-center justify-between mt-5 mb-5">
            <div>
                <Link href="/" className={`${caprasimo.className} text-[28px]`}>Our Blooms®</Link>
            </div>

            <div className="flex flex-row text-[18px] font-bold weight-700 gap-14">

                <Link href="/flowers">Gallery</Link>

                <Link href="/about">About</Link>

                <Link href="/contact">Contact</Link>
                
            </div>
        </div>

        <div className="h-[1px] w-[90%] bg-[#0a0a0a]/40"></div>
    </nav>
  );
}