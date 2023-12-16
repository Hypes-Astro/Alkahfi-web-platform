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

  // -

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('id-ID', options);

  // -

  return (
    <div className="overflow-x-auto w-full flex h-screen flex-col items-center">
      <div className="today-info mb-4">
        <p className='text-center'>Hari ini, {formattedDate}</p>  
      
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Tanggal</th>
              <th>Imsak</th>
              <th>Subuh</th>
              <th>Terbit</th>
              <th>Dhuha</th>
              <th>Dzuhur</th>
              <th>Ashar</th>
              <th>Maghrib</th>
              <th>Isya</th>
              {/* Tambahkan kolom untuk dzuhur, ashar, maghrib, isya jika diperlukan */}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((jadwal, index) => (
              <tr key={index}>
                <th>{indexOfFirstItem + index + 1}</th>
                <td>{jadwal.tanggal}</td>
                <td>{jadwal.imsak}</td>
                <td>{jadwal.subuh}</td>
                <td>{jadwal.terbit}</td>
                <td>{jadwal.dhuha}</td>
                <td>{jadwal.dzuhur}</td>
                <td>{jadwal.ashar}</td>
                <td>{jadwal.maghrib}</td>
                <td>{jadwal.isya}</td>
                {/* Tambahkan kolom untuk dzuhur, ashar, maghrib, isya jika diperlukan */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
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
