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

const barChart = document.getElementById("barChart");

const barData = {
	labels: ["S", "M", "T", "W", "T", "F", "S"],
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
const barLabels = {};

//RENDER
var barConfig = new Chart(barChart, {
	type: "bar",
	data: barData,
	options: {
		legend: {
			display: false,
		},
		tooltip: {
			callbacks: {
				label: function (tooltipItem) {
					return tooltipItem.ylabel;
				},
			},
		},
	},
});

///////PIE CHART //////////////////////////////////

const mobileChart = document.getElementById("doughnutChart");

let doughnutData = {
	labels: ["Desktop", "Table", "Phones"],
	datasets: [
		{
			data: [2000, 550, 500],
			borderWidth: 0,
			backgroundColor: [
				"rgb(116, 119, 191)",
				"rgb(129,201,143) ",
				"rgb(81, 182, 200)",
			],
		},
	],
};

let doughnutLabels = {
	responsive: true,
	aspectRatio: 1.5,
	plugins: {
		legend: {
			position: "right",
			labels: {
				boxWidth: 20,
			},
		},
	},
};

var doughnutConfig = new Chart(mobileChart, {
	type: "doughnut",
	data: doughnutData,
	options: doughnutLabels,
});
