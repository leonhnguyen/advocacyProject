import { Link } from "react-router-dom";
import "./App.css";

export default function Solutions() {
  return (
    <div>
        <h1>Potential Solutions</h1>
        

        <div>
             <Link to="/home">
                <button>Back Home</button>
            </Link>

        </div>

    </div>
  );
}