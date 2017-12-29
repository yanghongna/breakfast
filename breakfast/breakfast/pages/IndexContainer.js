import React,{Component} from 'react'
import styles from '../styles/index.style.js'
import Menulist from './MenuList'
import Search from './Searchpage'

import Swiper from 'react-native-swiper'

import {
    View,
    Text,
    Image,
    TouchableHighlight,
    FlatList,
    ScrollView,
    TouchableOpacity
}from 'react-native'

class IndexContainer extends Component {
    constructor(props){
        super(props)
    }

    _ontoSearch(){
        this.props.navigator.push({
            title:'搜索',
            component:Search,
            tintColor:'#707070',
            titleTextColor:'#707070',
            translucent:'false',
            translucent:'false'
        })
    }

    render(){
        return (
          <View style={styles.container}>
            <ScrollView
              showsVerticalScrollIndicator={false}
             
            >
                <View style={styles.banner}>
                    <Swiper 
                    loop={true}
                    autoplay={true} 
                    autoplayTimeout={3} 
                    horizontal={true}
                    paginationStyle={{bottom: 10}}
                    dot={<View style={{           //未选中的圆点样式
                        backgroundColor: 'rgba(0,0,0,.2)',
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 9,
                        marginBottom: 4,
                    }}/>}
                        activeDot={<View style={{    //选中的圆点样式
                        backgroundColor: 'rgba(0,0,0,.6)',
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 9,
                        marginBottom: 4,
                    }}/>}
                    >
                        <Image style={styles.bannerimg} source={require('../img/banner1.jpg')}/>
                        <Image style={styles.bannerimg} source={require('../img/banner2.jpg')}/>
                        <Image style={styles.bannerimg} source={require('../img/banner3.jpg')}/>
                        <Image style={styles.bannerimg} source={require('../img/banner4.jpg')}/>
                    </Swiper>
                </View>             
                <View style={styles.inpbox}>
                    <TouchableOpacity onPress={()=>{this._ontoSearch()}}>
                    <View style={styles.inp}>
                        <Image source={require('../img/seach.png')} style={styles.search}/>
                        <Text style={styles.searchtext}>搜索 食谱／食材</Text>
                    </View>    
                    </TouchableOpacity>          
                </View>
                <View style={styles.classifybox}>
                    <View style={styles.boxtop}>
                        <TouchableHighlight
                          underlayColor="#eee"
                          style={[styles.box,styles.boxRightBorder]}
                        >
                            <Text>早餐</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                          underlayColor="#eee"
                          style={[styles.box,styles.boxRightBorder]}
                        >
                            <Text>甜点</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                          underlayColor="#eee"
                          style={[styles.box,styles.boxRightBorder]}
                        >
                            <Text>午餐</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                          underlayColor="#eee"
                          style={styles.box}
                        >
                            <Text>晚餐</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.boxbottom}>
                    <TouchableHighlight
                          underlayColor="#eee"
                          style={[styles.box,styles.boxRightBorder]}
                        >
                            <Text>烘焙</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                          underlayColor="#eee"
                          style={[styles.box,styles.boxRightBorder]}
                        >
                            <Text>家常菜</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                          underlayColor="#eee"
                          style={[styles.box,styles.boxRightBorder]}
                        >
                            <Text>中式点心</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                          underlayColor="#eee"
                          style={styles.box}
                        >
                            <Text>更多分类</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.listbox}>
                    <Text style={styles.listTitle}>菜单推荐</Text>
                    <Menulist navigator={this.props.navigator}/>
                </View>
            </ScrollView>
          </View>
        )
        
    }



}

export default IndexContainer
