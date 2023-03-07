
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CartPage from "./views/CartPage";
import LandingPage from "./views/LandingPage";
import PurchaseSuccessPage from "./views/Purchase/PurchaseSuccessPage";
import PurchaseFailedPage from "./views/Purchase/PurchaseFailedPage";
import PurchaseCanceledPage from "./views/Purchase/PurchaseCanceledPage";
import config from "./config";
import WalletsPage from "./views/WalletsPage";
import PostPaymentRoute from "./components/PostPaymentRoute";

function App() {
  return (
    <Router basename={config.path_prefix}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<PostPaymentRoute><CartPage /></PostPaymentRoute>} />
        <Route path="/wallets" element={<WalletsPage />} />
        <Route path="/purchase/success" element={<PurchaseSuccessPage />} />
        <Route path="/purchase/failed" element={<PurchaseFailedPage />} />
        <Route path="/purchase/canceled" element={<PurchaseCanceledPage />} />
      </Routes>
    </Router>
  );
}

export default App;
