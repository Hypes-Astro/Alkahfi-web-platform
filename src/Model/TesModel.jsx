class TesJadwal {
  constructor(tahun, bulan, tanggal, kota, negara, metode) {
    this.tahun = tahun;
    this.bulan = bulan;
    this.tanggal = tanggal;
    this.kota = kota;
    this.negara = negara;
    this.metode = metode;
    this.apiUrl = `https://api.aladhan.com/v1/calendarByCity/${this.tahun}/${this.bulan}?city=${this.kota}&country=${this.negara}&method=${this.metode}`;
  }

  async ambilJadwalSholat(year, month) {
    const apiUrl = `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${this.kota}&country=${this.negara}&method=${this.metode}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Terjadi kesalahan dalam mengambil data:', error);
      throw error;
    }
  }

  async ambilJadwalSholatToday() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();

      const dataTanggal = data.data.find(item => item.date.gregorian.day == this.tanggal);
      console.log("model : " + dataTanggal)
      if (dataTanggal) {
        const jadwalSholat = this.hilangkanWIB(dataTanggal.timings);
        console.log(`Jadwal Sholat pada tanggal ${this.tanggal}:`, jadwalSholat);
        return jadwalSholat;
      } else {
        console.log(`Data tidak ditemukan untuk tanggal ${this.tanggal}.`);
        return null;
      }
    } catch (error) {
      console.error('Terjadi kesalahan dalam mengambil data:', error);
      throw error;
    }
  }

  hilangkanWIB(timings) {
    // Menghapus "(WIB)" dari setiap nilai jadwal sholat
    for (const key in timings) {
      timings[key] = timings[key].replace(/\s\(WIB\)/g, '');
    }
    return timings;
  }
}

export default TesJadwal;
