# React Native APP

### reaact native navigation
- react native navigation 이란
    - react native에서 링크를 연동해주는 역할을 해주는 npm이다(react-router-dom)
    - navigate, push의 차이 
        - navigate : 지속적으로 쌓이는 것이 아니라, 해당하는 링크가 있다면 이동하고, 그것이 아니라면 stack를 쌓는다.
        - push : 지속적으로 stack 쌓아서 해당하는 페이지를 이동
    - navigate로 이동을 하면 header가 생긴다 하지만 이부분에 있어서 header를 없애는 방법은
        - Stack.Navigator에 사용할 경우 "screenOptions={{headerShown: false}}"
        - Stack.Screen에 사용할 경우 "options={{headerShown: false}}"
```npm

// native 설치
// npm
npm install @react-navigation/native

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack

// yarn
yarn add @react-navigation/native

yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

yarn add @react-navigation/stack
```

```js
const stock = createStackNavigator() // Navigator와 Screen을 포함고있다.

NavigationContainer // navigator tree와 navigation들을 포함한다.

Screen // name === route path component = component
```

- react native storage 사용
    - AsyncStorage
        - 기존에는 사용이 가능했지만, 지금은 사상되어서 새로운 npm 설치
        - 사용방법은 localStroage와 같다.
        - getItems, setItems, removeItems, clear

```npm
npm install --save @react-native-community/async-storage
```

- react native 특성
    - event와 해당하는 데이터가 다르다 
    - ex) onClick === onParse, onChange(e.target.name)이 안먹힘 
    - 해당 input이 forue가 없을 떄 KeyBoard.demiss를 하면 키보드가 내려감
    - Platform.OS = 해당하는 Platform을 알수있다. ex) IOS, android
    - android의 경우 BackWord를 제공함
    - 해당 Layout 최상단에 flex를 넣어야한다.
    - justifyContent, alignItems : center를 넣으면 가운데 정렬을 한다.
    - alignSelf를 사용하게 되면 해당하는 tag에 대한 레이아웃을 잡아 줄 수 있다. 

```js
    useEffect(() => {
        if(Platform.OS === 'android'){
            BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        }

        return () => {
            if(Platform.OS === 'android'){
                BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
            }   
        }
    }, [])

    const handleBackButton = () => {
        // exitApp()은 App을 종료 해당 페이지에 도착하면 앱 종료
        BackHandler.exitApp();
        return true;
    }
```

- react native Loading
    - 앱이 시작할 때 해당하는 app loading을 하게되는 경우가 있다. 

    - 왜냐면 로딩을 통해서 회사에 대한 로그를 알 수 있기 때문이다

    - ImageBackGround를 통해서 Loading 화면을 그릴 수 있고, 해당 하는 시간을 setTimeout으로 지정을 할 수 있다.

```js
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{

    setTimeout(()=>{
      setIsLoading(false);
    },3000);

  },[])

  return(
      {isLoading ? <Loading /> : <AppContainer/>}
  )

  <ImageBackground source={image} style={{width:"100%",height:"100%"}} />
```

- react native ui framework

    - ui-kitten : ui framework를 사용한다.

    - ApplicationProvider로 감싸서, 해당하는 컴포넌트를 사용을 하게 한다.

```npm
npm i @ui-kitten/components @eva-design/eva react-native-svg

cd ios && pod install
```

- react native toast

```npm
npm install --save react-native-toast-message
// https://www.npmjs.com/package/react-native-toast-message
```

- axios
    - axios란 네트워크를 통신하기 위해서 사용을 한다.
    - axios : get, post, put, delete의 메소드를 사용해서 각 각 맞는 Rest API로 쏠 수 있다.
    - 해당하는 네트워크를 사용하려면, 권한 설정 및, 해당 플랫폼별로 설정을 해줘야한다.
    - localhost가 아닌 10.0.2.2로 변경
    - app 통신은 http/2로 작업을 해야한다.
```npm
npm install --save axios

// https://github.com/facebook/react-native/issues/24039 : axios 에러시
```

```js
axios.get('', {config});
axios.post('', {data}, {config});
axios.put('', {data}, {config});
axios.delete('', {config});
```


- react native babel 정리
```npm
npm install --save babel-plugin-module-resolver

yarn add babel-plugin-module-resolver  
```


- react native typescript
```npm
npm install typescript @types/react @types/react-native --save-dev
// typescript: typescript를 설치한다.
// @types/react: typescript에 필요한 react의 type을 설치한다.
// @types/react-native: typescript에 필요한 react-native의 type을 설치한다.

or 
// 시작하자마자 typescript, 적용
react-native init SampleProject --template typescript
```

- react native styled-component 
    - styled-compoent를 사용하는 이유
        - style를 다양한 컴포넌트들을 재사용하기위해서 사용을 한다.
        - 가변으로 사용이 되기 때문에, 더욱 재 사용하기 쉽다.
    - 단점
        - 번들 크기가 커지고, 인젝션이 너무 커진다.
        - 그래서 build 속도에서 차이가 날수가 있다.
```npm
npm install --save styled-components
npm install --save-dev babel-plugin-styled-components @types/styled-components @types/styled-components-react-native
```