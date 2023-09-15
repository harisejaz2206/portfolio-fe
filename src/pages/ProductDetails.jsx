import { Link } from "react-router-dom";

function ProductDetails() {
  // Sample product data (replace with your data)
  const product = {
    name: 'Product Name',
    price: '$19.99',
    brand: 'Brand Name',
    category: 'Category Name',
    shortDescription: 'Short product description. Lorem ipsum dolor sit amet.',
    longDescription:
      'Long product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    packaging: {
      height: '10 cm',
      width: '15 cm',
      weight: '300 g',
    },
    effects: ['Calm', 'Sedation', 'Euphoria'],
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 w-[85%] mx-auto mt-4 mb-2">
      <h2 className="text-base font-semibold text-indigo-600 mb-4">Product Details</h2>

      {/* Product Card */}
      <div className="mb-6">
        <div className="bg-gray-200 p-4 rounded-md">
          {/* Product Image */}
          <img
            src="/Panadol.png"
            alt="Product"
            className="w-32 h-32 object-cover rounded-md mb-2"
          />
          {/* Product Name, Price, Brand, and Category */}
          <div className="text-base font-semibold mb-2">{product.name}</div>
          <div className="mb-2 text-indigo-600 font-normal text-base">{product.price}</div>
          <div className="mb-2">Brand: {product.brand}</div>
          <div>Category: {product.category}</div>
        </div>
      </div>

      {/* Short Description */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-800 mb-2">Short Description</h3>
        <p>{product.shortDescription}</p>
      </div>

      {/* Long Description */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-800 mb-2">Long Description</h3>
        <p>{product.longDescription}</p>
      </div>

      {/* Packaging Details */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-800 mb-2">Packaging Details</h3>
        <div className="flex">
          <div className="mr-6">
            <div className="mb-1 text-sm font-semibold">Height</div>
            <div>{product.packaging.height}</div>
          </div>
          <div className="mr-6">
            <div className="mb-1 text-sm font-semibold">Width</div>
            <div>{product.packaging.width}</div>
          </div>
          <div>
            <div className="mb-1 text-sm font-semibold">Weight</div>
            <div>{product.packaging.weight}</div>
          </div>
        </div>
      </div>

      {/* Effects */}
      <div>
        <h3 className="text-base font-semibold text-gray-800 mb-2">Effects</h3>
        <div className="flex">
          {product.effects.map((effect, index) => (
            <div
              key={index}
              className="bg-white border border-indigo-500 rounded-md p-2 m-1"
            >
              {effect}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Link to="/admin/catalogue">
            <button className="text-white bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
