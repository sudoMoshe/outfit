import {  StyleSheet  } from 'react-native';

import { View   } from '../../components/Themed';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ItemPicker from '../../components/ItemPicker';
export default function TabPantsScreen() {
    const pants = useSelector((state:RootState)=>state.items.pants);
  return (
    <View style={styles.container}>
            <ItemPicker category="pants" items={pants}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
