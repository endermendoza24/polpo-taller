import './App.css';
import React, {Component} from 'react';
import {todos} from './todos.json';
import TodoForm from './componentes/TodoForm';


const fecha = () =>{
  
  var d = new Date();
  return d.getDate() + ' de ' + d.getMonth() + 'del año ' + d.getFullYear()  ;

  
}


class App extends Component{
  constructor(){
  super();
  this.state = {
    todos
  }
  this.handleAddTodo = this.handleAddTodo.bind(this);
}

removeTodo(index){
  this.setState({
    todos : this.state.todos.filter((e, i)=>{
      return i !== index;
    })
  });
}

handleAddTodo(todo){
  this.setState({
    todos : [...this.state.todos, todo]
  })
}




render(){
  const todos = this.state.todos.map((todos,i) =>{
    return(
      
      <div className="col-md-4" key={i}>
        <div className="card mt-4">
       <div className="card-header">
       <h3>{todos.titulo}</h3>
       <span className="badge badge-pill badge-danger ml-2">
             {todos.Prioridad}
           </span>
        
         </div>
        
           
         

         <div className="card-body">
           <p>{todos.Contenido}</p>
           <p><strong>{todos.Autor}</strong></p>
         </div>

         <div className="card-footer">
           <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
             Borrar
           </button>
         </div>



         </div>
      </div>
         
      
    )
  }
  )
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <h4>
        <a href="#" className="text-white">
         Tareas
         <span className="badge badge-pill badge-warning ml-2">
           {this.state.todos.length}
         </span>
        </a>
        </h4>
      </nav>

    <div className="container">
      <div className="row mt-4">
      <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
      {todos}
      </div>
    </div>
    </div>
  );
}
}

export default App;
  