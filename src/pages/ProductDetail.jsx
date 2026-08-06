import { useParams } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

function ProductDetail({products, isLoading}) {
    const {id} = useParams();
    const item = products.find((t)=> t.id === Number(id));
    if(isLoading || !item) return <LoadingSpinner />
    
    return (
        <div>
            <h1>Product Details with id: {id}</h1>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <img src={item.images[0]} alt={item.title} />       
        </div>
    )
}

export default ProductDetail
