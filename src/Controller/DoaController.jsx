import axios from "axios";

class DoaController {
  getOneDoa() {
    const id = 1;
    return axios
      .get(
        `https://equran.id/_next/data/-rzMhOQo6DZUVoMymW3iZO/doa/${id}.json?doa=${id}`
      )
      .then((response) => {
        console.log("Response:", response.data.pageProps.doaDetail);
        return response.data.pageProps.doaDetail; // Mengakses response.data
      });
  }
}

export default DoaController;
