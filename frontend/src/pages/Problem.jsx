import { Link } from "react-router-dom";
import "./App.css";

export default function Problem() {
  return (
    <div>
        <h1>The Expression</h1>
        <h2>"One doesn't intend harm to cause it"</h2>

        <div>
            <Link to="/cause">
                <button>The Roots</button>
            </Link>

            <Link to="/home">
                <button>Back Home</button>
            </Link>
        
        </div>

    </div>
  );
}