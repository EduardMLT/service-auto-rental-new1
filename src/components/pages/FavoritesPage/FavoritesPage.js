import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { HomeList } from '../CatalogPage/CatalogPageList';
import { Loader } from '../../LoaderSpinner/LoaderSpinner';
import Modal from '../../Modal/Modal';
import { fetchHome } from '../../../api';

const FavoritesPage = ({ favorites, setFavorites }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [loader, setLoader] = useState(true);
  const [favoriteCars, setFavoriteCars] = useState([]);

  const [filters] = useState({
    id: '',
    make: '',
    price: '',
    minMileage: null,
    maxMileage: null,
    perPage: 32,
  });

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, [setFavorites]);

  useEffect(() => {
    const fetchFavoriteCars = async () => {
      try {
        const fetchedCars = await Promise.all(
          favorites.map(async id => {
            const carData = await fetchHomeById(id);
            
            return carData;
          })
        );
        setFavoriteCars(fetchedCars);
        setLoader(false);
      } catch (error) {
        console.error('Помилка при отриманні даних про улюблені авто:', error);
        setLoader(false);
      }
    };

    fetchFavoriteCars();
    // eslint-disable-next-line
  }, [favorites]);

  const fetchHomeById = async id => {
    try {
      const response = await fetchHome(1, filters);

      const carData = response.find(car => car.id === id);

      return carData;
    } catch (error) {
      console.error('Помилка при отриманні даних про авто:', error);
      throw error;
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

  return (
    <div>
      {loader && <Loader />}

      {favoriteCars.length > 0 ? (
        <div>
          <HomeList
            items={favoriteCars}
            openModal={openModal}
            favorites={favorites}
            setFavorites={setFavorites}
          />

          {modalVisible && (
            <Modal
              item={favoriteCars[selectedItemIndex]}
              closeModal={closeModal}
            />
          )}
          <Toaster position="bottom-center" reverseOrder={true} />
        </div>
      ) : (
        <p>No favorite items found</p>
      )}
    </div>
  );
};

export default FavoritesPage;
