import ReactDOM from "react-dom/client";
import Homepage from "./Homepage";

import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement=document.getElementById('root')
const rootRef= ReactDOM.createRoot(rootElement);
rootRef.render(<Homepage/>)