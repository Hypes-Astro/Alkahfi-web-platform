// image
import CharityImg from "../../assets/CharityBox.png";
import ScheduleImg from "../../assets/Calendar.png";
import BookImg from "../../assets/AlQuranBook.png";
// import DoaImg from "../../assets/Chat.png"

import { useState, useEffect } from "react";
import HadisController from "../../Controller/HadisController";

const CardServiceFeature = () => {
  const [randomHadis, setRamdomHadis] = useState(null);
  useEffect(() => {
    fetchHadis();
  }, []);

  const fetchHadis = async () => {
    const dataHadis = new HadisController();
    try {
      const randomHadis = await dataHadis.getRandomHadis();
      setRamdomHadis(randomHadis);
      // const hadis = randomHadis ? randomHadis : "Loading..";
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonClickHadis = () => {
    fetchHadis();
    // console.log(randomHadis);
    document.getElementById("my_modal_5").showModal();
  };
  const perawi = randomHadis ? randomHadis.info.perawi.name : "Loading";
  const noHadis = randomHadis ? randomHadis.data.number : "Loading";
  const arHadis = randomHadis ? randomHadis.data.arab : "Loading";
  const idHadis = randomHadis ? randomHadis.data.id : "Loading";

  return (
    <div className="ContainerFeature w-full flex flex-col p-5 justify-center items-center flex-wrap">
      <h1 className="text-2xl font-bold mb-4">Service</h1>
      <div className="boxervice flex gap-5 justify-center items-center w-full flex-wrap">
        <a href="/comingsoon" className="shadow-sm hover:shadow-lg">
          <div className="card w-44 bg-blue-100 shadow-sm rounded-md flex items-center justify-center py-3">
            <img src={CharityImg} alt="" className="object-cover w-36" />
            <h2 className="text-base bg-base-100 p-1 px-3 rounded-full text-center hover:bg-yellow-50">
              Charity
            </h2>
          </div>
        </a>

        <a href="/SholatSchedule" className="shadow-sm hover:shadow-lg">
          <div className="card w-44 bg-blue-100 shadow-sm rounded-md flex items-center justify-center py-3">
            <img src={ScheduleImg} alt="" className="object-cover w-36" />
            <h2 className="text-base bg-base-100 p-1 px-3 rounded-full text-center hover:bg-yellow-50">
              Sholat Schedule
            </h2>
          </div>
        </a>

        <button
          className="shadow-sm hover:shadow-lg"
          onClick={handleButtonClickHadis}
        >
          <div className="card w-44 bg-blue-100 shadow-sm rounded-md flex items-center justify-center py-3">
            <img src={BookImg} alt="" className="object-cover w-36" />
            <h2 className="text-base bg-base-100 p-1 px-3 rounded-full text-center hover:bg-yellow-50">
              Hadis
            </h2>
          </div>
        </button>
      </div>
      {/* Modal Hadis */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom w-auto sm:modal-middle pets"
      >
        <div className="modal-box">
          <div className="headHadis flex w-full  justify-between items-center">
            <h3 className="font-bold text-lg">Riwayah {perawi}</h3>
            <p>Nomor {noHadis} </p>
          </div>
          <p className="p-4"> {arHadis} </p>
          <p className="py-4">{idHadis}</p>
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
