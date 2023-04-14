AFRAME.registerComponent("bowling-balls",{
    init: function(){
        this.shootBall()
    },
    shootBall: function(){
        window.addEventListener("keydown", (e)=>{
            if (e.key === "z"){
                var ball = document.createElement("a-entity")
                ball.setAttribute("geometry", {primitive: "sphere", radius : 0.1})
                ball.setAttribute("material", {color: "gray"})
                var camera = document.querySelector("#camera")
                var cameraPosition = camera.getAttribute("position")
                ball.setAttribute("position", {x: cameraPosition.x, y: cameraPosition.y, z: cameraPosition.z})

                var camera3D = document.querySelector("#camera").object3D
                var vector = new THREE.Vector3()
                
                camera3D.getWorldDirection(vector)

                ball.setAttribute("velocity", vector.multiplyScalar(-10))

                var scene = document.querySelector("#scene")
                scene.appendChild(ball)
            }
        })
    }
})