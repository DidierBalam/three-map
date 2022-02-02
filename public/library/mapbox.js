mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2cGFjaCIsImEiOiJja3J5NndoaTcweGNxMnBvNzBmNnloMDZkIn0.u-ZmmaBJ4kHIwl6Jgic8SA';
map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
zoom: 17.5,
center: [-99.16082829501197, 19.42227625716351],
pitch: 60,
antialias: false // create the gl context with MSAA antialiasing, so custom layers are antialiased
});
 
map.addControl(new mapboxgl.NavigationControl());


 
