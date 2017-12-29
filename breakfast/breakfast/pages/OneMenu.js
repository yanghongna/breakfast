import React,{Component} from 'react'

import styles from '../styles/onemenu.style.js'

import Detail from './Detail'

import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableHighlight,
    FlatList,
    TabBarIOS
}from 'react-native'


class OneMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:this.props.item
        }
    }
    renderItem(item){
        return(
            <TouchableHighlight
            underlayColor='rgba(0,0,0,0)'
            onPress={()=>{
                this._onPressToDetail(item)
            }}
        >
            <View style={styles.list}>
                <Image style={styles.listImg} source={{uri:item.img}}/>
                <Text style={styles.name}>{item.name}</Text>
            </View>
        </TouchableHighlight>
        )
    }

    _onPressToDetail(item){
        
        this.props.navigator.push({
            title:item.name,
            component:Detail,
            tintColor:'#707070',
            titleTextColor:'#707070',
            translucent:'false',
            interactivePopGestureEnabled:'true',
            passProps:{
                item:item
            }
        })
    }

    render(){
        let item=this.state.list
        return(
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{width:'100%'}}
                >
                    <View style={styles.info}>
                        <Text style={styles.titletwo}>{item.titletwo}</Text>
                        <Text style={styles.text}>专辑</Text>
                        <Text style={styles.titleone}>{item.titleone}</Text>
                    </View>
                    <FlatList
                        data={this.state.list.menu}
                        renderItem={({item})=>this.renderItem(item)}

                    />
                
               </ScrollView>
            </View>
        )
    }

    

   
}

export default OneMenu