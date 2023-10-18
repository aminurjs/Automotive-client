const AddProduct = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/smFhVQh/ning-31-min.jpg)] bg-cover">
      <div className="max-w-5xl mx-auto p-10">
        <div className=" rounded shadow p-10  bg-white">
          <div>
            <h1 className="text-3xl text-blue-1 font-semibold text-center mb-2">
              Add Product
            </h1>

            <form>
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
                    <input
                      className="w-full px-4 py-3 bg-white outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
                      type="text"
                      id="brand_name"
                      name="brand_name"
                      placeholder="Enter Brand Name"
                      required
                    />
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
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div>
                  <label
                    className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                    htmlFor="short_description"
                  >
                    Short description:
                  </label>
                </div>
                <div>
                  <textarea
                    className="w-full px-4 py-3 bg-white outline-none rounded text-[#2b2b2b] placeholder:text-[#1B1A1A99] border border-gray-200"
                    id="short_description"
                    name="short_description"
                    placeholder="Short description..."
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <div className="w-full mx-auto">
                <button className="w-full mt-6 mb-10 bg-gradient-to-r bg-blue-1 rounded-lg p-3 text-white uppercase font-medium duration-300">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
