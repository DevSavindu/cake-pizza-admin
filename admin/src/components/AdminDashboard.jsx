import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../redux/slice/ItemSlice";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <button
        onClick={() => navigate("/admin/add")}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Add New Item
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
            <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded-md mb-2"/>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.desc}</p>
            <p className="text-gray-600 font-bold">${item.price}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(item.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
