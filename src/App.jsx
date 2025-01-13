// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MovieIndexPage from "./pages/MovieShowPage";
import MovieShowPage from "./pages/MovieShowPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />} path="/">
					<Route index element={<HomePage />}></Route>
					<Route path="about" element={<AboutPage />}></Route>

					<Route path="movies">
						<Route index element={<MovieIndexPage />}></Route>
						<Route path=":id" element={<MovieShowPage />}></Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
