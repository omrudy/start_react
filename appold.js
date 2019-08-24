import React,{Component,Fragment} from 'react'

import {View,Text,SafeAreaView,TouchableOpacity,ActivityIndicator,StyleSheet} from 'react-native'

class Title extends Component{
  render(){
    return(
      <View>
        <Text>dari title</Text>
        <Text style={{fontSize:30}}>{this.props.judul}</Text>
        <Text style={{fontSize:30}}>{this.props.dataProps}</Text>
      </View>
    )
  }
}

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading : true,
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    },3000)
  }

  //function
  pressed(param){
    Alert.alert('pressed')
  }

  // start tampilan
  render(){
    return(
      <View style={{flex:1,justifyContent:'center',alignSelf:'center'}}>
        { this.state.isLoading ? (
          <ActivityIndicator size='large' color='black'/>          
        ) : (
          <Fragment>
            <SafeAreaView/>
            <Title
              judul='ini judul'
              dataProps = 'ini data props'
            />
            <TouchableOpacity 
              // jika di tekan panggil pressed
              onPress={()=>this.pressed('rudy')}
              style={{width:100,height:40,backgroundColor:'grey',justifyContent:'center'}}
            >
            
              <Text style={styles.buttonText}>asda</Text>
            
            </TouchableOpacity>
          </Fragment>
        )
        }
      </View>
    )
  }
}



const styles = StyleSheet.create({
  buttonText : {alignSelf:'center',color:'white'}
})