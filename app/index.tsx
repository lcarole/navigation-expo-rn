import { useRouter } from "expo-router";
import { View, Button } from "react-native";

export default function App() {
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

    return (
        <View>
            {Profiles.map(profile => (
                <Button 
                key={profile.id} 
                title={`Go to ${profile.prenom}`} 
                onPress={() => router.push(`/profile/${profile.id}` )}
                />
            ))}
        </View>
    );
}

