import React from 'react'
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Text, View, TouchableOpacity, TextInput} from 'react-native'

import { UserTransferencia } from '../../store/reducers/user/actions'
import { store } from '../../store'
import axios from '../../services/api';


import styles from './style'

class NovoContato extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: ''
        }
    }
    consultar = async () => {
        const {dispatch} = this.props

        let email = this.state.email
        email = email.toLowerCase()
        let data = {
            token: await store.getState().auth.token,
            email: email
        }
        
        await axios.post('/users/getUserWithEmail', data).then(res => {
            dispatch(UserTransferencia(res.data))
            this.props.navigation.navigate('ValorTransferir')
        })
    }

    render(){
        return(
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
                <View style={styles.containerSuperior}>
                    <Text style={{fontSize: 32, color:"#FAF8F8"}}>Transferências</Text>
                    <Text style={{fontSize: 22, color:"#FAF8F8"}}>Qual o email de quem você vai enviar?</Text>
                </View>
                <View style={styles.containerMiddle}>
                    <View style={styles.containerInput}>
                        <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeholder={'Email'}
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

export default connect()(NovoContato);