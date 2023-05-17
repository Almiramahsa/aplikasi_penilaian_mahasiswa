import React from 'react';

const Mahasiswa = ({ aspek, mahasiswa, onChange, nilaiRange = [1, 10] }) => {
  const handleNilaiChange = (e) => {
    let nilai = parseInt(e.target.value);
    if (isNaN(nilai)) {
      nilai = 0;
    } else if (nilai < nilaiRange[0]) {
      nilai = nilaiRange[0];
    } else if (nilai > nilaiRange[1]) {
      nilai = nilaiRange[1];
    }
    onChange(aspek, mahasiswa, nilai);
  };

  return (
    <div>
      <tr>
        <td>
          <input type="number" min={1} max={10} onChange={handleNilaiChange} />
        </td>
      </tr>
    </div>
  );
};

export default Mahasiswa;
