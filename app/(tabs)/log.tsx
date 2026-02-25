import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Área Restrita</Text>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} secureTextEntry={true} />
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.titulo}>login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,

  },
  titulo:{
    fontFamily: 'verdade',
    marginBottom: 20,
    fontSize: 30,
    color: 'white',

  },
  input:{
    width: '100%',
    height: 35, 
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,

  },
  botao:{
    width: '50%',
    height: 45, 
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',

  }
})