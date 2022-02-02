import { loadLayer } from './load/base.js'

const origin = [19.422524909653568, -99.16183333843054]
var options = {
    obj: '../../assets/04/scene.gltf',
    type: 'gltf',
    scale: 6,
    units: 'meters',
    rotation: { x: 90, y: 190, z: 0 }
}

loadLayer(options, origin.reverse(), '3d-model5', [19.42257899581604, -99.16159438079212].reverse())