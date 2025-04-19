import { useParams } from "react-router-dom";
import { items } from "./ShopTabWithSearch"; // import the items from the same place

const ProductDetail = () => {
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-contain"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{product.price}</p>
          <p className="text-base">{product.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
