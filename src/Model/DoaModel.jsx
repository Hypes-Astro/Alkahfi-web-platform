import axios from "axios";

class DoaModel {
   
    getOneDoa(id){
        return axios.get(`https://equran.id/_next/data/-DQjvVhEdPzOMpe_2Gu7R/doa/${id}.json?doa=${id}`)
            .then(response => {
                return (response.data.pageProps);
            })
            .catch(error => {
                console.error('Error fetching Doa:', error);
                throw error;
            });
    }
}

export default DoaModel;