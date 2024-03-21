// image
import CharityImg from "../../assets/CharityBox.png";
import ScheduleImg from "../../assets/Calendar.png";
import BookImg from "../../assets/AlQuranBook.png";
// import DoaImg from "../../assets/Chat.png"

const CardServiceFeature = () => {
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

        <button className="shadow-sm hover:shadow-lg">
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
        className="modal modal-bottom sm:modal-middle pets"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Nama hadis</h3>
          <p className="py-4">Isi Hadis</p>
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
