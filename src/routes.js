import {
    createAppContainer
  } from 'react-navigation';
  
import {createStackNavigator} from 'react-navigation-stack'
  
import Login from './screens/login/index'
import Cadastro from './screens/cadastro/index'
import Home from './screens/home/index'
import AdicionarAtividade from './screens/adicionarAtividade/index'
import NovaAtividade from './screens/novaAtividade/index'
import AssinarAtividade from './screens/AssinarAtividade/index';
import Transferencias from './screens/transferencias/index'
import NovoContato from './screens/novoContato/index'
import ValorTransferir from './screens/valorTransferencia/index'
import ConfirmarSenha from './screens/confirmarSenha/index'
import Menu from './screens/menu/index'
import CadastrarSenha from './screens/cadastrarSenha/index'
import SenhaOk from './screens/senhaOk/index'
import ResumoTransferencia from './screens/resumoTransferencia/index'
import TransferenciaOk from './screens/transferenciaOk/index'
import ConfirmarSenhaAtividade from './screens/confirmarSenhaAtividade/index'
  
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
Menu: {
  screen: Menu,
  navigationOptions: {
    headerShown: false
  }
},
CadastrarSenha: {
  screen: CadastrarSenha,
  navigationOptions: {
    headerShown: false
  }
},
SenhaOk: {
  screen: SenhaOk,
  navigationOptions: {
    headerShown: false
  }
},
ResumoTransferencia: {
  screen: ResumoTransferencia,
  navigationOptions: {
    headerShown: false
  }
},
TransferenciaOk: {
  screen: TransferenciaOk,
  navigationOptions: {
    headerShown: false
  }
},
ConfirmarSenhaAtividade: {
  screen: ConfirmarSenhaAtividade,
  navigationOptions: {
    headerShown: false
  }
},
  
});
  
  
  const App = createAppContainer(RootStack);
  
  export default App;
  