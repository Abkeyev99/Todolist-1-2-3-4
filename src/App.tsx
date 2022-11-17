import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";
export type FilterValueType = 'all' | 'active' | 'completed';

function App() {
    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Сodewars", isDone: true},
        {id: v1(), title: "React", isDone: false},
    ])


    const [filter, setFilter] = useState<FilterValueType>('all')




    const removeTask = (id: string) => {
        const newTasks = tasks.filter((t) => t.id !== id)
        setTasks(newTasks)
    }




    const changeFilter = (filter: 'all' | 'active' | 'completed') => {
        setFilter(filter);
    }
    let tasksForTodolist = tasks;

    if (filter === 'active') {
        tasksForTodolist = tasksForTodolist.filter((t) => !t.isDone)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasksForTodolist.filter((t) => t.isDone)
    }




    const addTask = (title: string) => {
       const task =  {id: v1(), title, isDone: true}
        setTasks([...tasks, task])
    }

    const changeValue = (id: string, value: boolean) =>{
        const newTasks = tasks.map((t) => t.id === id ? {...t, isDone: value} : t)
        setTasks(newTasks)
    }



    return (
        <div className="App">
            <Todolist title='What bo learn?'
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeValue={changeValue}
                      filter={filter}
            />
        </div>
    );
}

export default App;
