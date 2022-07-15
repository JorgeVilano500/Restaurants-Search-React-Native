import { FlatList, View} from "react-native"
import CategoryItem from "./CategoryItem"


export default function Categories({categories, setTerm, term}) {
    return (
       <View>
            <FlatList
        data={categories}
        renderItem={({item, index}) => { // renderItem iterates over commonCategories array
          console.log(item)
          return (
            <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
            />
          )
        }}
        keyExtractor={(category) => category}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
       
       </View>
    )
}