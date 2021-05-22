import React from 'react';
import { StyleSheet,useColorScheme,View } from 'react-native';
import { NavigationContainer, DefaultTheme,
  DarkTheme, getFocusedRouteNameFromRoute,DrawerActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/Home/index';
import LandingScreen from './src/screens/Landing/index';
import SignInScreen from './src/screens/SignIn/index';
import SignUpScreen from './src/screens/SignUp/index';
import Profile from './src/screens/Profile/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabs}/>
      <Drawer.Screen name="Account" component={HomeScreen} />
    </Drawer.Navigator>
  )
}

const Stack = createStackNavigator();

const App = ()  => {
  
  const [isAuthenticated,setIsAuthenticated] = React.useState(false);

  const handleOnSignIn = () => {
    setIsAuthenticated(true);
  }

  const handleSignOut = () =>{
    setIsAuthenticated(false);
  }

  const scheme = useColorScheme();

  return (

    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
      {!isAuthenticated ? 
      (<Stack.Screen name="Home"
       component={HomeDrawer}
       options={({ route,navigation }) => ({
        headerTitle: getFocusedRouteNameFromRoute(route),
        headerLeft: () => (
          <Icon
        containerStyle={styles.icon}
        type="ionicon"
        onPress={() =>
               navigation.dispatch(DrawerActions.toggleDrawer())
         }
        name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
      />
        ),
        headerRight: () => (
          <View style={styles.iconContainer}>
            <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
          </View>
        )
      })}
        />
       )
      :
      (
        <>
        <Stack.Screen name="Landing" 
          component={LandingScreen} 
          />
        <Stack.Screen name="Sign In" component={SignInScreen}></Stack.Screen>
        <Stack.Screen name="Sign Up" component={SignUpScreen}></Stack.Screen>
        </>
      )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 60
  }
});

export default App;
