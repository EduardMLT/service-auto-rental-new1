import React, { useEffect, useState, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';
import { fetchHome } from '../../../api';
import { HomeList } from './CatalogPageList';
import { Loader } from '../../LoaderSpinner/LoaderSpinner';
import Modal from '../../../components/Modal/Modal';

import { FilterDiv, BrandDiv, Container, CatalogPageButton } from './CatalogPage.styled';

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
    const { name, value } = e.target;
    if (!/^\d*$/.test(value) || value.length > 4) {
      setError('Please enter a valid number (up to 4 digits)');
    } else {
      setError('');
      setFilters(prevFilters => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    if (value === '') {
      resetFilterField(name);
    }
  };

  const resetFilterField = fieldName => {
    if (fieldName === 'minMileage' || fieldName === 'maxMileage') {
      setFilters(prevFilters => ({
        ...prevFilters,
        [fieldName]: null,
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [fieldName]: '',
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
    if (!isLastPage) {
      setLoader(true);
    try {
      const nextPageItems = await fetchHome(page + 1, filters);
      console.log({ page }, { nextPageItems });
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
    } 
  };

  // const applyFilters = async () => {
  //   setLoader(true);
  //   try {
  //     const filteredItems = await fetchHome(1, filters);
  //     console.log('CatalogPage - applyFilters ', { filteredItems });
  //     setTrends(filteredItems);
  //     setPage(1);
  //     setIsLastPage(false);
  //   } catch (error) {
  //     toast.error(error);
  //   } finally {
  //     setLoader(false);
  //   }
  // };



  const applyFilters = useCallback(async () => {
    setLoader(true);
    try {
      const minMileageValue =
        filters.minMileage !== '' && filters.minMileage !== null
          ? parseInt(filters.minMileage)
          : null;
      const maxMileageValue =
        filters.maxMileage !== '' && filters.maxMileage !== null
          ? parseInt(filters.maxMileage)
          : null;

      const updatedFilters = {
        ...filters,
        minMileage: minMileageValue,
        maxMileage: maxMileageValue,
      };

      const filteredItems = await fetchHome(1, updatedFilters);
      console.log('CatalogPage - applyFilters ', { filteredItems });
      setTrends(filteredItems);
      setPage(1);
      setIsLastPage(false);
      console.log('CatalogPage - 2 - applyFilters ', { filteredItems });

    } catch (error) {
      toast.error(error);
    } finally {
      setLoader(false);
    }
  }, [filters]);

  useEffect(() => {
    applyFilters();
  }, [filters, applyFilters]);

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
      {loader && <Loader />}

      <FilterDiv>
        <BrandDiv>
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
        </BrandDiv>

        <div>
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
              onBlur={handleBlur}
            />
          </label>
        </div>

        <div>
          <label>
            Min Mileage:
            <input
              type="number"
              name="minMileage"
              value={filters.minMileage}
              onChange={handleChange}
              onBlur={handleBlur}
              pattern="[0-9]*"
              maxLength="4"
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </label>
        </div>

        <div>
          <label>
            Max Mileage:
            <input
              type="number"
              name="maxMileage"
              value={filters.maxMileage}
              onChange={handleChange}
              onBlur={handleBlur}
              pattern="[0-9]*"
              maxLength="4"
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </label>
        </div>

        <button onClick={applyFilters}>Search</button>
      </FilterDiv>

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
    </>
  );
};

export default CatalogPage;