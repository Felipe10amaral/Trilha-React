import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://www.github.com/felipe10amaral" />
            <div className={styles.commentBox}>
                <div className={commentContent}>
                    <header>
                        <div className={authorAndTime}>
                            <strong>Felipe</strong>
                            <time title='05 de fevereiro às 8:13' dateTime='2023-02-05'> Cerca 1 hora atrás</time>
                        </div>

                        <button title='Excluir Comentário'> <Trash size={20} /> </button>
                    </header>
                    <p>Muito bom Felipe, parabéns!!!</p>

                </div>
                <footer><ThumbsUp /> Like <span>20</span> </footer>
            </div>
        </div>
    );
}