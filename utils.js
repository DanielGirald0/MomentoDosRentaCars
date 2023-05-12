import AsyncStorage from '@react-native-async-storage/async-storage';


// Función para leer datos de un archivo JSON
export const readData = async (filename) => {
  try {
    const data = await AsyncStorage.getItem(filename);
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  } catch (error) {
    console.log('Error al leer datos:', error);
    return [];
  }
};

// Función para escribir datos en un archivo JSON
export const writeData = async (data, filename) => {
  try {
    await AsyncStorage.setItem(filename, JSON.stringify(data));
    console.log('Datos guardados correctamente');
  } catch (error) {
    console.log('Error al guardar datos:', error);
  }
};

// Función para agregar un usuario al archivo users.json
export const writeUserData = async (user) => {
  const users = await readData('users.json');
  users.push(user);
  writeData(users, 'users.json');
};

// Función para agregar un carro al archivo cars.json
export const writeCarData = async (car) => {
  const cars = await readData('cars.json');
  cars.push(car);
  writeData(cars, 'cars.json');
};

// Función para agregar una renta al archivo rentals.json
export const writeRentalData = async (rental) => {
  const rentals = await readData('rentals.json');
  rentals.push(rental);
  writeData(rentals, 'rentals.json');
};

// Función para actualizar la disponibilidad de un carro en el archivo cars.json
export const updateCarAvailability = async (platenumber, filename, state) => {
  const cars = await readData(filename);
  const updatedCars = cars.map(car => {
    if (car.platenumber === platenumber) {
      return { ...car, state };
    } else {
      return car;
    }
  });
  writeData(updatedCars, filename);
};
