import { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Catalogue from "./components/Catalogue";
import CheckOutComponent from "./components/Checkout";

function App() {
  let [num, setNum] = useState(0);

  return (
    <div>
      <header>

        <Router>
          <nav className="navigation">
            <ul>
            <li id="btn-checkout">
                <Link to="/Catalogue">
                  <input type="button" value="Catalogue" />{" "}
                </Link>
              </li>
              <li id="btn-checkout">
                <Link to="/checkout">
                  <input type="button" value="Checkout" />{" "}
                </Link>
              </li>

              <li id="container-shopping">
                {num}
                <i class="fas fa-shopping-cart"></i>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/checkout">
              <CheckOutComponent />
            </Route>

            <Route path="/Catalogue">
              <Catalogue num={num} notyfy={setNum} />
            </Route>
          </Switch>


        </Router>
        

      </header>

     
    </div>
  );
}

export default App;
