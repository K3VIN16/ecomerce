import { useContext } from "react";
import Layout from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCardContext } from "../../Contexts";

function Home() {
  const context = useContext(ShoppingCardContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>No products found</div>;
    }
  };

  return (
    <Layout>
      Home
      <input
        type="text"
        placeholder="Search by title"
        className="border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none"
        onChange={(e) => context.setSearchByTitle(e.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
