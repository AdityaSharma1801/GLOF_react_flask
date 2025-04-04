function HeroSection() {
  return (
    <section className="bg-cover bg-center text-white text-center h-screen flex flex-col justify-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/28359751/pexels-photo-28359751.jpeg')" }}>
      <h1 className="text-5xl font-bold mb-4">Glacial Lake Risk Assessment</h1>
      <p className="text-xl mb-6">Predicting and Preventing Natural Hazards with AI</p>
      <div>
        <button className="bg-blue-900 px-6 py-2 rounded-full font-bold hover:bg-white hover:text-blue-900 transition">Get Started</button>
      </div>
    </section>
  );
}

export default HeroSection;
