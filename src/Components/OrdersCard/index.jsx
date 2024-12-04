import { XMarkIcon } from "@heroicons/react/24/solid";

export const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className="flex justify-between items-center min-w-56 mb-4 p-4 rounded-lg shadow-md border border-gray-300 hover:shadow-xl transition-shadow bg-white hover:bg-gray-50 gap-5">
      <div className="flex flex-col space-y-1">
        <span className="text-gray-400 text-xs">
          {date || "Fecha no disponible"}
        </span>
        <span className="font-semibold text-lg text-gray-800">
          {totalProducts} {totalProducts === 1 ? "artículo" : "artículos"}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrdersCard;
