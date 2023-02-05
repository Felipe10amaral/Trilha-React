
export function Post(props) {

    console.log(props)
    return(
        <>
            <h3> {props.content} </h3>
            <h5> {props.author} </h5>
        </>
    )
}
