import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native'

import { store } from '../../store'
import axios from '../../services/api';

import styles from './style'

class ResumoTransferencia extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nomeOrigem: '',
            nomeDestino: '',
            valorTransferencia: '',
            data: ''
        }
    }
    async componentDidMount() {
        let dados = await store.getState().user
        console.log(dados)
        var data = new Date();
        data = data.toLocaleDateString();
        this.setState({
            nomeOrigem: dados.nome,
            nomeDestino: dados.usuarioTransferencia.nome,
            valorTransferencia: dados.valorTransferencia,
            data: data
        })
    }

    render(){
        return(
            <SafeAreaView style={styles.containerGeral}>
                <View style={styles.containerSuperior}>
                    <Text style={{fontSize: 26, color:"#FAF8F8"}}>Resumo da transferência</Text>
                </View>
                <View style={styles.containerMiddle}>
                    
                    <View style={styles.containerItem}>
                        <View style={styles.flag}>
                            <Text style={{fontSize: 18, color:"#00183C", fontWeight: 'bold'}}>Origem</Text>
                        </View>
                        <View style={styles.containerDado}>
                            <Text style={{fontSize: 18, color:"#00183C", fontWeight: 'bold'}}>{this.state.nomeOrigem}</Text>
                        </View>
                    </View>
                    <View style={styles.containerItem}>
                        <View style={styles.flag}>
                            <Text style={{fontSize: 18, color:"#00183C", fontWeight: 'bold'}}>Destino</Text>
                        </View>
                        <View style={styles.containerDado}>
                            <Text style={{fontSize: 18, color:"#00183C", fontWeight: 'bold'}}>{this.state.nomeDestino}</Text>
                        </View>
                    </View>
                    <View style={styles.containerItem}>
                        <View style={styles.flag}>
                            <Text style={{fontSize: 18, color:"#00183C", fontWeight: 'bold'}}>Valor</Text>
                        </View>
                        <View style={styles.containerDado}>
                            <Text style={{fontSize: 18, color:"#00183C", fontWeight: 'bold'}}>P$ {this.state.valorTransferencia}.00</Text>
                        </View>
                    </View>
                    <View style={styles.containerItem}>
                        <View style={styles.flag}>
                            <Text style={{fontSize: 18, color:"#00183C", fontWeight: 'bold'}}>Data</Text>
                        </View>
                        <View style={styles.containerDado}>
                            <Text style={{fontSize: 18, color:"#00183C", fontWeight: 'bold'}}>{this.state.data}</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.containerBottom}>
                    <TouchableOpacity style={styles.buttonConfirmar} onPress={() => this.props.navigation.navigate('ConfirmarSenha')}>
                        <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>Confirmar</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}

export default connect()(ResumoTransferencia);