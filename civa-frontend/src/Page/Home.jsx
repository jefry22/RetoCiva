import React, { useEffect, useState, useCallback } from 'react';
import api from '../services/api';
import { BusTable } from '../Components/BusTable';
import PaginationControls from '../Components/PaginationControls';
import SearchBar from '../Components/SearchBar';

export const Home = () => {
  const [buses, setBuses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchId, setSearchId] = useState('');
  const pageSize = 4;

  const loadBuses = useCallback(async (page) => {
    try {
      const result = await api.get(`/bus?page=${page}&size=${pageSize}`);
      setBuses(result.data.content);
      setTotalPages(result.data.totalPage);
    } catch (error) {
      console.error('Error al cargar los datos', error);
    }
  }, []);

  const searchBusById = useCallback(async () => {
    if (!searchId.trim()) {
      setCurrentPage(0);
      loadBuses(0);
      return;
    }
    try {
      const result = await api.get(`/bus/${searchId}`);
      setBuses([result.data]);
      setTotalPages(1);
    } catch (error) {
      console.log('No se encontró el bus', error);
      setBuses([]);
      setTotalPages(0);
    }
  }, [searchId, loadBuses]);

  useEffect(() => {
    if (searchId.trim() === '') {
      loadBuses(currentPage);
    }
  }, [currentPage, searchId, loadBuses]);

  return (
    <div className="w-full px-10">
      <h2 className="table-title pb-8 text-2xl text-purple-800 font-semibold">Lista de Buses</h2>
      <SearchBar searchId={searchId} setSearchId={setSearchId} searchBusById={searchBusById} />
      <BusTable buses={buses} />
      <PaginationControls currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}
export default Home;