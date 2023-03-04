import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  // Get products array from Redux store
  const products = useSelector((state) => state.cart.products);

  // Define dispatch function to update Redux store
  const dispatch = useDispatch();

  // Calculate total price of all products in cart
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2); // Return total with 2 decimal places
  };

  // Load Stripe promise with Stripe API key
  const stripePromise = loadStripe(
    "pk_test_51MgZqdFF8d5FBMT4inX5XN8ECnz8KITvpCGAOldY97JOHXMwvLYocy8czhPJVWU4MyKaj2CBTPMF5fgeVGIcOrYA00thQQy6EG"
  );

  // Define function to handle payment process
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      // Make request to server to create order with products in cart
      const res = await makeRequest.post("/orders", {
        products,
      });
      // Redirect to Stripe checkout page with session ID returned by server
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Render cart component with product details, total price, and checkout button
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className='item' key={item.id}>
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            alt='it represents the item that is chosen to buy'
          />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>
              {item.quantity} x ${item.price}
            </div>
          </div>
          {/* Delete button to remove item from cart */}
          <DeleteOutlinedIcon
            className='delete'
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      {/* Display total price of all items in cart */}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      {/* Button to initiate Stripe checkout process */}
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      {/* Button to reset cart and remove all items */}
      <span className='reset' onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
