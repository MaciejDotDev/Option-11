import "bootstrap/dist/css/bootstrap.min.css";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Footer from "./Components/Footer";
import AdminLogin from "@/Pages/Auth/AdminLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
            <App {...props} />
                <Router>
                    <Routes>
              
                        <Route path="/adminLogin" component={AdminLogin} />
                    </Routes>
                    

                    <Footer />
                </Router>
            </>
        );
    },
    progress: {
        color: "#4B5563",
    },
});