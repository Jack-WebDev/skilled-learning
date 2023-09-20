
function Card({ src, h1, p }) {
  return (
    <div className="grid gap-4 shadow-xl shadow-black-500/50 mx-4 rounded-lg relative">
        <img className="absolute -top-8 left-4" src={src} alt="" />
        <div className="container grid gap-4 px-4 py-10">
            <h1 className="text-Colorblue text-2xl font-fw700">{h1}</h1>
            <p>{p}</p>
            <button className="bg-clip-text text-Colorpink w-fit rounded-full h-fit">Get Started</button>
        </div>
    </div>
  )
}

export default Card