import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProducDetail from "../../components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(' https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Home
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
      {
        items?.map(item => (
          <Card Key={item.id} data={item}/>
        ))
      }
      </div>
      <ProducDetail />
    </Layout>
  )
}

export default Home;
