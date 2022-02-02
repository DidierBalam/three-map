import { loadLayer } from './load/base.js'

const origin = [19.422569324756864, -99.1608791449242]
var options = {
    obj: '../../assets/04/scene.gltf',
    type: 'gltf',
    scale: 6,
    units: 'meters',
    rotation: { x: 90, y: 190, z: 0 }
}

loadLayer(options, origin.reverse(), '3d-model4', [19.42277660184888, -99.16065700800897].reverse())