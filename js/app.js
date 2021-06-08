// REMOVE ALERT FUNCTION

function remove() {
	const alertDiv = document.getElementById("alert");
	alertDiv.parentNode.removeChild(alertDiv);
	return false;
}

//REMOVE NOTIFICATION FUNCTION

function notifi() {
	const bdg = document.querySelector(".badge");
	bdg.parentNode.removeChild(bdg);
	return false;
}

// CHARTS

// SET-UP
const labels = ["16-22", "23-19", "30-5", "6-12", "13-19", "20-26"];

const data = {
	labels: labels,
	datasets: [
		{
			label: "My First dataset",
			backgroundColor: "purple",
			borderColor: "purple",
			data: [0, 500, 1000, 1500, 2000, 2500],
		},
	],
};

// CONFIG
const config = {
	type: "line",
	data: data,
	options: {},
};

// RENDER
var myChart = new Chart(document.getElementById("myChart"), config);
