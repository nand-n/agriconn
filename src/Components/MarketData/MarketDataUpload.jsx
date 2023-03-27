import React, { useState , useRef } from 'react'
import exit from '../../assets/Agri-Connect/usericn.png'
import { motion } from 'framer-motion'
import XLSX from 'xlsx'

function MarketDataUpload() {
  const [file,setFile] =useState(null)
  const [filename, setFileName] = useState(null)

  const[sheetData , setSheetData] = useState([])

  const[sheetNames , setSheetNames] = useState([])
  const fileRef = useRef();

  const aceptableFileName = ['xlsx', 'xls']
  const checkFileName = (name) => {
    return aceptableFileName.includes(name.split('.').pop().toLowerCase());
  }
  const readDataFromExel = (data) => {
     const wb = XLSX.read(data, { type: 'buffer' });
    setSheetNames(wb.sheetNames)

    var mySheetData = {}
    //Loop Through the Sheets
    for (var i = 0; i < wb.SheetNames.length; i++){
      let sheetName = wb.SheetNames[i]
      
      const ws = wb.Sheets[sheetName]
      const jsonData = XLSX.utils.sheet_to_json(ws)
      mySheetData[sheetName] = jsonData
    }
    setSheetData()
    //Assign Data From Sheet into Objects


  }
  const handleFile = async(e) => {
    const myFile = e.target.files[0];
    if (!myFile) return

    if (!checkFileName(myFile.name)) {
      alert("Invalid File Type");
      return;
    }

    //Read the Exel File 
    const data = await myFile.arrayBuffer();
   
    readDataFromExel(data)
    // console.log(wb)
    setFile(myFile)
    setFileName(myFile.name)
  }

  const handleRemove = () => {
    setFile(null)
    setFileName(null)
    fileRef.current.value = '';
  }
  return (

    <div className='mt-[99px] '>
      <div className="grid justify-center mt-10">
        { filename && 
        <h1 className=' mt-10 '> File Name : { filename } </h1>
      }
      {!filename && 
          <h1 className='text-red-500 mt-10 '>Please Upload The File!!</h1>
      }
        <div className="flex mt-10 mb-10">
           <input
        type="file"
        accept='xlsx, xls'
        multiple={false}
            onChange={(e) => handleFile(e)}
            ref={fileRef}
      />
      {filename && 
        <motion.button
         whileHover={{ scale: 1.1 }}
          whileTap={ {scale:0.9}}
          onClick={ handleRemove}
              className=" btn inline-flex space-x-5 items-center justify-start ml-5 "
              
        >
         <img src={ exit} alt='remove'/>
        </motion.button>
      }
     </div>
       </div>
    </div>
  )
}

export default MarketDataUpload