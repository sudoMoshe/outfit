
import { StyleSheet } from 'react-native';
import {  View } from '../../components/Themed';
import ItemPicker from '../../components/ItemPicker';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function TabShoesScreen() {
  
  const shoes = useSelector((state:RootState)=>state.items.shoes);
  // shoes.sizes.map()
  return (
    
    <View style={styles.container}>
            <ItemPicker numColumns={5} category="shoes" items={shoes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
