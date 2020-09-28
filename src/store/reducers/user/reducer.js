const INITIAL_STATE = {
    nome: '',
    saldo: '',
    atividade: '',
    usuarioTransferencia: '',
    valorTransferencia: ''
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
        case `${baseAction}UserTransferencia`:
            return {
                ...state,
                usuarioTransferencia: action.payload.userTransferencia
            }
            break
        case `${baseAction}ValorTransferencia`:
            return {
                ...state,
                valorTransferencia: action.payload.valorTransferencia
            }
        }
  }
  
export default user
  