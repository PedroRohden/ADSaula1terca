import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  return(
    <View style={styles.container}>
      
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
      />

      <TextInput
        style={styles.input}
      />

      <TouchableOpacity style={styles.buttom}>
        <Text>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  input:{
    width: '100%',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  
  title:{
    fontSize: 32,
    marginBottom: 24,
    color: '#333333',
  },

  buttom:{
    backgroundColor: '#007AFF',
    borderRadius: 8,
    width: '80%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  }
});