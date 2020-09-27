import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native'

import { Auth } from '../../store/reducers/auth/actions';

import axios from '../../services/api';

import { store } from '../../store'

import styles from './style';

class Estados extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            estados: [],
            pagina: 0,
            nome: ''
        }
    }

    componentDidMount() {
        this.getEstados()
    }

    getEstados = async () => {
        let token = {token: store.getState().auth.token}
        await axios.post('/getEstados', token ).then(response => {
            console.log(response.data)
            this.setState({estados: response.data})
        }).
        catch(
        )
    }

    cadastrarEstado = async  () => {
        let dados = {
            token: store.getState().auth.token,
            nome: this.state.nome,
            visivel: 0
        }
        await axios.post('/createEstados', dados).then(res => {
            this.props.navigation.navigate('Estados')
        })
    }

    novoEstado = () => {
        this.setState({pagina: 1})
    }

    voltar = () => {
        this.setState({pagina: 0})
    }

    deleteEstado = async (estado) => {
        let dados = {
            token: store.getState().auth.token,
            id: estado.id,
            nome: estado.nome,
            visivel: 1
        }
        await axios.post('/deleteEstados', dados).then(res => {
            console.log(res.data)
        })
    }

    renderItem = ({ item }) => {
        if(item.visivel == 0){
            return ( 
                <TouchableOpacity style={styles.containerEstadoList} onLongPress={() => this.deleteEstado(item)}>
                    <Text style={{color:'#00183C', fontSize: 18, fontWeight: 'bold'}}>{item.nome}</Text>
                </TouchableOpacity> 
            )
        } else {
            return
        }
        
    }
    
    render(){
        if(this.state.pagina == 0){
            if(this.state.estados.length == 0){
                return(
                    <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
                        <View style={styles.containerSuperior}>
                            <Text style={{fontSize: 32, color:"#FAF8F8"}}>Estados</Text>
                        </View>
                        
                        <View style={styles.containerSemEstados}>
                            <Text style={{fontSize: 22, color:'#00183C'}}>Nenhum Estado Cadastrado</Text>
                        </View>
        
                        <View style={styles.containerInferior}>
                            <TouchableOpacity style={styles.buttonNovoEstado} onPress={() => this.novoEstado()}>
                                <Text style={{color: '#FAF8F8', fontWeight: 'bold'}}>Cadastrar Novo Estado</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                )
            } else {
                return(
                    <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
                        <View style={styles.containerSuperior}>
                            <Text style={{fontSize: 32, color:"#FAF8F8"}}>Estados</Text>
                        </View>
                        
                        
                        <FlatList
                            data={this.state.estados}
                            keyExtractor={(item) => item.id}
                            renderItem={this.renderItem}
                            showsVerticalScrollIndicator={false}
                            style={styles.containerMiddle}>
                        </FlatList>
        
                        <View style={styles.containerInferior}>
                            <TouchableOpacity style={styles.buttonNovoEstado} onPress={() => this.novoEstado()}>
                                <Text style={{color: '#FAF8F8', fontWeight: 'bold'}}>Cadastrar Novo Estado</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                )
            }
        } else {
            return(
                <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
                    <View style={styles.containerSuperior}>
                        <Text style={{fontSize: 32, color:"#FAF8F8"}}>Adicionar Novo Estado</Text>
                    </View>

                    <TextInput 
                        maxLength={30}
                        onChangeText={nome => this.setState({ nome })}
                        placeholder='Nome do Estado'
                        style={styles.estiloInput}
                        value={this.state.nome}>
                    </TextInput>

                    <View style={styles.containerInferior}>
                        <TouchableOpacity style={styles.buttonNovoEstado} onPress={() => this.cadastrarEstado()}>
                            <Text style={{color: '#FAF8F8', fontWeight: 'bold'}}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginTop: '10%'}} onPress={() => this.voltar()}>
                            <Text style={{color: '#FAF8F8', fontWeight: 'bold'}}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            )
        }
        
    }
}

export default connect()(Estados);