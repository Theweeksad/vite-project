import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../pages/Utils";
import "./style.css";

const CheckSideMenu = () => {
  const context = useContext(ShoppingCardContext);
  console.log(context.cardProducts);

  const handleDelete = (id) => {
    const filteredProducts = context.cardProducts.filter(
      (product) => product.id != id
    );
    context.setCardProducts(filteredProducts);
  };

  const handleChekOut = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cardProducts,
      totalProducts: context.cardProducts.legth,
      totalPrice: totalPrice(context.cardProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCardProducts([]);
    context.setSearchByTitle(null)
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 boder border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medoum text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cardProducts.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cardProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full py-3 text-white bg-black rounded-lg"
            onClick={() => handleChekOut()}
          >
            CheckOut
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckSideMenu;
