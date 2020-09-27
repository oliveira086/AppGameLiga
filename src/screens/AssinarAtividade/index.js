import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native'

import Carousel from 'react-native-snap-carousel';

import { store } from '../../store'
import axios from '../../services/api';

import { Atividade } from '../../store/reducers/user/actions'

import styles from './style'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nomeAtividade: '',
            valor: '',
            valor_inicio: '',
            valor_final: '',
            entrega: '',
            id_trello: '',
            id:''
        }
    }

    converterData = (item) => {
        const dateTime = item.entrega;
        let parts = dateTime.split('T');
        parts = parts[0].split('-')
        let data = `${parts[2]}/${parts[1]}/${parts[0]}`
        return data
    }

    voltar = () => {
        this.props.navigation.navigate('Home')
    }

    async componentDidMount() {
        let data = await store.getState().user.atividade
        let entrega = this.converterData(data)

        this.setState({
            nomeAtividade: data.nome,
            valor: data.valor,
            valor_inicio: data.valor_inicio,
            valor_final: data.valor_final,
            entrega: entrega
        })

        let token = {token:store.getState().auth.token}
        axios.post('/users/getUser', token).then(res => {
            this.setState({id: res.data.id, id_trello: res.data.id_trello})
        })
    }

    confirmarInscricao = async () => {
        let data = {
            token: store.getState().auth.token,
            nome: this.state.nomeAtividade,
            valor: this.state.valor,
            valor_inicio: this.state.valor_inicio,
            valor_final: this.state.valor_final,
            entrega: store.getState().user.atividade.entrega,
            id: this.state.id,
            id_trello: this.state.id_trello
        }
        await axios.post('/buyAtividade', data).then(res => {
            console.log(res.data)
        })
    }


    render(){
            return(
                <SafeAreaView style={styles.containerGeral}>
                    <View style={styles.containerSuperior}>
                        <Text style={{fontSize: 32, color:"#FAF8F8", textAlign: 'center'}}>Confimar Inscrição na atividade?</Text>
                    </View>
                    <View style={styles.containerMiddle}>
                        <Image source={require('../../assets/taskdois.png')}></Image>
                        <View style={styles.containerTextAtividade}>
                            <Text style={styles.textAtividade}>Nome: {this.state.nomeAtividade}</Text>
                        </View>
                        <View style={styles.containerTextAtividade}>
                            <Text style={styles.textAtividade}>Valor: P$ {this.state.valor}.00</Text>
                        </View>
                        <View style={styles.containerTextAtividade}>
                            <Text style={styles.textAtividade}>Valor da inscrição: P$ {this.state.valor_inicio}.00</Text>
                        </View>
                        <View style={styles.containerTextAtividade}>
                            <Text style={styles.textAtividade}>Valor da entrega: P$ {this.state.valor_final}.00</Text>
                        </View>
                        <View style={styles.containerTextAtividade}>
                            <Text style={styles.textAtividade}>Prazo da entrega: {this.state.entrega}</Text>
                        </View>
                    </View>
                    <View style={styles.containerInferior}>
                        <TouchableOpacity style={styles.buttonInscricao} onPress={() => this.confirmarInscricao()}>
                            <Text style={{color: '#FAF8F8', fontWeight: '600'}}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.voltar()}>
                            <Text style={{color: '#FAF8F8', fontWeight: '600'}}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                    
                </SafeAreaView>
            )
    }
}

export default connect()(Home);