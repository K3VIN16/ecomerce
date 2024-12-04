import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
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
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            date={new Date().toLocaleDateString()}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
