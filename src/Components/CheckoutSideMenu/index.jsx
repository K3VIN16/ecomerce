import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Contexts";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import "./style.css";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext);

  const handleDelete = (id) => {
    const productIndex = context.carProducts.findIndex(
      (product) => product.id === id
    );

    if (productIndex !== -1) {
      const product = context.carProducts[productIndex];
      const updatedCarProducts = [...context.carProducts];

      if (product.quantity > 1) {
        updatedCarProducts[productIndex].quantity -= 1;
      } else {
        updatedCarProducts.splice(productIndex, 1);
      }

      context.setCarProducts(updatedCarProducts);
      context.setCount(context.count - 1);
    }
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: context.carProducts,
      totalProducts: context.count,
      totalPrice: totalPrice(context.carProducts),
    };

    // console.log(orderToAdd);
    context.setOrder([...context.order, orderToAdd]);
    // console.log(context.order);
    context.setCount(0);
    context.setCarProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenu ? "flex" : "hidden"
      } checkout-side-menu mt-1 flex-col fixed right-0 border border-r-0 border-black rounded-lg bg-purple-100 scrollable-cards`}
    >
      <div className="bg-violet-100 flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="size-6 text-gray-800 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="bg-gray-50 px-6 overflow-y-scroll flex-1">
        {context.carProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.rating.count}
            quantity={product.quantity}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="ml-7 mt-1 bg-purple-50 border-l-8 border-t-2 border-b-2 border-purple-200 h-9">
        <p className="flex justify-between items-center mb-2">
          <span className="font-sans pr-2 text-2xl">Total:</span>
          <span className="font-medium pr-12 text-2xl">
            ${totalPrice(context.carProducts)}
          </span>
        </p>
      </div>

      <Link
        className="flex justify-center mx-7 my-2 font-medium bg-purple-50 border border-purple-300 rounded-lg py-1 cursor-pointer"
        to="/my-order/last"
        onClick={handleCheckout}
      >
        <button>Checkout</button>
      </Link>
    </aside>
  );
};
