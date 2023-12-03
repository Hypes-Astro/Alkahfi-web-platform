import  { useState, useEffect } from 'react';



const CardClock = ({dataJadwalSholat}) => {

  let waktuSholat = "";

 
  // jam realtime
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(intervalId);
  }, []);

  // Format jam dan menit dari waktu saat ini
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  let waktuSekarang = `${hours}:${minutes}`;


  useEffect(() => {
    console.log("in cardClock : ", dataJadwalSholat);
    // Lakukan sesuatu dengan data, misalnya tampilkan satu kali
  }, [dataJadwalSholat,])
  
  if (waktuSekarang >= dataJadwalSholat[0].dzuhur && waktuSekarang < dataJadwalSholat[0].ashar) {
    waktuSholat = "Dzuhur"
  }else if(waktuSekarang >= dataJadwalSholat[0].ashar && waktuSekarang < dataJadwalSholat[0].maghrib){
    waktuSholat = "Ashar"
  }else if(waktuSekarang >= dataJadwalSholat[0].maghrib && waktuSekarang < dataJadwalSholat[0].isya){
    waktuSholat = "Maghrib"
  }else if(waktuSekarang >= dataJadwalSholat[0].isya && waktuSekarang < dataJadwalSholat[0].subuh){
    waktuSholat = "Isya"
  }else{
    waktuSholat = "Shubuh"
  }

  return (
    <div className="p-3 w-full sm:w-[80%] sm:right-4 h-[20vh] flex  bg-gradient-to-l from-blue-100 via-blue-300 to-blue-500 relative  lg:w-[60%] md:h-[20vh]  bottom-20 rounded-xl ">
        <div className="info-1 bg-blue-200 ">
        <div className="masjidName flex justify-between flex-col">
            <h1 className="text-2xl bg-green-500">Alkahfi Mosque Prayers Time</h1>
            <p className="w-1/2">Hi people of faith, make patience and prayer your helpers, indeed God is with those who are patient. - Al-Baqarah: 153</p>

        </div>
        </div>
        <div className="info-2 bg-red-200 flex w-[30%] flex-col">
            <div className="infoTime flex gap-3 bg-yellow-300 text-base">
                Now
                <span className="material-symbols-outlined text-sm">circle</span>
                {/*  */}
                <p><span> {waktuSholat} </span> time is Runing</p>
              
            </div>
        <h1 className="bg-red-300 ">{`${hours}:${minutes}:${seconds}`}</h1>
        </div>
    </div>
  );
};

export default CardClock;
