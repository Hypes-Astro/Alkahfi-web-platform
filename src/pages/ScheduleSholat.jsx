import { useEffect, useState } from "react";
import TableSholat from "../components/Schedule/Sholat/TableSholat";
import TesJadwal from "../Model/TesModel";


const ScheduleSholat = () => {
    const [dataJadwalSholat, setdataJadwalSholat] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            let time = new Date();
            let year = time.getFullYear();
           
            let month = time.getMonth() + 1;

            
           // All day  - one
           const jadwalSholat = new TesJadwal(year, month, null, "Bintan", "Indonesia", 2);
            
            
            
            try {
                const data = await jadwalSholat.ambilJadwalSholat(year, month);
                const dataJadwal = data;            
                setdataJadwalSholat(dataJadwal);
                console.log("--- scheduleSholat")
                console.table(dataJadwal); // data masuk
                console.log("--- scheduleSholat")
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
