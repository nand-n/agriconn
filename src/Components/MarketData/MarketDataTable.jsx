import { saveAs } from 'file-saver';
import { useState } from 'react';
import XLSX from 'xlsx';

function MarketDataTable() {
  const [data, setData] = useState([]);

  // Load data from Excel file
  const loadData = async () => {
    try {
      const file = await fetch('./marketdata.xlsx');
      const fileData = await file.arrayBuffer();
      const wb = XLSX.read(fileData, { type: 'buffer' });
      const ws = wb.Sheets['Sheet1'];
      const jsonData = XLSX.utils.sheet_to_json(ws);
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  // Download Excel file
  const downloadData = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    saveAs(blob, 'marketdata.xlsx');
  };

  // Convert string to ArrayBuffer
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  };

  return (
    <div className='absolute top-[99px] left-4 z-60'>
      <button className='z' onClick={loadData}>Load Data</button>
      <button onClick={downloadData}>Download Data</button>
      <table className="table-fixed w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/4 px-4 py-2">Grain</th>
            <th className="w-1/4 px-4 py-2">Variety</th>
            <th className="w-1/4 px-4 py-2">Current Price</th>
            <th className="w-1/4 px-4 py-2">Date</th>
            <th className="w-1/4 px-4 py-2">Increase by</th>
            <th className="w-1/4 px-4 py-2">Decrease by</th>
            <th className="w-1/4 px-4 py-2">Quality</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.Grain}</td>
              <td className="border px-4 py-2">{item.Variety}</td>
              <td className="border px-4 py-2">{item['Current Price']}</td>
              <td className="border px-4 py-2">{item.Date}</td>
              <td className="border px-4 py-2">{item['Increase by'] || 0}</td>
              <td className="border px-4 py-2">{item['Decrease by'] || 0}</td>
              <td className="border px-4 py-2">{item.Quality || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarketDataTable