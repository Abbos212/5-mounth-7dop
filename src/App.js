import React, { useState } from "react";


import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "./store/asyncThunk/fetchUsers";
import { fetchAddUser } from "./reducers/fetchAddUser";

function App() {
  const [inputOne, setInputOne] = useState('')
  const [inputTwo, setInputTwo] = useState('')

  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.usersSlice)
  useEffect(() => {
    console.log('useEffect');
    dispatch(fetchUsers())
  }, [])
  return (
    <div className="App">
    
    <h1 className="title">

      Список пользователей

    </h1>
    <form>
      <label htmlFor='name'>
        Имя
      </label>
      <input id={'name'} onChange={(event) => {
        setInputOne(event.target.value)
      }}/>
      <label htmlFor={'age'} onChange={(event) => {
        setInputTwo(event.target.value)
      }}>
        Возраст:
        <input id={'age'}/>
        <button type="button" onClick={() =>{
          dispatch(fetchAddUser({name:inputOne, age: inputTwo}))
          dispatch(fetchUsers())
        }}>
          Сохронять
        </button>
        <button>
          Сбросить
        </button>
      </label>
   
    </form>
    <table className="table table-condensed table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Имя</th>
            <th>возраст</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0 ?
            users.map((item) => <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>) : ''
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;



