import React from 'react';
import { SafeAreaView, Image, View, TextInput,
TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import axios from '../../services/api';

import styles from './style'

class Cadastro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: '',
            email: '',
            senha: '',
            confirmar: '',
            saldo: 0,
            super_user: 0,
            senha_confirmacao: 0
        }
    }

    cadastrar = async () => {
        axios.post('/users/cadastro', this.state).then(res => {
            this.props.navigation.navigate('Login')
        })
    }

    render(){
        return(
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "none"} style={styles.containerGeral}>
                <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
                <View style={styles.containerInferior}>
                    <TextInput 
                        maxLength={30}
                        onChangeText={nome => this.setState({ nome })}
                        placeholder='Nome'
                        style={styles.estiloInput}
                        value={this.state.nome}>
                    </TextInput>
                    <TextInput 
                        maxLength={30}
                        onChangeText={email => this.setState({ email })}
                        placeholder='Email'
                        style={styles.estiloInput}
                        value={this.state.email}>
                    </TextInput>

                    <TextInput 
                        maxLength={10}
                        onChangeText={senha => this.setState({ senha })}
                        placeholder='Senha'
                        secureTextEntry={true}
                        style={styles.estiloInput}
                        value={this.state.senha}>
                    </TextInput>
                    <TextInput 
                        maxLength={10}
                        onChangeText={confirmar => this.setState({ confirmar })}
                        placeholder='Confirmar senha'
                        secureTextEntry={true}
                        style={styles.estiloInput}
                        value={this.state.confirmar}>
                    </TextInput>

                    <TouchableOpacity style={styles.buttonEntrar} onPress={() => this.cadastrar()}>
                        <Text style={{color: '#FAF8F8', fontWeight: '600'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

export default Cadastro