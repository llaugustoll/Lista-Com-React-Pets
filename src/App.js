import React from 'react';

class ListaPets extends React.Component{
  render(){
    const lista = this.props.state.lista ;
    const listaDisplay =[];
    for (let i = 0 ; i<lista.length; i++){
      listaDisplay.push(
        <p> {lista[i].id} - {lista[i].especie} - {lista[i].raca} - {lista[i].nome} </p>
      )
    }
    return(
      <div>
         <h2>PETS</h2>
         {listaDisplay}
      </div>
    )
  }
}

function LabelInput(props){
  return(
    <div>
      <label>{props.label}</label>
      <input type="TEXT" value = {props.value} 
                          onChange={(e)=>{
                            if(props.atualizarTexto){
                              props.atualizarTexto(e.target.value);
                            }
                          }}/>
    </div>
  )

}

class App extends React.Component {
  state = { 
    petAtual:{
      id:"",
      nome:"",
      especie:"",
      raca:"",
    },
    lista:[]
  }
  atualizarTexto(txt , dado){
    const novoState = {...this.state};
    novoState.petAtual[dado] = txt
    this.setState(novoState);
  }
  gravar(){
    const newState ={ ...this.state};
    newState.lista.push({...this.state.petAtual});
    this.setState(newState)
  }

  render() {
    return(
      <div> 
          <h1>Formulario de Pets </h1>
          <p>ID:</p>
          <LabelInput value = {this.state.petAtual.id} 
                      atualizarTexto ={(txt) => this.atualizarTexto(txt,'id')}/>
          <p> ---------------------------------------------------------------</p>
          <p>Nome:</p>
          <LabelInput value = {this.state.petAtual.nome} 
                      atualizarTexto ={(txt) => this.atualizarTexto(txt,'nome')} />
          <p> ---------------------------------------------------------------</p>
          <p>Espécie:</p>
          <LabelInput value = {this.state.petAtual.especie} 
                      atualizarTexto ={(txt) => this.atualizarTexto(txt,'especie')} />
          <p> ---------------------------------------------------------------</p>
          <p>Raça</p>
          <LabelInput value = {this.state.petAtual.raca} 
                      atualizarTexto ={(txt) => this.atualizarTexto(txt,'raca')} />
                    

          <button onClick ={()=>{this.gravar()}}>GRAVAR</button>
          <ListaPets state = {this.state}/>

      </div>
    );
  }
}

export default App;
