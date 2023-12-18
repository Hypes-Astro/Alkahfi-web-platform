// HomePage.js

import { useEffect, useState } from "react";
import JadwalSholatModel from "../Model/JadwalSholatModel";
import Headline from "../components/Home/Headline";
import TesJadwal from "../Model/TesModel";
import CardServiceFeature from "../components/Home/CardServiceFeature";



const HomePage = () => {


    const [jadwalSholatData,setjadwalSholatData] = useState(null);
    const [jadwalSholatToday,setjadwalSholatToday] = useState(null);
    

    // jadwal Sholat
    useEffect(() => {
        const fetchData = async () => {
            let time = new Date();
            let year = time.getFullYear();
           
            let month = time.getMonth() + 1;
            let today = time.getDate();

            // TODAY
            const tesJadwalToday = new TesJadwal(year, month, today, "Bintan", "Indonesia", 2);
            const dataTesJadwalToday = await tesJadwalToday.ambilJadwalSholatToday();
            console.log(dataTesJadwalToday)
            console.log("-----------")



            // const jadwalSholatModel = new JadwalSholatModel('0501'); --- API DOWN

            try {
                // const data = await jadwalSholatModel.getJadwalSholatByDate(year, month);  --- API DOWN

                // DI SINI ADALAH JADWAL SHOLAT SEMUANYA

                // const dataJadwal = data.jadwal;            
                // setjadwalSholatData(dataJadwal);

                

                // TODAY
                // const todayDate = await jadwalSholatModel.getJadwalSholatByToday(year,month,today);                
                // const dataJToday = todayDate.jadwal;
                setjadwalSholatToday(dataTesJadwalToday);
            } catch (error) {
                console.error("Error fetching Jadwal Sholat:", error);
            }
        };

        fetchData();
    }, []);


    return (
    <>
        {jadwalSholatToday && <Headline dataJadwalSholat={jadwalSholatToday} />}
        <CardServiceFeature/>
        
    </>
);

}

export default HomePage;
