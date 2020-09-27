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
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTask: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskSuperior: {
        width: '90%',
        height: '60%',
        backgroundColor: '#FAF8F8',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    taskInferior: {
        flexDirection: 'row',
        width: '90%',
        height: '30%',
        backgroundColor: '#7B868E',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    sombra: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.6,
        shadowRadius: 5,
    },
    calendar: {
        width: '11%',
        height: '35%',
        marginRight: 10
    },
    containerInferior: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInformativo: {
        width: '60%',
        height: '30%',
        backgroundColor: '#FAF8F8',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles
