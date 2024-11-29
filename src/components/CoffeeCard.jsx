import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, handleDelete }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  // const handleDelete = (_id) =>{
  //   // console.log("Button clicked", _id);
  //   fetch(`http://localhost:5000/coffee/${_id}`, {
  //     method: "DELETE"
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   });
  // }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Movie" />
      </figure>
      <div className="w-full flex gap-5 justify-between items-center">
        <div className="ml-5 text-start space-y-1">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-600 font-serif">{details}</p>
          <p className="font-medium">{category}</p>
          <p className="font-medium">{taste}</p>
          <p className="font-medium">{supplier}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3">
            <button className="btn join-item bg-emerald-600 text-white">View</button>
            <Link to={`/update-coffee/${_id}`}>
              <button className="btn join-item bg-orange-600 text-white">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-500 text-white">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;