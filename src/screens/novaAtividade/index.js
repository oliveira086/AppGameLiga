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
            nome: 'usuario',
            saldo: 'P$ 0.00',
            super_user: '',
            atividades: []
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
        let token = {token: store.getState().auth.token}
        await axios.post('/getAtividades', token).then( res => {
            this.setState({ atividades: res.data})
        })
    }

    selecionarAtividade = async (item) => {
        const { dispatch } = this.props

        await dispatch(Atividade(item))

        this.props.navigation.navigate('AssinarAtividade')

    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.containerTask}>
                <TouchableOpacity style={styles.sombra} onPress={() => this.selecionarAtividade(item)}>
                    <View style={styles.taskSuperior}>
                        <Image source={require('../../assets/task.png')}></Image>
                        <Text style={{color: '#000'}}>{ item.nome }</Text>
                    </View>
                    <View style={styles.taskInferior}>
                        <Image source={require('../../assets/calendar.png')} style={styles.calendar}></Image>
                        <Text>{this.converterData(item)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render(){
            return(
                <SafeAreaView style={styles.containerGeral}>
                    <View style={styles.containerSuperior}>
                        <Text style={{fontSize: 32, color:"#FAF8F8"}}>Selecione a Atividade</Text>
                    </View>
                    <View style={styles.containerMiddle}>
                        {this.state.atividades.length != 0 ?
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.atividades}
                            renderItem={this._renderItem}
                            sliderWidth={500}
                            itemWidth={150}
                        /> :
                        <View style={styles.containerInformativo}>
                            <Text>Ainda não temos tarefas cadastradas</Text>
                        </View> }
                    </View>
                    <View style={styles.containerInferior}>
                        <TouchableOpacity onPress={() => this.voltar()}>
                            <Text style={{color: '#FAF8F8', fontWeight: '600'}}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                    
                </SafeAreaView>
            )
    }
}

export default connect()(Home);