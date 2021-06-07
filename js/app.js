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
