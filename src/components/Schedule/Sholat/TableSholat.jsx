import  { useState } from 'react';

const TableSholat = ({ jadwalSholat }) => {

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jadwalSholat.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(jadwalSholat.length / itemsPerPage);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const HilangkanWib = (timing) => {
    return timing.replace(/\s\(WIB\)/g,'');
  }


  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('id-ID', options);

  // -

  return (
    <div className="overflow-x-auto w-full flex h-screen flex-col items-center">
      <div className="today-info mb-4 ">
        <p className='text-center my-5'>Hari ini, {formattedDate}</p>    
        <table className="table table-zebra table-auto">
          {/* head */}
          <thead>
            <tr>
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
            {currentItems.map((jadwal, index) => (
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
            ))}
          </tbody>
        </table>
      </div>

      <span className='w-full text-center mb-3' >{`Page ${currentPage} of ${totalPages}`}</span>
      <div className="pagination flex gap-5 w-1/2 align-middle  justify-center">
        <button className='btn btn-sm btn-info'
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        

        <button
          className='btn btn-sm btn-info'
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// TableSholat.propTypes = {
//   jadwalSholat: PropTypes
// }

export default TableSholat;
