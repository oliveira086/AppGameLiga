import React from 'react'
import { connect } from 'react-redux';
import { Image, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { store } from '../../store'
import { ValorTransferencia, UserTransferencia, Saldo } from '../../store/reducers/user/actions'
import axios from '../../services/api';
import styles from './style';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            saldo:''
        }
    }

    async componentDidMount() {
        let token = {token: store.getState().auth.token}
        axios.post('/users/getUser', token).then( res => {
            this.setState({saldo: res.data.saldo})
        })  
    }

    async voltarHome () {
        const { dispatch } = this.props
        await dispatch(Saldo(this.state.saldo))
        await dispatch(ValorTransferencia(''))
        await dispatch(UserTransferencia(''))

        this.props.navigation.navigate('Home', {saldo: this.state.saldo})
    }
    
    render(){
        return(
            <SafeAreaView style={styles.containerGeral}>
                <View style={styles.containerSuperior}>
                    <Text style={{fontSize: 28, color:"#FAF8F8"}}>Transferência Realizada</Text>
                </View>
                <View style={styles.containerMiddle}>
                    <Image source={require('../../assets/Aprovado.png')} style={styles.senha}></Image>
                </View>

                <TouchableOpacity style={styles.buttonConfirmar} onPress={() => this.voltarHome()}>
                    <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>Confirmar</Text>
                </TouchableOpacity>
                
            </SafeAreaView>
        )
     
    }
}

export default connect()(Login);