import { useState } from "react";
import { data } from "../../../data";


const UserChallenge = () => {
  const [name, setName] = useState("")
  const [people, setData] = useState(data)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted");

    setData(prev => [...prev, {id: prev[people.length] + 1, name}])
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' onChange={e=> setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>

        <button type='submit' className='btn btn-block'>
          Remove User
        </button>
      </form>
      {people.map(p => (<p key={p.id}>{p.name}</p>))}
    </div>
  );
};
export default UserChallenge;
