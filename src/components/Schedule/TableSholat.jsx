import { useEffect, useState } from "react";
import SholatController from "../../Controller/SholatController";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const formattedDate = `${day}-${month}-${year}`;

const TableSholat = () => {
  const [sholatData, setSholatData] = useState([]);
  const [inputMonth, setInputMonth] = useState(month); // defaultnya adalah bulan saat ini

  const handleMonthInputChange = (event) => {
    const selectedMonth = event.target.value;
    const monthValue = selectedMonth.split("-")[1]; // Ambil bagian bulan dari nilai input
    setInputMonth(monthValue);
  };

  useEffect(() => {
    fetchSholatMonth();
  }, [inputMonth]);

  const fetchSholatMonth = async () => {
    const sholatController = new SholatController();

    try {
      const response = await sholatController.getSholatMonth(inputMonth);
      setSholatData(response);

      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return (
    <div className=" w-full flex h-full justify-center items-center">
      <div className="mb-4 flex flex-col gap-4 items-center">
        <p className="text-center my-5">Hari ini, {formattedDate} </p>
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <label>Pilih Bulan</label>
          <input
            type="month"
            className="border rounded-lg w-1/2 sm:w-1/4 p-1 px-3 text-center"
            value={inputMonth}
            onChange={handleMonthInputChange}
            onFocus={(e) => {
              e.target.type = "month";
            }}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.type = "text";
                e.target.placeholder = inputMonth
                  ? `Bulan, ${monthNames[parseInt(inputMonth) - 1]}`
                  : "Pilih Bulan";
              }
            }}
          />
        </div>
        <div className="w-screen px-3 sm:w-full overflow-auto">
          <table className="min-w-max table table-auto table-sm  table-zebra table-pin-rows table-pin-cols">
            {/* head */}
            <thead className="bg-yellow-200">
              <tr className="text-base">
                <th>NO</th>
                <th>Tanggal</th>
                <th>Imsak</th>
                <th>Subuh</th>
                <th>Terbit</th>
                <th>Dhuha</th>
                <th>Dzuhur</th>
                <th>Ashar</th>
                <th>Maghrib</th>
                <th>Isya</th>
              </tr>
            </thead>
            <tbody className="">
              {sholatData.map((jadwal, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{jadwal.tanggal}</td>
                  <td>{jadwal.imsak}</td>
                  <td>{jadwal.subuh}</td>
                  <td>{jadwal.terbit}</td>
                  <td>{jadwal.dhuha}</td>
                  <td>{jadwal.dzuhur}</td>
                  <td>{jadwal.ashar}</td>
                  <td>{jadwal.maghrib}</td>
                  <td>{jadwal.isya}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSholat;
