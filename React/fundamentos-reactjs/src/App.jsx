import {Post} from "./Post"
import { Header } from "./components/Header"

import './global.css';
import styles from './components/App.module.css';
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Tufão" content="gato dorminhoco"/>
          <Post author= "Felipe" content="estudo sobre propriedades"/>
        </main>
      </div>
    </>  
  )
}

export default App
