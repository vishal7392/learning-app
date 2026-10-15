import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page hero-section">
      <p className="eyebrow">React + React Router</p>
      <h1>Welcome to your learning project</h1>
      <p>
        This starter structure separates pages, reusable components, layouts,
        routes, services, hooks, and utilities.
      </p>
      <Link className="button" to="/about">
        Explore the structure
      </Link>
    </section>
  )
}

export default Home
