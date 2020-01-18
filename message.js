import React from "react";

export default function Message(props) {
	console.log(props);
	return <p>clicked {props.count} times</p>;
}
