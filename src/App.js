import React, { Suspense } from "react";
import { Spinner } from "reactstrap";
// Pages
const MainPage = React.lazy(() => import("./Page/Main.page"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <MainPage />
      </Suspense>
    </div>
  );
}

export default App;
