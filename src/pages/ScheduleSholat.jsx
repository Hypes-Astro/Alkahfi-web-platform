import { useEffect, useState } from "react";
import TableSholat from "../components/Schedule/Sholat/TableSholat";
import JadwalSholatModel from "../Model/JadwalSholatModel"; 

const ScheduleSholat = () => {
    const [dataJadwalSholat, setdataJadwalSholat] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const jadwalSholatModel = new JadwalSholatModel('0501');

            let time = new Date();
            let year = time.getFullYear();
            let month = time.getMonth() + 1;

            try {
                const data = await jadwalSholatModel.getJadwalSholatByDate(year, month);
                const dataJadwal = data.jadwal;            
                setdataJadwalSholat(dataJadwal);
                console.table(dataJadwal); // Pindahkan ini ke dalam useEffect
            } catch (error) {
                console.error("Error fetching Jadwal Sholat:", error);
            }
        };

        fetchData();
    }, []); // Dependencies dihapus karena tidak ada dependency yang diperlukan

    // Tambahkan pengecekan agar tidak memanggil console.table ketika dataJadwalSholat null
    if (!dataJadwalSholat) {
        return <p className="text-center">Loading...</p>; // Atau tampilkan pesan lain yang sesuai
    }

    return (
        <TableSholat jadwalSholat={dataJadwalSholat} />
    );
}

export default ScheduleSholat;
