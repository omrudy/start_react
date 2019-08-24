import React from 'react'
import {View,Text,Dimensions,SafeAreaView,ScrollView} from 'react-native'

const width_  = Dimensions.get('screen').width
const heigth_ = Dimensions.get('screen').height


//header
class Header extends React.Component{
  render(){
    return(
      <View style={{width:width_,height:heigth_*0.09,backgroundColor:'#3498DB',justifyContent:'center'}}>
        <Text style={{marginLeft:20,fontSize:25,color:'white',fontWeight:'bold'}}>{this.props.title}</Text>
      </View>
    )
  }
}

class List extends React.Component{
  render(){
    return(
      <View style={{width:width_*0.95,height:heigth_*0.12,marginHorizontal:10,backgroundColor:'grey',marginTop:5,justifyContent:'center'}}>
        {/* lingkaran */}
        <View
          style={{marginLeft:5,width:80,height:80,borderRadius:100,backgroundColor:'green'}}
        />
      </View>
    )
  }
}

//component utama
export default class App extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View></View>
        <View></View>
        <SafeAreaView backgroundColor='#3498DB'/>
        {/* header */}
        <Header
          title = 'Daftar Surat'
        />
        {/* list */}
        <ScrollView style={{flex:1}}>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
        </ScrollView>
      </View>      
    )
  }
}