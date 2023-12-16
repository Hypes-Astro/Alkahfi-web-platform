import  { useState, useEffect } from 'react';


const CardClock = ({dataJadwalSholat}) => {

  let waktuSholat = "";

  // jam realtime
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Format jam dan menit dari waktu saat ini
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  
 
  const waktuSekarang = `${hours}:${minutes}`;
  

  
  if (waktuSekarang >= dataJadwalSholat.dzuhur && waktuSekarang < dataJadwalSholat.ashar) {
    waktuSholat = "Dzuhur";
  } else if (waktuSekarang >= dataJadwalSholat.ashar && waktuSekarang < dataJadwalSholat.maghrib) {
    waktuSholat = "Ashar";
  } else if (waktuSekarang >= dataJadwalSholat.maghrib && waktuSekarang < dataJadwalSholat.isya) {
    waktuSholat = "Maghrib";
  } else if (waktuSekarang >= dataJadwalSholat.isya || waktuSekarang < dataJadwalSholat.subuh) {
    waktuSholat = "Isya";
  } else if (waktuSekarang >= dataJadwalSholat.subuh && waktuSekarang < dataJadwalSholat.dhuha) {
    waktuSholat = "Subuh";
  } else {
    waktuSholat = "Dhuha";
  }
  


  // from-blue-100 via-blue-300 to-blue-500

  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 sm:gap-32 text-white p-5 rounded-xl flex flex-col sm:flex-row sm:py-12 ">
      <div className="info-1  ">
        <div  className="masjidName flex justify-between flex-col  text-center sm:text-left">
            <h1 className="text-2xl font-semibold ">Alkahfi Mosque Prayers Time</h1>
            <p className="w-full sm:w-[80%] pt-3">Hi people of faith, make patience and prayer your helpers, indeed God is with those who are patient. - Al-Baqarah: 153</p>
        </div>
      </div>
        <div className="info-2 flex-col w-[80vw] sm:w-1/3">
            <div className="infoTime flex gap-3 text-base justify-center items-center pt-7 ">
                <p className='font-bold'>Now</p>
                <span className="material-symbols-outlined text-sm text-red-500">circle</span>
                {/* waktu sholat */}
                <p><span className='text-orange-500 font-medium'> {waktuSholat} </span> time is Runing</p>
              
            </div>
            {/* waktu saat ini */}
          <h1 className="text-center text-xl py-3 ">{waktuSekarang + ":" +seconds}</h1>
        </div>
    </div>
  );
};

export default CardClock;
