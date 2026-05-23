import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col items-center mt-20">
            <div className="flex flex-col items-center w-[90%] gap-6">

                {/* Hero image */}
                <Image
                    src="/hero/bae4ccb48424ebcc705accc6dc8ff16e72ea2b06.png"
                    alt="Hero"
                    width={1200}
                    height={600}
                />

                <div
                    className="w-full h-[600px] mt-8 bg-cover bg-center flex items-center justify-center rounded-xl"
                    style={{backgroundImage:"url('/hero/c110a9e8a11a0ce5b41a9d78a9bdb36d21efd18a.png')",}}>

                    <div className="flex h-full w-full items-end ">
                        <Image
                            src="/hero/Sticker.png"
                            alt="Sticker"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}