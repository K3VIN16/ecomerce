import { useState, useEffect, useContext } from "react";
import { PlusIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Contexts";

export const Card = (data) => {
  const context = useContext(ShoppingCardContext);
  const [currentIcon, setCurrentIcon] = useState(<PlusIcon />);
  const [isActive, setIsActive] = useState(false);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.closeCheckoutSideMenu();
    context.setProductInfo(productDetail);
  };

  const addToCart = (event, product) => {
    event.stopPropagation();
    context.closeProductDetail();
    context.openCheckoutSideMenu();

    const existingProductIndex = context.carProducts.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, incrementa su cantidad
      const updatedCarProducts = [...context.carProducts];
      updatedCarProducts[existingProductIndex].quantity += 1;
      context.setCarProducts(updatedCarProducts);
    } else {
      // Si el producto no está en el carrito, agrégalo con una cantidad inicial de 1
      const newProduct = { ...product, quantity: 1 };
      context.setCarProducts([...context.carProducts, newProduct]);
    }

    // Actualizar el contador de productos totales en el carrito
    context.setCount(context.count + 1);

    // Cambiar el ícono temporalmente
    setIsActive(true);
  };

  useEffect(() => {
    if (isActive) {
      setCurrentIcon(
        <CheckBadgeIcon className=" text-white bg-green-400 rounded-full" />
      );

      const timer = setTimeout(() => {
        setCurrentIcon(<PlusIcon />);
        setIsActive(false);
      }, 250);

      return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta
    }
  }, [isActive]);

  const changeIcon = (id) => {
    const isInCar = context.carProducts.some((product) => product.id === id);
    return (
      <div
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        onClick={(event) => {
          addToCart(event, data.data);
        }}
      >
        {isInCar ? currentIcon : <PlusIcon />}
      </div>
    );
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.image}
          alt={data.data.title}
        />
        {changeIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-sm font-medium">${data.data.rating.count}</span>
      </p>
    </div>
  );
};
