//get main container
const elem = document.getElementById('panzoom');
//get zoom in button
const zoomInButton = document.getElementById('zoom-in');
//get zoom out button
const zoomOutButton = document.getElementById('zoom-out');
//get reset button
const resetButton = document.getElementById('reset');

const panzoom = Panzoom(elem);
const parent = elem.parentElement

//enabling events
parent.addEventListener('wheel', panzoom.zoomWithWheel);
zoomInButton.addEventListener('click', panzoom.zoomIn)
zoomOutButton.addEventListener('click', panzoom.zoomOut)
resetButton.addEventListener('click', panzoom.reset)