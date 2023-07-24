import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex flex-center flex-col">
        <h1 className="head_text text-center">
            Copy Cat Website
            <br className="max-md:hidden"/>
            <span className="orange_gradient">Just a Copy Cat</span>
        </h1>
        <p className="m-9  text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur 
            nihil minima non quasi facilis! Facere, magni? Vel, vero deserunt tempora officia iure 
            quasi quam quos accusamus. Quasi officiis nesciunt eligendi.
          </p>
          <Feed />
    </section>
  )
}

export default Home
