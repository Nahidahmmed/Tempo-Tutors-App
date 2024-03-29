import UseCarts from "../../Hooks/UseCarts";
import Swal from "sweetalert2";
import Title from "../../ReusedComponents/Title";
import "./MyCart.css";
import { FaPaypal, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function MyCart() {
  const [cart, refetch] = UseCarts();
  const handleDelete = (classes) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BASE_URL}/addedClass/${classes._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  if (cart[0]?._id) {
    return (
      <div className="container mx-auto py-[40%] md:py-40">
        <Title title={"Enrolled Music Classes"} />
        <div className="overflow-x-auto">
          <div className="hidden sm:block mt-20">
            {" "}
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Classes
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Instructor
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cart.map((classes, index) => (
                  <tr key={classes._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={classes.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {classes.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {classes.instructor.instructor_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#4E9F3D]">
                      {classes.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#4E9F3D]">
                      {classes.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to={"/pay"}>
                        <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-[#4E9F3D] hover:bg-[#2E6B2E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E6B2E]">
                          <FaPaypal className="h-5 w-5 mr-2" />
                          Pay with PayPal
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(classes)}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-red-600 bg-red-50 hover:bg-red-100 ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                      >
                        <FaTrash className="h-5 w-5 mr-2 text-red-600" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="xl:hidden lg:hidden md:hidden">
            {" "}
            {cart.map((classes, index) => (
              <div
                key={classes._id}
                className="bg-white shadow overflow-hidden mt-10 mb-4"
              >
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full ml-4"
                    src={classes.image}
                    alt=""
                  />
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {classes.name}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {classes.instructor.instructor_name}
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <div className="px-4 py-4 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Price
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 font-semibold">
                          {classes.price}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Duration
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 font-semibold">
                          {classes.duration}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="px-4 py-4 sm:px-6">
                    <Link to={"/pay"}>
                      <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-[#4E9F3D] hover:bg-[#2E6B2E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E6B2E]">
                        <FaPaypal className="h-5 w-5 mr-2" />
                        Pay with PayPal
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(classes)}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-red-600 bg-red-50 hover:bg-red-100 ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                    >
                      <FaTrash className="h-5 w-5 mr-2 text-red-600" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <div className="pt-28 lg:pt-52 lg:w-[30%] mx-auto">
          <div className="tooltip-container w-full lg:w-[600px] md:w-[600px] mx-auto">
            <span className="tooltip">
              You don't have a Enroled class ,If you want to Enroled a class
              please go to "classes"
            </span>
            <span className="text text-white">@</span>
          </div>
        </div>
      </div>
    );
  }
}
