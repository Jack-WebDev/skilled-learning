
function Navbar() {
  return (
    <div>
        <nav className="flex justify-between items-center p-5 md:container md:m-auto md:px-5">
            <img src="/assets/logo-dark.svg" alt="" />
            <button className="bg-Colorblue text-Colorwhite rounded-full py-2 px-4 font-fw700">Get Started</button>
        </nav>
    </div>
  )
}

export default Navbar