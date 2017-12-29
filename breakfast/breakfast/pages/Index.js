import React,{Component} from 'react'
import styles from '../styles/index.style.js'
import IndexContainer from './IndexContainer'

import {
    View,
    Text,
    NavigatorIOS,
    Image,
    TextInput,
    TouchableHighlight
}from 'react-native'

class Index extends Component {
    constructor(props){
        super(props)
       
    }
    render() {
        return (
          
                <NavigatorIOS
                    initialRoute={{
                    component: IndexContainer,
                    title: '菜谱',
                    shadowHidden:true,
                    translucent:false
                    }}
                    style={{flex: 1,backgroundColor:'#fff'}}
                />
               
           
          
        );
    }
    
    
}

export default Index
