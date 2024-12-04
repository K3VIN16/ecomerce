import { useState, createContext, useEffect } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  // Shopping Car - Contador de productos
  const [count, setCount] = useState(0);

  // Product Detail - mostrar información del producto
  const [productInfo, setProductInfo] = useState({});

  // Shopping Car - Carrito de compras, almacena PRODUCTOS
  const [carProducts, setCarProducts] = useState([]);

  // Shopping Car - Grupo de ordenes, almacena ORDENES
  const [order, setOrder] = useState([]);

  // Home - Items de la API
  const [items, setItems] = useState(null);

  // Home - Filtrar items
  const [filteredItems, setFilteredItems] = useState(null);

  // Home - Buscar por título
  const [searchByTitle, setSearchByTitle] = useState("");

  // Home - Buscar por categoría
  const [searchByCategory, setSearchByCategory] = useState("");

  const filterItems = (items, searchByCategory, searchByTitle) => {
    let result = items;

    if (searchByCategory) {
      result = result.filter(
        (item) => item.category.toLowerCase() === searchByCategory.toLowerCase()
      );
    }

    if (searchByTitle) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    return result;
  };

  useEffect(() => {
    const filtered = filterItems(items, searchByCategory, searchByTitle);
    setFilteredItems(filtered);
  }, [items, searchByCategory, searchByTitle]);

  // Consumo de la API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      // fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => setItems(data));
  }, []);

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

        items,
        setItems,

        searchByTitle,
        setSearchByTitle,

        filteredItems,
        setFilteredItems,

        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
