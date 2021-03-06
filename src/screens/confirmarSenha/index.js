import React from 'react'
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Text, View, TouchableOpacity, TextInput} from 'react-native'
import { store } from '../../store'
import axios from '../../services/api';


import styles from './style'

class ConfirmarSenha extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            senha: ''
        }
    }

    async componentDidMount() {
        let nome = await store.getState().user.usuarioTransferencia.nome
        this.setState({nome})
    }

    async confirmarTransferencia() {
        let data = {
            token: store.getState().auth.token,
            users_cred: store.getState().user.usuarioTransferencia.id,
            senha_confirmacao: this.state.senha,
            valor: store.getState().user.valorTransferencia
        }
        
        await axios.post('/sendTransferencia', data).then(res => {
            this.props.navigation.navigate('TransferenciaOk')
        })
    }
    
    
    render(){
        return(
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
                <View style={styles.containerSuperior}>
                    <Text style={{fontSize: 32, color:"#FAF8F8"}}>Transferência</Text>
                    <Text style={{fontSize: 26, color:"#FAF8F8"}}>Digite sua senha</Text>
                    <Text style={{fontSize: 26, color:"#FAF8F8"}}>de confirmação</Text>
                </View>
                <View style={styles.containerMiddle}>
                    <View style={styles.containerInput}>
                        <TextInput
                        value={this.state.senha}
                        onChangeText={senha => this.setState({ senha })}
                        placeholder={'****'}
                        keyboardType={'number-pad'}
                        placeholderTextColor="#00183C"
                        secureTextEntry
                        maxLength={4}
                        style={styles.input}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.buttonConfirmar} onPress={() => this.confirmarTransferencia()}>
                        <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>Confirmar</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

export default connect()(ConfirmarSenha);