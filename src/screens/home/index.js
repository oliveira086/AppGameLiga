import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'

import { store } from '../../store'
import axios from '../../services/api';

import styles from './style'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: 'usuario',
            saldo: 'P$ 0.00',
            super_user: ''
        }
    }

    componentDidMount() {
        let token = {token: store.getState().auth.token}
        axios.post('/users/getUser', token).then( res => {
            this.setState({
                nome: res.data.nome,
                saldo: `P$ ${res.data.saldo}.00`,
                super_user: res.data.super_user
            })
        })
    }

    estados = () => {
        this.props.navigation.navigate('Estados')
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
                                <TouchableOpacity style={styles.bottomTransferirCarteira}>
                                    <Text style={{color: '#FAF8F8'}}>Transferir</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomNovaAtividadeCarteira}>
                                    <Text style={{color: '#FAF8F8'}}>Nova Atividade</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomMinhaCarteira}>
                                    <Text style={{color: '#FAF8F8'}}>Minha Carteira</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.containerTasks}></View>
                        <View style={styles.containerExtrato}></View>
    
                    </View>
                    <View style={styles.containerBottom}>
                        <TouchableOpacity style={styles.buttonContainerBottom}></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerBottom}></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerBottom}></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerBottom}></TouchableOpacity>
                    </View>
    
                </SafeAreaView>
            )
        } else {
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
                                <TouchableOpacity style={styles.buttomNovaAtividadeCarteira}>
                                    <Text style={{color: '#FAF8F8'}}>Nova Atividade</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttomMinhaCarteira}>
                                    <Text style={{color: '#FAF8F8'}}>Minha Carteira</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.containerTasks}></View>
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