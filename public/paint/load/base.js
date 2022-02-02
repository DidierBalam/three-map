import Stats from 'https://threejs.org/examples/jsm/libs/stats.module.js'
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGF2cGFjaCIsImEiOiJja3J5NndoaTcweGNxMnBvNzBmNnloMDZkIn0.u-ZmmaBJ4kHIwl6Jgic8SA'


const loadLayer = (options, position, id, to = undefined) => {
  let stats
  let origin
  // let line
  let element3D

  origin = position

  const animate = () => {
    requestAnimationFrame(animate)
    stats.update()
  }

  stats = new Stats()
  map.getContainer().appendChild(stats.dom)
  animate()

  const customelement3D = {
    id,
    type: 'custom',
    renderingMode: '3d',
    onAdd: function (map, mbxContext) {

      window.tb = new Threebox(
        map,
        mbxContext,
        {
          defaultLights: true
        }
      )

      tb.loadObj(options, function (model) {
        element3D = model.setCoords(origin)
        tb.add(element3D)
      })

    },
    render: function (gl, matrix) {
      tb.update()
    }
  }

  map.addLayer(customelement3D)

  map.on('load', () => {
    if (to) {
      travelPath(to)
      setInterval(() => {
        origin = position
        travelPath(to)
      }, 10200)
    }
  })

  const travelPath = (destination) => {
    var url = "https://api.mapbox.com/directions/v5/mapbox/driving/" + [origin, destination].join(';') + "?geometries=geojson&access_token=" + MAPBOX_TOKEN


    fetchFunction(url, function (data) {

      let duration = 10000
      var newOptions = {
        animation: 1,
        path: data.routes[0].geometry.coordinates,
        duration: duration
      }

      element3D.followPath(
        newOptions,
      )

      element3D.playAnimation(newOptions)

      origin = destination

    })
  }

  const fetchFunction = (url, cb) => {
    fetch(url)
      .then(
        function (response) {
          if (response.status === 200) {
            response.json()
              .then(function (data) {
                cb(data)
              })
          }
        }
      )
  }
}


export {
  loadLayer
}