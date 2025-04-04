function Navbar() {
  return (
    <nav className="bg-orange-200 p-4 sticky top-0 z-50 shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-blue-900 font-bold text-xl">Glacial Lake Risk Assessment</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-blue-900 font-bold">About</a></li>
          <li><a href="#upload" className="text-blue-900 font-bold">Upload</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
