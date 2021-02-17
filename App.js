import React,{ useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import AppContainer from './src/components/AppContainer/index';


App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{

    setTimeout(()=>{
      setIsLoading(false);
    },3000);

  },[])


  return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          {isLoading ? <AppContainer /> : <AppContainer />}
        </ApplicationProvider>
      </>
  );
}

export default App;
