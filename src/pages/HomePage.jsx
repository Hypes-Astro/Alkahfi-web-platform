// HomePage.js

import { useEffect, useState } from "react";
import JadwalSholatModel from "../Model/JadwalSholatModel";
import Headline from "../components/Home/Headline";
import Service from "../components/Home/Service";




const HomePage = () => {


    const [jadwalSholatData,setjadwalSholatData] = useState(null);
    const [jadwalSholatToday,setjadwalSholatToday] = useState(null);
    

    // jadwal Sholat
    useEffect(() => {
        const fetchData = async () => {
            const jadwalSholatModel = new JadwalSholatModel('0501');
            let time = new Date();
            let year = time.getFullYear();
           
            let month = time.getMonth() + 1;
            let today = time.getDate();

            try {
                const data = await jadwalSholatModel.getJadwalSholatByDate(year, month);

                const dataJadwal = data.jadwal;            
                setjadwalSholatData(dataJadwal);
                

                // TODAY
                const todayDate = await jadwalSholatModel.getJadwalSholatByToday(year,month,today);                
                const dataJToday = todayDate.jadwal;
                setjadwalSholatToday(dataJToday);


                // Lakukan sesuatu dengan data, misalnya langsung tampilkan di komponen Headline
                // (tanpa menggunakan state)
            } catch (error) {
                console.error("Error fetching Jadwal Sholat:", error);
            }
        };

        fetchData();
    }, []);


    return (
    <>
        {jadwalSholatToday && <Headline dataJadwalSholat={jadwalSholatToday} />}
        {jadwalSholatData && jadwalSholatToday && (
            <Service jadwalSholat={jadwalSholatData} jadWalSholatToday={jadwalSholatToday} />
        ) }
    </>
);

}

export default HomePage;
