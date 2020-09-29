import React from 'react'
import { connect } from 'react-redux';
import { TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView }from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { store } from '../../store'
import axios from '../../services/api';

import styles from './style'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: '',
            valor: '',
            valor_inicio: '',
            valor_final: '',
            entrega: new Date()
        }
    }

    cadastrarAtividade = async () => {
        let data = {
            token: store.getState().auth.token,
            nome: this.state.nome,
            valor: this.state.valor,
            valor_inicio: this.state.valor_inicio,
            valor_final: this.state.valor_final,
            entrega: this.state.entrega
        }

        await axios.post('/createAtividades', data).then(res => {
            this.props.navigation.navigate('Home')
        })
    }

    itemSelecionado(item) {
        this.setState({estado_id: item})
    }
    dataSelecionda(item){
        this.setState({entrega: new Date(item.timeStamp)})
    }

    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;

        if (event.type === 'neutralButtonPressed') {
            this.setState({entrega: new Date(0)})
        } else {
            this.setState({entrega: currentDate})
        }
      };

    render(){
        return(
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
                <View style={styles.containerSuperior}>
                    <Text style={{fontSize: 32, color:"#FAF8F8"}}>Adicionar Atividade</Text>
                </View>
                <View style={styles.containerMiddle}>
                    <DateTimePicker
                        style={styles.datePicker}
                        value={this.state.entrega}
                        mode={'date'}
                        display="default"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        maxLength={30}
                        onChangeText={nome => this.setState({ nome })}
                        placeholder='Nome da atividade'
                        style={styles.estiloInput}
                        value={this.state.nome}>
                    </TextInput>
                    <TextInput 
                        maxLength={30}
                        onChangeText={valor => this.setState({ valor })}
                        placeholder='Valor'
                        keyboardType={'numbers-and-punctuation'}
                        style={styles.estiloInput}
                        value={this.state.valor}>
                    </TextInput>
                    <TextInput 
                        maxLength={30}
                        onChangeText={valor_inicio => this.setState({ valor_inicio })}
                        placeholder='Valor de inscrição'
                        keyboardType={'numbers-and-punctuation'}
                        style={styles.estiloInput}
                        value={this.state.valor_inicio}>
                    </TextInput>
                    <TextInput 
                        maxLength={30}
                        onChangeText={valor_final => this.setState({ valor_final })}
                        placeholder='valor de entrega'
                        keyboardType={'numbers-and-punctuation'}
                        style={styles.estiloInput}
                        value={this.state.valor_final}>
                    </TextInput>

                    <TouchableOpacity style={styles.buttonCadastrar} onPress={() => this.cadastrarAtividade()}>
                        <Text style={{color: '#fff'}}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                    
    
            </KeyboardAvoidingView>
        )  
    }
}

export default connect()(Home);