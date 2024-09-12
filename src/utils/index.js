// Sirve para sumar el precio acumulado de los productos
export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => {
    sum += product.rating.count * product.quantity;
  });
  return sum;
};
