import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import addNumbers from "./Numbers.js";

export default function App() {
	let [nums, addNumber] = useState({
		numbers: [],
		uniq: [],
		even: [],
		odd: []
	});
	return (
		<div>
			<h1>The Numbers Game</h1>
			<button onClick={() => addNumber(addNumbers(nums))}>Add Number</button>
			<div className="card">
				<div className="card-body">
					<div>Stats ({nums.numbers.length})</div>
					<div>{nums.uniq.length} Unique Numbers</div>
				</div>
			</div>
			<div>All ({nums.numbers.length})</div>
			<ul>
				{nums.numbers.forEach(num => (
					<li>{num}</li>
				))}
			</ul>
			<div>Even ({nums.even.length})</div>
			<ul></ul>
			<div>Odd ({nums.odd.length})</div>
			<ul></ul>
		</div>
	);
}
