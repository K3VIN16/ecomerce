import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrderCards";
import { ShoppingCardContext } from "../../Contexts";

function MyOrders() {
  const context = useContext(ShoppingCardContext);

  return (
    <Layout>
      My Orders
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-order/${index}`}>
          <OrdersCard
            key={order.id}
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
