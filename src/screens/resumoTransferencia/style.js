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
        alignItems: 'center'
    },
    containerBottom: {
        width: '100%',
        height: '20%',
        justifyContent:'center',
        alignItems: 'center'
    },
    flag: {
        width: '40%',
        height: '30%',
        backgroundColor: '#FBC531',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        marginLeft: '5%',
        zIndex: 10,
        
    },
    containerItem: {
        width: '80%',
        height: '25%',
        
    },
    containerDado: {
        width: '100%',
        height: '60%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        marginTop: '-2%',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    buttonConfirmar: {
        width: '60%',
        height: '50%',
        backgroundColor: '#FBC531',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles
