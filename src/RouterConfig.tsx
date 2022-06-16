import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Preview from "./components/Preview";

export const RouterConfig: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App/>} />
                    <Route path="preview" element={<Preview />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
