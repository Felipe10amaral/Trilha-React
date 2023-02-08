import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post({author, publishedAt, content}) {
    const publishedDateFormat = format( publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong> {author.name} </strong>
                        <span> {author.role} </span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime='2023-02-05'> {`publicado ${publishedDateRelativeNow}`} </time>
            </header>

            <div className={styles.content}>
                {
                    content.map( item => {
                        if (item.type === 'paragraph'){
                            return <p> {item.content} </p>
                        }
                        else if( item.type === 'link') {
                            return <p> <a href="#"> {item.link} </a> </p>
                        }
                    })
                }
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    placeholder='Deixe seu comentário'
                />

                <button type='submit'>Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}