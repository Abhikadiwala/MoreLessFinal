
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js'; 
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
console.log("Page is Working");

// Access Canvas From index.html File
const canvas = document.querySelector('.c');

// Scene  - Global
var scene = new THREE.Scene();

// Camera - Global
var camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
);
camera.position.set(0, 0, 4);

// Renderer - Global
const renderer = new THREE.WebGLRenderer({
    canvas,
    // canvas2,
    alpha: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controls - access OrbitControls
// const controls = new OrbitControls( camera, renderer.domElement );

// Render Scene and Camera  - Global
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement);

// Resize the Screen  - Global
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
})

const loadImg = new THREE.TextureLoader();
loadImg.load(
    "../asset/BackgroundL0.png",

    function (texture) {
        var planeMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            // visible: false 
        });

        //Create a 2x2 plane with texture
        // var planeGeometry = new THREE.PlaneBufferGeometry(16, 9);
        // var planeGeometry = new THREE.PlaneBufferGeometry(9.1, 4.8);
        var ang_rad = camera.fov * Math.PI / 180;
        var fov_y = camera.position.z * Math.tan(ang_rad / 2) * 2;
        var planeGeometry = new THREE.PlaneBufferGeometry(fov_y * camera.aspect, fov_y);
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        scene.add(plane);
        // plane.position.z =1
    },
    // undefined,
    function (err) {
        console.error('An error happened in Backgroud Image', err);
    }
);

// Global Varibale are Declare Here
var isAudioPlaying = false;
var audioPlayed = true;  // This is Check the audio is complete or Not
var insOneLoad = true;
var planeInsL0_1;
var nextAudio = false;  // For Next audio Approval default (false)
console.log("nextAudio ", nextAudio);


// Call All The Functions Here
// init();
firstVisit();


// // setTimeout level 0_1 slide
// setTimeout(firstVisit(),1000)

// firstVisit Function Will be Executed When Use Visit Page First Time
function firstVisit() {
    insOneLoad = true;  // Display 1st instructor
    // Load Image here Start Button 
    const loadImg = new THREE.TextureLoader();
    loadImg.load(
        "../asset/Let's_play.png",

        function (texture) {
            var planeMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var planeGeometry = new THREE.PlaneBufferGeometry(0.80, 0.80);
            var plane = new THREE.Mesh(planeGeometry, planeMaterial);
            scene.add(plane);
            plane.position.z = 1

            // OnClick Event For planeLHS
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(plane, 'click', function (event) {
                console.log("planeInnerLHS clicked")
                console.log("planeInnerLHS origDomEvent", event.origDomEvent)
                console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
                var btndisable = event.origDomEvent.isTrusted;
                console.log("btndisable", btndisable);
                if (audioPlayed == true) {
                    console.log("this is true");
                    plane.visible = false;
                    init();     // call Main Function

                    // Comment audio only for testing purpose
                    playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
                    // btndisable = false

                    insOneLoad = false;  // Make instructor 1 invisible
                    console.log("insOneLoad inside Function", insOneLoad);
                }
                else {
                    console.log("btndisable updated", btndisable);
                }
                // plane.visible = false;    
            }, false)

            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in LHS Image.');
        }
    );
}

// // setTimeout level 0_2 slide -- Move Instructor to right side
// setTimeout(firstVisit(),1000)

// Autoplay Function
// function autoPlay(){
//     var playAudio = document.querySelector('.c').autoPlay;
//}

// // Call function on Reload
// window.onload = function() {
//     setTimeout(function(){
//     // myAudio.play();
//     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
//     }, 0); // you can change this... whatever you want //
// }

// Call Function On Reload page
// if (){
// window.onload = playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
// }

// playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
// setInterval(playAudio, 5000)

// setTimeout(function () { 
//     console.log("Set Timeout Function -ML_A_L0_1 ");

//     // Load Required Audio (playAudio Function is Declare Above)
//     sound.play();
//     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

//     // // Set Interval Here
//     // const setIntervalobj = setInterval(playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3'), 70)
//     // clearInterval(setIntervalobj)

// }, 1000)

// setInterval(playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3'), 1000)

// setTimeout(function () { 
//     console.log("Set Timeout Function -ML_A_L0_2 ");

//     // Load Required Audio (playAudio Function is Declare Above)
//     // getAudioContext();
//     // console.log("getAudioContext:- ", getAudioContext);
//     // playAudio('../Sounds/level0_sounds/ML_A_L0_2.mp3')

//     //  ------------------------  Working  --------------------------
//                 // Inner Function Change Image onClick         
//                 const loadLHSImgInner = new THREE.TextureLoader();
//                 loadLHSImgInner.load(
//                 // "../asset/Set.png",
//                 "../asset/new_image_assets/game element-01.png",

//                 //   "../asset/test.jpeg",
//                 //  "../asset/Image place holder.png",
//                     function (textureInnerLHS) {
//                         var planeMaterialInnerLHS = new THREE.MeshBasicMaterial({
//                             map: textureInnerLHS,
//                             // visible: false 
//                         });
//                         textureInnerLHS.wrapS = THREE.RepeatWrapping;
//                         textureInnerLHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryInnerLHS = new THREE.PlaneBufferGeometry(2, 2);
//                         var planeInnerLHS = new THREE.Mesh(planeGeometryInnerLHS, planeMaterialInnerLHS);
//                         scene.add(planeInnerLHS);
//                         planeInnerLHS.position.x = -1.5
//                         planeInnerLHS.position.y = -0.7

//                         // // OnClick Event For planeLHS
//                         // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                         // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                         //     console.log("planeInnerLHS clicked")
//                         //     // alert("btn clicked")
//                         // }, false)

//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in LHS Image.');
//                     }
//                 );
// }, 1000)


// Function For Play Audio
function playAudio(path) {

    isAudioPlaying = true;
    if (isAudioPlaying) {
        console.log("IsAudioPlaying:- " + isAudioPlaying)

        // const audioScene = new THREE.Scene();

        // Audio Listener Object
        var listener = new THREE.AudioListener();
        // camera.add(listener);
        scene.add(listener);

        // create the PositionalAudio object (passing in the listener)
        var sound = new THREE.PositionalAudio(listener);

        // load a sound and set it as the PositionalAudio object's buffer
        var audioLoader = new THREE.AudioLoader();
        // console.log("audioLoader :-", audioLoader)
        // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
        // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
        audioLoader.load(path, function (buffer) {
            sound.setBuffer(buffer);
            sound.setRefDistance(20);
            sound.play();
            // For Autoplay audio
            // sound.autoplay = true;
            // sound.setVolume(0.5)
            console.log("sound:- ", sound);
            var storeAudioState = sound.source.onended;
            console.log("storeAudioState", storeAudioState);
            sound.source.onended = function () {
                console.log('sound ended');
                nextAudio = true;
                console.log("nextAudio inside", nextAudio);
                // var storeAudioState =  sound.source.onended;
                // console.log("storeAudioState", storeAudioState);
                console.log("storeAudioState Inside", storeAudioState);
                // console.log("sound Inside :- ", sound);
                // console.log("sound Inside isplaying this :- ", isPlaying);
                // console.log("sound Inside isplaying :- ", sound.isPlaying);
                this.isPlaying = false;
                // sound.isPlaying = false; 
                console.log("sound Inside isplaying this:- ", this.isPlaying);
                // console.log("sound Inside isplaying :- ", sound.isPlaying);

                if (nextAudio == true) {
                    renderInsTwo()
                }

                // if (this.isPlaying == false){
                //     console.log("playing");
                //     audioPlayed = true
                // }
            }
        });

    }

}
// playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3');

// setTimeout(function () { 
//     console.log("Set Timeout Function -ML_A_L0_1 ");

//     // Load Required Audio (playAudio Function is Declare Above)
//     sound.play();
//     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

//     // // Set Interval Here
//     // const setIntervalobj = setInterval(playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3'), 70)
//     // clearInterval(setIntervalobj)

// }, 1000)


// Function For Load Dynamic Images
function loadDynamicImg() {
    console.log("load Dynamic Image Function Working ");
    // var multiImage = new Array();
    // multiImage[0] = "../asset/new_image_assets/game element-01.png" 
    // multiImage[1] = "../asset/new_image_assets/game element-02.png"
    // multiImage[2] = "../asset/new_image_assets/game element-03.png"
}



// ML_A_L0_1 - 0.07sec audio
// setTimeout(function () {
//     console.log("Set Timeout Function -ML_A_L0_1 ");
//     // Load Required Audio (playAudio Function is Declare Above)
//     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

// }, 1000)

// // ML_A_L0_1 - 0.07sec audio
// setTimeout(function () {
//     console.log("Set Timeout Function - 2")
//     playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")
// }, 2000)

// Function for Render Instructor Slide-1
function renderInsOne() {
    console.log("Function renderInsOne Execute");
    // Render 2nd Instructor After 1st audio complete
    // if( nextAudio == true){
    // Load Instructor-1 At Center 
    const loadInsL0_1 = new THREE.TextureLoader();
    loadInsL0_1.load(
        "../asset/Instructor_L0_1.png",

        function (textureInsL0_1) {
            var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
                map: textureInsL0_1,
                transparent: true,
                // visible: false 
            });
            // textureInsL0_1.wrapS = THREE.RepeatWrapping;
            // textureInsL0_1.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(2.3, 2.3);
            // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            scene.add(planeInsL0_1);
            planeInsL0_1.position.z = 1
            planeInsL0_1.position.x = 0.5
            planeInsL0_1.position.y = -0.7

            if (nextAudio == true) {
                planeInsL0_1.visible = false
            }

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_1 Image.');
        }
    );
    // }
}

function renderInsho() {
    console.log("Function renderInsho Execute");
    // Render 2nd Instructor After 1st audio complete
    // if( nextAudio == true){
    // Load Instructor-1 At Center 
    const loadInsL0_1 = new THREE.TextureLoader();
    loadInsL0_1.load(
        "../asset/logo/Home.png",

        function (textureInsL0_1) {
            var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
                map: textureInsL0_1,
                transparent: true,
                // visible: false 
            });
            // textureInsL0_1.wrapS = THREE.RepeatWrapping;
            // textureInsL0_1.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            // var ang_rad = camera.fov * Math.PI / 450;    --- working
            var ang_rad = camera.fov * Math.PI / 405;
            // var ang_rad = camera.fov * Math.PI / 180;
            // var fov_y =  camera.position.y * Math.tan(ang_rad / 2) ;
            // var fov_y =  1 * Math.tan(ang_rad / 2) ;     --- working
            var fov_y = 1 * Math.tan(ang_rad / 2);
            var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(fov_y * camera.aspect, fov_y);
            // var planeGeometryInsL0_1 = new THREE.Vector3(-2, 1.5, 1);
            // var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(0.30, 0.30);
            // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            scene.add(planeInsL0_1);
            planeInsL0_1.position.x = camera.fov * -0.045
            planeInsL0_1.position.y = camera.fov * 0.025
            planeInsL0_1.position.z = 1

            // if(nextAudio == true)
            // {
            //     planeInsL0_1.visible = false
            // }

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_1 Image.');
        }
    );
    // }
}

function renderInsback() {
    console.log("Function renderInsho Execute");
    // Render 2nd Instructor After 1st audio complete
    // if( nextAudio == true){
    // Load Instructor-1 At Center 
    const loadInsL0_1 = new THREE.TextureLoader();
    loadInsL0_1.load(
        "../asset/logo/Back_Inactive.png",

        function (textureInsL0_1) {
            var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
                map: textureInsL0_1,
                transparent: true,
                // visible: false 
            });
            // textureInsL0_1.wrapS = THREE.RepeatWrapping;
            // textureInsL0_1.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(0.30, 0.30);
            // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            scene.add(planeInsL0_1);
            planeInsL0_1.position.z = 1
            planeInsL0_1.position.x = -2.10
            planeInsL0_1.position.y = 1.5

            // if(nextAudio == true)
            // {
            //     planeInsL0_1.visible = false
            // }

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_1 Image.');
        }
    );
    // }
}
function renderInsprogress() {
    console.log("Function renderInsho Execute");
    // Render 2nd Instructor After 1st audio complete
    // if( nextAudio == true){
    // Load Instructor-1 At Center 
    const loadInsL0_1 = new THREE.TextureLoader();
    loadInsL0_1.load(
        "../asset/logo/Progress bar_Type_1.png",

        function (textureInsL0_1) {
            var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
                map: textureInsL0_1,
                transparent: true,
                // visible: false 
            });
            // textureInsL0_1.wrapS = THREE.RepeatWrapping;
            // textureInsL0_1.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(1.80, 0.30);
            // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            scene.add(planeInsL0_1);
            planeInsL0_1.position.z = 1
            planeInsL0_1.position.x = 0
            planeInsL0_1.position.y = 1.50

            // if(nextAudio == true)
            // {
            //     planeInsL0_1.visible = false
            // }

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_1 Image.');
        }
    );
    // }
}

function renderInsmusic() {
    console.log("Function renderInsho Execute");
    // Render 2nd Instructor After 1st audio complete
    // if( nextAudio == true){
    // Load Instructor-1 At Center 
    const loadInsL0_1 = new THREE.TextureLoader();
    loadInsL0_1.load(
        "../asset/logo/Music.png",

        function (textureInsL0_1) {
            var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
                map: textureInsL0_1,
                transparent: true,
                // visible: false 
            });
            // textureInsL0_1.wrapS = THREE.RepeatWrapping;
            // textureInsL0_1.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(0.30, 0.30);
            // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            scene.add(planeInsL0_1);
            planeInsL0_1.position.z = 1
            planeInsL0_1.position.x = 1.35
            planeInsL0_1.position.y = 1.5

            // if(nextAudio == true)
            // {
            //     planeInsL0_1.visible = false
            // }

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_1 Image.');
        }
    );
    // }
}
function renderInshint() {
    console.log("Function renderInsho Execute");
    // Render 2nd Instructor After 1st audio complete
    // if( nextAudio == true){
    // Load Instructor-1 At Center 
    const loadInsL0_1 = new THREE.TextureLoader();
    loadInsL0_1.load(
        "../asset/logo/Hint_Inactive.png",

        function (textureInsL0_1) {
            var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
                map: textureInsL0_1,
                transparent: true,
                // visible: false 
            });
            // textureInsL0_1.wrapS = THREE.RepeatWrapping;
            // textureInsL0_1.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(0.30, 0.30);
            // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            scene.add(planeInsL0_1);
            planeInsL0_1.position.z = 1
            planeInsL0_1.position.x = 1.72
            planeInsL0_1.position.y = 1.5

            // if(nextAudio == true)
            // {
            //     planeInsL0_1.visible = false
            // }

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_1 Image.');
        }
    );
    // }
}
function renderInsrewards() {
    console.log("Function renderInsho Execute");
    // Render 2nd Instructor After 1st audio complete
    // if( nextAudio == true){
    // Load Instructor-1 At Center 
    const loadInsL0_1 = new THREE.TextureLoader();
    loadInsL0_1.load(
        "../asset/logo/Rewards.png",

        function (textureInsL0_1) {
            var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
                map: textureInsL0_1,
                transparent: true,
                // visible: false 
            });
            // textureInsL0_1.wrapS = THREE.RepeatWrapping;
            // textureInsL0_1.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(0.80, 0.30);
            // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            scene.add(planeInsL0_1);
            planeInsL0_1.position.z = 1
            planeInsL0_1.position.x = 2.40
            planeInsL0_1.position.y = 1.5

            // if(nextAudio == true)
            // {
            //     planeInsL0_1.visible = false
            // }

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_1 Image.');
        }
    );
    // }
}
function renderInsaudio() {
    console.log("Function renderInsho Execute");
    // Render 2nd Instructor After 1st audio complete
    // if( nextAudio == true){
    // Load Instructor-1 At Center 
    const loadInsL0_1 = new THREE.TextureLoader();
    loadInsL0_1.load(
        "../asset/logo/Audio_Replay.png",

        function (textureInsL0_1) {
            var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
                map: textureInsL0_1,
                transparent: true,
                // visible: false 
            });
            // textureInsL0_1.wrapS = THREE.RepeatWrapping;
            // textureInsL0_1.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(0.30, 0.30);
            // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            scene.add(planeInsL0_1);
            planeInsL0_1.position.z = 1
            // planeInsL0_1.position.x = 2.73
            planeInsL0_1.position.x = 2.90
            planeInsL0_1.position.y = 1.11

            // if(nextAudio == true)
            // {
            //     planeInsL0_1.visible = false
            // }

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_1 Image.');
        }
    );
    // }
}
// // Function for Render Instructor Slide-1
// function renderInsThree() {
//     console.log("Function renderInsOne Execute");
//     // Render 2nd Instructor After 1st audio complete
//     // if( nextAudio == true){
//     // Load Instructor-1 At Center 
//         const loadInsL0_3 = new THREE.TextureLoader();
//         loadInsL0_3.load(
//         "../asset/Instructor_L0_1.png",

//             function (textureInsL0_3) {
//                 var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
//                     map: textureInsL0_3,
//                     transparent: true,
//                     // visible: false 
//                 });
//                 // textureInsL0_1.wrapS = THREE.RepeatWrapping;
//                 // textureInsL0_1.wrapT = THREE.RepeatWrapping;
//                 // textureLHS.repeat.set( 4, 4 );

//                 //Create a 2x2 plane with texture
//                 var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(2.3, 2.3);
//                 // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
//                 planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
//                 scene.add(planeInsL0_1);
//                 // planeInsL0_1.position.z = 1
//                 planeInsL0_1.position.x = -2
//                 planeInsL0_1.position.y = 2

//                 if(nextAudio == true)
//                 {
//                     planeInsL0_1.visible = false
//                 }

//                 //Render the scene
//                 renderer.render(scene, camera);
//                 document.body.appendChild(renderer.domElement);
//             },
//             // undefined,
//             function (err) {
//                 console.error('An error happened in Instructor L0_1 Image.');
//             }
//         );
//     // }
// }

// Function for Render Instructor Slide-2
function renderInsTwo() {

    // Hide Instructor-1 After Audio-1 complete
    if (insOneLoad == false) {
        planeInsL0_1.visible = false
        console.log("Hide Instructor here");
    }
    console.log("Function renderInsTwo Execute");
    // Render 2nd Instructor After 1st audio complete
    // if( nextAudio == true){
    // Load Instructor After 1st audio execution done 
    const loadInsL0_2 = new THREE.TextureLoader();
    loadInsL0_2.load(
        "../asset/Instructor_L0_2.png",

        function (textureInsL0_2) {
            var planeMaterialInsL0_2 = new THREE.MeshBasicMaterial({
                map: textureInsL0_2,
                transparent: true,
                // visible: false 
            });
            // textureInsL0_1.wrapS = THREE.RepeatWrapping;
            // textureInsL0_1.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );
            //Create a 2x2 plane with texture
            var planeGeometryInsL0_2 = new THREE.PlaneBufferGeometry(2.3, 2.3);
            var planeInsL0_2 = new THREE.Mesh(planeGeometryInsL0_2, planeMaterialInsL0_2);
            scene.add(planeInsL0_2);
            planeInsL0_2.position.z = 1
            planeInsL0_2.position.x = 2
            planeInsL0_2.position.y = -0.7

            // nextAudio = true
            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_2 Image.');
        }
    );
    // }
}

// Function For Display Canvas
function init() {
    // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3');

    renderInsOne();
    renderInsho();
    renderInsback();
    renderInsprogress();
    renderInsmusic();
    renderInshint();
    renderInsrewards();
    renderInsaudio()


    // renderInsThree()
    // setTimeout(
    //     //  ------------------------  Working  --------------------------
    //     // Inner Function Change Image onClick         
    //     const loadLHSImgInner = new THREE.TextureLoader();
    //     loadLHSImgInner.load(
    //     // "../asset/Set.png",
    //     "../asset/new_image_assets/game element-01.png",

    //     //   "../asset/test.jpeg",
    //     //  "../asset/Image place holder.png",
    //         function (textureInnerLHS) {
    //             var planeMaterialInnerLHS = new THREE.MeshBasicMaterial({
    //                 map: textureInnerLHS,
    //                 // visible: false 
    //             });
    //             textureInnerLHS.wrapS = THREE.RepeatWrapping;
    //             textureInnerLHS.wrapT = THREE.RepeatWrapping;
    //             // textureLHS.repeat.set( 4, 4 );
    //             //Create a 2x2 plane with texture
    //             var planeGeometryInnerLHS = new THREE.PlaneBufferGeometry(2, 2);
    //             var planeInnerLHS = new THREE.Mesh(planeGeometryInnerLHS, planeMaterialInnerLHS);
    //             scene.add(planeInnerLHS);
    //             planeInnerLHS.position.x = -1.5
    //             planeInnerLHS.position.y = -0.7

    //             // // OnClick Event For planeLHS
    //             // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
    //             // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
    //             //     console.log("planeInnerLHS clicked")
    //             //     // alert("btn clicked")
    //             // }, false)

    //             //Render the scene
    //             renderer.render(scene, camera);
    //             document.body.appendChild(renderer.domElement);
    //         },
    //         // undefined,
    //         function (err) {
    //             console.error('An error happened in LHS Image.');
    //         }
    //     ),3000)



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


    // Load Instructor-1 At Center 
    // const loadInsL0_1 = new THREE.TextureLoader();
    // loadInsL0_1.load(
    // "../asset/Instructor_L0_1.png",

    //     function (textureInsL0_1) {
    //         var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
    //             map: textureInsL0_1,
    //             transparent: true,
    //             // visible: false 
    //         });
    //         // textureInsL0_1.wrapS = THREE.RepeatWrapping;
    //         // textureInsL0_1.wrapT = THREE.RepeatWrapping;
    //         // textureLHS.repeat.set( 4, 4 );

    //         //Create a 2x2 plane with texture
    //         var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(2.3, 2.3);
    //         var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
    //         scene.add(planeInsL0_1);
    //         planeInsL0_1.position.z = 1
    //         planeInsL0_1.position.x = 0.5
    //         planeInsL0_1.position.y = -0.7

    //         //Render the scene
    //         renderer.render(scene, camera);
    //         document.body.appendChild(renderer.domElement);
    //     },
    //     // undefined,
    //     function (err) {
    //         console.error('An error happened in Instructor L0_1 Image.');
    //     }
    // );

    // renderInsTwo();
    // if(nextAudio == true){
    //     renderInsTwo()
    // }

    //  Function For Render instructor img2 on condition
    //     function renderInsTwo() {
    //     // Render 2nd Instructor After 1st audio complete
    //     // if( nextAudio == true){
    //          // Load Instructor After 1st audio execution done 
    //      const loadInsL0_2 = new THREE.TextureLoader();
    //      loadInsL0_2.load(
    //      // "../asset/Set.png",
    //      "../asset/Instructor_L0_2.png",

    //      //   "../asset/test.jpeg",
    //      //  "../asset/Image place holder.png",
    //          function (textureInsL0_2) {
    //             var planeMaterialInsL0_2 = new THREE.MeshBasicMaterial({
    //                 map: textureInsL0_2,
    //                 transparent: true,
    //                 // visible: false 
    //             });
    //             // textureInsL0_1.wrapS = THREE.RepeatWrapping;
    //             // textureInsL0_1.wrapT = THREE.RepeatWrapping;
    //             // textureLHS.repeat.set( 4, 4 );
    //             //Create a 2x2 plane with texture
    //             var planeGeometryInsL0_2 = new THREE.PlaneBufferGeometry(2.3, 2.3);
    //             var planeInsL0_2 = new THREE.Mesh(planeGeometryInsL0_2, planeMaterialInsL0_2);
    //             scene.add(planeInsL0_2);
    //             planeInsL0_2.position.z = 1
    //             planeInsL0_2.position.x = 2
    //             planeInsL0_2.position.y = -0.7

    //             // nextAudio = true
    //          },
    //          // undefined,
    //          function (err) {
    //              console.error('An error happened in Instructor L0_2 Image.');
    //          }
    //      );
    //     // }
    // }

    // // Load Instructor After 1st audio execution done 
    // const loadInsL0_2 = new THREE.TextureLoader();
    // loadInsL0_2.load(
    // // "../asset/Set.png",
    // "../asset/Instructor_L0_2.png",

    // //   "../asset/test.jpeg",
    // //  "../asset/Image place holder.png",
    //     function (textureInsL0_2) {
    //         var planeMaterialInsL0_2 = new THREE.MeshBasicMaterial({
    //             map: textureInsL0_2,
    //             transparent: true,
    //             // visible: false 
    //         });
    //         // textureInsL0_1.wrapS = THREE.RepeatWrapping;
    //         // textureInsL0_1.wrapT = THREE.RepeatWrapping;
    //         // textureLHS.repeat.set( 4, 4 );
    //         //Create a 2x2 plane with texture
    //         var planeGeometryInsL0_2 = new THREE.PlaneBufferGeometry(2.3, 2.3);
    //         var planeInsL0_2 = new THREE.Mesh(planeGeometryInsL0_2, planeMaterialInsL0_2);
    //         scene.add(planeInsL0_2);
    //         planeInsL0_2.position.z = 1
    //         planeInsL0_2.position.x = 2
    //         planeInsL0_2.position.y = -0.7
    //     },
    //     // undefined,
    //     function (err) {
    //         console.error('An error happened in Instructor L0_2 Image.');
    //     }
    // );


    // ------------------       working       ---------------------------------
    // Load LHS Image Here
    // var imageArray = new Array();


    const loadLHSImg = new THREE.TextureLoader();
    loadLHSImg.load(
        // "../asset/test.jpeg",
        "../asset/Image place holder.png",
        // "../asset/Set.png",

        function (textureLHS) {
            var planeMaterialLHS = new THREE.MeshBasicMaterial({
                map: textureLHS,
                transparent: true,
                // visible: false 
            });
            textureLHS.wrapS = THREE.RepeatWrapping;
            textureLHS.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryLHS = new THREE.PlaneBufferGeometry(2.1, 2.1);
            var planeLHS = new THREE.Mesh(planeGeometryLHS, planeMaterialLHS);
            scene.add(planeLHS);
            planeLHS.position.x = -1.5
            planeLHS.position.y = -0.7
            // planeLHS.position.z = 1

            // OnClick Event For planeLHS
            const domEventsLHS = new THREEx.DomEvents(camera, renderer.domElement)
            domEventsLHS.addEventListener(planeLHS, 'click', function (event) {
                console.log("planeLHS clicked")

                // Load Required Audio (playAudio Function is Declare Above)
                // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

                // Redirect to new page onClick - working
                // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
                // location.href = 'level0_4.html';

                // Redirect to new page onClick - not working
                // var mybtn = document.querySelector('.level0_4');
                // mybtn.onClick = "location.href='level0_4.html'";

                //  ------------------------  Working  --------------------------
                // Inner Function Change Image onClick         
                const loadLHSImgInner = new THREE.TextureLoader();
                loadLHSImgInner.load(
                    // "../asset/Set.png",
                    "../asset/new_image_assets/game element-01.png",

                    //   "../asset/test.jpeg",
                    //  "../asset/Image place holder.png",
                    function (textureInnerLHS) {
                        var planeMaterialInnerLHS = new THREE.MeshBasicMaterial({
                            map: textureInnerLHS,
                            transparent: true,
                            // visible: false 
                        });
                        textureInnerLHS.wrapS = THREE.RepeatWrapping;
                        textureInnerLHS.wrapT = THREE.RepeatWrapping;
                        // textureLHS.repeat.set( 4, 4 );
                        //Create a 2x2 plane with texture
                        var planeGeometryInnerLHS = new THREE.PlaneBufferGeometry(2, 2);
                        var planeInnerLHS = new THREE.Mesh(planeGeometryInnerLHS, planeMaterialInnerLHS);
                        scene.add(planeInnerLHS);
                        planeInnerLHS.position.x = -1.5
                        planeInnerLHS.position.y = -0.7

                        // // OnClick Event For planeLHS
                        // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
                        // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
                        //     console.log("planeInnerLHS clicked")
                        //     // alert("btn clicked")
                        // }, false)

                        //Render the scene
                        renderer.render(scene, camera);
                        document.body.appendChild(renderer.domElement);
                    },
                    // undefined,
                    function (err) {
                        console.error('An error happened in LHS Image.');
                    }
                );
            }, false)
            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        //  undefined,
        function (err) {
            console.error('An error happened in LHS Image.');
        }
    );



    // Load RHS Image Here
    const loadRHSImg = new THREE.TextureLoader();
    loadRHSImg.load(
        "../asset/Image place holder.png",
        // "../asset/test.jpeg",

        function (textureRHS) {
            // console.log("LHS Function Executed");
            var planeMaterialRHS = new THREE.MeshBasicMaterial({
                map: textureRHS,
                transparent: true,
                // visible: false 
            });
            textureRHS.wrapS = THREE.RepeatWrapping;
            textureRHS.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryRHS = new THREE.PlaneBufferGeometry(2.1, 2.1);
            // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
            var planeRHS = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
            // console.log("planeRHS", planeRHS)
            scene.add(planeRHS);
            planeRHS.position.x = 1.5
            planeRHS.position.y = -0.7


            // OnClick Event For planeRHS
            const domEventsRHS = new THREEx.DomEvents(camera, renderer.domElement)
            domEventsRHS.addEventListener(planeRHS, 'click', function (event) {
                console.log("planeRHS clicked")
                // alert("btn clicked")

                // Load Required Audio (playAudio Function is Declare Above)
                // playAudio('../Sounds/level0_sounds/ML_A_L0_2.mp3')

                //  ------------------------  Working  --------------------------
                // RHS Inner Function Change Image onClick
                //  var meshRHS;         
                const loadRHSImgInner = new THREE.TextureLoader();
                loadRHSImgInner.load(
                    // 2nd URL
                    "../asset/new_image_assets/game element-02.png",

                    function (textureInnerRHS) {
                        var planeMaterialInnerRHS = new THREE.MeshBasicMaterial({
                            map: textureInnerRHS,
                            transparent: true,
                            // visible: false 
                        });
                        textureInnerRHS.wrapS = THREE.RepeatWrapping;
                        textureInnerRHS.wrapT = THREE.RepeatWrapping;
                        // textureLHS.repeat.set( 4, 4 );
                        //Create a 2x2 plane with texture
                        var planeGeometryInnerRHS = new THREE.PlaneBufferGeometry(2, 2);
                        var planeInnerRHS = new THREE.Mesh(planeGeometryInnerRHS, planeMaterialInnerRHS);
                        scene.add(planeInnerRHS);
                        planeInnerRHS.position.x = 1.5
                        planeInnerRHS.position.y = -0.7

                        // OnClick Event For planeLHS
                        const domEventsInnerRHS = new THREEx.DomEvents(camera, renderer.domElement)
                        domEventsInnerRHS.addEventListener(planeInnerRHS, 'click', function (event) {
                            console.log("planeInnerRHS clicked")
                            // alert("btn clicked")

                            // Set Image for either correct Or incorrect
                            const loadRHSImgInner = new THREE.TextureLoader();
                            loadRHSImgInner.load(
                                // incorrect

                                "../asset/new_image_assets/Rectangle error.png",

                                function (textureInnerRHS) {
                                    var planeMaterialInnerRHS = new THREE.MeshBasicMaterial({
                                        map: textureInnerRHS,
                                        // visible: false 
                                    });
                                    textureInnerRHS.wrapS = THREE.RepeatWrapping;
                                    textureInnerRHS.wrapT = THREE.RepeatWrapping;
                                    // textureLHS.repeat.set( 4, 4 );
                                    //Create a 2x2 plane with texture
                                    var planeGeometryInnerRHS = new THREE.PlaneBufferGeometry(2, 2);
                                    var planeInnerRHS = new THREE.Mesh(planeGeometryInnerRHS, planeMaterialInnerRHS);
                                    scene.add(planeInnerRHS);
                                    planeInnerRHS.position.x = 1.5
                                    planeInnerRHS.position.y = -0.7

                                    // OnClick Event For planeLHS
                                    const domEventsInnerRHS = new THREEx.DomEvents(camera, renderer.domElement)
                                    domEventsInnerRHS.addEventListener(planeInnerRHS, 'click', function (event) {
                                        console.log("planeInnerRHS clicked")
                                        // alert("btn clicked")
                                    }, false)

                                    //Render the scene
                                    renderer.render(scene, camera);
                                    document.body.appendChild(renderer.domElement);
                                },
                                // undefined,
                                function (err) {
                                    console.error('An error happened in RHS Image.');
                                }
                            );
                        }, false)

                        //Render the scene
                        renderer.render(scene, camera);
                        document.body.appendChild(renderer.domElement);
                    },
                    // undefined,
                    function (err) {
                        console.error('An error happened in RHS Image.');
                    }
                );
            }, false)

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        undefined,
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

