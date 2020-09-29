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
            token: '',
            id_atividade: '',
            valor: '',
            valor_inicio: '',
            valor_final: '',
            entrega: '',
            id_trello_atividade: '',
            id_trello_users: '',
            users_id: '',
            senha_confirmacao: ''
        }
    }

    async componentDidMount() {
        let atividade = await store.getState().user.atividade
        this.setState({
            token: store.getState().auth.token,
            id_atividade: atividade.id_atividade,
            valor: atividade.valor,
            valor_inicio: atividade.valor_inicio,
            valor_final: atividade.valor_final,
            entrega: atividade.entrega,
            id_trello_atividade: atividade.id_trello_atividade,
            id_trello_users: atividade.id_trello_users,
            users_id: atividade.users_id,
        })

        console.log(this.state)
    }

    async confirmarTransferencia() {
        
        await axios.post('/buyAtividade', this.state).then(res => {
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
                        onChangeText={senha_confirmacao => this.setState({ senha_confirmacao })}
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