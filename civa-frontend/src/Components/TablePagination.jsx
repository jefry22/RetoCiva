
import React, { useEffect, useState } from 'react'
import api from '../services/api'
import {Table,Pagination} from 'react-bootstrap';

export const TablePagination = () => {
  const [buses,setBuses] = useState([]);
  const [currentPage,setCurrentPage] = useState(0);
  const [totalPages,setTotalPages]=useState(0);
  const [searchId ,setSearchId] = useState("");
  const pageSize = 4;


  useEffect(()=>{
    if(searchId.trim()===""){
      loadBuses(currentPage);
    }
  },[currentPage,searchId])

  const loadBuses= async(page)=>{
    try {
      const result = await api.get(`/bus?page=${page}&size=${pageSize}`);
      setBuses(result.data.content)
      setTotalPages(result.data.totalPage);
    } catch (error) {
      console.error('Error al carga los datos',error);
    }
  };
  
  const searchBusById = async () => {
    if(!searchId.trim()){
      setCurrentPage(0);
      loadBuses(0);
      return;
    }
    try {
      const result = await api.get(`/bus/${searchId}`);
      setBuses([result.data]);
      setTotalPages(1);
    } catch (error) {
      console.log("No se encontro datos",error);
      setBuses([]);
      setTotalPages(0);
    }
  }

  const handlePageChange = (page)=>{
    setCurrentPage(page);
  };

  return (
    <div className=" w-full px-10">
      <h2 className="table-title pb-8 text-2xl text-purple-800 font-semibold ">Lista de Buses</h2>
      {/* Buscador */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Buscar por ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border p-2 rounded-md w-1/3 mr-2"
        />
        <button
          onClick={searchBusById}
          className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Buscar
        </button>
      </div>
      <Table striped bordered hover  className="text-white overflow-hidden w-[60%]">
        <thead className='bg-gradient-to-r from-[#582884] to-[#EC1E7A]'>
          <tr>
            <th className='border-2 border-black text-center'>ID</th>
            <th className='border-2 border-black text-center'>NumeroBus</th>
            <th className='border-2 border-black text-center'>Placa</th>
            <th className='border-2 border-black text-center'>Caracteristica</th>
            <th className='border-2 border-black text-center'>Marca</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((item) => (
            <tr key={item.id}>
              <td className='border text-black p-2'>{item.id}</td>
              <td className='border text-black p-2'>{item.numeroBus}</td>
              <td className='border text-black p-2'>{item.placa}</td>
              <td className='border text-black p-2'>{item.caracteristica}</td>
              <td className='border text-black p-2'>{item.marca.nombre}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Paginación */}
      <Pagination className="flex  items-center space-x-2 mt-6">
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
           className={`px-4 py-2 rounded-lg border border-gray-300 transition-all duration-300
            ${currentPage === 0 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"}`}
            
            >
        </Pagination.Prev>
        
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index}
            active={index === currentPage}
            onClick={() => handlePageChange(index)}
            className={`px-4 py-2 rounded-lg transition-all duration-300
        ${
          index === currentPage
            ? "bg-purple-800 text-white font-bold"
            : "bg-gray-200 text-gray-700 hover:bg-blue-300"
        }`}
          >
            {index + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 rounded-lg border border-gray-300 transition-all duration-300
      ${currentPage === totalPages - 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"}`}
        />
      </Pagination>
    </div>
  )
}

