import { Navigate } from "react-router-dom";
import { useState } from "react";

function About() {
  const [user, setUser] = useState('mario')

  if(!user){
    return <Navigate to="/" replace={true}/>
  }

  return ( 
    <div className="about">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis recusandae tempore, unde minima suscipit ducimus quae voluptas ad reprehenderit dolore vel, quis perspiciatis laborum esse assumenda non, aliquam sunt!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis recusandae tempore, unde minima suscipit ducimus quae voluptas ad reprehenderit dolore vel, quis perspiciatis laborum esse assumenda non, aliquam sunt!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis recusandae tempore, unde minima suscipit ducimus quae voluptas ad reprehenderit dolore vel, quis perspiciatis laborum esse assumenda non, aliquam sunt!</p>


      <button onClick={()=> setUser(null)}>Logout</button>

    </div>

   );
}

export default About;