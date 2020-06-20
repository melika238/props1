import React from 'react'


const ProductTable = (props) =>{

    return(
        <>

        </>
    )
    }
    


let    = [];
function ProductTable (){
    return products.map((product)=>{
        console.log(`category ${product.category},price ${product.price}`);
		
		return product;
   })}
   ProductTable.propTypes = {
    price:PropTypes.number,
    product:PropTypes.array,
    category: PropTypes.string,
  }
  


export default ProductTable