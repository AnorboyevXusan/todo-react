/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import getStore from './utils/get';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Liked from './components/Liked';

function App() {

  const [todo, setTodo] = useState(getStore('todos'));
  const [basket, setBasket] = useState(getStore('basket'));

  const removeItem = (id) => {
    const newitem = todo.filter((item) => item.id !== id)
    setTodo(newitem)
  }

  const editItem = (id) => {
    const newItem = todo.find((item) => item.id === id);
    setEditId(true)
  }
  
  const liked = (id) => {
    const newItem = todo.find((item) => item.id === id);
    setBasket([...basket, newItem]);
  }



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo)),
    localStorage.setItem('basket', JSON.stringify(basket));
  },[todo,basket])


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/todos' element={<Todo todo={todo} removeItem={removeItem} editItem={editItem} liked={liked} />} />
        <Route path='/add' element={<AddTodo todo={todo} setTodo={setTodo} />} />
        <Route path='/liked' element={<Liked basket={basket} />} />
      </Routes>
    </>
  )
}

export default App
