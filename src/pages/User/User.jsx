import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
/* eslint-disable react/prop-types */
export default function User({ name, email, createdAt, updatedAt }) {
  const dateCreatedAt = new Date(Number(createdAt));
  const dateUpdatedAt = new Date(Number(updatedAt));
  return (
    <div
      className="flex justify-between items-start gap-12 font-semibold capitalize shadow-lg shadow-gray-600 rounded-lg 
  p-6 mt-2 mr-12 mx-12 flex-col sm:flex-row"
    >
      <div>
        <h2>
          <span className="font-bold">name : </span>
          {name}
        </h2>
        <p className="text-[15px]">
          <span className="font-bold">email : </span>
          {email}
        </p>
        <p>
          <span className="font-bold">Created At : </span>
          {dateCreatedAt.toLocaleString()}
        </p>
        <p>
          <span className="font-bold">Updated At : </span>
          {dateUpdatedAt.toLocaleString()}
        </p>
      </div>
      <ul className="flex gap-3 items-center sm:flex text-3xl">
        <li>
          <MdDeleteForever className="text-red-700 cursor-pointer hover:text-rose-800 transition duration-150" />
        </li>
        <li>
          <FaEdit className="text-2xl text-yellow-600 cursor-pointer hover:text-orange-500 transition duration-150" />
        </li>
      </ul>
    </div>
  );
}
