import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from "../assets/styles/styles";

let cars = [
  { platenumber: 'fvz34e', brand: 'Ferrari', state: 'disponible'},
  { platenumber: 'txl666', brand: 'Toyota', state: 'No disponible'},
  { platenumber: 'psc777', brand: 'Porsche', state: 'Disponible'}
]

//let cars = [...platenumber, brand, state]

export default function CarScreen({ navigation }) {
    const [platenumber, setPlatenumber] = useState('');
    const [brand, setBrand] = useState('');
    const [state, setState] = useState('');
    const [message, setMessage] = useState('');

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

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Placa del vehiculo</Text>
            <TextInput
                label="Placa"
                mode="outlined"
                left={<TextInput.Icon icon="account" />}
                value={platenumber}
                onChangeText={setPlatenumber} />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Marca vehiculo</Text>
            <TextInput
                label="Marca"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={brand}
                onChangeText={setBrand} />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Estado (disponible/No disponible)</Text>
            <TextInput
                label="Estado"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={state}
                onChangeText={setState} />
            <Button style={{ marginTop: 10, backgroundColor: 'red' }}
                icon="login"
                mode="contained"
                title="Registro"
                onPress={handleCars}
            > Registrar
            </Button>
            <Text style={{ fontWeight: "bold", marginBottom: 10, alignItems:'center' }}>{message}</Text>
        </View>
    );
}