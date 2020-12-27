import "./css/style.css";
import CartHeader from "./Components/cart-header";
import CartItems from "./Components/cart-content";
import CartFooter from "./Components/cart-footer";

function App() {
    return (
        <main>
            <CartHeader />
            <CartItems />
            <CartFooter />
        </main>
    );
}

export default App;
