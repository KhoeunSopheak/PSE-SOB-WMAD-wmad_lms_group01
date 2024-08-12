import { Link } from "react-router-dom";

function Button({ name, bgColor }) {
  return (
    <div className="px-1">
      <button className={`text-white py-3 px-8 rounded-lg font-bold ${bgColor}`}>
        <Link to="/book-catalog">{name}</Link>
      </button>
    </div>
  );
}

export default Button;
