import PhotoMosque from "../../assets/masjid1.png";
import CardClock from "./CardClock";
import CardSholatToday from "./CardSholatToday";

import { useState, useEffect } from "react";
import SholatController from "../../Controller/SholatController";

const Headline = () => {
  const [sholatToday, setSholatToday] = useState(null);
  useEffect(() => {
    fetchSholatData();
  }, []);

  const fetchSholatData = async () => {
    const sholatController = new SholatController();
    try {
      const sholatToday = await sholatController.getSholatToday();
      setSholatToday(sholatToday);
      console.log("berhasil", sholatToday.ashar);
    } catch (error) {
      console.error("Error fetching today's sholat data:", error);
    }
  };

  return (
    <div className="w-full pt-5 px-6   ">
      <div className="content bg-blue-50 p-2 rounded-md flex sm:flex-row justify-between h-full ">
        {/* Kata */}
        <div className="titleHeader flex flex-col relative w-full ">
          <a
            href="https://maps.app.goo.gl/H7VGMirotSSSkxed9"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-5 sm:w-[22rem]"
          >
            <div className="location mt-5 flex items-center gap-3 bg-gradient-to-r from-blue-800 to-indigo-900 text-white  p-2 rounded-full">
              <span className="material-symbols-outlined text-white">
                location_on
              </span>
              <p>Al Kahfi Mosque, Bintan, Kepulauan Riau</p>
            </div>
          </a>
          <h1 className="mt-2 text-3xl sm:text-6xl lg:text-7xl md:w-[70%]">
            Allah will help you who moves in the way of Allah.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-justify md:w-[55%]">
            Your daily life is a place of worship and your religion. When you
            enter it, enter with all your heart and soul. - Kahlil Gibran
          </p>
        </div>

        {/* Foto masjid */}
        <div className="imageMosque hidden md:flex md:items-end md:justify-end w-full md:w-[60%] relative z-0 mt-[-3rem] ">
          <img
            src={PhotoMosque}
            alt="masjid Foto"
            loading="lazy"
            className="w-full h-[80vh] object-cover opacity-80 rounded-lg hidden sm:block "
          />
          <div className="absolute top-0 left-[-12px]  w-[100%] md:w-[35%] h-full bg-gradient-to-r from-[rgb(239,246,255)] to-[rgba(255,255,255,0)] z-10"></div>
        </div>
      </div>

      <div className="box-time flex justify-center mt-[-1vh] sm:mt-[-1vh]  z-50 p-10">
        <CardClock />
      </div>

      <CardSholatToday sholatToday={sholatToday} />
    </div>
  );
};

export default Headline;
