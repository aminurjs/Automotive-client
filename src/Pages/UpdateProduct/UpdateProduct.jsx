import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const [brands, setBrands] = useState([]);
  const product = useLoaderData();

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  const { image, name, type, price, rating, description } = product;

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand_name = form.brand_name.value.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const product = {
      image,
      name,
      brand_name,
      type,
      price,
      rating,
      description,
    };
    console.log(product);
    // fetch("http://localhost:5000/update", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       swal("Success!", "Product added", "success");
    //     }
    //   });
  };

  return (
    <div className="bg-[url(https://i.ibb.co/smFhVQh/ning-31-min.jpg)] bg-cover">
      <div className="max-w-5xl mx-auto p-10">
        <div className=" rounded shadow p-10  bg-white">
          <div>
            <h1 className="text-3xl text-blue-1 font-semibold text-center mb-2">
              Update Product
            </h1>
            <form onSubmit={handleUpdateProduct}>
              <div className="md:flex gap-6 justify-between">
                <div className="md:w-1/2 mb-6">
                  <div>
                    <label
                      className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                      htmlFor="image"
                    >
                      Image:
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-white outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
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
                      className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-white outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
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
                      className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                      htmlFor="brand_name"
                    >
                      Brand Name:
                    </label>
                  </div>
                  <div>
                    <select
                      className="w-full px-4 py-3.5 bg-white outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200 uppercase"
                      id="brand_name"
                      name="brand_name"
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
                      className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                      htmlFor="type"
                    >
                      Type:
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-white outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
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
                      className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                      htmlFor="price"
                    >
                      Price:
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-white outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
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
                      className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                      htmlFor="rating"
                    >
                      Rating:
                    </label>
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-white outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
                      type="number"
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
                    className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                    htmlFor="description"
                  >
                    Short description:
                  </label>
                </div>
                <div>
                  <textarea
                    className="w-full px-4 py-3 bg-white outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
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
