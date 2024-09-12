import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Contexts";
import "./style.css";

export const ProductDetail = () => {
  const context = useContext(ShoppingCardContext);

  return (
    <aside
      className={`${
        context.isProductDetail ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XCircleIcon
            className="size-6 text-gray-800 cursor-pointer"
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </div>

      <figure className="px-6 flex justify-center">
        <img
          className="size-64 rounded-lg object-cover"
          src={context.productInfo?.image}
          alt={context.productInfo?.title}
        />
      </figure>
      <p className="flex flex-col p-6 text-justify">
        <span className="font-medium text-2xl">
          ${context.productInfo?.rating?.count}
        </span>
        <span className="font-medium text-md pt-3">
          {context.productInfo?.title}
        </span>
        <span className="font-light text-sm pt-2">
          {context.productInfo?.description}
        </span>
      </p>
    </aside>
  );
};
