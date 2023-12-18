import DoaModel from "../../Model/DoaModel";
import HadisModel from "../../Model/HadisModel";
import { useEffect, useState } from "react";

// image
import CharityImg from "../../assets/CharityBox.png"
import ScheduleImg from "../../assets/Calendar.png"
import BookImg from "../../assets/AlQuranBook.png"
import DoaImg from "../../assets/Chat.png"

const CardServiceFeature = () => {
  const [oneHadis, setOneHadis] = useState(null);
  const [oneDoa, setOneDoa] = useState(null);

    const fetchHadis = async () => {
      try {
        // Mendapatkan data semua hadis
        const hadisModel = new HadisModel();
        const allHadis = await hadisModel.getHadis();
  
        const randomPerawi = Math.floor(Math.random() * allHadis.length);
  
        const randomId = allHadis[randomPerawi].id;
  
        // Mendapatkan panjang (available) untuk ID yang terpilih
        const randomLength = allHadis[randomPerawi].available;
  
        // Membuat objek hadisModel dengan randomId
        const hadisModelWithRandomId = new HadisModel(randomId);
  
        // Mendapatkan nomorHadis secara acak
        const nomorHadis = Math.floor(Math.random() * randomLength);
  
        // Mengambil data hadis dengan randomId dan nomorHadis
        const oneHadis = await hadisModelWithRandomId.getOneHadis(randomId, nomorHadis);
  
        setOneHadis(oneHadis);
      } catch (error) {
        console.error("Error fetching Hadis:", error);
        console.error(error.response);
      }
    };
    
  

    useEffect(() => {
      fetchHadis();
      fetchDoa();
    }, []);

    

    const fetchDoa = async () => {
      try {
        const doaModel = new DoaModel();
        

        const randomId = Math.floor(Math.random() * 227);

        const oneDoa = await doaModel.getOneDoa(randomId);
        // const getNamaDoa = oneDoa.data1.nama;
        // const getArabicDoa = oneDoa.data1.ar;
        // const getIdnDoa = oneDoa.data1.idn

        setOneDoa(oneDoa)

        // console.log(oneDoa)
        // console.log(oneDoa.data1.id + " " + getNamaDoa + " " + getArabicDoa + " " + getIdnDoa  );
      } catch (error) {
        console.error("Error fetching Doa:", error);
        console.error(error.response);
      }
    };

    const handleButtonClickHadis = () => {
      fetchHadis();
      document.getElementById('my_modal_5').showModal();
      console.log( "update = "+ oneHadis)
    };

    const onClickDoa = () => {
      fetchDoa();
      document.getElementById('my_modal_6').showModal();
      console.log( "update = "+ oneDoa)
    };

  

  return (
    <div className="ContainerFeature w-full flex flex-col p-5 justify-center items-center flex-wrap">
      <h1 className="text-2xl font-bold mb-4" >Service</h1>
      <div className="boxervice flex gap-5 justify-center items-center w-full flex-wrap">
        <a href="/comingsoon" className="shadow-sm hover:shadow-lg" >
          <div className="card w-44 bg-blue-100 shadow-sm rounded-md flex items-center justify-center py-3">
            <img src={CharityImg} alt="" className="object-cover w-36" />
            <h2 className="text-base bg-base-100 p-1 px-3 rounded-full text-center hover:bg-yellow-50">Charity</h2>
          </div>
        </a>

        <a href="/SholatSchedule" className="shadow-sm hover:shadow-lg" >
          <div className="card w-44 bg-blue-100 shadow-sm rounded-md flex items-center justify-center py-3">
            <img src={ScheduleImg} alt="" className="object-cover w-36" />
            <h2 className="text-base bg-base-100 p-1 px-3 rounded-full text-center hover:bg-yellow-50">Sholat Schedule</h2>
          </div>
        </a>

        <button className="shadow-sm hover:shadow-lg"  onClick={handleButtonClickHadis}>
          <div className="card w-44 bg-blue-100 shadow-sm rounded-md flex items-center justify-center py-3">
            <img src={BookImg} alt="" className="object-cover w-36" />
            <h2 className="text-base bg-base-100 p-1 px-3 rounded-full text-center hover:bg-yellow-50">Hadis</h2>
          </div>
        </button>

        <button className="shadow-sm hover:shadow-lg"  onClick={onClickDoa}>
          <div className="card w-44 bg-blue-100 shadow-sm rounded-md flex items-center justify-center py-3">
            <img src={DoaImg} alt="" className="object-cover w-36" />
            <h2 className="text-base bg-base-100 p-1 px-3 rounded-full text-center hover:bg-yellow-50">Prayer compilation</h2>
          </div>
        </button>
        
      </div>
      {/* Modal Hadis */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle pets">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{oneHadis?.name || ""}</h3>
          <p className="py-4">{oneHadis?.contents?.id || ""}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in the form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Modal Doa pendek */}
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle pets">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">{oneDoa?.data1?.nama || ""}</h3>
          <p className="py-4 font-bold text-md ">بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
          <p className="py-4">{oneDoa?.data1?.ar || ""}</p>
          <p className="py-4">{oneDoa?.data1?.idn || ""}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in the form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CardServiceFeature;
