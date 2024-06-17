import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../redux/slice/ItemSlice";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddEditItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    price: "",
    desc: "",
    category: "",
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    if (id) {
      const item = items.find((item) => item.id === id);
      if (item) {
        setFormData(item);
      }
    }
  }, [id, items]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateItem({ ...formData, id }));
    } else {
      dispatch(addItem({ ...formData, id: uuidv4() }));
    }
    navigate("/admin");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{id ? "Edit Item" : "Add New Item"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="img" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            value={formData.desc}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg text-lg focus:outline-none transition duration-300 ease-in-out"
          >
            {id ? "Update Item" : "Add Item"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditItem;
