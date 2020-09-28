import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native'
import { Saldo } from '../../store/reducers/user/actions'

import Icon from 'react-native-vector-icons/MaterialIcons';


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

    render(){
        return(
            <SafeAreaView style={styles.containerGeral}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.textUser}>{this.state.nome}</Text>
                        <Icon color="#FAF8F8" name="keyboard-arrow-up" size={30} />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.containerMiddle}>
                    

                </View>
                <View style={styles.containerBottom}>
                    
                </View>

            </SafeAreaView>
        )
    }
}

export default connect()(Home);