import { loadLayer } from './load/base.js'

const origin = [19.422144281458053, -99.16067523676782]
var options = {
    obj: '../../assets/01/scene.gltf',
    type: 'gltf',
    scale: 6,
    units: 'meters',
    rotation: { x: 90, y: 15, z: 0 }
}

loadLayer(options, origin.reverse(), '3d-model1')