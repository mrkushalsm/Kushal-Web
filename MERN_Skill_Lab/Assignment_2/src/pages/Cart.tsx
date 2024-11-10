import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [originalPrice, setOriginalPrice] = useState<number>(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);

    const totalOriginalPrice = savedCart.reduce(
      (acc: number, item: any) => acc + item.price,
      0
    );
    setOriginalPrice(totalOriginalPrice);
  }, []);

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateOrderSummary = (price: number) => {
    const pickupPrice = 10;
    const taxPrice = 3;
    const totalPrice = price + pickupPrice + taxPrice;

    return {
      pickupPrice: pickupPrice.toFixed(2),
      taxPrice: taxPrice.toFixed(2),
      totalPrice: totalPrice.toFixed(2),
    };
  };

  const { pickupPrice, taxPrice, totalPrice } =
    updateOrderSummary(originalPrice);

  return (
    <>
      <main>
        <div className="tiles_container" id="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div
                className="tile"
                style={{ width: "20em", height: "35em", paddingTop: "2em" }}
                key={index}
              >
                <h2 className="tile_head">{item.name}</h2>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <p className="tile_info">{item.info}</p>
                <p className="tile_price">Price: ${item.price.toFixed(2)}</p>
                <button
                  className="add_to_cart"
                  onClick={() => removeFromCart(index)}
                >
                  Remove from Cart
                </button>
              </div>
            ))
          )}
        </div>

        <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />

        {cart.length > 0 && (
          <div id="order-summary" style={{ display: "block" }}>
            <h2>Order Summary</h2>
            <p>
              Original Price:{" "}
              <span id="original-price">${originalPrice.toFixed(2)}</span>
            </p>
            <p>
              Store Pickup: <span id="pickup-price">${pickupPrice}</span>
            </p>
            <p>
              Tax: <span id="tax-price">${taxPrice}</span>
            </p>
            <p>
              Total: <span id="total-price">${totalPrice}</span>
            </p>
            <button onClick={() => proceedToCheckout()}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </main>
    </>
  );
};

const proceedToCheckout = () => {
  alert("Proceeding to checkout...");
};

export default Cart;
