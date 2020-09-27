import {
    createAppContainer
  } from 'react-navigation';
  
import {createStackNavigator} from 'react-navigation-stack'
  
import Login from './screens/login/index'
import Cadastro from './screens/cadastro/index'
import Home from './screens/home/index'
import Estados from './screens/estados/index'
import AdicionarAtividade from './screens/adicionarAtividade/index'
  
const RootStack = createStackNavigator({
  
Login: {
  screen: Login,
  navigationOptions: {
    headerShown: false,
  }
},
Cadastro: {
  screen: Cadastro,
  navigationOptions: {
    headerShown: false,
  }
},
Home: {
  screen: Home,
  navigationOptions: {
    headerShown: false,
  }
},
Estados: {
  screen: Estados,
  navigationOptions: {
    headerShown: false,
  }
},
AdicionarAtividade: {
  screen: AdicionarAtividade,
  navigationOptions: {
    headerShown: false
  }
}
  
});
  
  
  const App = createAppContainer(RootStack);
  
  export default App;
  