import imageShubuh from "../../assets/Subuh.png";
import imageDzuhur from "../../assets/Dzuhur.png";
import imageAshar from "../../assets/Ashar.png";
import imageMaghrib from "../../assets/Magrib.png";
import imageIsya from "../../assets/Isya.png";
import PropTypes from "prop-types";

const CardSholatToday = ({ sholatToday }) => {
  CardSholatToday.propTypes = {
    sholatToday: PropTypes.object, // Sesuaikan dengan tipe data yang sebenarnya
  };
  // Check key and Value sholatToday
  const subuhTime = sholatToday ? sholatToday.subuh : "Loading..";
  const dzuhurTime = sholatToday ? sholatToday.dzuhur : "Loading..";
  const asharTime = sholatToday ? sholatToday.ashar : "Loading..";
  const maghribTime = sholatToday ? sholatToday.maghrib : "Loading..";
  const isyaTime = sholatToday ? sholatToday.isya : "Loading..";

  return (
    <div className="boxSectio bg-blue-50 py-5 mb-10 flex flex-col  ">
      <div className="locationSholat   px-5 mb-5 w-full">
        <h1 className="font-medium text-center">Bintan</h1>
        <h1 className=" text-center">Waktu sekarang</h1>
      </div>
      <div className=" flex flex-wrap gap-4 justify-center">
        <div className="boxSholat hover:shadow-2xl text-center w-[20vw] sm:w-[15vw] bg-white flex justify-center items-center flex-col p-2 rounded-lg">
          <img src={imageShubuh} alt="" />
          <p className="shubuh font-medium pb-3">Shubuh</p>
          <p className="font-semibold text-blue-800">{subuhTime}</p>
        </div>

        <div className="boxSholat hover:shadow-2xl text-center w-[20vw] sm:w-[15vw] bg-white flex justify-center items-center flex-col p-2 rounded-lg">
          <img src={imageDzuhur} alt="" />
          <p className="shubuh font-medium pb-3">Dzuhur</p>
          <p className="font-semibold text-blue-800">{dzuhurTime}</p>
        </div>

        <div className="boxSholat hover:shadow-2xl text-center w-[20vw] sm:w-[15vw] bg-white flex justify-center items-center flex-col p-2 rounded-lg">
          <img src={imageAshar} alt="" />
          <p className="shubuh font-medium pb-3">Ashar</p>
          <p className="font-semibold text-blue-800">{asharTime}</p>
        </div>

        <div className="boxSholat hover:shadow-2xl text-center w-[20vw] sm:w-[15vw] bg-white flex justify-center items-center flex-col p-2 rounded-lg">
          <img src={imageMaghrib} alt="" />
          <p className="shubuh font-medium pb-3">Maghrib</p>
          <p className="font-semibold text-blue-800">{maghribTime}</p>
        </div>

        <div className="boxSholat hover:shadow-2xl text-center w-[20vw] sm:w-[15vw] bg-white flex justify-center items-center flex-col p-2 rounded-lg">
          <img src={imageIsya} alt="" />
          <p className="shubuh font-medium pb-3">Isya</p>
          <p className="font-semibold text-blue-800">{isyaTime}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSholatToday;
