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
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    containerMiddle: {
        width: '100%',
        height: '50%',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    buttonConfirmar: {
        width: '60%',
        height: '20%',
        backgroundColor: '#FBC531',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInput: {
        flexDirection: 'row',
        width: '90%',
        height: '40%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
    },
    input:{
        width: '60%',
        height: '100%',
        paddingLeft: 10,
        justifyContent:'center',
        alignItems: 'center',
        fontSize: 60,
        color: '#FAF8F8'
    },
    containerAviso: {
        width: '80%',
        height: '60%',
        borderRadius: 10,
        justifyContent:'space-around',
        alignItems:'center'
    },
    erro: {
        width: '35%',
        height: '50%'
    },
    containerButtonError: {
        width: '60%',
        height: '20%',
        backgroundColor: '#FAF8F8',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default styles
