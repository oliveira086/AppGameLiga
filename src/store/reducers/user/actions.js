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

export const UserTransferencia = (userTransferencia) => {
  return {
    type: '@user/UserTransferencia',
    payload: { userTransferencia }
  }
}

export const ValorTransferencia = (valorTransferencia) => {
  return {
    type: '@user/ValorTransferencia',
    payload: {valorTransferencia}
  }
}
  