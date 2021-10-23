export function Modals() {
	//PokeDex Image 1
	// Get the modal
	var modal = document.getElementById('PokeDexModal1');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('PD1');
	var modalImg = document.getElementById('PDMI1');
	var captionText = document.getElementById('PDMI1C');
	img.onclick = function () {
		modal.style.display = 'block';
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	};

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName('ClosePDMI1')[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = 'none';
	};

	//PokeDex Image 2
	// Get the modal
	var modal = document.getElementById('PokeDexModal2');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('MobilePokedexImg');
	var modalImg = document.getElementById('PDMI2');
	var captionText = document.getElementById('PDMI2C');
	img.onclick = function () {
		modal.style.display = 'block';
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	};

	// Get the <span> element that closes the modal
	var CPDMI2 = document.getElementsByClassName('ClosePDMI2')[0];

	// When the user clicks on <span> (x), close the modal
	CPDMI2.onclick = function () {
		modal.style.display = 'none';
	};
}
