const TableSholat = () => {
  return (
    <div className="overflow-x-auto w-full flex h-screen flex-col items-center">
      <div className="today-info mb-4 flex flex-col gap-4 justify-centerw-1/2 items-center">
        <p className="text-center my-5">Hari ini, Tanggal</p>
        <div className="searching flex gap-4  w-full justify-center">
          <input
            type="text"
            placeholder="Cari Kota"
            className="border rounded-lg w-1/2 p-1"
          />
          <button>Cari</button>
        </div>
        <table className="table table-zebra table-auto">
          {/* head */}
          <thead>
            <tr className="text-base">
              <th>NO</th>
              <th>Tanggal</th>

              <th>Subuh</th>
              <th>Dhuha</th>
              <th>Dzuhur</th>
              <th>Ashar</th>
              <th>Maghrib</th>
              <th>Isya</th>
            </tr>
          </thead>
          <tbody>
            {/* {currentItems.map((jadwal, index) => (
              <tr key={index}>
                <th>{indexOfFirstItem + index + 1}</th>
                <td>{jadwal.date.readable}</td>

                <td> {HilangkanWib(jadwal.timings.Fajr)} </td>
                <td>{HilangkanWib(jadwal.timings.Sunrise)}</td>
                <td>{HilangkanWib(jadwal.timings.Dhuhr)}</td>
                <td>{HilangkanWib(jadwal.timings.Asr)}</td>
                <td>{HilangkanWib(jadwal.timings.Maghrib)}</td>
                <td>{HilangkanWib(jadwal.timings.Isha)}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>

      <span className="w-full text-center mb-3">Page</span>
      <div className="pagination flex gap-5 w-1/2 align-middle  justify-center">
        <button className="btn btn-sm btn-info">Previous</button>

        <button className="btn btn-sm btn-info">Next</button>
      </div>
    </div>
  );
};

export default TableSholat;
