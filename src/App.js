import React, { Suspense } from "react";
import { Spinner } from "reactstrap";
import { Route } from "react-router-dom";
// Pages
const MainPage = React.lazy(() => import("./Page/Main.page"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Route path="/" exact component={MainPage} />
      </Suspense>
    </div>
  );
}

export default App;
