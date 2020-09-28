import React from 'react'
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Text, View, TouchableOpacity, TextInput, Image} from 'react-native'

import { ValorTransferencia } from '../../store/reducers/user/actions'
import { store } from '../../store'
import axios from '../../services/api';


import styles from './style'

class TransferenciaValor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: '',
            saldo: '',
            valor:'',
            aviso: false
        }
    }

    async componentDidMount() {
        let user = await store.getState().user
        this.setState({
            nome: user.usuarioTransferencia.nome,
            saldo: user.saldo
        })
    }

    erroDimiss() {
        console.log('CREU')
        this.setState({aviso: false, valor: ''})
    }

    confirmarValor() {
        const { dispatch } = this.props

        if(this.state.valor > this.state.saldo || this.state.valor === '') {
            this.setState({aviso: true})
        }
        if(this.state.valor !== '') {
            dispatch(ValorTransferencia(this.state.valor))
            this.props.navigation.navigate('ConfirmarSenha')
        }

    }
    
    

    render(){
        return(
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
                <View style={styles.containerSuperior}>
                    <Text style={{fontSize: 32, color:"#FAF8F8"}}>Transferência</Text>
                    <Text style={{fontSize: 22, color:"#FAF8F8"}}>Quanto você quer para</Text>
                    <Text style={{fontSize: 22, color:"#FAF8F8"}}>{this.state.nome}</Text>
                </View>
                <View style={styles.containerMiddle}>
                    {this.state.aviso ? 
                        <View style={styles.containerAviso}>
                            <Image source={require('../../assets/erro.png')} style={styles.erro}></Image>
                            <Text style={{fontSize: 20, color:"#FAF8F8"}}>Desculpe, tente novamente</Text>

                            <TouchableOpacity style={styles.containerButtonError} onPress={() => this.erroDimiss()}>
                                <Text>Entendi</Text>
                            </TouchableOpacity>

                        </View> :
                        <View style={{width: '100%', height: '80%', justifyContent:'space-around', alignItems:'center'}}>
                            <View style={styles.containerInput}>
                                <Text style={{fontSize: 60, color:"#FAF8F8"}}>P$</Text>
                                <TextInput
                                value={this.state.valor}
                                onChangeText={valor => this.setState({ valor })}
                                placeholder={'0,00'}
                                keyboardType={'number-pad'}
                                placeholderTextColor="#FAF8F8" 
                                style={styles.input}></TextInput>
                            </View>
                            
                            <Text style={{fontSize: 20, color:"#FAF8F8", fontWeight: 'bold'}}>Valor disponivel $P {this.state.saldo},00</Text>

                            <TouchableOpacity style={styles.buttonConfirmar} onPress={() => this.confirmarValor()}>
                                <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>

            </KeyboardAvoidingView>
        )
    }
}

export default connect()(TransferenciaValor);