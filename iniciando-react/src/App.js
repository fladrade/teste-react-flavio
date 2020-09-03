import React from 'react';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {dataAtual: new Date()};
  }

  state = {
    nome: '',
  }
  
  modificarNome = (evento) => {
    let novoNome = evento.target.value;
    this.setState({
      nome: novoNome
    })
  }

  componentDidMount(){
    console.log('Executou o componente')
  }

  render(){
    console.log('Executou o render')
    return(
      <div>
        <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Hello {this.state.nome}</h1>
        <h1>Data: {this.state.dataAtual.toLocaleDateString()}</h1>
      </div>
    )
  }
}

export default App;
