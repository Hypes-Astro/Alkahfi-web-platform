import axios from "axios";

class SholatController {
  async getSholatToday() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    try {
      const response = await axios.get(
        `https://api.myquran.com/v2/sholat/jadwal/0501/${formattedDate}`
      );

      // console.log("Response:", response.data.data.jadwal);

      return response.data.data.jadwal; // Mengakses response.data
    } catch (error) {
      console.error("Error fetching today's sholat data:", error);
      throw error; // Melempar error untuk ditangani oleh pemanggil
    }
  }

  async getSholatMonth(month) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let selectedMonth;

    if (month === undefined || month === null || month === "") {
      // Jika tidak ada inputan, gunakan bulan saat ini
      selectedMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
    } else {
      selectedMonth = String(month).padStart(2, "0");
    }

    // console.log("Month: ini", selectedMonth); // Tambahkan ini

    try {
      const responseSholat = await axios.get(
        `https://api.myquran.com/v2/sholat/jadwal/0501/${year}/${selectedMonth}`
      );
      return responseSholat.data.data.jadwal;
    } catch (error) {
      console.error("Error fetching month's sholat data:", error);
      throw error;
    }
  }
}

export default SholatController;
