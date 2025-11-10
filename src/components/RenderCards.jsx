function RenderCards({name, list}) {
    const renderList = list.map((movie, i)=>{
        return(
            <li key={i}>{movie}</li>
        )
    })
    return (
        <article>
            <h2>{name}</h2>
            <ul>{renderList}</ul>
        </article>
    )
}

export default RenderCards