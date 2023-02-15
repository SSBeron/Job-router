import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
  const data = useLoaderData()
  
  return (
    <div className="careers">
      {data.map(data => (
        <Link to="/" key={data.id}>
          <p>{data.title}</p>
          <p>Based in {data.location}</p>
        </Link>
      ))}

    </div>
  )
}

//LOADER FUNCTION
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers")

  return res.json()
}
