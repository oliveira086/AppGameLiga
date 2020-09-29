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
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerMiddle: {
        width: '100%',
        height: '70%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FAF8F8',
        borderRadius: 10,
        padding: 5
    },
    containerBuy: {
        width: '100%',
        height: '80%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icon: {
        width: '20%',
        height: '30%',
        resizeMode: 'contain'
    },
    containerInferior: {
        width: '100%',
        height: '20%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    containerTextAtividade: {
        width: '80%',
        height: '10%',
        backgroundColor: '#ECECEC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textAtividade: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonInscricao: {
        flexDirection: 'column',
        width: '40%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBC531',
        borderRadius: 10,
    },
    containerSemSaldo: {
        width: '80%',
        height: '50%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FAF8F8',
        borderRadius: 10,
    },
    ilustrationSemSaldo: {
        width: '50%',
        height: '60%'
    },
    buttonSemSaldo: {
        flexDirection: 'column',
        width: '60%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBC531',
        borderRadius: 10,
    }
})

export default styles
