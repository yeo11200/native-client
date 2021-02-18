import React,{ useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import AppContainer from './src/components/AppContainer';
import Loading from './src/components/Loading';
import AsyncStorage from '@react-native-community/async-storage';


App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{

    const removeStorage = async () => {
      await AsyncStorage.removeItem('test');
    }
    removeStorage();
    setTimeout(()=>{
      setIsLoading(false);
    },3000);

  },[])


  return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          {isLoading ? <Loading /> : <AppContainer/>}
        </ApplicationProvider>
      </>
  );
}

export default App;
