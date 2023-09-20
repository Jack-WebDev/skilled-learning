
function Hero() {
  return (
    <>
        <section className="grid px-5 md:hidden mt-5">
            <div className="heroContent grid text-start gap-4">
                <h1 className="text-Colorblue text-5xl font-fw800 leading-tight">Maximize skill, maximize budget</h1>
                <p className="text-orange">Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                <button className="bg-gradient-to-r from-Colororange to-Colorpink text-Colorwhite w-fit rounded-full py-2 px-4 h-fit hover:bg-[#d1d5db] font-fw700">Get Started</button>

            </div>

            
            <img src="assets/image-hero-mobile.png" alt="" />

        </section>

        <section className="hidden md:grid grid-cols-2 container m-auto overflow-hidden items-center px-5">
              <div className="heroContent grid text-start translate-y-10 h-fit gap-8">
                <h1 className="text-blue-950 text-4xl font-fw800 md:6xl h-fit lg:text-7xl">Maximize skill, maximize budget</h1>
                <p className="text-[#83869a] text-xl h-fit lg:text-2xl">Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                <button className="bg-gradient-to-r from-Colororange to-Colorpink text-Colorwhite w-fit rounded-full py-2 px-4 h-fit md:text-xl lg:text-3xl lg:px-8 lg:py-4 mb-10 font-fw700">Get Started</button>
              </div>

            <img className="translate-x-40 md:inline-block lg:hidden" src="assets/image-hero-tablet.png" alt="" />
            <img className="translate-x-48 hidden lg:inline-block" src="assets/image-hero-desktop.png" alt="" />
        </section>
    </>
  )
}

export default Hero