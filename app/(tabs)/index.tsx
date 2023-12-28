import { StyleSheet , Button ,ActivityIndicator  } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View  } from '../../components/Themed';
import {  apiCallBegan, fakeApiCallBegan  } from '../../store/slices/items';
// import { fetchData } from '../../store/Actions';
import { useAppDispatch } from "../../store/hooks"
import { useSelector, useStore } from 'react-redux';
import { useState, useEffect } from 'react';
import HomeTab from './_HomeTab';
import { RootState } from '../../store/store';

export default function MainScreen() {

  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fakeApiCallBegan());
  },[]);
  const loading = useSelector((state: RootState) => state.items.loading);

  const shirts = useSelector((state:RootState)=>state.items.shirts);
  const shoes = useSelector((state:RootState)=>state.items.shoes);



  return (
    <View style={styles.container}>
      <HomeTab  loading={loading}  />
    {/* <Button title='test' onPress={()=>{}}/> */}
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
