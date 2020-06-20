import React from 'react'


const ProductTable = (props) =>{

    return(
        <>
	    <table>
	    <tr>
	    <th>name </th>
	    <th>category </th>
	    <th>price </th>
	    </tr>
	    {props.products.map(product =>{ return (
	    <tr>
	    <td>{product.name}</td>
	    <td>{product.category}</td>
	    <td>{product.price}</td>
	    </tr>)}}
	    </table>
        </>
    )
    }
   
   ProductTable.propTypes = {
    products:PropTypes.array,
  


export default ProductTable
