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
        height: '60%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FAF8F8',
        borderRadius: 10,
        padding: 5
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
    }
})

export default styles
