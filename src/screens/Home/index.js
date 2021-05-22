import React from 'react';
import {View,StyleSheet,ActivityIndicator,FlatList,TouchableOpacity,Text} from 'react-native';
import axiosService from '../../services/index';

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
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

const HomeScreen = ({navigation }) => {

    const[isLoading,setIsLoading] = React.useState(false);
    const[dataSource,setDataSource] = React.useState([]);
    const [selectedId, setSelectedId] = React.useState(null);

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
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
              style={styles.item}
              onPress={() => getItem(item)}>
              {item.title}
            </Text>
          </View>
        );
      };
    
      const getItem = (item) => {
        //Function for click on an item
        alert('Id: ' + item.id + ' Value: ' + item.value);
      };

    const ItemSeparatorView = () => {
        return (
          // FlatList Item Separator
          <View
              style={{
                  height: 0.5,
                  width: '100%',
                  backgroundColor: '#C8C8C8'
              }}
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
              //console.log(response);
            setIsLoading(false);
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