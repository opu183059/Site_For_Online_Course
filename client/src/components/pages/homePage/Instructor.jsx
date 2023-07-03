const Instructor = () => {
  return (
    <div className="md:flex flex-row-reverse min-h-[500px] max-w-6xl mx-auto items-center md:px-20">
      <div className="left md:w-1/2 ml-5 text-left p-5">
        <h1 className="text-xl mb-3">
          Better Dev{" "}
          <span className="text-indigo-600 text-2xl font-bold">Instructor</span>
        </h1>
        <h1 className="text-3xl mb-2">Become an instructor</h1>
        <p className="text-lg mb-3">
          Instructors from around the world teach millions of students on Better
          Dev. We provide the tools and skills to teach what you love.
        </p>

        <div className="flex gap-4">
          <button className="btn px-4 py-2 bg-indigo-300 border-indigo-300 border-[2px] rounded-lg">
            Start Teaching Today
          </button>
        </div>
      </div>

      <div className="right md:w-1/2 flex justify-center">
        <div className="w-9/12 shadow-lg hover:shadow-xl rounded-2xl p-1">
          <img
            src="../src/assets/img/instructor.jpg"
            alt=""
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
