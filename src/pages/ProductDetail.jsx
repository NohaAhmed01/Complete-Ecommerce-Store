import { useParams } from "react-router-dom"

function ProductDetail() {
    const {id} = useParams()
    return (
        <div>
            <h1>Product Details with id: {id}</h1>
        </div>
    )
}

export default ProductDetail
