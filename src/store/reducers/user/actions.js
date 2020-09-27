export const Nome = (nome) => {
    return {
      type: '@user/Nome',
      payload: { nome }
    }
  }
  
export const Saldo = (saldo) => {
  return {
    type: '@user/Saldo',
    payload: { saldo }
  }
}

export const Atividade = (atividade) => {
  return {
    type: '@user/Atividade',
    payload: { atividade }
  }
}
  