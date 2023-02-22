import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { useState } from 'react';

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Post topzera'
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormat = format( publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault();

        const newPost = event.target.comment.value;
        setComments([...comments, newPost ])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }


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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe seu comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                />

                <button type='submit' >Publicar</button>
            </form>

            <div className={styles.commentList}>
                {comments.map( comment => {
                    return <Comment content={comment}/>
                })}
            </div>
        </article>
    );
}