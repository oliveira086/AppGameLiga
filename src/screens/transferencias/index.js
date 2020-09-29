import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native'

import { store } from '../../store'
import axios from '../../services/api';

import styles from './style'

class Transferencias extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contatos: []
        }
    }
    async componentDidMount() {
        let token = {token: await store.getState().auth.token}
        await axios.post('/getContatos', token).then(res => {
            this.setState({contatos: res.data.contatos})
        })
    }

    renderItem = ({ item }) => {
        return ( 
            <TouchableOpacity style={styles.containerContato}>
                <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>{item.usuario_agenda_id.nome}</Text>
            </TouchableOpacity> 
        )   
    }

    render(){
        return(
            <SafeAreaView style={styles.containerGeral}>
                <View style={styles.containerSuperior}>
                    <Text style={{fontSize: 32, color:"#FAF8F8"}}>Transferencias</Text>
                    <TouchableOpacity style={styles.buttonNovoContato} onPress={() => this.props.navigation.navigate('NovoContato')}>
                        <Text style={{fontSize: 16, color:"#FAF8F8", fontWeight: 'bold'}}>Novo contato</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerMiddle}>
                    {this.state.contatos.length > 0 ?
                    <ScrollView style={{width: '90%', height: '100%'}}>
                    {this.state.contatos.map(x => {
                        return<TouchableOpacity style={styles.containerContato}>
                            <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>{x.usuario_agenda_id.nome}</Text>
                        </TouchableOpacity> 
                    })}

                </ScrollView>
                : <View style={styles.containerSemTransferencia}>
                    <Image source={require('../../assets/sem-transferencia.png')} style={styles.semTransferencia}></Image>
                    <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>Você ainda não possui transferencias</Text>

                </View> }
                    
                </View>

            </SafeAreaView>
        )
    }
}

export default connect()(Transferencias);