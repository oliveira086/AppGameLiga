import React from 'react'
import { connect } from 'react-redux';
import { Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import axios from '../../services/api';
import { store } from '../../store'

import styles from './style';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cadastrarSenha: '',
            senhaAntiga: '',
            novaSenha: '',
            erro: false
        }
    }
    async componentDidMount(){
        let token = {token: store.getState().auth.token}
        await axios.post('users/getConfirmationPass', token).then(res => {
            this.setState({resposta: res.data.ok})
        })
    }

    async salvarSenha () {
        let data = {
            token: store.getState().auth.token,
            senha_confirmacao: this.state.cadastrarSenha
        }
        await axios.post('users/saveConfirmationPass', data).then(res => {
            this.props.navigation.navigate('SenhaOk')
        }).catch(err => {
            this.setState({erro: true})
        })
    }

    async atualizarSenha () {
        let data = {
            token: store.getState().auth.token,
            oldPass: this.state.senhaAntiga,
            newPass: this.state.novaSenha
        }
        await axios.post('users/updateConfirmationPass', data).then(res => {
            this.props.navigation.navigate('SenhaOk')
        }).catch(err => {
            this.setState({erro: true})
        })
    }

    erroDimiss() {
        console.log('CREU')
        this.setState({erro: false})
    }
    
    render(){
        if(this.state.resposta == 'user not pass'){
            return(
                <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
                    <View style={styles.containerSuperior}>
                        <Text style={{fontSize: 28, color:"#FAF8F8"}}>Senha de confirmação</Text>
                    </View>
                    {this.state.erro ?
                        <View style={styles.containerAviso}>
                            <Image source={require('../../assets/erro.png')} style={styles.erro}></Image>
                            <Text style={{fontSize: 20, color:"#FAF8F8"}}>Desculpe, tente novamente</Text>

                            <TouchableOpacity style={styles.containerButtonError} onPress={() => this.erroDimiss()}>
                                <Text>Entendi</Text>
                            </TouchableOpacity>

                        </View> :
                        <View style={styles.containerMiddle}>
                            <Text style={{fontSize: 20, color:"#FAF8F8"}}>Cadastre sua senha de 4 digitos</Text>
                            <View style={styles.containerInput}>
                                <TextInput
                                value={this.state.cadastrarSenha}
                                onChangeText={cadastrarSenha => this.setState({ cadastrarSenha })}
                                placeholder={'****'}
                                keyboardType={'number-pad'}
                                secureTextEntry
                                maxLength={4}
                                style={styles.input}></TextInput>
                            </View>
                            <TouchableOpacity style={styles.buttonConfirmar} onPress={() => this.salvarSenha()}>
                                <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    } 
                </KeyboardAvoidingView>
            )
        } else {
            return(
                <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
                    <View style={styles.containerSuperior}>
                        <Text style={{fontSize: 28, color:"#FAF8F8"}}>Alterar senha de confirmação</Text>
                    </View>

                    {this.state.erro ?
                        <View style={styles.containerAviso}>
                            <Image source={require('../../assets/erro.png')} style={styles.erro}></Image>
                            <Text style={{fontSize: 20, color:"#FAF8F8"}}>Desculpe, tente novamente</Text>

                            <TouchableOpacity style={styles.containerButtonError} onPress={() => this.erroDimiss()}>
                                <Text>Entendi</Text>
                            </TouchableOpacity>

                        </View> :
                        <View style={styles.containerMiddle}>
                            <Text style={{fontSize: 20, color:"#FAF8F8"}}>Digite a senha atual</Text>
                            <View style={styles.containerInput}>
                                <TextInput
                                value={this.state.senhaAntiga}
                                onChangeText={senhaAntiga => this.setState({ senhaAntiga })}
                                placeholder={'****'}
                                keyboardType={'number-pad'}
                                secureTextEntry
                                maxLength={4}
                                style={styles.input}></TextInput>
                            </View>
                            <Text style={{fontSize: 20, color:"#FAF8F8"}}>Digite a nova senha</Text>
                            <View style={styles.containerInput}>
                                <TextInput
                                value={this.state.novaSenha}
                                onChangeText={novaSenha => this.setState({ novaSenha })}
                                placeholder={'****'}
                                keyboardType={'number-pad'}
                                secureTextEntry
                                maxLength={4}
                                style={styles.input}></TextInput>
                                
                            </View>
                            <TouchableOpacity style={styles.buttonConfirmar} onPress={() => this.atualizarSenha()}>
                                <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    }







                    
                </KeyboardAvoidingView>
            )
        }
        
    }
}

export default connect()(Login);