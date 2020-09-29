import React from 'react'
import { connect } from 'react-redux';
import { Image, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'

import styles from './style';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cadastrarSenha: '',
            senhaAntiga: '',
            novaSenha: '',
            erro: false
        }
    }
    
    render(){
        return(
            <SafeAreaView style={styles.containerGeral}>
                <View style={styles.containerSuperior}>
                    <Text style={{fontSize: 28, color:"#FAF8F8"}}>Senha Alterada com sucesso</Text>
                </View>
                <View style={styles.containerMiddle}>
                    <Image source={require('../../assets/senha-alterada.png')} style={styles.senha}></Image>
                </View>

                <TouchableOpacity style={styles.buttonConfirmar} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>Confirmar</Text>
                </TouchableOpacity>
                
            </SafeAreaView>
        )
     
    }
}

export default connect()(Login);