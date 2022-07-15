import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';


export default function HomeScreen () {
  // let term = 'Burger'
  const [term, setTerm] = useState('Burger');

  const commonCategories = [
    {
      name: 'Burger',
      imageUrl: require('../assets/images/burger.png')
    },
    {
      name: 'Pizza',
      imageUrl: require('../assets/images/pizza.png')
    },{
      name: 'Dessert',
      imageUrl: require('../assets/images/cake.png')
    },{
      name: 'Pasta',
      imageUrl: require('../assets/images/pasta.png')
    },
    {
      name: 'Steak',
      imageUrl: require('../assets/images/steak.png')
    },
    {
      name: 'Drinks',
      imageUrl: require('../assets/images/smoothies.png')
    }
  ]

  // setTimeout(() => {
  //   term='Pizza'
  // }, 3000)


    return(
        
    <View style={styles.container}>
    <Header />
    <Text>Fuck</Text>
    <Search 
    setTerm={setTerm}
    />
    {/* <CategoryItem 
      name='Burger'
      imageUrl={require('../assets/images/burger.png')}
    /> */}
    <Categories 
      categories={commonCategories}
      setTerm={setTerm}
      term={term}
    />
    <Restaurants
    term={term}
    />
    <StatusBar style="auto" />
  </View>

    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(253, 253, 253)',
      flex: 1
    },
  });
  