import PhotoMosque from "../../assets/masjid1.png";
import CardClock from "./CardClock";

const Headline = ({dataJadwalSholat}) => {
  // console.log("headline : ",dataJadwalSholat[0].ashar)
  return (
    <div className="w-full h-[70vh] sm:h-[85vh] pt-5 px-6 bg-blue-50">
      <div className="content flex sm:flex-row justify-between h-full ">
        {/* Kata */}
        <div className="titleHeader flex flex-col z-10">
            <a href="https://maps.app.goo.gl/H7VGMirotSSSkxed9" target="_blank" rel="noopener noreferrer" className="w-[15rem] md:w-[22rem]">
                <div className="location mt-5 flex items-center gap-3 bg-gradient-to-l from-blue-100 via-blue-300 to-blue-500  p-2 rounded-full">
                <span className="material-symbols-outlined text-white">location_on</span>
                <p>Al Kahfi Mosque, Bintan, Kepulauan Riau</p>
                </div>
            </a>
            <h1 className="mt-2 text-3xl sm:text-6xl lg:text-7xl md:w-[70%]">Allah will help you who moves in the way of Allah.</h1>
            <p className="mt-5 text-xl text-justify md:w-[55%]">Your daily life is a place of worship and your religion. When you enter it, enter with all your heart and soul. - Kahlil Gibran</p>
        
            <button className="mt-3 btn btn-wide bg-blue-500 text-white ">
                Take a tour
            </button>

            
        </div>

        

        {/* Foto masjid */}
        <div className="imageMosque hidden sm:block md:flex md:items-end md:justify-end w-full md:w-[60%] relative z-0 mt-[-3rem] bg-blue-50">
            <img src={PhotoMosque} alt="masjid Foto" loading="lazy" className="w-full h-[80vh] object-cover opacity-80 rounded-lg hidden sm:block " />
            <div className="absolute top-0 left-[-12px]  w-[100%] md:w-[35%] h-full bg-gradient-to-r from-[rgb(239,246,255)] to-[rgba(255,255,255,0)] z-10"></div>
        </div>

        
      </div>
{/* nanti di ubah colom nya */}
      <div className="box-time flex justify-center">
        <CardClock dataJadwalSholat={dataJadwalSholat} />
      </div>

    </div>
  );
};

export default Headline;
