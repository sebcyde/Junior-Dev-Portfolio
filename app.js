//scroll to top on page refresh
document.body.scrollTop = document.documentElement.scrollTop = 0;

// back to top button functionality
document.getElementById('BTT').addEventListener('click', () => {
	window.scrollTo(0, 0);
});
