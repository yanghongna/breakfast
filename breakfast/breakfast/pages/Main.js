import React, {Component} from 'react'
import styles from '../styles/main.style.js'
import Index from './Index'

import Classify from './Classify'
import Basket from './Basket'
import More from './More'

import icons from '../styles/base64'

import {
    View,
    Text,
    TabBarIOS,
    StatusBar
}from 'react-native'

class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedTab:'index'
        }
    }

    render(){
        return (
         <View style={styles.container}>
        <StatusBar barStyle='dark-content'/>
            <TabBarIOS
            tintColor="#ffd700"
            barTintColor="#fff">
            <TabBarIOS.Item
              title="首页"
              icon={{uri:icons.index,scale:4.5}}
              selected={this.state.selectedTab === 'index'}
              onPress={() => {
                this.setState({
                  selectedTab: 'index',
                });
              }}>
              <Index/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title="分类"
              icon={{uri:icons.classify,scale:4.5}}
              selected={this.state.selectedTab === 'classify'}
              onPress={() => {
                this.setState({
                  selectedTab: 'classify'
                });
              }}>
              <Classify/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              icon={{uri:icons.basket,scale:4.5}}
              title="菜篮子"
              selected={this.state.selectedTab === 'barket'}
              onPress={() => {
                this.setState({
                  selectedTab: 'barket'
                });
              }}>
              <Basket/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              icon={{uri:icons.more,scale:4.5}}
              title="更多"
              selected={this.state.selectedTab === 'more'}
              onPress={() => {
                this.setState({
                  selectedTab: 'more'
                });
              }}>
              <More/>
            </TabBarIOS.Item>
          </TabBarIOS>
        </View>
        )
    }
}

export default Main