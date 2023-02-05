import {Post} from "./Post"
import { Header } from "./components/Header"

import './styles.css'

function App() {

  return (
    <>
      <Header />
      <Post author= "Felipe" content="estudo sobre propriedades"/>
      <Post author="Tufão" content="gato dorminhoco"/>
    </>  
  )
}

export default App
