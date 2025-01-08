import bgImage from '../assets/home/chef-service.jpg';

const BistroBossSection = () => {
    return (
      <div
        className=" flex justify-center items-center bg-cover bg-center h-[400px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-white bg-opacity-90 p-10 text-center w-[80%] md:w-[50%] rounded shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">BISTRO BOSS</h2>
          <p className="text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    );
  };
  
  export default BistroBossSection;
