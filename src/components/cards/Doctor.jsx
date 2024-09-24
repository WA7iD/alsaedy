import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Doctor({ image, name, description, key }) {
  return (
    <div key={key} className="bg-[#F5F5F5] rounded-t-3xl overflow-hidden">
      <div className="w-full min-h-[300px] max-h-[300px] overflow-hidden">
        <img src={image} alt="image" className="w-full bg-cover" />
      </div>
      <div className="p-6">
        <h1 className="text-2xl text-primary my-4"> {name}</h1>
        <p className="text-primary/40 my-4"> {description}</p>

        <Link
          to={"/bookingPage"}
          className="border-2 border-secondary text-secondary rounded-full px-4 py-3 flex items-center gap-2 w-fit"
        >
          تواصل معنا <FaArrowLeft />
        </Link>
      </div>
    </div>
  );
}

export default Doctor;
