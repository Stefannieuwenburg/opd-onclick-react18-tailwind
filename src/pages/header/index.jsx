
const Header = () => {
  return (
    <div name="home" className="h-screen w-full bg-primary ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Simpel project with tailwind
          </h2>
          <p className="text-gray-100 py-4 max-w-md">
            lets have fun !
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
