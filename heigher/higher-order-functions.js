const lukeLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Luke logado com sucesso!"
  }
  
  const leiaLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Leia logada com sucesso!"
  }
  
  console.log(lukeLogin())
  console.log(leiaLogin())

  // melhorando o código

  const usuarioLogin = (pessoa) => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return `${pessoa} logou com sucesso no sistema!`
  }
  
  console.log(usuarioLogin("Luke"))

  // Adicionando ainda mais melhorias ao código

  const acesso1 = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const usuarioLogin1 = (nome) => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return acesso1(nome)
  }
  
  console.log(usuarioLogin1("Luke"))

  // Adicionando uma opção de login para diretora com mais tempo de acesso
  const acesso2 = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const usuarioLogin2 = (nome) => {
    let array = []
    for( i = 0; i < 90000; i++){
        array.push(i)
    }
    return acesso2(nome)
  }
  
  const diretoriaLogin2 = (nome) => {
    let array = []
    for( i = 0; i < 900000; i++){
        array.push(i)
    }
    return acesso2(nome)
  }
  
  console.log(diretoriaLogin2("Iasmim"))

  // Melhorando o código
    
  const acesso3 = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  //função genérica
  const autentica3 = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login3 = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica3(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica3(900000)
    }
   return acesso3(pessoa.nome)
  }

  console.log(login3({cargo: 'diretoria', nome: 'IASMIM'}))

  console.log(login3({cargo: `diretoria`, nome: `Leia`}, autentica3))

  