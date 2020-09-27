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
    containerHeader: {
        flexDirection: 'column',
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerMiddle: {
        width: '100%',
        height: '50%'
    },
    containerBottom: {
        flexDirection: 'row',
        width: '100%',
        height: '20%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textUser: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FAF8F8'
    },
    buttonContainerBottom: {
        flexDirection: 'column',
        width: '20%',
        height: '60%',
        borderRadius: 10,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#7B868E',
    },
    containerCarteira: {
        width: '100%',
        height: '40%',
        backgroundColor: '#FAF8F8',
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        zIndex: 10,
    },
    containerTasks: {
        width: '100%',
        height: '50%',
        backgroundColor: '#ECECEC',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        zIndex: 9,
        marginTop: -45
    },
    containerExtrato: {
        width: '100%',
        height: '32%',
        backgroundColor: '#313A8A',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        zIndex: 8,
        marginTop: -45
    },
    containerCarteiraTop: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        paddingLeft: 20
    },
    containerCarteiraBottom: {
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        padding: 2
    },
    buttomTransferirCarteira: {
        flexDirection: 'column',
        width: '28%',
        height: '80%',
        backgroundColor: '#313A8A',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12
    },
    buttomNovaAtividadeCarteira: {
        flexDirection: 'column',
        width: '28%',
        height: '80%',
        backgroundColor: '#EB5757',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12
    },
    buttomMinhaCarteira: {
        flexDirection: 'column',
        width: '28%',
        height: '80%',
        backgroundColor: '#FBC531',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12
    }
})

export default styles
