import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos minus sapiente ad, nesciunt consequatur aliquam qui possimus dolore blanditiis molestias ducimus vel dignissimos eligendi quia dolor corrupti provident architecto.</p>
      </div>
    </div>
  )
}

//Loader function

export const careerDetailsLoader = async ({params}) => {
const { id } = params

const res = await fetch('http://localhost:4000/careers/' + id)

if (!res.ok){
  throw Error(`Could not find that career`)
}

return res.json()
}