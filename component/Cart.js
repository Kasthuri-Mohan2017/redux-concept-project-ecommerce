import React from "react";
import { addItem, deleteItem } from "../actions/cartAction";
import {useSelector , useDispatch} from "react-redux";
const Cart = () =>{
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	
	console.log("store",state);
	return(
		<div className="cart">
		<h1>Number of items in Cart:{state.numOfItems}</h1>
<button 
onClick ={()=>{
	
	dispatch(addItem());
}}>Add Item  to Cart</button>
	<button 
	disabled={state.numOfItems > 0 ? false: true}
	onClick ={() =>{
		dispatch(deleteItem());
	}}	>Remove Item to Cart</button>
		</div>
	);
};
export default Cart;