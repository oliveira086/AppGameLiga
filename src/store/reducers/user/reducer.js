const INITIAL_STATE = {
    nome: '',
    saldo: '',
    atividade: ''
}
  
const user = (state = INITIAL_STATE, action) => {
    const baseAction = '@user/'
        switch (action.type) {
        default:
            return state;
        case `${baseAction}Nome`:
            return {
                ...state,
                nome : action.payload.nome
            }
            break
        case `${baseAction}Saldo`:
            return {
                ...state, 
                saldo: action.payload.saldo
            }
            break
        case `${baseAction}Atividade`:
            return {
                ...state,
                atividade: action.payload.atividade
            }
            break
        }
  }
  
export default user
  