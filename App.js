import React,{ useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

<<<<<<< HEAD
import AppContainer from './src/components/AppContainer/index';
import Loading from './src/components/Loading/index';
=======
import AppContainer from './src/components/AppContainer';
import Loading from './src/components/Loading';
import AsyncStorage from '@react-native-community/async-storage';

>>>>>>> f38121a218624f558a294d3462e6141d4c79167d

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
<<<<<<< HEAD
          {isLoading ? <Loading /> : <AppContainer />}
=======
          {isLoading ? <Loading /> : <AppContainer/>}
>>>>>>> f38121a218624f558a294d3462e6141d4c79167d
        </ApplicationProvider>
      </>
  );
}

export default App;
