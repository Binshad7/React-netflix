import { createContext, useState } from "react";


export const ProductContext = createContext();

function ProductID({children}) {
    const [product,setProduct] = useState(null);

    const handleProduct = (product)=>{
        setProduct(product)
    }
    return(
        <>
            <ProductContext.Provider value={{handleProduct,product}}>
                 {children}
            </ProductContext.Provider>
        </>
    )

}
export default ProductID