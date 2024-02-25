import axios from 'axios';

axios.defaults.baseURL = 'https://6574665df941bda3f2afb2f5.mockapi.io/api/v1/';

export const fetchHome = async (page = 1, filters) => {
  try {
    const response = await axios.get('/data-auto');
    
    let filteredCars = response.data;
   
    if (filters.make !== '') {
      
      filteredCars = filteredCars.filter(car => car.make === filters.make);
      
    }

    if (filters.price !== '') {
      filteredCars = filteredCars.filter(car => {
        const rentalPriceNumeric = parseInt(
          car.rentalPrice.replace(/\D/g, ''),
          10
        );
        return rentalPriceNumeric <= filters.price;
      });
    }

    if (filters.minMileage !== null) {
      filteredCars = filteredCars.filter(
        car => Number(car.mileage) >= Number(filters.minMileage)
      );
    }

    if (filters.maxMileage !== null) {
      filteredCars = filteredCars.filter(
        car => Number(car.mileage) <= Number(filters.maxMileage)
      );
    }
    const startIndex = (page - 1) * filters.perPage;
    const endIndex = startIndex + filters.perPage;
    const currentItems = filteredCars.slice(startIndex, endIndex);
    // console.log('fetchHome - currentItems', currentItems);
    return currentItems;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
    throw error;
  }
};
