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
        padding: 10,
        backgroundColor: '#FAF8F8',
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        justifyContent:'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.6,
        shadowRadius: 10,
    },
    buttonNovoContato: {
        width: '60%',
        height: '30%',
        backgroundColor: '#FBC531',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerContato: {
        width: '100%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        padding: 10,
        justifyContent:'center',
        alignItems: 'center',

    }
})

export default styles
