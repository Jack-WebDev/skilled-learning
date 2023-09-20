import Card from "./Card"

function Section() {
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
      <div className="card flex justify-center items-center mx-4 bg-gradient-to-bl from-Colororange to-Colorpink text-Colorwhite rounded-lg h-[20rem]">
        <h2 className="text-3xl text-center">Check out our many great courses</h2>
      </div>
        <Card src={"/assets/icon-design.svg"} h1={"Design"} p={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo debitis tempora aliquam, iure aspernatur quis dignissimos veniam necessitatibus ut rem molestias"}/>
        <Card src={"/assets/icon-business.svg"} h1={"Business"} p={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo debitis tempora aliquam, iure aspernatur quis dignissimos veniam necessitatibus ut rem molestias"}/>
        <Card src={"/assets/icon-crypto.svg"} h1={"Crypto"} p={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo debitis tempora aliquam, iure aspernatur quis dignissimos veniam necessitatibus ut rem molestias"}/>
        <Card src={"/assets/icon-photography.svg"} h1={"Photography"} p={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo debitis tempora aliquam, iure aspernatur quis dignissimos veniam necessitatibus ut rem molestias"}/>
        <Card src={"/assets/icon-animation.svg"} h1={"Animation"} p={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo debitis tempora aliquam, iure aspernatur quis dignissimos veniam necessitatibus ut rem molestias"}/>
    </div>
  )
}

export default Section