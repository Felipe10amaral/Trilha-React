## Conceitos abordados

#### Componentes
<p>  É uma forma de desacoplar uma parte da interface para que se torne repetitível ou algo que seja mais fácil de dar manutenção e reuso. </p>
<p> Ele é uma função que retorna um codigo HTML, por isso a extensão do arquivo é um JSX (Javascript + XML) ou TSX (Typescript + XML) </p>

<br><br>

###### Existe 2 momentos em que se é necessário criar um componente
<p> Quando há muita repetição e geralmente com o mesmo visual, comportamento e funcionamento </p>
<p> Quando se é necessário desacoplar um componente da lógica da estrutura para outro componente menor facilitando a manutenção </p>

#### Propriedades
<p> São informações que se passam para os componentes </p>

<br>

##### Formatando data com a biblioteca date-fns
format( publishedAt, "d 'de' LLLL 'às' HH:mm'h'") as aspas simples são para personalizar do padrão que é definido pela documentação