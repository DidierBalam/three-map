import { loadLayer } from './load/base.js'

const origin = [19.422026359982134, -99.16155556303192]
var options = {
    obj: '../../assets/02/scene.gltf',
    type: 'gltf',
    scale: 3,
    units: 'meters',
    rotation: { x: 90, y: 195, z: 0 }
}

loadLayer(options, origin.reverse(), '3d-model2')