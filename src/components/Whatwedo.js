import Link from "next/link";

export default function WhatWeDo() {
    return (
        <section>

            <div className="flex flex-col items-center gap-8">

                <h3 className="text-[48px] font-bold weight-[700]">What We Do</h3>

                <p className="text-[16px]">We bring a touch of that simple magic into your world.</p>

                <div className="h-[1px] w-[95%] bg-[#0a0a0a]/60"></div>

            </div>

            <div className="flex flex-col w-full items-center">

                <div className="flex flex-col w-full items-center gap-10">
                    <p>1</p>

                    <img></img>

                    <p>FLORAL INSTALLATIONS</p>

                    <p>Living art for homes, businesses, and events.</p>

                    <div className="h-[1px] w-[90%] bg-[#0a0a0a]/60"></div>
                </div>

                <div className="flex flex-col w-full items-center">
                    <p>2</p>

                    <img></img>

                    <p>NATIVE PLANT ARRANGEMENTS</p>

                    <p>Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
                    
                    <div className="h-[1px] w-[90%] bg-[#0a0a0a]/60"></div>
                </div>

                <div className="flex flex-col w-full items-center">
                    <p>3</p>

                    <img></img>

                    <p>CUSTOM FLORAL CONCEPTS</p>

                    <p>Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
                
                    <div className="h-[1px] w-[90%] bg-[#0a0a0a]/60"></div>
                </div>

            </div>

        </section>
    );
}