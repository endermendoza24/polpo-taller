import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            Titulo : '',
            Autor : '',
            Contenido : '',
            Prioridad : 'Alta'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   

    handleSubmit(e){
        alert('enviando...');
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({ 
            Titulo : '{this.state.Titulo}',
            Autor : '',
            Contenido : '',
            Prioridad : 'Alta'
        });
    }
    handleInput(e){
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
            [name] : value
        });
        console.log(this.state);
    }

    render(){
        return(
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={this.state.Titulo}
                        onChange={this.handleInput}
                        placeholder="Título"
                        />
                    </div>

                    <div className="form-group">
                        <input
                        type="text"
                        name="Autor"
                        className="form-control"
                        value={this.state.Autor}
                        onChange={this.handleInput}
                        placeholder="Autor"
                        />
                    </div>

                    <div className="form-group">
            <input
              type="text"
              name="Contenido"
              className="form-control"
              value={this.state.Contenido}
              onChange={this.handleInput}
              placeholder="Contenido"
              />
          </div>

                    <div className="form-group">
                       <select
                       name="Prioridad"
                       className="form-control"
                       value={this.state.Prioridad}
                       onChange={this.handleInput}
                       >
                           <option>Baja</option>
                           <option>Media</option>
                           <option>Alta</option>
                       
                       
                      </select>
                    </div>
                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>
                </form>
            </div>
        )
    }




}

export default TodoForm;