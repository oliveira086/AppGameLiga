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
        justifyContent:'center',
        alignItems: 'center'
    },
    containerMiddle: {
        width: '100%',
        height: '60%',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    buttonConfirmar: {
        width: '60%',
        height: '15%',
        backgroundColor: '#FBC531',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInput: {
        width: '90%',
        height: '20%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#FAF8F8'
    },
    input:{
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 60,
        color: '#00183C'
    },
    containerAviso: {
        width: '80%',
        height: '60%',
        borderRadius: 10,
        justifyContent:'space-around',
        alignItems:'center'
    },
    erro: {
        width: '70%',
        height: '50%'
    },
    containerButtonError: {
        width: '60%',
        height: '10%',
        backgroundColor: '#FAF8F8',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default styles
