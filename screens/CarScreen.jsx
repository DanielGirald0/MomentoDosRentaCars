import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "../assets/styles/styles";
import { writeCarData, readData } from "../utils";

const CarScreen = () => {
    const [platenumber, setPlatenumber] = useState("");
    const [brand, setBrand] = useState("");
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");
    const [carList, setCarList] = useState([]);

    const handleCar = () => {
        if (platenumber === "" && brand === "" && state === "") {
            setMessage("Todos los datos son requeridos");
            return;
        }
        const newCar = { platenumber, brand, state };
        writeCarData(newCar, "cars.json");
        setCarList([...carList, newCar]);
        setPlatenumber("");
        setBrand("");
        setState("");
        setMessage("Carro registrado");
    };

    // Cargar la lista de carros al iniciar la pantalla
    useEffect(() => {
        const fetchData = async () => {
            const cars = await readData("cars.json");
            setCarList(cars);
        };

        fetchData();
    }, []);

    /*
      const handleCars = () => {
          if (platenumber === '' && brand === '' && state === '') {
              setMessage('Todos los datos son requeridos');
              return;
          }
  
          const carsExixst = cars.some(car => car.platenumber === platenumber);
  
          if (carsExixst) {
              setMessage('El vehiculo ya esta registrado');
          } else {
              cars.push({ platenumber, brand, state });
              setMessage('Vehiculo registrado con exito');
          }
      };
      */

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Placa del vehiculo
            </Text>
            <TextInput
                label="Placa"
                mode="outlined"
                left={<TextInput.Icon icon="account" />}
                value={platenumber}
                onChangeText={setPlatenumber}
            />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Marca vehiculo
            </Text>
            <TextInput
                label="Marca"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={brand}
                onChangeText={setBrand}
            />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Estado (disponible/No disponible)
            </Text>
            <TextInput
                label="Estado"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={state}
                onChangeText={setState}
            />
            <Button
                style={{ marginTop: 10, backgroundColor: "red" }}
                icon="login"
                mode="contained"
                title="Registro"
                onPress={handleCar}
            >
                {" "}
                Registrar
            </Button>
            <Text
                style={{ fontWeight: "bold", marginBottom: 10, alignItems: "center" }}
            >
                {message}
            </Text>
            <FlatList
                data={carList}
                renderItem={({ item }) => (
                    <Text>{`${item.platenumber} - ${item.brand} - ${item.state}`}</Text>
                )}
                keyExtractor={(item) => item.platenumber}
            />
        </View>
    );
};

export default CarScreen;
