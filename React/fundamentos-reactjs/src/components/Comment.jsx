import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://www.github.com/felipe10amaral.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe</strong>
                            <time title='05 de fevereiro às 8:13' dateTime='2023-02-05'> Cerca 1 hora atrás</time>
                        </div>

                        <button title='Excluir Comentário'> <Trash size={24} /> </button>
                    </header>
                    <p>Muito bom Felipe, parabéns!!! 👏👏 </p>

                </div>
                <footer> 
                    <button> <ThumbsUp /> Like <span>20</span> </button>  
                </footer>
            </div>
        </div>
    );
}