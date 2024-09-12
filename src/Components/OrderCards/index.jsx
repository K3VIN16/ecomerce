import { XMarkIcon } from "@heroicons/react/24/solid";

export const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  let renderXMarkIcon;

  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p className="flex flex-col text-sm font-medium">
        <span>01</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
