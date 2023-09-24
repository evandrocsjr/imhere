import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = ['Evandro', 'Jonas', 'Lauro', 'Mauricio', 'Jeferson', 'Roberto', 'Paulo'];
  const handleParticipantAdd = () => {
    console.log("clicado")
  }

  const handleParticipantRemove = (name: string) => {
    console.log("Removeu o usuário: " + name)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Test</Text>
      <Text style={styles.eventDate}>
        Sexta, 24 de Novembro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      {participants.map(name => (
          <Participant
            key={name}
            name={name} 
            onRemove={handleParticipantRemove}
          />
        )
      )}
    </View>
  );
}