// HomePage.js

import { useEffect, useState } from "react";
import JadwalSholatModel from "../Model/JadwalSholatModel";
import Headline from "../components/Home/Headline";
import Service from "../components/Home/Service";
import { data } from "autoprefixer";



const HomePage = () => {


    const [jadwalSholatData,setjadwalSholatData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const jadwalSholatModel = new JadwalSholatModel('0501');
            let time = new Date();
            let year = time.getFullYear();
           
            let month = time.getMonth() + 1;
            let today = time.getDate();

            try {
                const data = await jadwalSholatModel.getJadwalSholatByDate(year, month);
                console.log("Data Jadwal Sholat:", data.jadwal);

                const dataJadwal = data.jadwal;
                // console.log("jumlah : ",dataJadwal.length, "bulan : ", month ) // ini bisa mendapatkan panjang bisa di otak atik berdasarkan nilai [0]
                console.log("--------");

                
                setjadwalSholatData(dataJadwal);
                console.log("ini isi setJadwal  : ",jadwalSholatData)
                
                console.table(jadwalSholatData)


                const todayDate = await jadwalSholatModel.getJadwalSholatByToday(year,month,today);
                let jamSholat = todayDate.jadwal.subuh; 
                // if(jamSholat > data.jadwal[0].terbit){
                //     alert("waktu shubuh")
                // }else{
                //     alert("Waktu bukan shubuh")
                // }
                
                

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
            <Headline dataJadwalSholat={jadwalSholatData} />
            <Service />
        </>
    );
}

export default HomePage;
