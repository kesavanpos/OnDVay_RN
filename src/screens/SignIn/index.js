import React from 'react';
import {Text,View,StyleSheet,SafeAreaView,TextInput,TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    }
})

const handleOnSignIn = () =>{

}

const SignInScreen = ({ navigation }) => {
  const[email,setEmail] = React.useState('')  ;
  const[password,setPassword] = React.useState('')  ;
    return(
      <SafeAreaView style={tailwind('flex-1 justify-center')}>
      <View style={tailwind('py-10 px-5')}>
        <Text style={tailwind('text-4xl font-bold')}>
          Sign In
        </Text>

        <View style={tailwind('mt-10')}>
          <TextInput
            placeholder="Email"
            onChangeText={(val) => setEmail(val)}            
            style={tailwind('text-lg border-b-2 border-blue-500')}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(val) => setPassword(val)}            
            secureTextEntry
            style={tailwind('text-lg border-b-2 border-blue-500 mt-5')}
          />

          <TouchableOpacity
            style={tailwind('bg-blue-500 rounded-lg py-3 mt-10')}
            onPress={handleOnSignIn}
          >
            <Text style={tailwind('text-white text-center font-bold text-lg')}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    );
  };
   
  export default SignInScreen;