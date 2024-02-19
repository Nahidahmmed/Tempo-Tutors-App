
import UseCarts from "../../../Hooks/UseCarts";
import Swal from "sweetalert2";
import Title from "../../../ReusedComponents/Title";
import "./MyCart.css"
import { FaPaypal } from "react-icons/fa";
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
      <div>
        <Title title={"Enroled music classes"} semititle={""}></Title>
        <div className="mt-10">
          <div className="overflow-x-auto container mx-auto">
            <table className="table text-lg mb-32">
              {/* head */}
              <thead className=" text-lg">
                <tr>
                  <th>#</th>
                  <th>Classes</th>
                  <th>Instractor</th>
                  <th>Price</th>
                  <th>Duration</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}
                {cart.map((classes, index) => (
                  <tr key={classes._id}>
                    <th>
                      <h1>{index + 1}</h1>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16">
                            <img
                              src={classes.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{classes.name}</div>
                          <div className="text-sm opacity-50"></div>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold">
                      {classes.instructor.instructor_name}
                    </td>
                    <td>
                      <span className="font-bold text-[#4E9F3D]">
                        {classes.price}
                      </span>
                    </td>
                    <td>
                      <span className=" font-semibold text-[#4E9F3D]">
                        {classes.duration}
                      </span>
                    </td>
                    <td>
                      <div className="flex ml-5 w-[190px] justify-between">
                      <button className="payButton group">
                        <FaPaypal className="svgIcon group-hover:text-3xl"/>
                      </button>
                      <button
                        onClick={() => handleDelete(classes)}
                        className="deleteButton"
                      >
                        <svg viewBox="0 0 448 512" className="svgIcon">
                          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                        </svg>
                      </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <div className="pt-52 w-[30%] mx-auto">
          <div className="tooltip-container">
            <span className="tooltip">
              You don't have a Enroled class ,If you want to Enroled a class
              please go to "classes"
            </span>
            <span className="text">@</span>
          </div>
        </div>
      </div>
    );
  }
}
