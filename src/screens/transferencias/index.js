import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, Image, FlatList} from 'react-native'

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
                    <TouchableOpacity style={styles.buttonNovoContato}>
                        <Text>Novo contato</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerMiddle}>
                    <FlatList
                        data={this.state.contatos}
                        keyExtractor={(item) => item.id}
                        renderItem={this.renderItem}
                        showsVerticalScrollIndicator={false}
                        style={{width: '80%'}}>
                    </FlatList>
                </View>

            </SafeAreaView>
        )
    }
}

export default connect()(Transferencias);