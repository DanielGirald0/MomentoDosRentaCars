import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from "../assets/styles/styles";

let users = [
    { rentnumber: '1', username: 'dgh', platenumber: 'fvz34e', rentdate: '6/5/23' },
    { rentnumber: '2', username: 'ppp', platenumber: 'txl666', rentdate: '6/5/23' },
    { rentnumber: '3', username: 'user', platenumber: 'psc777', rentdate: '6/5/23' }

]

export default function RentScreen({ navigation }) {
    const [rentnumber, setRentnumber] = useState('');
    const [username, setUsername] = useState('');
    const [platenumber, setPlatenumber] = useState('');
    const [rentdate, setRentdate] = useState('');



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
            <Button style={{ marginTop: 10, backgroundColor:'red' }}
                icon="login"
                mode="contained"
                title="Registrarse"
                onPress={() => {
                    
                }
                }
            > Registrar </Button>
        </View>
    );
}