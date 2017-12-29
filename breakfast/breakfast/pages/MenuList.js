import React,{Component} from 'react'

import styles from '../styles/menulist.style.js'
import OneMenu from './OneMenu'

import {
    View,
    Text,
    Image,
    FlatList,
    TouchableHighlight
}from 'react-native'


class Menulist extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    
    _onPressToMenuList(item){
        this.props.navigator.push({
            title:'专辑详情',
            component:OneMenu,
            tintColor:'#707070',
            titleTextColor:'#707070',
            translucent:'false',
            interactivePopGestureEnabled:'true',
            passProps:{
                item:item
            }
        })
    }


    renderItem(item){
        return (
            <TouchableHighlight
            underlayColor='rgba(0,0,0,0)'
                onPress={()=>{
                    this._onPressToMenuList(item)
                }}
            >
                <View style={styles.list}>
                    <Image
                    style={styles.listimg}
                    source={{uri:item.bgimg}}/>
                    <View style={styles.listcorver}>
                        <Text style={styles.titleone}>{item.titleone}</Text>
                        <Text style={styles.titletwo}>{item.titletwo}</Text>
                    </View>
                
                </View>
            </TouchableHighlight>
        )
    }
    

    render(){
        return (
            <View>
               <FlatList
               data={this.state.list}
               renderItem={({item})=>this.renderItem(item)}

               />
            </View>
           
        )
    }

    componentDidMount(){
        fetch('http://localhost:8081/mock/menulist.json')
            .then((response)=> response.json())
            .then((res)=>{
                this.setState({
                    list:res.subjects
                })
               
            })
    }


}

export default Menulist 
