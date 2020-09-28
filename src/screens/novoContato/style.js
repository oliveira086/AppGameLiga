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
        height: '15%',
        backgroundColor: '#FBC531',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInput: {
        width: '90%',
        height: '15%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        justifyContent:'center',
        alignItems: 'center',
    },
    input:{
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        justifyContent:'center',
        alignItems: 'center',
    }
})

export default styles
