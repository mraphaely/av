

// eslint-disable-next-line react/prop-types
const Card = ({image, title, paragraph, width, height, id}) => {
    return(
        <>
        <div id={id}>
        <img src={image} width={width} height={height}/>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        </div>
        </>
    )
}

export default Card;