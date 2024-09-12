import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Contexts";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCardContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  //quieo usar esto, pero no funciona en el div de abajo
  let { id } = useParams();
  if (id === "last") id = context.order?.length - 1;

  // console.log(context.order);
  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <Link to={"/my-orders"} className="absolute left-0">
          <ArrowUturnLeftIcon className="w-6 h-6 text-black cursor-pointer" />
        </Link>
        <h1 className="text-xl mx-10">My Order</h1>
      </div>

      <div className="bg-gray-50 p-4 flex flex-col rounded-xl border-l-4 border-b-4 border-purple-300">
        {/* usando el id no reenderiza en el componente MyOrder */}
        {/* {context.order?.[id]?.products.map((product) => ( */}
          {/* usando el index si reenderiza el componente en MyOrder */}
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.rating.count}
            quantity={product.quantity}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
