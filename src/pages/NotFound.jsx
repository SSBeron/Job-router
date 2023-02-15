import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sequi ducimus quam cumque quas? Nihil harum rerum molestiae necessitatibus vel voluptas consequuntur nam deserunt ex, ullam, ratione culpa eligendi minus.</p>
    <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
