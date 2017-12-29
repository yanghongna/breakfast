import React,{Component} from 'react'
import styles from '../styles/detail.style.js'
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList
}from 'react-native'

class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            item:this.props.item
        }
    }
    renderItem(item){
        return(
            <View style={styles.steps}>
                <Image source={{uri:item.stepsimg}} style={styles.stepsimg}/>
                <Text style={styles.stepsdes}>{item.stepsDes}</Text>
            </View>
        )
    }

    render(){
        const item = this.state.item
        return(
            <View style={styles.container}>
             <ScrollView
              showsVerticalScrollIndicator={false}
             
            >
                <View>
                    <Image style={styles.img} source={{uri:item.img}}/>
                    <View style={styles.box}>
                        <View style={styles.like}>
                            <Image source={require('../img/like.png')} style={styles.icon}/>
                            <Text style={styles.text}>收藏</Text>
                            
                        </View>
                        <View style={styles.like}>
                            <Image source={require('../img/share.png')} style={styles.icon}/>
                            <Text style={styles.text}>分享</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.des}>        {item.detail.des}</Text>
                <View style={styles.stepsbox}>
                    <Text style={styles.title}>步骤</Text>
                    <FlatList
                    data={this.state.item.detail.steps}
                    renderItem={({item})=>this.renderItem(item)}

                    />
                    <View style={styles.tipsbox}>
                        <Text style={styles.title}>小提示</Text>
                        <Text style={styles.tips}>{item.detail.tips}</Text>
                    </View>
                    
                </View>
                </ScrollView>
            </View>
        )
    }

    componentDidMount(){
        console.log(this.state.item)
    }
}

export default Detail


