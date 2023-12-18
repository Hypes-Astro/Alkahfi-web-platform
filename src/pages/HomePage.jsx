// HomePage.js

import { useEffect, useState } from "react";
import JadwalSholatModel from "../Model/JadwalSholatModel";
import Headline from "../components/Home/Headline";
import Service from "../components/Home/Service";
import TesJadwal from "../Model/TesModel";



const HomePage = () => {


    const [jadwalSholatData,setjadwalSholatData] = useState(null);
    const [jadwalSholatToday,setjadwalSholatToday] = useState(null);

        // Contoh penggunaan
    // tesJadwal.ambilJadwalSholat();
    // const ambil = tesJadwal.ambilJadwalSholat();
    // console.log("ini di home " + ambil.Fajr)
    

    // jadwal Sholat
    useEffect(() => {
        const fetchData = async () => {
            let time = new Date();
            let year = time.getFullYear();
           
            let month = time.getMonth() + 1;
            let today = time.getDate();

            // TODAY
            const tesJadwalToday = new TesJadwal(year, month, today, "Bintan", "Indonesia", 2);
            const dataTesJadwal = await tesJadwalToday.ambilJadwalSholat();
            console.table( dataTesJadwal);

            // const jadwalSholatModel = new JadwalSholatModel('0501'); --- API DOWN

            try {
                // const data = await jadwalSholatModel.getJadwalSholatByDate(year, month);  --- API DOWN

                // DI SINI ADALAH JADWAL SHOLAT SEMUANYA

                // const dataJadwal = data.jadwal;            
                // setjadwalSholatData(dataJadwal);

                

                // TODAY
                // const todayDate = await jadwalSholatModel.getJadwalSholatByToday(year,month,today);                
                // const dataJToday = todayDate.jadwal;
                setjadwalSholatToday(dataTesJadwal);


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
