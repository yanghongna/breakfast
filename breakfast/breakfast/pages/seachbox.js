import React,{Component} from 'react'
import {StyleSheet} from 'react-native'

import {
    View,
    Text,
    Image
}from 'react-native'

class Seachbox extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.box}>
                <Image source={require('../img/seach.png')} style={styles.search}/> 
                <Text style={styles.font}>搜索 菜谱</Text>
            </View>
        )
        
    }
}

var styles=StyleSheet.create({
    box:{
        width:'100%',
        height:30,
        backgroundColor:'#eee',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginBottom:20
    },
    font:{
        fontSize:12,
        color:'#8a8a8a',
        textAlign:'center',
        lineHeight:20
    },
    search:{
        width:16,
        height:16,
        marginRight:10
    }
})

export default Seachbox
