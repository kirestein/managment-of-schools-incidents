import AppRoutes from "./app.routes";
import { BrowserRouter as Router } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Router>
        <AppRoutes />
    </Router>
  );
}

export default Routes;