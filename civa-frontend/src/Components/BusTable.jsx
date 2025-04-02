import React from 'react'
import { Table } from 'react-bootstrap'

export const BusTable = ({buses}) => {
console.log(buses)
  return (
  <div className='overflow-x-auto w-full'>
    <Table striped bordered hover className="text-white min-w-full">
      <thead className="bg-gradient-to-r from-[#582884] to-[#EC1E7A]">
        <tr>
          <th className="border-2 border-black text-center">ID</th>
          <th className="border-2 border-black text-center">Número de Bus</th>
          <th className="border-2 border-black text-center">Placa</th>
          <th className="border-2 border-black text-center">Características</th>
          <th className="border-2 border-black text-center">Estado</th>
          <th className="border-2 border-black text-center">Marca</th>
        </tr>
      </thead>
      <tbody>
        {buses.map((item) => (
          <tr key={item.id}>
            <td className="border text-black p-2">{item.id}</td>
            <td className="border text-black p-2">{item.numeroBus}</td>
            <td className="border text-black p-2">{item.placa}</td>
            <td className="border text-black p-2">{item.caracteristica}</td>
            <td className='border text-black p-2'>
            {item.activo?(
            <p className="font-semibold w-2 h-2 bg-green-500 rounded-3xl"></p>
              ) : (
            <p className="font-semibold w-2 h-2 bg-red-500 rounded-3xl"></p>
            )}
            </td>
            <td className="border text-black p-2">{item.marca.nombre}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
    
  )
}
