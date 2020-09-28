import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native'

import Carousel from 'react-native-snap-carousel';



import { store } from '../../store'
import axios from '../../services/api';

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

    async componentDidMount() {
        let token = {token: store.getState().auth.token}
        await axios.post('/users/getUser', token).then( res => {
            this.setState({
                nome: res.data.nome,
                saldo: `P$ ${res.data.saldo}.00`,
                super_user: res.data.super_user
            })
        })

        console.log(this.state.super_user)

        await axios.post('/getAtividadesUser', token).then( res => {
            this.setState({ atividades: res.data})
        })
    }

    estados = () => {
        this.props.navigation.navigate('Estados')
    }

    adicionarNovaAtividade = () => {
        this.props.navigation.navigate('AdicionarAtividade')
    }

    novaAtividade = () => {
        this.props.navigation.navigate('Atividade')
    }

    converterData = (item) => {
        const dateTime = item.entrega;
        let parts = dateTime.split('T');
        parts = parts[0].split('-')
        let data = `${parts[2]}/${parts[1]}/${parts[0]}`
        return data
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.containerTask}>
                <View style={styles.sombra}>
                    <View style={styles.taskSuperior}>
                        <Image source={require('../../assets/task.png')}></Image>
                        <Text style={{color: '#000'}}>{ item.nome }</Text>
                    </View>
                    <View style={styles.taskInferior}>
                        <Image source={require('../../assets/calendar.png')} style={styles.calendar}></Image>
                        <Text>{this.converterData(item)}</Text>
                    </View>
                </View>
            </View>
        );
    }

    render(){
        if(this.state.super_user == 0){
            return(
                <SafeAreaView style={styles.containerGeral}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.textUser}>{this.state.nome}</Text>
                    </View>
                    <View style={styles.containerMiddle}>
                        <View style={styles.containerCarteira}>
                            <View style={styles.containerCarteiraTop}>
                                <Text style={{fontWeight: 'bold'}}>Saldo em conta</Text>
                                <Text style={{fontSize: 28, fontWeight: 'bold'}}>{this.state.saldo}</Text>

                            </View>
                            <View style={styles.containerCarteiraBottom}>
                                <TouchableOpacity style={styles.buttomTransferirCarteira} onPress={() => this.props.navigation.navigate('Transferencias')}>
                                    <Text style={{color: '#FAF8F8'}}>Transferir</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttomNovaAtividadeCarteira} onPress={() => this.novaAtividade()}>
                                    <Text style={{color: '#FAF8F8'}}>Nova Atividade</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttomMinhaCarteira}>
                                    <Text style={{color: '#FAF8F8'}}>Minha Carteira</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.containerTasks}>
                            <Text>Ok</Text>
                            <View style={styles.containerScroll}>
                                <Carousel
                                    ref={(c) => { this._carousel = c; }}
                                    data={this.state.atividades}
                                    renderItem={this._renderItem}
                                    sliderWidth={500}
                                    itemWidth={150}
                                />
                            </View>
                        </View>
                        <View style={styles.containerExtrato}></View>

                    </View>
                    <View style={styles.containerBottom}>
                        <TouchableOpacity style={styles.buttonContainerBottom}>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerBottom}></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerBottom}></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerBottom}></TouchableOpacity>
                    </View>

                </SafeAreaView>
            )
        } if(this.state.super_user == 1) {
            return(
                <SafeAreaView style={styles.containerGeral}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.textUser}>{this.state.nome}</Text>
                    </View>
                    <View style={styles.containerMiddle}>
                        <View style={styles.containerCarteira}>
                            <View style={styles.containerCarteiraTop}>
                                <Text style={{fontWeight: 'bold'}}>Saldo em conta</Text>
                                <Text style={{fontSize: 28, fontWeight: 'bold'}}>{this.state.saldo}</Text>

                            </View>
                            <View style={styles.containerCarteiraBottom}>
                                <TouchableOpacity style={styles.buttomTransferirCarteira}>
                                    <Text style={{color: '#FAF8F8'}}>Transferir</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttomNovaAtividadeCarteira} onPress={() => this.adicionarNovaAtividade()}>
                                    <Text style={{color: '#FAF8F8'}}>Nova Atividade</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttomMinhaCarteira}>
                                    <Text style={{color: '#FAF8F8'}}>Minha Carteira</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.containerTasks}>
                            <Text>Ok</Text>
                            <View style={styles.containerScroll}>
                                <Carousel
                                    ref={(c) => { this._carousel = c; }}
                                    data={this.state.atividades}
                                    renderItem={this._renderItem}
                                    sliderWidth={500}
                                    itemWidth={150}
                                />
                            </View>
                        </View>
                        <View style={styles.containerExtrato}></View>

                    </View>
                    <View style={styles.containerBottom}>
                        <TouchableOpacity style={styles.buttonContainerBottom} onPress={() => this.estados()}>
                            <Text style={{color: '#FAF8F8'}}>Estados</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerBottom}></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerBottom}></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerBottom}></TouchableOpacity>
                    </View>

                </SafeAreaView>
            )
        }
    }
}

export default connect()(Home);