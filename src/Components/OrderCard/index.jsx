import { XMarkIcon } from "@heroicons/react/24/solid";

export const OrderCard = (props) => {
  const { id, title, imageUrl, price, quantity, handleDelete } = props;

  let renderXMarkIcon;

  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        onClick={() => handleDelete(id)} // Cambia esta línea
        className="size-6 text-gray-800 cursor-pointer"
      />
    );
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="min-w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>

        <p className="text-sm font-medium">{title}</p>

        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end pt-4">
            <p className="text-lg font-medium">${price}</p>
            <p className="text-sm font-light">x{quantity}</p>
          </div>
          {renderXMarkIcon}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
