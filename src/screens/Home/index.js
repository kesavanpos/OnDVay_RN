import React from 'react';
import {View,StyleSheet,ActivityIndicator,FlatList,TouchableOpacity,Text} from 'react-native';
import axiosService from '../../services/index';
import tailwind from 'tailwind-rn';

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 30,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={getItem} style={[styles.item, style]}>
      <Text style={
                tailwind('p-2 m-5 h-10 bg-purple-800 text-left text-black uppercase content-center bg-opacity-40')}>
                  {item.title}</Text>
    </TouchableOpacity>
  );

const HomeScreen = ({navigation }) => {

    const[isLoading,setIsLoading] = React.useState(false);
    const[dataSource,setDataSource] = React.useState([]);
    const [selectedId, setSelectedId] = React.useState(null);

    let DATA = [               
      ];

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';    
        return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
    };

    const ItemView = ({item}) => {
        return (
          // FlatList Item
          <View>
            <Text
              style={
                tailwind('p-2 m-5 h-40 bg-purple-800 text-left text-black uppercase content-center bg-opacity-40')}
              onPress={() => getItem(item)}>
              {item.body}
              {item.title}
            </Text>            
          </View>
        );
      };
    
      const getItem = (item) => {
        //Function for click on an item
        //alert('Id: ' + item.id + ' Value: ' + item.value);
        try{
          //navigation.navigate('Sign In');
        }
        catch(e){
          alert(e);
        }
        
      };

    const ItemSeparatorView = () => {
        return (
          // FlatList Item Separator
          <View              
          />
        );
      };

    React.useEffect(() =>{
        setIsLoading(true);
        fetchAllRiderList();
    },[]);

    const fetchAllRiderList = () => {        
        const URL = `/posts`;
    
        axiosService
          .request({
            url: URL,
            method: 'GET'
          })
          .then(response => {
            debugger;
            console.log(response.data);
            setIsLoading(false);
            DATA = response.data;
            setDataSource(DATA);
          })
          .catch(error => {            
          });
      };

        if(isLoading) {
            //returning the loader view while data is loading
            return (
              <View style={{ flex: 1, paddingTop: 20 }}>
                <ActivityIndicator />
              </View>
            );
          }
          else{
              return(
                <View style={styles.MainContainer}>
                    
                 <FlatList
                    data={dataSource}
                     //data defined in constructor
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}
                />
                </View>
              )
          }
}

export default HomeScreen;