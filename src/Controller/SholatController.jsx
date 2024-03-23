import axios from "axios";

class SholatController {
  async getSholatToday() {
    try {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      const response = await axios.get(
        `https://api.myquran.com/v2/sholat/jadwal/0501/${formattedDate}`
      );

      console.log("Response:", response.data.data.jadwal);

      return response.data.data.jadwal; // Mengakses response.data
    } catch (error) {
      console.error("Error fetching today's sholat data:", error);
      throw error; // Melempar error untuk ditangani oleh pemanggil
    }
  }
}

export default SholatController;
