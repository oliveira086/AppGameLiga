import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, Image, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import { Auth } from '../../store/reducers/auth/actions';
import { Saldo } from '../../store/reducers/user/actions';

import axios from '../../services/api';

import styles from './style';
import { store } from '../../store';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: 'andreluisoliveira013@gmail.com',
            senha: 'asdf1234',
            saldo: ''
        }
    }

    login = () => {
        const { dispatch } = this.props;
        axios.post('/login', this.state).then(response => {
            this.setState({saldo: response.data.saldo})
            dispatch(Auth(response.data.token));
            dispatch(Saldo(response.data.saldo))
            this.props.navigation.navigate('Home', {saldo: this.state.saldo})
        })
    }

    cadastrar = () => {
        this.props.navigation.navigate('Cadastro')
    }
    
    render(){
        return(
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "none"} style={styles.containerGeral}>
                <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
                <View style={styles.containerInferior}>
                    <TextInput 
                        maxLength={30}
                        onChangeText={email => this.setState({ email })}
                        placeholder='Email'
                        style={styles.estiloInput}
                        value={this.state.email}>
                    </TextInput>

                    <TextInput 
                        maxLength={30}
                        onChangeText={senha => this.setState({ senha })}
                        placeholder='*******'
                        secureTextEntry={true}
                        style={styles.estiloInput}
                        value={this.state.senha}>
                    </TextInput>

                    <TouchableOpacity style={styles.buttonEntrar} onPress={() => this.login()}>
                        <Text style={{color: '#FAF8F8', fontWeight: '600'}}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.cadastrar()}>
                        <Text style={{color: '#fff'}}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default connect()(Login);