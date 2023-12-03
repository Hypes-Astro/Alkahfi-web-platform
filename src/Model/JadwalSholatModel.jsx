import axios  from "axios";

class JadwalSholatModel {

    // constructor inisialisasi
    constructor(locationId) {
        this.locationId = locationId;
    }

    getJadwalSholatByDate(yearDate,monthDate){
        return axios.get(`https://api.myquran.com/v1/sholat/jadwal/${this.locationId}/${yearDate}/${monthDate}`)
            .then(Response=>Response.data.data)
            .catch(error => {
                console.error('Error fetching jadwal sholat:', error);
                throw error;
            });
    }

    getJadwalSholatByToday(yearDate,monthDate,todayDate){
        return axios.get(`https://api.myquran.com/v1/sholat/jadwal/${this.locationId}/${yearDate}/${monthDate}/${todayDate}`)
            .then(Response=>Response.data.data)
            .catch(error => {
                console.error('Error fetching jadwal sholat:', error);
                throw error;
            });
    }

}


export default JadwalSholatModel;