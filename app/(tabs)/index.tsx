import { StyleSheet  } from 'react-native';

import {  View  } from '../../components/Themed';
import {  apiCallBegan, fakeApiCallBegan  } from '../../store/slices/items';

import { useAppDispatch } from "../../store/hooks"
import { useSelector } from 'react-redux';
import {  useEffect } from 'react';
import HomeTab from './_HomeTab';
import { RootState } from '../../store/store';

export default function MainScreen() {

  const dispatch = useAppDispatch();
  useEffect(()=>{
    // use fake api
    // dispatch(fakeApiCallBegan());
    dispatch(apiCallBegan());
  },[]);
  const loading = useSelector((state: RootState) => state.items.loading);



  return (
    <View style={styles.container}>
      <HomeTab  loading={loading}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
