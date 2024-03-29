import Image from "next/image";
import Header from "../components/Header";
import databiz from "../../public/assets/client-databiz.svg";
import audiophile from "../../public/assets/client-audiophile.svg";
import meet from "../../public/assets/client-meet.svg";
import maker from "../../public/assets/client-maker.svg";

import imageHero from "../../public/assets/image-hero-desktop.png";

export default function Home() {
  return (
    <>
      <body>
        <Header />
        <main className="flex flex-row items-start">
        <div className="flex flex-1 flex-col items-start gap-12 ml-40 mt-20">
          <div className="font-bold leading-none text-[5rem]">
            <h1>Make</h1>
            <h1>remote work</h1>
          </div>

          <h3 className="font-medium text-gray-600 break-normal w-96">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </h3>

          <button className="transition text-white bg-black hover:text-black hover:bg-white border-2 px-6 pt-[0.65rem] pb-[0.7rem] rounded-xl">
            Learn more
          </button>

          <div className="flex flex-row items-start gap-4 mt-10">
            <Image src={databiz} objectFit="contain" alt="databiz" />
            <Image src={audiophile} objectFit="contain" alt="audiophile" />
            <Image src={meet} objectFit="contain" alt="meet" />
            <Image src={maker} objectFit="contain" alt="maker" />
          </div>
        </div>
        <div className="flex-1 absolute right-28">
          <Image alt="image-hero" src={imageHero} height={420} width={420}></Image>
        </div>
        </main>
      </body>
    </>
  );
}
