import Card from "./Card"

function Section() {
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
      <div className="card flex justify-center items-center mx-4 bg-gradient-to-t from-Colorpink from-5% to-Colororange to-95% text-Colorwhite rounded-lg h-[20rem]">
        <h2 className="text-3xl text-center">Check out our most popular courses!</h2>
      </div>
        <Card src={"/assets/icon-design.svg"} h1={"Design"} p={"Create beautiful, usable interfaces to help shape the future of how the web looks."}/>
        <Card src={"/assets/icon-business.svg"} h1={"Business"} p={"A step-by-step playbook to help you start, scale, and sustain your business without outside investment."}/>
        <Card src={"/assets/icon-crypto.svg"} h1={"Crypto"} p={"All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."}/>
        <Card src={"/assets/icon-photography.svg"} h1={"Photography"} p={"Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."}/>
        <Card src={"/assets/icon-animation.svg"} h1={"Animation"} p={"Learn the latest animation techniques to create stunning motion design and captivate your audience."}/>
    </div>
  )
}

export default Section