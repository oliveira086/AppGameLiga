import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerGeral: {
        width: '100%',
        height: '100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#00183C"
    },
    containerSuperior: {
        flexDirection: 'column',
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerMiddle: {
        width: '100%',
        paddingTop: 10
    },
    containerInferior: {
        flexDirection: 'column',
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerEstadoList: {
        flexDirection: 'column',
        width: '80%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        
    },
    buttonNovoEstado: {
        width: '80%',
        height: '30%',
        backgroundColor: '#FBC531',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    estiloInput: {
        width: '60%',
        height: '8%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        paddingLeft: 10
    },
    containerSemEstados: {
        flexDirection: 'column',
        width: '80%',
        height: '30%',
        backgroundColor: '#FAF8F8',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles
