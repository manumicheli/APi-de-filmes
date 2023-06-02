import React,{Component} from 'react';
import{View,Text,Image,StyleSheet} from 'react-native';

export default class Filme extends Component{
    render(){
        return(
            <View>
                <Text>Ola API</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    nomeFilme:{
        Color: 'White',
        fontSize:18,
        fontWeight: 'bold'
    }
     
});