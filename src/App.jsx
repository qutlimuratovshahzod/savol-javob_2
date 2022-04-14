import { Route, Routes, useNavigate } from 'react-router-dom'
import { Auth } from './Pages/Auth.jsx';
import { Tasks } from './Pages/Tasks.jsx';
import {useNavigate} from "react-router-dom"
import { useEffect } from 'react';
import { Result } from './Pages/Result.jsx';
 
function App (){
  const {user} =userCustomContext()
  const navigate = useNavigate()

  // useEffect(()=>{
  //   if(!user.name){
  //     navigate ("/")
  //   }
  //   else{
  //     navigate("/tasks")
  //   }
  // }, [])
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Auth />} />
        <Route path='tasks' element={<Tasks/>}/>
        <Route path='result' elsment={<Result/>}/>
      </Routes>
    </div>
  )
}
export default App
