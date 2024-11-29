import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Swal from 'sweetalert2';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            if (data.deletedCount > 0) {
              const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
              setCoffees(remainingCoffees);
              // alert show
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
      }
    });


  }

  return (
    <>
      <h1 className='text-5xl mb-10 text-purple-700'>Coffee Store</h1>
      <div className="grid md:grid-cols-2 md:gap-10">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} handleDelete={handleDelete}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
