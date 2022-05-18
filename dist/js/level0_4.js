// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js'; 
console.log("level0_4 working");
// import { EventDispatcher } from '../node_modules/three';
// 'use strict';

// import * as THREE from '../node_modules/three/build/three.module.js';
// import backgroudimg from './asset/Backgound.png';
// import ping_ball from './asset/Set.png';
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";


// createBoxWithRoundedEdges();
init();

function init() {
    // console.log("inner Function");
    // console.log(THREE);

    const canvas = document.querySelector('.level0_4');
    // const canvas2 = document.querySelector('#pimg');
    // const canvas = document.querySelector('container');

    // var canvas2 = document.createElement('canvas2'),
    // ctx = canvas2.getContext('2d');

    // canvas2.width = '30vh';
    // canvas2.height = '30vh';


    // var texture3 = new THREE.CanvasTexture(canvas2);
    // texture3.needsUpdate = true;


    // renderer
    const renderer = new THREE.WebGLRenderer({
        canvas,
        // canvas2,
        alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // document.getElementById('container').appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // camera
    // const aspectRatio = window.innerWidth / window.innerHeight;
    // const cameraWidth = 50;
    // const cameraHeight = cameraWidth / aspectRatio;

    // const camera = new THREE.OrthographicCamera(
    //     cameraWidth / -2, // left
    //     cameraWidth / 2, // right
    //     cameraHeight / 2, // top
    //     cameraHeight / -2, // bottom
    //     0.10, // near plane
    //     2000 // far plane
    // );
    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.set(0, 0, 4);
    // camera.rotate.setSize()
    // camera.lookAt(0, 0, 0);

    // Controls - access OrbitControls
    // const controls = new OrbitControls( camera, renderer.domElement );



    // var img = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    //     map:THREE.ImageUtils.loadTexture('../asset/Backgound.png')
    // });
    // img.map.needsUpdate = true; //ADDED

    // // Load image locally
    // const textureLoader = new THREE.TextureLoader();
    // scene.background = textureLoader.load(backgroudimg);
    // scene.background = textureLoader.load('../asset/Backgound.png');

    // // Access IMG from Online
    // const textureLoader = new THREE.TextureLoader();
    // loader.load('./asset/Backgound.png' , function(texture)
    //             {
    //             scene.background = textureLoader;  
    //             });

    // // const boxGeometry = new THREE.BoxGeometry(2, 2, 2 ,5,10,5);
    // const boxGeometry = new THREE.BoxGeometry(2, 2, 2 );
    // const boxMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
    // const box = new THREE.Mesh(boxGeometry, boxMaterial);
    // scene.add(box);
    // box.position.x = 3
    // box.position.y = 0

    // Load LHS Image Here
    const loadLHSImg = new THREE.TextureLoader();
    loadLHSImg.load(
        // "../asset/test.jpeg",
        "../asset/Set.png",

        function (textureLHS) {
            var planeMaterialLHS = new THREE.MeshBasicMaterial({
                map: textureLHS,
                // visible: false 
            });
            textureLHS.wrapS = THREE.RepeatWrapping;
            textureLHS.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryLHS = new THREE.PlaneBufferGeometry(2, 2);
            var planeLHS = new THREE.Mesh(planeGeometryLHS, planeMaterialLHS);
            scene.add(planeLHS);
            planeLHS.position.x = -1.5
            planeLHS.position.y = -0.7

            // OnClick Event For planeLHS
            const domEventsLHS = new THREEx.DomEvents(camera, renderer.domElement)
            domEventsLHS.addEventListener(planeLHS, 'click', function (event) {
                console.log("planeLHS clicked")

                // Inner Image
                const loadLHSImg = new THREE.TextureLoader();
                loadLHSImg.load(
                    "../asset/test.jpeg",
                    // "../asset/Set.png",

                    function (textureLHS) {
                        var planeMaterialLHS = new THREE.MeshBasicMaterial({
                            map: textureLHS,
                            // visible: false 
                        });
                        textureLHS.wrapS = THREE.RepeatWrapping;
                        textureLHS.wrapT = THREE.RepeatWrapping;
                        // textureLHS.repeat.set( 4, 4 );

                        //Create a 2x2 plane with texture
                        var planeGeometryLHS = new THREE.PlaneBufferGeometry(2, 2);
                        var planeLHS = new THREE.Mesh(planeGeometryLHS, planeMaterialLHS);
                        scene.add(planeLHS);
                        planeLHS.position.x = -1.5
                        planeLHS.position.y = -0.7

                        // OnClick Event For planeLHS
                        const domEventsLHS = new THREEx.DomEvents(camera, renderer.domElement)
                        domEventsLHS.addEventListener(planeLHS, 'click', function (event) {
                            console.log("planeLHS clicked")


                            // alert("btn clicked")
                        }, false)

                        //Render the scene
                        renderer.render(scene, camera);
                        document.body.appendChild(renderer.domElement);
                    },

                    // undefined,

                    function (err) {
                        console.error('An error happened in LHS Image.');
                    }
                );

                // alert("btn clicked")
            }, false)

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },

        // undefined,

        function (err) {
            console.error('An error happened in LHS Image.');
        }
    );

    // Load RHS Image Here
    const loadRHSImg = new THREE.TextureLoader();
    loadRHSImg.load(
        "../asset/test.jpeg",

        function (textureRHS) {
            // console.log("LHS Function Executed");
            var planeMaterialRHS = new THREE.MeshBasicMaterial({
                map: textureRHS,
                // visible: false 
            });
            textureRHS.wrapS = THREE.RepeatWrapping;
            textureRHS.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryRHS = new THREE.PlaneBufferGeometry(2, 2);
            var planeRHS = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
            scene.add(planeRHS);
            planeRHS.position.x = 1.5
            planeRHS.position.y = -0.7


            // OnClick Event For planeRHS
            const domEventsRHS = new THREEx.DomEvents(camera, renderer.domElement)
            domEventsRHS.addEventListener(planeRHS, 'click', function (event) {
                console.log("planeRHS clicked")
                // alert("btn clicked")
            }, false)


            // // For Check The Action on the Object
            // var Car = function () {
            //     EventDispatcher.call(this);
            //     this.start = function () {
            //         this.dispatchEvent({ type: 'start', message: 'vroom vroom!' });
            //     };
            // };
            // var car = new Car();
            // car.addEventListener('start', function (event) {
            //     console.log(event.message);
            // });
            // car.start();


            // function clickEvent() {
            //     onClick() {
            //         dispatchEvent({
            //             msg: 'image Clicked',
            //         })
            //     }
            //     // {
            //     // console.log("This Image is Clicked");
            //     // }
            // }
            // const clickEvent1 = new clickEvent()
            // // var domEvents = new THREEx.domEvents(camera, renderer.domElement)
            // // ...
            // clickEvent1.addEventListener(onClick, function (event) {
            //     // console.log('you clicked on the planeRHS')
            //     console.log(event.msg)
            // }, false)


            // planeRHS.cursor = 'pointer';
            // planeRHS.addEventListener('click', function (event) {
            //     console.log("RHS clicked", event);
            // })

            // scene.on('click', ev => {
            //     console.log("click", ev);
            // })

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in RHS Image.');
        }
    );

    // const planeGeometry = new THREE.PlaneBufferGeometry(2, 2);
    // // const texture = new THREE.TextureLoader().load('./asset/Set.png');
    // // const texture = new THREE.TextureLoader().load('https://images.unsplash.com/photo-1646335480320-6cfb285c835c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80');
    // // const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
    // // material.map    = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');
    // // const planeMaterial = new THREE.MeshBasicMaterial({map: texture});
    // // const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff });
    // // const color4 = new THREE.Color32("rgb(100%, 0%, 0%)");


    // // // Image Debuging
    // //const loader = new THREE.TextureLoader();
    // // // load a resource
    // //loader.load(
    // //    // resource URL
    // //    // './asset/Set.png',       // Local Image Path
    // //    'https://images.unsplash.com/photo-1646335480320-6cfb285c835c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',

    // //    // onLoad callback
    // //    function ( texture ) {
    // //        // in this example we create the material when the texture is loaded
    // //        const planeMaterial = new THREE.MeshBasicMaterial( {
    // //            map: texture
    // //            
    // //        } );
    // //    },

    // //    // onProgress callback currently not supported
    // //    undefined,

    // //    // onError callback
    // //    function ( err ) {
    // //        console.error( 'An error happened.' );
    // //    }
    // //);

    // // const planeMaterial = new THREE.MeshBasicMaterial({color: "rgb(100%, 0%, 0%)"});

    // // const planeMaterial = new THREE.MeshBasicMaterial({
    // //     color: "#fafafa",
    // //     side: THREE.DoubleSide,
    // //     // visible: false,
    // // });

    // const planeMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../asset/test.jpeg') });

    // // const planeMaterial = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("./asset/Set.png") })

    // // const textureloader = new THREE.TextureLoader();
    // //        textureloader.load('./asset/Set.png',function(tx){
    // //         planeMaterial = new THREE.MeshBasicMaterial({
    // // 	        map: tx,
    // //         wireframe: false
    // //   	  });

    // const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // // plane.overdraw = true;
    // // plane.doubleside = true;

    // scene.add(plane)

    // // plane.cursor = 'pointer';
    // // plane.on('click', function(ev) {() => console.log("clicked")});


    // plane.position.x = 1.5
    // plane.position.y = -0.7
    // // plane.position.z = -4





    // const sphereGeometry = new THREE.SphereGeometry(2);
    // const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00 });
    // const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial)
    // scene.add(sphere);


    // const textureImage = '../asset/ping_pong_ball.png';
    // const texture2 = new THREE.TextureLoader().load('./asset/Set.png');
    // console.log("texture2",texture2)

    // let texture3 = new THREE.TextureLoader().load(`./asset/Set.png`);
    // cover(texture3, 1.8 / 2.0);
    // console.log("texture3", texture3)

    // // const box2Geometry = new THREE.Box3(1, 1, 1 );

    // const plane2Geometry = new THREE.PlaneBufferGeometry(2, 2);
    // // // const plane2Material = new THREE.MeshBasicMaterial({color: 0xffffff});
    // // var img = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    // //     // map:THREE.ImageUtils.loadTexture('./asset/Set.png')
    // //     map: new THREE.TextureLoader().load('./asset/Set.png')
    // //     // map:THREE.ImageUtils.loadTexture('./asset/Set.png')
    // //     // map:THREE.TextureLoader('../asset/ping_pong_ball.png')
    // // });
    // // img.map.needsUpdate = true; //ADDED
    // // const plane2Material = new THREE.MeshBasicMaterial({map: texture2});
    // // const plane2Material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./asset/Set.png')});
    // const plane2Texture = THREE.ImageUtils.loadTexture('../asset/test.jpeg')
    // const plane2Material = new THREE.MeshBasicMaterial({ map: plane2Texture });
    // plane2Texture.wrapS = THREE.RepeatWrapping;
    // plane2Texture.wrapT = THREE.RepeatWrapping;
    // console.log("plane2Material:- ", plane2Material)
    // // const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
    // const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
    // // const plane2 = new THREE.Mesh(plane2Geometry, img);
    // plane2.overdraw = true;
    // scene.add(plane2);
    // console.log("plane2 dimentions:- ", plane2.position.length())

    // plane2.position.x = -1.5
    // plane2.position.y = -0.7

    // // For Plane 3
    // var planeGeom = new THREE.PlaneGeometry(2, 2);
    // var imgSrc = "./asset/Set.png"
    // var mesh;
    // var tex = new THREE.TextureLoader().load(imgSrc, (tex) => {
    // tex.needsUpdate = true;
    // mesh.scale.set(1.0, tex.image.height / tex.image.width, 1.0);
    // });
    // 
    // var material = new THREE.MeshLambertMaterial({
    // color: 0xffffff,
    // map: tex
    // });
    // mesh = new THREE.Mesh(planeGeom, material);
    // // console.log("mesh",mesh )
    // console.log("distance",mesh.position.distanceTo(new THREE.Vector3(0 ,1 ,2)) )
    // scene.add(mesh);



    // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    //    console.info( "This page is reloaded" );

    // //  -------------------- This code is working     --------------------------------------------------------
    // //Load the texture4
    // var loader = new THREE.TextureLoader();
    // loader.load(
    //     // "https://cdn.glitch.com/62a3a7d1-3c19-4fb7-b1ef-a1c65ba38596%2Fboard.svg?v=1577426114562",
    //     "../asset/test.jpeg",

    //    function (texture4) {
    //        var material4 = new THREE.MeshBasicMaterial({ map: texture4, visible: false });
    //        texture4.wrapS = THREE.RepeatWrapping;
    //        texture4.wrapT = THREE.RepeatWrapping;
    //        // texture4.repeat.set( 4, 4 );

    //        //Create a 2x2 plane with texture
    //        var geometry4 = new THREE.PlaneBufferGeometry(2, 2);
    //        //var material = new THREE.MeshBasicMaterial({ map: texture });
    //        var plane4 = new THREE.Mesh(geometry4, material4);
    //        scene.add(plane4);
    //        // plane4.position.x = -1
    //        // plane4.position.y = -0.5

    //         //Render the scene
    //         renderer.render(scene, camera);
    //         document.body.appendChild(renderer.domElement);
    //     },
    //     // undefined,
    //     function (err) {
    //         console.error('An error happened.');
    //     }
    // );
    //  ------------------------------------------------------------------------------------------------------------

    // }


    // const axesHelper = new THREE.AxesHelper(10);
    // scene.add(axesHelper);

    // // Access Function Here for load image
    // var loader = new THREE.TextureLoader();
    // loader.load("./asset/Set.png",
    //             function (texture) {
    //                 displayPanels(texture);
    //             } );


    //Load Image Here
    // const textureLoader =  new THREE.TextureLoader();
    // const cubeTextureLoader =  new THREE.CubeTextureLoader();
    // scene.background = cubeTextureLoader.load([
    //     '../asset/ping_pong_ball.png',
    // ])


    // Create a texture loader so we can load our image file
    // var loader = new THREE.TextureLoader();

    // // Load an image file into a custom material
    // var material = new THREE.MeshLambertMaterial({
    // map: loader.load('https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg')
    // });




    // // Create an array of materials to be used in a cube, one for each side
    // var cubeMaterialArray = [];

    // // order to add materials: x+,x-,y+,y-,z+,z-
    // cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff3333 } ) );
    // cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff8800 } ) );
    // cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffff33 } ) );
    // cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x33ff33 } ) );
    // cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x3333ff } ) );
    // cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x8833ff } ) );

    // var cubeMaterials = new THREE.MeshFaceMaterial( cubeMaterialArray );

    // // Cube parameters: width (x), height (y), depth (z), 
    // //       (optional) segments along x, segments along y, segments along z
    // var cubeGeometry = new THREE.CubeGeometry( 100, 100, 100, 1, 1, 1 );

    // // using THREE.MeshFaceMaterial() in the constructor below
    // //   causes the mesh to use the materials stored in the geometry

    // cube = new THREE.Mesh( cubeGeometry, cubeMaterials );

    // controls.update();


    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight)

    })
}

// function createBoxWithRoundedEdges( width, height, depth, radius0, smoothness ) {
//     let shape = new THREE.Shape();
//     let eps = 0.00001;
//     let radius = radius0 - eps;
//     shape.absarc( eps, eps, eps, -Math.PI / 2, -Math.PI, true );
//     shape.absarc( eps, height -  radius * 2, eps, Math.PI, Math.PI / 2, true );
//     shape.absarc( width - radius * 2, height -  radius * 2, eps, Math.PI / 2, 0, true );
//     shape.absarc( width - radius * 2, eps, eps, 0, -Math.PI / 2, true );
//     let geometry = new THREE.ExtrudeBufferGeometry( shape, {
//       amount: depth - radius0 * 2,
//       bevelEnabled: true,
//       bevelSegments: smoothness * 2,
//       steps: 1,
//       bevelSize: radius,
//       bevelThickness: radius0,
//       curveSegments: smoothness
//     });

//     geometry.center();

//     return geometry;
//   }


//  // Create Function for Show the Image
// function displayPanels (texture) {
//
//     const scene = new THREE.Scene();
//
//     // plane geometry with texture-mapped floral image
//     var planeGeom = new THREE.PlaneGeometry(10,10);
//     var planeMat = new THREE.MeshBasicMaterial(
//                            {color: 0xffffff,
//                             map: texture} );
//     var planeMesh = new THREE.Mesh(planeGeom, planeMat);
//     scene.add(planeMesh);
//
//     // // repeat texture mapping on right panel
//     // var planeMeshR = planeMesh.clone();
//     // var dist = 5*Math.cos(Math.PI/4);
//     // planeMeshR.position.set(5+dist, 0, dist);
//     // planeMeshR.rotation.y = -Math.PI/4;
//     // scene.add(planeMeshR);
//
//     // // repeat texture mapping on left panel
//     // var planeMeshL = planeMesh.clone();
//     // planeMeshL.position.set(-5-dist, 0, dist);
//     // planeMeshL.rotation.y = Math.PI/4;
//     // scene.add(planeMeshL);
//
//     TW.render();    // render the scene
// }

