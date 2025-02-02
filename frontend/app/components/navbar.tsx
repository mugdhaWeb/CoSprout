export default function Navbar () {
    return (
      <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="/" title="" className="flex">
                  <img className="w-auto h-8" src="cosproutlogo.png" alt="" />
                </a>
              </div>
              <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10 font-semibold">
              🚧 Pardon our dust! Full website launching soon.
              </div>
            </div>
          </div>
        </header>
    )
}