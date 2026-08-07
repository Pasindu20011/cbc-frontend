

export default function ProductCard(props){
    console.log("Product Card Component");
    return(
        <div className="productCard">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            
            <img 
            className="productImage" 
            src = {props.image} />
            <button className="addToCartButton"> Add To Cart </button>
        </div>
    )
}