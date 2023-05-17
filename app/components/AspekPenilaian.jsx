'use client';
import React, { useState } from 'react';

export default function AspekPenilaian() {
  const [penilaian, setPenilaian] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const handlePenilaianChange = (index, nilai) => {
    const updatedPenilaian = [...penilaian];
    updatedPenilaian[index] = nilai;
    setPenilaian(updatedPenilaian);
  };

  const handleSimpan = () => {
    const output = {};

    for (let j = 0; j < 4; j++) {
      const aspek = `aspek_penilaian_${j + 1}`;
      output[aspek] = {};

      for (let i = 0; i < 10; i++) {
        const mahasiswa = `mahasiswa_${i + 1}`;
        const nilai = penilaian[i * 4 + j] || 0;
        output[aspek][mahasiswa] = nilai;
      }
    }

    console.log(JSON.stringify(output));
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  return (
    <div>
      <table className="border-collapse border border-gray-500">
        {' '}
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-4">Nama Mahasiswa</th>
            <th className="border border-gray-500 px-4 py-2">Aspek Penilaian 1</th>
            <th className="border border-gray-500 px-4 py-2">Aspek Penilaian 2</th>
            <th className="border border-gray-500 px-4 py-2">Aspek Penilaian 3</th>
            <th className="border border-gray-500 px-4 py-2">Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, mahasiswaIndex) => (
            <tr key={mahasiswaIndex + 1}>
              <td className="border border-gray-500 px-4 py-2">Mahasiswa {mahasiswaIndex + 1}</td>
              {[...Array(4)].map((_, aspekIndex) => (
                <td key={aspekIndex + 1} className="border border-gray-500 px-4 py-2">
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="w-full shadow-md p-2 text-center"
                    value={penilaian[mahasiswaIndex * 4 + aspekIndex] || ''}
                    onChange={(e) => handlePenilaianChange(mahasiswaIndex * 4 + aspekIndex, parseInt(e.target.value))}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bagian notifikasi */}
      {isSaved && <div className="bg-green-500 text-white rounded p-2 mt-4">Data telah disimpan.</div>}

      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700" onClick={handleSimpan}>
          Simpan
        </button>
      </div>
    </div>
  );
}
