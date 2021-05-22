import React from 'react';
import {Text,View,StyleSheet,SafeAreaView,TextInput,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

const SignUpScreen = ({navigation}) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <SafeAreaView style={tailwind('flex-1 justify-center')}>
      <View style={tailwind('py-10 px-5')}>
        <Text style={tailwind('text-2xl font-bold')}>
          Sign up
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
            onPress={handleSignup}
          >
            <Text style={tailwind('text-white text-center font-bold text-lg')}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={tailwind('mt-2 flex-row justify-center')}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            style={tailwind('ml-1')}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={tailwind('text-blue-500')}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    )
}

export default SignUpScreen;