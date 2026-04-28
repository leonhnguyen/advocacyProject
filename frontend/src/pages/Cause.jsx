import { Link } from "react-router-dom";
import "./App.css";

export default function Cause() {
  return (
    <div>
        <h1>The Variables</h1>

        <div>
            <Link to="/Problem">
                <button>Back to the Problem</button>
            </Link>
        </div>

    </div>
  );
}