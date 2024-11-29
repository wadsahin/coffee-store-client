import Swal from 'sweetalert2'


const AddCoffee = () => {
  const handleAddCoffee = (event) =>{
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo};
    // console.log(newCoffee);

    // send data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee added successfully',
          icon: 'success',
          confirmButtonText: 'Done'
        })
      }
    })
  }
  return (
    <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
      <h2 className="text-3xl font-semibold">Add a Coffee here</h2>
      <form onSubmit={handleAddCoffee} className="my-5">
        {/* input fields start */}
        {/* row 1 */}
        <div className="flex justify-between gap-10 mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input type="text" name="name" placeholder="Coffee name" className="input input-bordered" required />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input type="number" name="quantity" placeholder="Available quantity" className="input input-bordered" required />
          </div>
        </div>
        {/* row 2 */}
        <div className="flex justify-between gap-10 mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered" required />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input type="text" name="taste" placeholder="Taste" className="input input-bordered" required />
          </div>
        </div>
        {/* row 3 */}
        <div className="flex justify-between gap-10 mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input type="text" name="category" placeholder="Category Name" className="input input-bordered" required />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input type="text" name="details" placeholder="Details" className="input input-bordered" required />
          </div>
        </div>
        {/* row 4 */}
        <div className="flex justify-between gap-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
          </div>
        </div>
        {/* input fields end  */}
        <div className="form-control mt-6">
          <button className="btn bg-purple-600 text-white hover:bg-purple-700">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;