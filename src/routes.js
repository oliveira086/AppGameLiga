import {
    createAppContainer
  } from 'react-navigation';
  
import {createStackNavigator} from 'react-navigation-stack'
  
import Login from './screens/login/index'
import Cadastro from './screens/cadastro/index'
import Home from './screens/home/index'
import Estados from './screens/estados/index'
import AdicionarAtividade from './screens/adicionarAtividade/index'
import NovaAtividade from './screens/novaAtividade/index'
import AssinarAtividade from './screens/AssinarAtividade/index';
import Transferencias from './screens/transferencias/index'
import NovoContato from './screens/novoContato/index'
import ValorTransferir from './screens/valorTransferencia/index'
import ConfirmarSenha from './screens/confirmarSenha/index'
  
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
},
Atividade: {
  screen: NovaAtividade,
  navigationOptions: {
    headerShown: false
  }
},
AssinarAtividade: {
  screen: AssinarAtividade,
  navigationOptions: {
    headerShown: false
  }
},
Transferencias: {
  screen: Transferencias,
  navigationOptions: {
    headerShown: false
  }
},
NovoContato: {
  screen: NovoContato,
  navigationOptions: {
    headerShown: false
  }
},
ValorTransferir: {
  screen: ValorTransferir,
  navigationOptions: {
    headerShown: false
  }
},
ConfirmarSenha: {
  screen: ConfirmarSenha,
  navigationOptions: {
    headerShown: false
  }
},
  
});
  
  
  const App = createAppContainer(RootStack);
  
  export default App;
  