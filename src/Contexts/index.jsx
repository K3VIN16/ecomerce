import { useState, createContext } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  // Shopping Car - Contador de productos
  const [count, setCount] = useState(0);
  // Product Detail - mostrar información del producto
  const [productInfo, setProductInfo] = useState({});
  // Shopping Car - Carrito de compras, almacena productos
  const [carProducts, setCarProducts] = useState([]);
  // Shopping Car - Grupo de ordenes, almacena ordenes
  const [order, setOrder] = useState([]);

  // Product Detail - Abrir o cerrar detalle producto
  const [isProductDetail, setIsProductDetail] = useState(false);
  const openProductDetail = () => {
    setIsProductDetail(true);
  };
  const closeProductDetail = () => {
    setIsProductDetail(false);
  };

  // CheckoutSideMenu - Abrir o cerrar CheckoutSideMenu
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenu(true);
  };
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenu(false);
  };

  const addProductToCart = (product) => {
    const existingProductIndex = carProducts.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, incrementa su cantidad
      const updatedCarProducts = [...carProducts];
      updatedCarProducts[existingProductIndex].quantity += 1;
      setCarProducts(updatedCarProducts);
    } else {
      // Si el producto no está en el carrito, agrégalo con una cantidad inicial de 1
      const newProduct = { ...product, quantity: 1 };
      setCarProducts([...carProducts, newProduct]);
    }

    // Incrementa el contador total
    setCount(count + 1);
  };

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        setCount,

        isProductDetail,
        openProductDetail,
        closeProductDetail,

        productInfo,
        setProductInfo,

        carProducts,
        setCarProducts,
        addProductToCart,

        isCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,

        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
