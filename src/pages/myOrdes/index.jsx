import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import OrdersCard from "../../components/OrdersCard";
import { ShoppingCardContext } from "../../Context";

function MyOrders() {
  const context = useContext(ShoppingCardContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-lx">MyOrders page</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
