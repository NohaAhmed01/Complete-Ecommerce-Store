import { useNavigate } from "react-router-dom"
import Button from "../components/Button/Button"

function PageNotFound() {
    const navigate = useNavigate();
    return (
        <div>
          <h1>Page not found 🙃</h1>
          <Button onClick={()=> navigate(-1)}>&larr; Back</Button>  
        </div>
    )
}

export default PageNotFound
