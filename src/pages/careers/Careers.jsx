import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
  const career = useLoaderData()
  
  return (
    <div className="careers">
      {career.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

//LOADER FUNCTION
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers")

  if (!res.ok){
  throw Error(`Could not fetch the career`)
}

  return res.json()
}
