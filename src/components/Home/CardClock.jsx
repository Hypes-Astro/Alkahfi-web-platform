import PropTypes from "prop-types";
const CardClock = ({ sholatTime }) => {
  CardClock.propTypes = {
    sholatTime: PropTypes.object, // Sesuaikan dengan tipe data yang sebenarnya
  };

  // console.log(sholatTime ? sholatTime.subuh : "Loading..");

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Menambahkan nol di depan angka jika angka kurang dari 10, menggunakan itenary condition
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + minutes;
  }

  const currentTime = getCurrentTime();
  // console.log(currentTime);

  const subuhTime = sholatTime ? sholatTime.subuh : "Loading..";
  const dhuhaTime = sholatTime ? sholatTime.dhuha : "Loading..";
  const dzuhurTime = sholatTime ? sholatTime.dzuhur : "Loading..";
  const asharTime = sholatTime ? sholatTime.ashar : "Loading..";
  const maghribTime = sholatTime ? sholatTime.maghrib : "Loading..";
  const isyaTime = sholatTime ? sholatTime.isya : "Loading..";

  let sholatTimeNow;

  if (currentTime >= subuhTime && currentTime < dhuhaTime) {
    sholatTimeNow = "Shubuh";
  } else if (currentTime >= dhuhaTime && currentTime < dzuhurTime) {
    sholatTimeNow = "Dhuha";
  } else if (currentTime >= dzuhurTime && currentTime < asharTime) {
    sholatTimeNow = "Dzuhur";
  } else if (currentTime >= asharTime && currentTime < maghribTime) {
    sholatTimeNow = "Ashar";
  } else if (currentTime >= maghribTime && currentTime < isyaTime) {
    sholatTimeNow = "Maghrib";
  } else if (currentTime >= isyaTime && currentTime < subuhTime) {
    sholatTimeNow = "Isya";
  }

  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 sm:gap-32 text-white p-5 rounded-xl flex flex-col sm:flex-row sm:py-12 ">
      <div className="info-1  ">
        <div className="masjidName flex justify-between flex-col  text-center sm:text-left">
          <h1 className="text-2xl font-semibold ">
            Alkahfi Mosque Prayers Time
          </h1>
          <p className="w-full sm:w-[80%] pt-3">
            Hi people of faith, make patience and prayer your helpers, indeed
            God is with those who are patient. - Al-Baqarah: 153
          </p>
        </div>
      </div>
      <div className="info-2 flex-col w-[80vw] sm:w-1/3">
        <div className="infoTime flex gap-3 text-xl justify-center items-center pt-7 ">
          <p className="font-bold">Now</p>
          <span className="material-symbols-outlined text-sm text-red-500">
            circle
          </span>
          {/* waktu sholat */}
          <p>
            <span className="font-bold">{sholatTimeNow}</span> Time{" "}
          </p>
        </div>
        {/* waktu saat ini */}
        <h1 className="text-center text-xl py-3 "></h1>
      </div>
    </div>
  );
};

export default CardClock;
