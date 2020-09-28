import React from 'react'
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Text, View, TouchableOpacity, TextInput} from 'react-native'

import { ValorTransferencia } from '../../store/reducers/user/actions'
import { store } from '../../store'
import axios from '../../services/api';


import styles from './style'

class TransferenciaValor extends React.Component{
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

    confirmarValor() {
        const { dispatch } = this.props
        dispatch(ValorTransferencia(this.state.valor))
        this.props.navigation.navigate()
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
                        style={styles.input}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.buttonConfirmar} onPress={() => this.consultar()}>
                        <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>Confirmar</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

export default connect()(TransferenciaValor);