import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';
import { fetchHome } from '../../../api';
import { HomeList } from './CatalogPageList';
import { Loader } from '../../LoaderSpinner/LoaderSpinner';
import { GlobalStyle } from '../../GlobalStyle';
import Modal from '../../../components/Modal/Modal';

import { Container, CatalogPageButton } from './CatalogPage.styled';

const CatalogPage = ({ favorites, setFavorites }) => {  

  const [trends, setTrends] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [filters, setFilters] = useState({
    id: '',
    make: '',
    price: '',
    minMileage: null,
    maxMileage: null,
    perPage: 12,
  });

  const [error, setError] = useState('');

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
    'Kia',
    'Land Rover',
  ]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, [setFavorites]);

  const [selectedMake, setSelectedMake] = useState(null);

  const formattedOptions = makesArray => {
    return makesArray.map(make => ({ value: make, label: make }));
  };

  const handleMakeChange = selectedOption => {
    setSelectedMake(selectedOption ? selectedOption.value : null);
    setFilters(prevFilters => ({
      ...prevFilters,
      make: selectedOption ? selectedOption.value : '',
    }));
    setTrends([]);
  };

  const handleChange = e => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      setError('Please enter a valid number');
    } else {
      setError('');
      setFilters(prevFilters => ({
        ...prevFilters,
        minMileage: value,
      }));
    }
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
      console.log('CatalogPage - applyFilters ', { filteredItems });
      setTrends(filteredItems);
      setPage(1);
      setIsLastPage(false);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, [filters]);

  return (
    <>
      <div>
        <GlobalStyle />
        {loader && <Loader />}

        <div>
          <div>
            <label htmlFor="makeSelect">
              Car Brand:
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
            </label>
          </div>

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
              onChange={handleChange}
              min="0"
              max="9999"
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </label>
          {error && <div style={{ color: 'red' }}>{error}</div>}
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
              pattern="[0-9]*"
              maxLength="4"
            />
          </label>
          <button onClick={applyFilters}>Search</button>
        </div>

        <Container>
          <HomeList
            items={trends}
            openModal={openModal}
            favorites={favorites}
            setFavorites={setFavorites}
          />
          {!isLastPage && (
            <CatalogPageButton onClick={loadMore}>Load More</CatalogPageButton>
          )}
          {isLastPage && <p>This is the entire catalog.</p>}

          {modalVisible && (
            <Modal item={trends[selectedItemIndex]} closeModal={closeModal} />
          )}
          <Toaster position="bottom-center" reverseOrder={true} />
        </Container>
      </div>
    </>
  );
};

export default CatalogPage;