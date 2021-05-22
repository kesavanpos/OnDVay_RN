import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

const LandingScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>            
            <Button title="Go to Sign In" onPress={() => navigation.navigate('Sign In')}></Button>
        </View>
    )
}

export default LandingScreen;