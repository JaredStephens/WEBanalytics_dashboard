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

//////////// CHARTS ///////////////////////////////////
//////////// CHARTS //////////////////////////////////

///////LINE CHART //////////////////////////////////

// SET-UP
const lineLabels = ["16-22", "23-19", "30-5", "6-12", "13-19", "20-26"];

const lineData = {
	labels: lineLabels,
	datasets: [
		{
			label: "TRAFFIC",
			backgroundColor: "rgb(116, 119, 191, .3)",
			borderColor: "rgb(116, 119, 191, .3)",
			data: [1000, 200, 1000, 400, 1000, 2000],
			fill: true,
		},
	],
};

// CONFIG
const lineConfig = {
	type: "line",
	data: lineData,
};

// RENDER
var lineChart = new Chart(document.getElementById("lineChart"), lineConfig);

///////BAR CHART //////////////////////////////////

// SETUP
const barLabels = ["S", "M", "T", "W", "T", "F", "S"];
const barData = {
	labels: barLabels,
	datasets: [
		{
			label: "DAILY TRAFFIC",
			data: [70, 120, 150, 100, 200, 100],
			backgroundColor: "rgb(116, 119, 191)",
			borderColor: "rgb(116, 119, 191, .3)",
			borderWidth: 1,
		},
	],
};

// CONFIG
const barConfig = {
	type: "bar",
	data: barData,
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
};

//RENDER
var barChart = new Chart(document.getElementById("barChart"), barConfig);

///////PIE CHART //////////////////////////////////

//SETUP
const doughnutData = {
	labels: ["Desktop", "Tablet", "Phones"],
	align: "end",
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: [
				"rgb(116, 119, 191)",
				"rgb(81, 182, 200)",
				"rgb(129,201,143)",
			],
			hoverOffset: 1,
		},
	],
};

//CONFIG
const doughnutConfig = {
	type: "doughnut",
	data: doughnutData,
};

//RENDER
var doughnutChart = new Chart(
	document.getElementById("doughnutChart"),
	doughnutConfig
);
