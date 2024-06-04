import { Route, Routes } from "react-router-dom";
import { RouterConfig } from "./RouterConfig";

export default function AppRouter() {
    return (
        <Routes>
            {
                RouterConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.element />}
                    />
                ))
            }
        </Routes>
    )
}