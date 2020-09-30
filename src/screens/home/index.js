import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native'
import { Nome } from '../../store/reducers/user/actions'

import Icon from 'react-native-vector-icons/MaterialIcons';

import Carousel from 'react-native-snap-carousel';

import { store } from '../../store'
import axios from '../../services/api';

import styles from './style'

class Home extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            nome: 'usuario',
            saldo: `P$ ${JSON.stringify(this.props.navigation.getParam('saldo', 'NO-ID'))},00`,
            super_user: '',
            atividades: [],
            todo: [],
            ultimaTransferencia: [],
            tipo: false,
            usuarioCred: '',
            usuarioDeb: '',
            valor: '',
            data: ''
        }
    }
    
    async componentDidUpdate() {
        let valorParamentro = this.props.navigation.getParam('saldo', 'NO-ID')
        valorParamentro = JSON.stringify(valorParamentro)
        this.setState({saldo: `P$ ${valorParamentro},00` })
    }
    async componentDidMount() {
        const { dispatch, navigation } = this.props
        let token = {token: store.getState().auth.token}
        await axios.post('/users/getUser', token).then( res => {
            this.setState({
                nome: res.data.nome,
                saldo: `P$ ${JSON.stringify(navigation.getParam('saldo', 'NO-ID'))},00`,
                super_user: res.data.super_user
            })
            dispatch(Nome(this.state.nome))
        })
        await axios.post('/getAtividadesUser', token).then( res => {
            this.setState({ atividades: res.data})
        })

        await axios.post('/getAtividadesTodo', token).then( res => {
            this.setState({todo: res.data})
        })

        await axios.post('getLatest', token).then(res => {
            let dateTime = res.data.data.createdAt
            let parts = dateTime.split('T');
            parts = parts[0].split('-')
            let date = `${parts[2]}/${parts[1]}`


            this.setState({
                ultimaTransferencia: res.data.data,
                usuarioCred: res.data.data.usuario_cred.nome,
                usuarioDeb: res.data.data.usuario_deb.nome,
                valor: res.data.data.valor,
                data: date
            })
        })
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

    async avancarAtividade (item) {
        let data = {
            token: store.getState().auth.token,
            id_atividade: item.id
        }

        console.log(item)
        await axios.post('changeList', data).then(res => {
            console.log(res.data)
        })  
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.containerTask}>
                <TouchableOpacity style={styles.sombra}>
                    <View style={styles.taskSuperior}>
                        <Image source={require('../../assets/task.png')}></Image>
                        <Text style={{color: '#000', fontWeight: '600'}}>{ item.nome }</Text>
                    </View>
                    <View style={styles.taskInferior}>
                        <Image source={require('../../assets/calendar.png')} style={styles.calendar}></Image>
                        <Text style={{color: '#FAF8F8'}}>{this.converterData(item)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _renderItemAdm = ({item, index}) => {
        return (
            <View style={styles.containerTask}>
                <TouchableOpacity style={styles.sombra} onLongPress={() => this.avancarAtividade(item)}>
                    <View style={styles.taskSuperior}>
                        <Image source={require('../../assets/task.png')}></Image>
                        <Text style={{color: '#000', fontWeight: '600'}}>{ item.nome }</Text>
                    </View>
                    <View style={styles.taskInferior}>
                        <Image source={require('../../assets/calendar.png')} style={styles.calendar}></Image>
                        <Text style={{color: '#FAF8F8'}}>{this.converterData(item)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    
    render(){
        if(this.state.super_user == 0){
            return(
                <SafeAreaView style={styles.containerGeral}>
                    <View style={styles.containerHeader}>
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}
                            onPress={() => this.props.navigation.navigate('Menu')}>
                            <Text style={styles.textUser}>{this.state.nome}</Text>
                            <Icon color="#FAF8F8" name="keyboard-arrow-down" size={30} />
                        </TouchableOpacity>
                        
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
                        <TouchableOpacity style={styles.buttonContainerBottom} onPress={() => this.props.navigation.navigate('CadastrarSenha')}>
                            <Icon color="#FAF8F8" name="lock" size={20} />
                            <Text style={{color: '#FAF8F8', fontSize:12}}>Senha de confirmação</Text>
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
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}
                            onPress={() => this.props.navigation.navigate('Menu')}>
                            <Text style={styles.textUser}>{this.state.nome}</Text>
                            <Icon color="#FAF8F8" name="keyboard-arrow-down" size={30} />
                        </TouchableOpacity>
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
                                <TouchableOpacity style={styles.buttomNovaAtividadeCarteira} onPress={() => this.adicionarNovaAtividade()}>
                                    <Text style={{color: '#FAF8F8'}}>Nova Atividade</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttomMinhaCarteira}>
                                    <Text style={{color: '#FAF8F8'}}>Minha Carteira</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.containerTasks}>
                            <View style={styles.containerScroll}>
                                <Carousel
                                    ref={(c) => { this._carousel = c; }}
                                    data={this.state.todo}
                                    renderItem={this._renderItemAdm}
                                    sliderWidth={500}
                                    itemWidth={150}
                                />
                            </View>
                        </View>

                        {this.state.ultimaTransferencia ? 
                            <View style={styles.containerExtrato}>
                                <View style={styles.itemExtrato}>
                                    <View style={styles.itemExtratoContainerIcone}>
                                        <Icon color="#FBC531" name="call-received" size={30} />
                                    </View>
                                    <View style={styles.itemExtratoContainerMiddle}>
                                        <Text style={{fontSize: 16,fontWeight:'bold', color: '#FBC531'}}>Transferência Realizada</Text>
                                        <Text style={{fontSize: 16,fontWeight:'600', color: '#FBC531'}}>{this.state.usuarioCred}</Text>
                                    </View>
                                    <View style={styles.itemExtratoContainerData}>
                                        <Text style={{fontSize: 16,fontWeight:'600', color: '#FBC531'}}>{this.state.data}</Text>
                                        <Text style={{fontSize: 16,fontWeight:'600', color: '#FBC531'}}>P${this.state.valor},00</Text>
                                    </View>
                                </View>
                            </View> :

                            <View style={styles.containerExtrato}>
                                <View style={styles.itemExtrato}>
                                    <View style={styles.itemExtratoContainerIcone}>
                                        <Icon color="#FBC531" name="call-made" size={30} />
                                    </View>
                                    <View style={styles.itemExtratoContainerMiddle}>
                                        <Text style={{fontSize: 16,fontWeight:'bold', color: '#FBC531'}}>Transferência Recebida</Text>
                                        <Text style={{fontSize: 16,fontWeight:'600', color: '#FBC531'}}>{this.state.usuarioDeb}</Text>
                                    </View>
                                    <View style={styles.itemExtratoContainerData}>
                                        <Text style={{fontSize: 16,fontWeight:'600', color: '#FBC531'}}>{this.state.data}</Text>
                                        <Text style={{fontSize: 16,fontWeight:'600', color: '#FBC531'}}>P${this.state.valor},00</Text>
                                    </View>
                                </View>
                            </View>
                        }
                        

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
        }
    }
}

export default connect()(Home);