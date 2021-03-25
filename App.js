import React,{ useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import AppContainer from './src/components/AppContainer/index';
import Loading from './src/components/Loading/index';

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
          {isLoading ? <Loading /> : <AppContainer />}
        </ApplicationProvider>
      </>
  );
}

export default App;
