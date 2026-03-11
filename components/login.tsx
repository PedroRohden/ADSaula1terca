import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useState } from "react";

import Toast from 'react-native-toast-message';

export default function Login(){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const validaLogin = () =>{
        if (usuario == "admin" && senha == "admin"){
            alert("Login do admin realizado com sucesso!")
            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Executando login do admin',
            });
        }else{
            alert("Usuário ou senha incorretos")
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Usuário ou senha incorretos',
            });
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulologin}>Login</Text>

            <TextInput 
                style={styles.input}
                value={usuario}
                onChangeText={setUsuario}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.botao} onPress={validaLogin}>
                <Text style={styles.titulosubmit}>Login</Text>
            </TouchableOpacity>

            <Toast />
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulologin:{
        fontFamily: 'arial',
        marginBottom: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    titulosubmit:{
        fontFamily: 'arial',
        marginBottom: 20,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    input:{
        width: '100%',
        height: 45,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    botao:{
        width: '70%',
        height: 40,
        backgroundColor: '#000080',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    }
})