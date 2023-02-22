import {Post} from "./components/Post";
import { Header } from "./components/Header";

import './global.css';
import styles from './components/App.module.css';
import { Sidebar } from "./components/Sidebar";

function App() {

  const post = [
    {
      id: 1,
      author: {
        avatarUrl: "https://www.github.com/felipe10amaral.png",
        name: "Felipe Amaral",
        role: "FullStack"
      },
      content: [
        {type: 'paragraph', content: 'Novo projeto saindo do forno para o meu portifólio'},
        {type: 'paragraph', content: 'Uma aplicação muito massa que visa comparar preços de produtos de lojas da cidade'},
        {type: 'link', content: 'design/ofidelense'}
      ],
      publishedAt: new Date('2022-05-10 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://www.github.com/tarsilam.png",
        name: "Tarsila Manhães",
        role: "Front-end"
      },
      content: [
        {type: 'paragraph', content: 'Novo projeto saindo do forno para o meu portifólio'},
        {type: 'paragraph', content: 'Uma aplicação muito massa que visa comparar preços de produtos de lojas da cidade'},
        {type: 'link', content: 'design/ofidelense'}
      ],
      publishedAt: new Date('2022-05-10 20:00:00'),
    },
  ]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            post.map( posts => {
              return(
                <Post 
                  key={posts.id}
                  author={posts.author}
                  content={posts.content}
                  publishedAt={posts.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>  
  )
}

export default App
