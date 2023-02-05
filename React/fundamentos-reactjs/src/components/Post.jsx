import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://www.github.com/felipe10amaral.png" alt="logo user" />
                    <div className={styles.authorInfo}>
                        <strong>Felipe Amaral</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time title='05 de fevereiro às 8:13' dateTime='2023-02-05'> Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p> Novo projeto saindo do forno para o meu portifólio</p>
                <p> Uma aplicação muito massa que visa comparar preços de produtos de lojas da cidade</p>
                <p> #projetinho </p>
            </div>
        </article>
    );
}