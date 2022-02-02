import { loadLayer } from './load/base.js'

const origin = [19.421353038369507, -99.16146056451213]
var options = {
    obj: '../../assets/06/scene.gltf',
    type: 'gltf',
    scale: .01,
    units: 'meters',
    rotation: { x: 90, y: 12, z: 0 }
}

loadLayer(options, origin.reverse(), '3d-model6')