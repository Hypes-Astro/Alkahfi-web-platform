import axios from "axios";

class HadisModel {
    // constructor inisialisasi
    constructor(names) {
        this.names = names;
    }
    

    getHadis(){
        return axios.get(`https://api.hadith.gading.dev/books/`)
            .then(Response=>Response.data.data)
            .catch(error => {
                console.error('Error fetching Hadis:', error);
                throw error;
            });
    }

    getOneHadis(names,nomor){
        return axios.get(`https://api.hadith.gading.dev/books/${names}/${nomor}`)
            .then(Response=>Response.data.data)
            .catch(error => {
                console.error('Error fetching Hadis:', error);
                throw error;
            });
    }
}

export default HadisModel;