import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";


class App extends React.Component {
    state = {
        todolists: [
            {id: 0, title: 'What to learn?'},
            {id: 1, title: 'Week tasks'},
            {id: 2, title: 'Year tasks'}
        ]
    };
    addTodolist = (title) => {
        alert(title);
    }

    render = () => {
        const todolists = this.state
            .todolists
            .map(tl => <TodoList id={tl.id} title={tl.title}/>)
        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodolist}/>
                </div>
                <div className="App">

                    {todolists}
                </div>
            </>
        )


    };


};

export default App;

