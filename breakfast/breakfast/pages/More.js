import React,{Component} from 'react'
import styles from '../styles/more.style.js'
import IndexContainer from './IndexContainer'
import {
    View,
    Text,
    Image,
    NavigatorIOS
}from 'react-native'

class More extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
               <View style={styles.header}>
                <Text style={styles.title}>更多</Text>
               </View>
               
                <View style={styles.info}>
                    <Image style={styles.img} source={require('../img/banner1.jpg')}/>
                    <Text>厨友：11111111111</Text>                   
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/story.png')} style={styles.icon}/>
                    <Text style={styles.text}>厨房故事</Text>
                    <Image source={require('../img/right.png')} style={styles.icon}/>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/favorite.png')} style={styles.icon}/>
                    <Text style={styles.text}>菜谱收藏</Text>
                    <Image source={require('../img/right.png')} style={styles.icon}/>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/time.png')} style={styles.icon}/>
                    <Text style={styles.text}>历史记录</Text>
                    <Image source={require('../img/right.png')} style={styles.icon}/>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/good.png')} style={styles.icon}/>
                    <Text style={styles.text}>用的不错，鼓励一下</Text>
                    <Image source={require('../img/right.png')} style={styles.icon}/>
                </View>
            </View>
        )
        
    }
}

export default More


