import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
       
        width:'100%',
        paddingLeft:'2%',
        paddingRight:'2%'
    },
    header:{
        width:'100%',
        height:28,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:16,
        marginTop:4
    },
    info:{
        width:'100%',
        height:160,
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#eee',
        borderBottomWidth:1,
       
    },
    img:{
        width:80,
        height:80,
        borderRadius:40,
        marginBottom:20
    },
    box:{
        height:40,
        width:'100%',
       flexDirection:'row',
       lineHeight:40,
       borderBottomColor:'#eee',
       borderBottomWidth:1,
       borderStyle:'solid',
    },
    text:{
        fontSize:14,
        lineHeight:40,
        paddingLeft:10,
        color:'#333',
        flex:1
    },
    icon:{
        width:20,
        height:20,
        marginTop:12
    }
})