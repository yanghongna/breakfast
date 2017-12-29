import React,{Component} from 'react'
import styles from '../styles/classify.style.js'
import Seachbox from './seachbox'

import {
    View,
    Text,
    Image,
    ScrollView
}from 'react-native'

class Classify extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <Seachbox/>
                <ScrollView style={{height:600}} showsVerticalScrollIndicator={false}>
                    <View style={styles.classify}>
                        <Text style={styles.title}>热门分类</Text>
                        <View style={styles.list}>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/breakfast.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>早餐</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/baby.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>宝宝辅食</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/cure.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>烘焙</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/healthy.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>食疗养生</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.classify}>
                        <Text style={styles.title}>一日三餐</Text>
                        <View style={styles.list}>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/breakfast.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>早餐</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/lunch.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>午餐</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/dinner.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>晚餐</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/midnight.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>夜宵</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.classify}>
                        <Text style={styles.title}>家常菜谱</Text>
                        <View style={styles.list}>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/fast.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>快手菜</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/soup.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>汤羹</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/vegetarian.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>素食</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/chuan.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>川菜</Text>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/yue.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>粤菜</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/xiajiucai.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>下酒菜</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/xiafancai.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>下饭菜</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/sala.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>凉菜沙拉</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.classify}>
                        <Text style={styles.title}>主食小吃</Text>
                        <View style={styles.list}>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/mianshi.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>面食</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/mishi.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>米饭</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/dianxin.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>点心</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/yinpin.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>饮品</Text>
                            </View>
                        </View>
                        <View style={styles.classify}>
                        <Text style={styles.title}>时令美食</Text>
                        <View style={styles.list}>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/chun.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>春季时令</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/xia.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>夏季时令</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/qiu.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>秋季时令</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/dong.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>冬季时令</Text>
                            </View>
                        </View>
                        <View style={styles.classify}>
                        <Text style={styles.title}>食材</Text>
                        <View style={styles.list}>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/dan.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>禽蛋</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/nai.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>奶制品</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/shuicahn.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>鱼虾水产</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/culiang.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>粗粮</Text>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/shucai.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>蔬菜</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/yue.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>肉类</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/mianshi.jpg')} style={styles.img}/>
                                <Text style={styles.listtext}>面食</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/mishi.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>米饭</Text>
                            </View>
                        </View>
                        <View style={styles.classify}>
                        <Text style={styles.title}>烘焙甜品</Text>
                        <View style={styles.list}>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/pisa.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>披萨</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/binggan.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>饼干</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/mianbao.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>面包</Text>
                            </View>
                            <View style={styles.listbox}>
                                <Image source={require('../img/classify/dangao.jpeg')} style={styles.img}/>
                                <Text style={styles.listtext}>蛋糕</Text>
                            </View>
                        </View>
                    </View>
                    </View>
                    </View>
                    </View>
                </ScrollView>
            </View>
        )
        
    }
}

export default Classify
