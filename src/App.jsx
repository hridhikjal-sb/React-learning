import './App.css'
import {New} from './New'
import {hello} from './heelo'
import { hello1 } from './heelo'
import { Notifications } from './heelo'
import { Prop } from './prop'
import { Use } from './UpdateProps'
const Button =()=>{
  return <button>click</button>
}

const App=()=>{
return <div>
  <h1>welcome</h1>
  <Use/>
  <Prop/>
  <Notifications/>
  <New/>
  <Button/>
</div>}

export default App
