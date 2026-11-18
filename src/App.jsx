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
import { IncreaseButton } from './increasebutton'
import { ShowPassword } from './showpassword'
import CharacterCounter from './chara'
import { UserDetail } from './userdetail'
import { Menuitem } from './menuitem'
import { Menu } from './menu'
import { Employee } from './employee'
const Button =()=>{
  return <button>click</button>
}

const App=()=>{
    const [showForm, setShowForm] = useState(true);
return <div>
  <Employee/>
   <Menu/>
  <UserDetail username="John Doe" isOnline={true} role="admin" />
  <UserDetail username="Jane Smith" isOnline={false} role="user" />
  <CharacterCounter/>
  <ShowPassword/>
  <IncreaseButton/>
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
