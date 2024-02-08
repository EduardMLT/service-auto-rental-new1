import React, { useEffect, useState, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Select from 'react-select';
// import { nanoid } from 'nanoid';



import { fetchHome } from '../../../api';
import { HomeList } from './CatalogPageList';
import { Loader } from '../../LoaderSpinner/LoaderSpinner';

import Modal from '../../../components/Modal/Modal';

const CatalogPage = () => {
  const [trends, setTrends] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [filters, setFilters] = useState({
    make: '',
    price: '',
    minMileage: null,
    maxMileage: null,
    perPage: 12,
  });

  
  const [makesArray] = useState([
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ]);
    
  const [selectedMake, setSelectedMake] = useState(null);  

  const formattedOptions = makesArray => {
    return makesArray.map(make => ({ value: make, label: make }));
  };

  const handleMakeChange = selectedOption => {
    console.log('Selected value:', selectedOption);
    setSelectedMake(selectedOption ? selectedOption.value : null);
    setFilters(prevFilters => ({
      ...prevFilters,
      make: selectedOption ? selectedOption.value : '',
    }));
  };

  const openModal = index => {
    setModalVisible(true);
    setSelectedItemIndex(index);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItemIndex(null);
  };

  const loadMore = async () => {
    setLoader(true);
    try {
      const nextPageItems = await fetchHome(page + 1, filters);
      if (nextPageItems.length === 0) {
        setIsLastPage(true);
      } else {
        setTrends(prevItems => [...prevItems, ...nextPageItems]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoader(false);
    }
  };

  const applyFilters = async () => {
    setLoader(true);
    try {
      const filteredItems = await fetchHome(1, filters);
      setTrends(filteredItems);
      setPage(1);
      setIsLastPage(false);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoader(false);
    }
  };

  const getMovies = useCallback(async () => {
    setLoader(true);
    try {
      console.log('getMovies - filters ', { filters });
      const movies = await fetchHome(1, filters);
      if (movies.length === 0) {
        console.log('1.1 -getMovies  ');
        setIsLastPage(true);
      } else {
        console.log('1.2 -getMovies  ');
        setTrends(movies);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoader(false);
    }
  }, [setLoader, setIsLastPage, setTrends, filters]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      {loader && <Loader />}
      
      <div>       
        
        <div>
          <label htmlFor="makeSelect">Car Brand:</label>
          <Select
            id="makeSelect"
            options={formattedOptions(makesArray)}
            value={formattedOptions(makesArray).find(
              option => option.value === selectedMake
            )}
            onChange={handleMakeChange}
            isClearable={true}
            isSearchable={true}
            placeholder="Select Car Brand"
          />
          
        </div>

        {console.log('make', filters)}
        <label>
          Price:
          <input
            type="text"
            value={filters.price}
            onChange={e =>
              setFilters(prevFilters => ({
                ...prevFilters,
                price: e.target.value,
              }))
            }
          />
        </label>
        <label>
          Min Mileage:
          <input
            type="number"
            value={filters.minMileage}
            onChange={e =>
              setFilters(prevFilters => ({
                ...prevFilters,
                minMileage: e.target.value,
              }))
            }
          />
        </label>
        <label>
          Max Mileage:
          <input
            type="number"
            value={filters.maxMileage}
            onChange={e =>
              setFilters(prevFilters => ({
                ...prevFilters,
                maxMileage: e.target.value,
              }))
            }
          />
        </label>
        <button onClick={applyFilters}>Search</button>
      </div>

      <HomeList items={trends} openModal={openModal} />
      {!isLastPage && <button onClick={loadMore}>Load More</button>}
      {isLastPage && <p>This is the entire catalog.</p>}
      {modalVisible && (
        <Modal item={trends[selectedItemIndex]} closeModal={closeModal} />
      )}
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};

export default CatalogPage;
