import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native'

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
            users_id:'',
            id_trello_atividade: '',
            id_trello_users: '',
            id_atividade: '',
            saldo: '',
            isSaldo: false
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
            entrega: entrega,
            id_trello_atividade: data.trello_id,
            id_atividade: data.id,
            saldo: store.getState().user.saldo
        })

        let token = {token:store.getState().auth.token}
        axios.post('/users/getUser', token).then(res => {
            this.setState({users_id: res.data.id, id_trello_users: res.data.id_trello})
        })
    }

    confirmarInscricao = async () => {
        let data = {
            token: store.getState().auth.token,
            id_atividade: this.state.id_atividade,
            nome: this.state.nomeAtividade,
            valor: this.state.valor,
            valor_inicio: this.state.valor_inicio,
            valor_final: this.state.valor_final,
            entrega: store.getState().user.atividade.entrega,
            id_trello_atividade: this.state.id_trello_atividade,
            id_trello_users: this.state.id_trello_users,
            users_id: this.state.users_id,
        }

        const { dispatch } = this.props

        dispatch(Atividade(data))

        if(data.valor > this.state.saldo){
            this.setState({isSaldo: true})
        } else {
            this.props.navigation.navigate('ConfirmarSenhaAtividade')
        }
    }

    erroDimiss () {
        this.setState({isSaldo: false})
    }


    render(){
            return(
                <SafeAreaView style={styles.containerGeral}>
                    <View style={styles.containerSuperior}>
                        <Text style={{fontSize: 32, color:"#FAF8F8", textAlign: 'center'}}>Confimar Inscrição na atividade?</Text>
                    </View>

                    {this.state.isSaldo ?
                    <View style={styles.containerSemSaldo}>
                        <Image style={styles.ilustrationSemSaldo} source={require('../../assets/sem-extrato.png')}></Image>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Seu saldo não e suficiente</Text>
                            <TouchableOpacity style={styles.buttonSemSaldo} onPress={() => this.erroDimiss()}>
                                <Text style={{color: '#FAF8F8', fontWeight: '600'}}>Entendi</Text>
                            </TouchableOpacity>
                    </View> :
                        <View style={styles.containerBuy}>
                            <View style={styles.containerMiddle}>
                                <Image source={require('../../assets/taskdois.png')} style={styles.icon}></Image>
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
                        </View>
                    }
                    
                    
                </SafeAreaView>
            )
    }
}

export default connect()(Home);