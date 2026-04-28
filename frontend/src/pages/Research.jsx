import { Link } from "react-router-dom";

export default function Research() {
  return (
    <div>
        <h1>What is the Math?</h1>
        

        <div>
            <Link to="/Solutions">
                <button>Potential Solutions</button>
            </Link>

             <Link to="/home">
                <button>Back Home</button>
            </Link>

        </div>

    </div>
  );
}