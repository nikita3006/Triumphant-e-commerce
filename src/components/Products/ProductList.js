import ShowProducts from "./ShowProducts";
import { useContext } from "react";
import ProductsContext from "../../store/ProductContext";

const ProductList = (props) => {
  const productCtx = useContext(ProductsContext);
  return (
    <div>
      <h1 style={{textAlign:'center',color:"white",fontFamily:"Times New Roman, Times, serif",backgroundColor:'#777777',padding: "50px 0 50px 0", fontWeight:"bolder", fontSize: "100px",marginTop:"55px"}}>Gada Electronics</h1>
      <h1 style={{textAlign:"center", fontFamily:"fantasy", marginTop:"60px"}} >Mobiles</h1>
      <ShowProducts
        productList={productCtx.products} 
        showCartHandler={props.showCartHandler}
      />
    </div>
  )
}

export default ProductList;