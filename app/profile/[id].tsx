import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Image, TextInput, StyleSheet, Button } from "react-native";

export default function Profile() {
    const router = useRouter();

    type ProfileProps = {
        id: number,
        email: string,
        prenom: string,
        nom: string
    }

    const Profiles: ProfileProps[] = [
        {
            id: 1,
            nom: "Carole",
            prenom:"Luigi",
            email: "lcarole@outlook.fr"
        },
        {
            id: 2,
            nom: "BECQUIN",
            prenom:"Lilian",
            email: "lbecquin@outlook.Fr"
        },
        {
            id: 3,
            nom: "BILLET",
            prenom:"Tom",
            email: "tbillet@outlook.fr"
        }
    ]

    
    const local = useLocalSearchParams();

    const profile = Profiles.filter(profile => profile.id === Number(local.id))[0];

    const [name, setName] = useState(profile.nom);
    const [firstname, setFirstname] = useState(profile.prenom);
    const [email, setEmail] = useState(profile.email);
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        console.log(local.id);
    },[])

    return (
        <View style={styles.profile}>
            <Image style={styles.avatar} source={{ uri: "https://reactnative.dev/img/tiny_logo.png"}}/>
            <TextInput style={styles.textInput} value={firstname} onChangeText={setFirstname}/>
            <TextInput style={styles.textInput} value={name} onChangeText={setName}/>
            <TextInput style={styles.textInput} value={email} onChangeText={setEmail}/>
            
            <TextInput style={styles.textInput} value={nombre} keyboardType="numeric" onChangeText={setNombre}/>
            <Button title="Valider les changements" onPress={() => console.log({firstname, name, email})}/>
            <Button onPress={() => router.back()} title="Retour" />
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        borderRadius: 30,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        backgroundColor: "#ABABAB",
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },

    textInput: {
        fontSize: 16,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 20,
    }
});