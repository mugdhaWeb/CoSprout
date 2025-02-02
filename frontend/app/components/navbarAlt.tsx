export default function NavbarAlt () {
    return (
      <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="/" title="" className="flex">
                <img className="w-auto h-8" src="cosproutlogo.png" alt="" />
                </a>
              </div>
              <div className="ml-auto md:flex md:items-center md:justify-center text-sm font-semibold">
              📝 Fall 2023 Cohort Application
              </div>
            </div>
          </div>
        </header>
    )
}