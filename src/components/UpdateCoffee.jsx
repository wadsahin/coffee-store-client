import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
    // console.log(newCoffee);

    // send data to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee updated successfully',
            icon: 'success',
            confirmButtonText: 'Close'
          })
        }
      })
  }

  return (
    <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
      <h2 className="text-3xl font-semibold">Update your Coffee here</h2>
      <form onSubmit={handleUpdateCoffee} className="my-5">
        {/* input fields start */}
        {/* row 1 */}
        <div className="flex justify-between gap-10 mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input type="text" name="name" defaultValue={name} placeholder="Coffee name" className="input input-bordered" required />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input type="number" name="quantity" defaultValue={quantity} placeholder="Available quantity" className="input input-bordered" required />
          </div>
        </div>
        {/* row 2 */}
        <div className="flex justify-between gap-10 mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered" required />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered" required />
          </div>
        </div>
        {/* row 3 */}
        <div className="flex justify-between gap-10 mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input type="text" name="category" defaultValue={category} placeholder="Category Name" className="input input-bordered" required />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered" required />
          </div>
        </div>
        {/* row 4 */}
        <div className="flex justify-between gap-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered" required />
          </div>
        </div>
        {/* input fields end  */}
        <div className="form-control mt-6">
          <button className="btn bg-orange-500 text-white hover:bg-orange-600">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;