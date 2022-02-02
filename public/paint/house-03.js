import { loadLayer } from './load/base.js'

const origin = [19.42276793768931, -99.16142318923629]
var options = {
    obj: '../../assets/03/scene.gltf',
    type: 'gltf',
    scale: 1,
    units: 'meters',
    rotation: { x: 90, y: 195, z: 0 }
}

loadLayer(options, origin.reverse(), '3d-model3')