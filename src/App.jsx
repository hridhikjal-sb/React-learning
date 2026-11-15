import './App.css'
import { useState } from 'react'
import {New} from './New'
import {hello} from './heelo'
import { hello1 } from './heelo'
import { Notifications } from './heelo'
import { Prop } from './prop'
import { Use } from './UpdateProps'
import LoginForm from './login'
import EmployeeCounter from './empcount'


const Button =()=>{
  return <button>click</button>
}

const App=()=>{
    const [showForm, setShowForm] = useState(true);
return <div>
  <EmployeeCounter/>
              <button onClick={() => setShowForm(!showForm)}>
                Toggle Form
            </button>

            {showForm && <LoginForm />}
  <h1>welcome</h1>
  <Use/>
  <Prop/>
  <Notifications/>
  <New/>
  <Button/>
</div>}

export default App
