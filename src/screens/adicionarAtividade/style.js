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
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerMiddle: {
        width: '100%',
        height: '70%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    estiloInput: {
        width: '60%',
        height: '10%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        paddingLeft: 10,
        zIndex: 5
    },
    buttonCadastrar: {
        flexDirection: 'column',
        width: '40%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBC531',
        borderRadius: 10,
        zIndex: 4
    },
    picker: {
        width: '60%',
        height: '10%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 1
    },
    datePicker: {
        width: '60%',
        height: '20%',
        backgroundColor: '#ECECEC',
        justifyContent:'center',
        borderRadius: 10,
    }
})

export default styles
