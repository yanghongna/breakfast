import React,{Component} from 'react'
import styles from '../styles/search.style.js'

import {
    View,
    Text,
    Image,
    TextInput
}from 'react-native'

class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            text:''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft:10}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                autoFocus = {true}
                placeholder='搜索菜谱/材料'
                selectionColor='gray'
                keyboardType="default"
                clearButtonMode="while-editing"
                autoCapitalize="none"
                clearTextOnFocus="true"
                
                />
            </View>
        )
    }

}

export default Search

