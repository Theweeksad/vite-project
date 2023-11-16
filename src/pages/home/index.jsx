import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProducDetail from "../../components/ProductDetail";

function Home() {
  const context = useContext(ShoppingCardContext);

  const renderView = () => {
    if (context.filteredItems.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card Key={item.id} data={item} />
      ));
    } else {
      return(
        <div>We don't have anything</div>
      )
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-lx">Excluisve Products</h1>
      </div>
      <input
        type=""
        placeholder="Search Product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
        {renderView}
      </div>
      <ProducDetail />
    </Layout>
  );
}

export default Home;
