import React,{Component} from 'react'

import BasketContainer from './BasketContainer'

import {
    View,
    Text,
    Image,
    NavigatorIOS
}from 'react-native'

class Basket extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <NavigatorIOS
               initialRoute={{
                component: BasketContainer,
                title: '菜篮子',
                shadowHidden:true
               }}
               style={{flex: 1}}
            />
        )
       
    }
}

export default Basket
