import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
  const [brands, setBrands] = useState([]);
  const product = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("https://automotive-server-aminurjs.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  const { _id, image, name, type, price, brand_name, rating, description } =
    product;
  const [brandName, setBrandName] = useState(brand_name);

  const handleBrandName = (event) => {
    const brand = event.target.value;
    setBrandName(brand);
  };

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const updatedProduct = {
      image,
      name,
      brandName,
      type,
      price,
      rating,
      description,
    };
    console.log(updatedProduct);
    fetch(`https://automotive-server-aminurjs.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("Success!", "Product Updated Successful", "success");
        }
      });
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto p-10">
        <div className=" rounded shadow p-10  bg-white dark:bg-gray-800">
          <div>
            <h1 className="text-3xl text-blue-1 dark:text-gray-200 font-semibold text-center mb-2">
              Update Product
            </h1>
            <form onSubmit={handleUpdateProduct}>
              <div className="md:flex gap-6 justify-between">
                <div className="md:w-1/2 mb-6">
                  <div>
                    <label
                      className="text-lg font-semibold text-neutral-900 dark:text-gray-200 opacity-80 mb-3 block"
                      htmlFor="image"
                    >
                      Image:
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-[#f7f7f7]  dark:bg-gray-600 dark:border-gray-500 dark:placeholder:text-gray-400 dark:text-gray-200 outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
                      type="text"
                      id="image"
                      name="image"
                      defaultValue={image}
                      placeholder="Enter image url"
                      required
                    />
                  </div>
                </div>
                <div className="md:w-1/2 mb-6">
                  <div>
                    <label
                      className="text-lg font-semibold text-neutral-900 dark:text-gray-200 opacity-80 mb-3 block"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-[#f7f7f7]  dark:bg-gray-600 dark:border-gray-500 dark:placeholder:text-gray-400 dark:text-gray-200 outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={name}
                      placeholder="Enter Product Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex gap-6 justify-between">
                <div className="md:w-1/2 mb-6">
                  <div>
                    <label
                      className="text-lg font-semibold text-neutral-900 dark:text-gray-200 opacity-80 mb-3 block"
                      htmlFor="brand_name"
                    >
                      Brand Name:
                    </label>
                  </div>
                  <div>
                    <select
                      className="w-full px-4 py-3.5 bg-[#f7f7f7]  dark:bg-gray-600 dark:border-gray-500 dark:placeholder:text-gray-400 dark:text-gray-200 outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200 uppercase"
                      id="brand_name"
                      name="brand_name"
                      onChange={handleBrandName}
                      value={brandName}
                      placeholder="Enter Brand Name"
                    >
                      {brands?.map((brand) => (
                        <option className="uppercase" key={brand._id}>
                          {brand.brand_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="md:w-1/2 mb-6">
                  <div>
                    <label
                      className="text-lg font-semibold text-neutral-900 dark:text-gray-200 opacity-80 mb-3 block"
                      htmlFor="type"
                    >
                      Type:
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-[#f7f7f7]  dark:bg-gray-600 dark:border-gray-500 dark:placeholder:text-gray-400 dark:text-gray-200 outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
                      type="text"
                      id="type"
                      name="type"
                      defaultValue={type}
                      placeholder="Product Type"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex gap-6 justify-between">
                <div className="md:w-1/2 mb-6">
                  <div>
                    <label
                      className="text-lg font-semibold text-neutral-900 dark:text-gray-200 opacity-80 mb-3 block"
                      htmlFor="price"
                    >
                      Price:
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-[#f7f7f7]  dark:bg-gray-600 dark:border-gray-500 dark:placeholder:text-gray-400 dark:text-gray-200 outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
                      type="text"
                      id="price"
                      name="price"
                      placeholder="Price"
                      defaultValue={price}
                      required
                    />
                  </div>
                </div>
                <div className="md:w-1/2 mb-6">
                  <div>
                    <label
                      className="text-lg font-semibold text-neutral-900 dark:text-gray-200 opacity-80 mb-3 block"
                      htmlFor="rating"
                    >
                      Rating:
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-[#f7f7f7]  dark:bg-gray-600 dark:border-gray-500 dark:placeholder:text-gray-400 dark:text-gray-200 outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
                      type="text"
                      id="rating"
                      name="rating"
                      placeholder="1 to 5"
                      defaultValue={rating}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div>
                  <label
                    className="text-lg font-semibold text-neutral-900 dark:text-gray-200 opacity-80 mb-3 block"
                    htmlFor="description"
                  >
                    Short description:
                  </label>
                </div>
                <div>
                  <textarea
                    className="w-full px-4 py-3 bg-[#f7f7f7]  dark:bg-gray-600 dark:border-gray-500 dark:placeholder:text-gray-400 dark:text-gray-200 outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
                    id="description"
                    name="description"
                    placeholder="Short description..."
                    defaultValue={description}
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <div className="w-full mx-auto">
                <button className="w-full mt-6 mb-10 bg-gradient-to-r bg-blue-1 rounded-lg p-3 text-white uppercase font-medium duration-300">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
