function setCookie(cname,cvalue,exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	let exitIntent          = getCookie("exit-intent-popup");
	let ExitContentPopup    = document.getElementById('exit-popup-container');

	if( ! exitIntent ){
		ExitContentPopup.style.display = "block";
		setCookie("exit-intent-popup", "excpopup", 30);
	}
}

window.addEventListener('mouseout', function(event) {
	// Check if the mouse leaves the document boundaries
	if (event.clientY <= 0 || event.clientX <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight) {
		checkCookie();
	}
});

let btnClosePopup = document.getElementById('exit-popup-close');

btnClosePopup.addEventListener('click', function( event ){
	let ExitContentPopup    = document.getElementById('exit-popup-container');

	ExitContentPopup.style.display = "none";
});