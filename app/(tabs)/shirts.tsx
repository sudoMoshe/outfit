import { StyleSheet } from 'react-native';


import {  View } from '../../components/Themed';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ItemPicker from '../../components/ItemPicker';

export default function TabShirtsScreen() {
  
  const shirts = useSelector((state:RootState)=>state.items.shirts);
  // shirts.sizes.map()
  return (
    <View style={styles.container}>
            <ItemPicker category="shirts" items={shirts}/>
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
