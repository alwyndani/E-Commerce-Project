import React, { useEffect, useState } from "react";
import { mainCartImg } from "../assets";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


export const Cart = () => {
  const userInfo = useSelector((state) => state.zen.userInfo);
  const productData = useSelector((state) => state.zen.productData);

  const formatPrice = (price) => `₹ ${price.toLocaleString()}`;

  const [totalAmount, setTotalAmount] = useState(0);
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.Quantity;
    
      return price;
    });
    setTotalAmount(price);
  }, [productData]);

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please login to Checkout");
    }
  };

  const payment =async(token)=> {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmount * 100,
      token: token
    })
  }

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src={mainCartImg}
        alt=" cart-img"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex justify-center">
        <CartItem />
        {productData.length !== 0  &&
          <div className="w-1/3 h-full bg-gray-200 py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium">Inventory Totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal {formatPrice(totalAmount)}
                <span className="font-titleFont font-bold  text-lg"></span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, voluptas consectetur nostrum ratione ipsum facilis
                  libero quisquam iste vero iure dolore ab quae dolorum maiores
                  aliquid. Ullam minus voluptas ex?
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold mt-6 flex justify-between">
              Total{" "}
              <span className="text-xl font-bold">
                {formatPrice(totalAmount)}
              </span>
            </p>
            <button
              onClick={handleCheckOut}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-100"
            >
              Proceed to checkout
            </button>
            {payNow &&
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout 
              stripeKey="pk_test_51Pp3Tm2Kf9f8EOiz6yCfI96ccw91UhTCLNIGHlBhP0mmQ4neWBkwnZFkkGeaJ1Lq4xpGx98XKayRtNNyXKM9hPr300cspan6dL"
              name="ZenZest Online Payment"
              amount={`Rs.${totalAmount * 100}`}
              label="Pay to ZenZest"
              description={`Your payment amount is  ${formatPrice(totalAmount)}`}
              token={payment}
              email={userInfo.email}
              />
              </div>}
            
          </div>
       
          
          
    }
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
