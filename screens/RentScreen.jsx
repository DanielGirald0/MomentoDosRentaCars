import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from "../assets/styles/styles";
import { writeRentalData, updateCarAvailability } from '../utils';

const RentScreen = ({ navigation }) => {
    const [rentnumber, setRentnumber] = useState('');
    const [username, setUsername] = useState('');
    const [platenumber, setPlatenumber] = useState('');
    const [rentdate, setRentdate] = useState('');
    const [rentList, setRentList] = useState([]);

    const handleRentCar = () => {
        const newRental = { rentnumber, username, platenumber, rentdate };
        writeRentalData(newRental, 'rentals.json');
        setRentList([...rentList, newRental])
        setRentnumber('');
        setUsername('');
        setPlatenumber('');
        setRentdate('');
        updateCarAvailability(platenumber, 'cars.json', false);
        navigation.navigate('Rent');
    };

    // Cargar la lista de carros al iniciar la pantalla
    useEffect(() => {
        const fetchData = async () => {
            const rents = await readData("rentals.json");
            setCarList(rents);
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>NUmero de renta:</Text>
            <TextInput
                label="Numero renta"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={rentnumber}
                onChangeText={setRentnumber} />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Nombre de usuario:</Text>
            <TextInput
                label="Usuario"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={username}
                onChangeText={setUsername} />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Placa vehiculo:</Text>
            <TextInput
                label="Placa"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={platenumber}
                onChangeText={setPlatenumber} />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Fecha de renta:</Text>
            <TextInput
                label="Fechar renta"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={rentdate}
                onChangeText={setRentdate} />
            <Button style={{ marginTop: 10, backgroundColor:'orange' }}
                icon="login"
                mode="contained"
                title="Registrarse"
                onPress={handleRentCar}
            > Registrar </Button>
            <FlatList
                data={rentList}
                renderItem={({ item }) => (
                    <Text>{`${item.rentnumber} - ${item.username} - ${item.platenumber} - ${item.rentdate}`}</Text>
                )}
                keyExtractor={(item) => item.rentnumber}
            />
        </View>
    );
}

export default RentScreen;