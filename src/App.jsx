import './App.css'
import {New} from './New'
import {hello} from './heelo'
import { hello1 } from './heelo'
import { Notifications } from './heelo'
const Button =()=>{
  return <button>click</button>
}

const App=()=>{
return <div>
  <h1>welcome</h1>
  <Notifications/>
  <New/>
  <Button/>
</div>}

export default App
