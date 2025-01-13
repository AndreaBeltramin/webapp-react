// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import Showpage from "./pages/ShowPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />} path="/">
					<Route index element={<HomePage />}></Route>
					<Route path="movies" element={<Showpage />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
