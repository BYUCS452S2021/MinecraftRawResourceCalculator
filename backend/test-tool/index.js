async function projectlist() {
	let response = await fetch("http://localhost:8080/projectlist").then(res =>
		res.json()
	)
	console.log(response)
	document.getElementById("projectlist").innerText = JSON.stringify(response)
}

async function createproject() {
	let response = await fetch("http://localhost:8080/createproject", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			value: "dummy body",
		}),
	}).then(res => res.json())
	console.log(response)
	document.getElementById("createproject").innerText =
		JSON.stringify(response)
}

async function projectdetails() {
	let response = await fetch("http://localhost:8080/project/1").then(res =>
		res.json()
	)
	console.log(response)
	document.getElementById("projectdetails").innerText =
		JSON.stringify(response)
}

async function calculateresources() {
	let response = await fetch(
		"http://localhost:8080/project/1/calculateresources"
	).then(res => res.json())
	console.log(response)
	document.getElementById("calculateresources").innerText =
		JSON.stringify(response)
}
