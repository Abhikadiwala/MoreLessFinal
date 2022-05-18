
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js'; 
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
console.log("Home Page Btn Index Working");
console.log("10/05")


// Loader When Page is Load
window.onload = function () { document.getElementById("loading").style.display = "none" }


// Fetch EndPoint of URL
console.log("Host", location.host);
// var endPoint = location.host
var endPoint = `http://${location.host}` // For Local Testing
// var endPoint = `https://${location.host}`    // For Online

// window.onload = function () {
//     document.getElementById('clickButton').click();
// }

// Get Level Number
var lastLevelStr = sessionStorage.getItem('skipClick')
var lastLevel = Number(lastLevelStr)
console.log(lastLevel)


// Access Canvas From index.html File
const canvas = document.querySelector('.homeIndex');


// ------------------- Jquery ----------------------------------------------

// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

// !function () {
//     "use strict";
//     var a = "undefined" != typeof module && module.exports, b = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element, c = function () {
//         for (var a, b, c = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], d = 0, e = c.length, f = {}; e > d; d++)
//             if (a = c[d], a && a[1] in document) {
//                 for (d = 0, b = a.length; b > d; d++)
//                     f[c[0][d]] = a[d];
//                 return f;
//             }
//         return !1;
//     }(), d = {
//         request: function (a) {
//             var d = c.requestFullscreen;
//             a = a || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[d]() : a[d](b && Element.ALLOW_KEYBOARD_INPUT);
//         }, exit: function () {
//             document[c.exitFullscreen]();
//         }, toggle: function (a) {
//             this.isFullscreen ? this.exit() : this.request(a);
//         }, raw: c
//     };
//     return c ? (Object.defineProperties(d, {
//         isFullscreen: {
//             get: function () {
//                 return Boolean(document[c.fullscreenElement]);
//             }
//         }, element: {
//             enumerable: !0, get: function () {
//                 return document[c.fullscreenElement]
//             }
//         }, enabled: {
//             enumerable: !0, get: function () {
//                 return Boolean(document[c.fullscreenEnabled]);
//             }
//         }
//     }), void (a ? module.exports = d : window.screenfull = d)) : void (a ? module.exports = !1 : window.screenfull = !1);
// }();


// $(document).ready(function () {
//     $('.homepopup').click(function () {
//         if (screenfull.isFullscreen !== true) {
//             screenfull.toggle();
//         }
//     });
// });
// ----------------------------------------------------------------------

// var e = document.getElementById('homepopup');
// // document.body.requestFullscreen().apply(e)
// // (e.webkitRequestFullScreen || e.mozRequestFullScreen).apply(e);
// start()

// async function start() {
//     await document.body.requestFullscreen();
//     await screen.orientation.lock("landscape");
//     // ready();
// }

// var getFullScreen = localStorage.getItem('FullScreen')
// var value = JSON.parse(getFullScreen)
// console.log("ssdsd", JSON.parse(getFullScreen))
// console.log(getFullScreen)
// if (value == true) {
//     console.log("Condition working");
//     // openFullscreen()
// }
// openFullscreen()
// setTimeout(() => {
//     openFullscreen()
// }, 2000);

//  ----------------------- Working ---------------------------------------
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
    // canvasPopup,
    alpha: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
console.log("window.innerWidth, window.innerHeight", window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Render Scene and Camera  - Global
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement);

// Resize the Screen  - Global
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
})


// -----------------------------------------------------------------------------

// // Scene  - Global
// var scene = new THREE.Scene();

// // window Inner Height and weidth
// // var winWidth = window.screen.width
// // var winHeight = window.screen.height
// var winWidth = window.innerWidth
// var winHeight = window.innerHeight

// // Camera - Global
// var camera = new THREE.PerspectiveCamera(
//     60,
//     // window.innerWidth / window.innerHeight,
//     winWidth / winHeight,
//     1,
//     1000
// );
// camera.position.set(0, 0, 4);

// // Renderer - Global
// const renderer = new THREE.WebGLRenderer({
//     canvas,
//     // canvasPopup,
//     alpha: true,
//     antialias: true,
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(winWidth, winHeight);
// // renderer.setSize(window.screen.width, window.screen.height);
// // console.log("window.innerWidth, window.innerHeight",window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Render Scene and Camera  - Global
// renderer.render(scene, camera)
// document.body.appendChild(renderer.domElement);

// screen.orientation.lock("landscape")


// // Check Full Screen is Active or Not
// var element = document.querySelector(".homepopup");
// // make the element go to full-screen mode
// element.requestFullscreen()
//     .then(function () {
//         // element has entered fullscreen mode successfully
//         console.log("Auto Full Screen");
//     })
//     .catch(function (error) {
//         // element could not enter fullscreen mode
//         console.log("Full Screen Disable");
//     });


// openFullscreen()
// Click eevnt on HomePage
// document.getElementById('homepopup').click();
// window.onload = function () {
//     document.getElementById('homepopup').click();

//     var scriptTag = document.createElement("script");
//     scriptTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
//     document.getElementsByTagName("head")[0].appendChild(scriptTag);
// }

// function openFullscreen() {
//     localStorage.setItem('FullScreen', true)
//     console.log("Full Screen Fuction Working");
//     // var elem = document.getElementById("level1Test");
//     // console.log("-- W", winWidth, "H:-", winHeight);
//     // console.log("Ele W:-", elem.width, "H:-", elem.height);
//     // // winWidth = elem.width
//     // // winHeight = elem.height

//     // if (elem.requestFullscreen) {
//     //     elem.requestFullscreen();
//     // } else if (elem.mozRequestFullScreen) {
//     //     // / Firefox /
//     //     elem.mozRequestFullScreen();
//     // } else if (elem.webkitRequestFullscreen) {
//     //     // / Chrome, Safari & Opera /
//     //     elem.webkitRequestFullscreen();
//     // } else if (elem.msRequestFullscreen) {
//     //     // / IE/Edge /
//     //     elem.msRequestFullscreen();
//     // }
//     // elem.style.width = '100%';
//     // elem.style.height = '100%';

//     start()

//     function ready() {
//         const { type } = screen.orientation;
//         console.log(`Fullscreen and locked to ${type}. Ready!`);
//     }

//     async function start() {
//         await document.body.requestFullscreen();
//         await screen.orientation.lock("landscape");
//         ready();
//     }

//     // // renderer.setSize(window.innerWidth, window.innerHeight);
//     // function Resize() {
//     //     // camera.aspect = winWidth / winHeight;
//     //     // camera.aspect = window.innerWidth / window.screen.height
//     //     // camera.aspect = window.screen.width / window.innerHeight

//     //     camera.updateProjectionMatrix();
//     //     // renderer.setSize(winWidth, winHeight)
//     //     renderer.setSize(window.screen.width, window.innerHeight);

//     //     // Render Scene and Camera  - Global
//     //     renderer.render(scene, camera)
//     //     document.body.appendChild(renderer.domElement);

//     // }

//     // // Render Scene and Camera  - Global
//     // renderer.render(scene, camera)
//     // document.body.appendChild(renderer.domElement);

//     // // Resize the Screen  - Global
//     // window.addEventListener('resize', Resize)
//     // window.addEventListener('resize', throttle(
//     //     () => {
//     //         const width = window.innerWidth;
//     //         const height = window.innerHeight;
//     //         camera.aspect = width / height;
//     //         camera.updateProjectionMatrix();
//     //         renderer.setSize(width, height);
//     //         setCanvasDimensions(renderer.domElement, width, height);
//     //     },
//     //     // resizeUpdateInterval,
//     //     { trailing: true }
//     // ))
// }

// document.body.requestFullscreen();

// renderer.setSize(window.innerWidth, window.innerHeight);
// function Resize() {
//     // camera.aspect = winWidth / winHeight;
//     // camera.aspect = window.innerWidth / window.screen.height
//     // camera.aspect = window.screen.width / window.innerHeight

//     camera.updateProjectionMatrix();
//     // renderer.setSize(winWidth, winHeight)
//     renderer.setSize(window.screen.width, window.innerHeight);

//     // Render Scene and Camera  - Global
//     renderer.render(scene, camera)
//     document.body.appendChild(renderer.domElement);

// }

// // Render Scene and Camera  - Global
// renderer.render(scene, camera)
// document.body.appendChild(renderer.domElement);

// // Resize the Screen  - Global
// window.addEventListener('resize', Resize)


// screen.lockOrientation('landscape');
// window.screen.lockOrientation('landscape');


// // screen.addEventListener("orientationchange", function () {
// window.addEventListener("orientationchange", function () {
//     // console.log("The orientation of the screen is: " + screen.orientation);
//     // Resize the Screen  - Global
//     window.addEventListener('resize', function () {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight)
//     })
// });


// // -------------    Active When Delivery to Client  -----------------------------
// var orbitControls
// orbitControls = new OrbitControls(camera, renderer.domElement);
// orbitControls.enabled = true;
// orbitControls.enableZoom = false;
// orbitControls.enablePan = false;
// orbitControls.enableDamping = false;
// orbitControls.autoRotate = true;
// orbitControls.autoRotateSpeed = 10;
// //  ------------------------------------------------------------------------------

// Global Varibale are Declare Here
var isAudioPlaying = false;
var isFirstVisit = false;
var audioPlayed = true;  // This is Check the audio is complete or Not
var insOneLoad = true;
var insTwoLoad = true;
var ins2Hide = false;
// var audio2Load = false;
var planeInsL0_1, planeInsL0_2, planeLHSMain, planeRHSMain, sound, listener, storeAudioState;

// LevelZeroComplete (LZC) Variables 
var planeLZCLHS, planeLZCRHS;

// var sound = document.getElementById("sound").value;
var nextAudio = false;  // For Next audio Approval default (false)
// console.log("nextAudio ", nextAudio);

//  ---------------------------------------------------------------------------------
// Images Global
// var Continue_Green = "../asset/logo/Continue_Green.png"
var Continue_Green = "asset/logo/Continue_Green.png"
// var playNextLevel = ""
// var PickupNewGame = "../asset/logo/Pick_New_Game_Blue.png"
var PickupNewGame = "asset/logo/Pick_New_Game_Blue.png"

//  ---------------------------------------------------------------------------------
// Audios 
// var GL_A_5 = "../Sounds/Global_Music/GL_A_5_Home.mp3"
// var GL_A_19 = ""

// var BGImg = "../asset/BackgroundL0.png" 
var BGImg = "asset/BackgroundL0.png"

var let_btn = "asset/Let's_play.png"
// --------------------------------------------------------------------------------------


// All Audios
// --------------------------------------------------------------------------------------
// var Audio1 = '../Sounds/level0_sounds/ML_A_L0_1.mp3'
var Audio1 = 'Sounds/level0_sounds/ML_A_L0_1.mp3'
var Audio_GL_5 = "Sounds/Global_Music/GL_A_5_Home.mp3"
// --------------------------------------------------------------------------------------


//  ---------------------------------------------------------------------------------
//Load Background Image
const loadImg = new THREE.TextureLoader();  // For Backgroud Image
loadImg.load(
    // "../asset/BackgroundL0.png",
    BGImg,

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

        // Active
        // Resize the Screen  - Global
        // window.addEventListener('resize', function () {
        //     camera.aspect = window.innerWidth / window.innerHeight;
        //     camera.updateProjectionMatrix();
        //     renderer.setSize(window.innerWidth, window.innerHeight)
        // })
    },
    // undefined,
    function (err) {
        console.error('An error happened in Backgroud Image', err);
    }
);
// ------------------------------------------------------------------------------------------


// Play Audio on page Refresh
// ------------------------------------------------------------------------------------------
// var tryToResumeAudioContext = function () {
//     if (WEBAudio.audioContext.state === 'suspended')
//         WEBAudio.audioContext.resume();
//     else
//         Module.clearInterval(resumeInterval);
// };
// var resumeInterval = Module.setInterval(tryToResumeAudioContext, 400);

// setInterval(() => {
//     console.log("SetInterval works");
//     playAudio(Audio_GL_5)
// }, 1000);

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function delayedGreeting() {
//     await playAudio(Audio_GL_5)
//     console.log("Hello");
//     await sleep(2000);
//     console.log("World!");
//     await sleep(2000);
//     console.log("Goodbye!");
// }
// delayedGreeting()

// window.addEventListener('click', function () {
//     const audioCtx = new AudioContext();
//     playAudio(Audio_GL_5)
// }, false);



// ------------------------------------------------------------------------------------------

// Pause Audio is Tab Switch
var musicImgStatus = true
// ----------------------------------------------------------------------------------------------

// Detect When user Move to other Slide or Change Screen
document.addEventListener("visibilitychange", function () {
    var pageHidden = document.hidden
    var pageVisible = document.visibilityState
    console.log(pageHidden, pageVisible)
    /* console.log(document.hidden, document.visibilityState)  */
    console.log("Screen is Minimize")
    if (pageHidden == true) {
        // sound.pause()
        sound.pause()
        // window.alert("Page Change")
        // window.location.reload()
    }
    if (pageHidden == false) {
        // sound.play()
        if (musicImgStatus == true) {
            sound.play()
        }
        // window.location.reload()
    }
}, false);
// ----------------------------------------------------------------------------------------------

// firstVisitAgain()
// homePageHandler();
setTimeout(() => {
    // console.log("SetTime For Let's Play Button")
    homePageHandler();
}, 300);



// firstVisit Function Will be Executed When Use Visit Page First Time
function firstVisitAgain() {

    // isFirstVisit = true;
    insOneLoad = true;  // Display 1st instructor
    insTwoLoad = false; // Hide 2nd instructor
    // Load Image here Start Button 
    const loadImg2 = new THREE.TextureLoader();
    loadImg2.load(
        // "../asset/Let's_play.png",
        let_play,

        function (texture2) {
            var planeMaterial2 = new THREE.MeshBasicMaterial({
                map: texture2,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var planeGeometry2 = new THREE.PlaneBufferGeometry(0.80, 0.80);
            var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
            scene.add(plane2);
            plane2.position.z = 1

            // OnClick Event For planeLHS
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(plane2, 'click', function (event) {
                // event.preventDefault()
                // console.log("plane2 clicked")
                // console.log("planeInnerLHS origDomEvent", event.origDomEvent)
                // console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
                // var btndisable = event.origDomEvent.isTrusted;
                // console.log("btndisable",btndisable);

                // // Remove EventListner Here
                // domEvents.removeEventListener(plane, 'click', function(e){
                //     console.log("remove listner call")
                //     domEvents.addEventListener(plane, 'click', function (event) {
                //         console.log("Add Listne Again")
                //     })
                //     // plane.visible = false
                // })

                if (audioPlayed == true) {
                    nextAudio = false   // For Reactive Ins-1
                    init();     // call Main Function
                    // console.log("this is true");
                    plane2.visible = false;

                    // Comment audio only for testing purpose
                    // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
                    playAudio(Audio1)
                    // btndisable = false

                    // console.log("insOneLoad inside Function", insOneLoad);
                    // console.log("insTwoLoad inside Function", insTwoLoad);
                    // isFirstVisit = false

                    insOneLoad = false;  // Make instructor 1 invisible
                    insTwoLoad = false;  // Make instructor 2 invisible
                }
                else {
                    console.log("btndisable updated", btndisable);
                }
                // plane.visible = false;    
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
}

// Audio Play
// async function playAudio(path){
function playAudio(path) {

    isAudioPlaying = true;
    if (isAudioPlaying) {
        // console.log("IsAudioPlaying:- " + isAudioPlaying)
        // const audioScene = new THREE.Scene();

        // Audio Listener Object
        listener = new THREE.AudioListener();
        // camera.add(listener);
        scene.add(listener);

        // create the PositionalAudio object (passing in the listener)
        sound = new THREE.PositionalAudio(listener);

        // load a sound and set it as the PositionalAudio object's buffer
        var audioLoader = new THREE.AudioLoader();
        // console.log("audioLoader :-", audioLoader)
        // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
        // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
        audioLoader.load(path, function (buffer) {
            sound.setBuffer(buffer);
            sound.setRefDistance(20);
            // Sound Speed Control here

            sound.play();
            // For Autoplay audio
            // sound.autoplay = true;
            // sound.setVolume(0.5)
            // console.log("sound:- ", sound);
            storeAudioState = sound.source.onended;
            // console.log("storeAudioState", storeAudioState);
            sound.source.onended = function () {

                console.log('sound ended');
                nextAudio = true;
                // console.log("sound.source.onended", sound.source.onended);
                // audio2Load = true
                // nextAudioConst = true;
                // console.log("nextAudio inside", nextAudio);
                // var storeAudioState =  sound.source.onended;
                // console.log("storeAudioState", storeAudioState);
                // console.log("storeAudioState Inside", storeAudioState);
                // console.log("sound Inside :- ", sound);
                // console.log("sound Inside isplaying this :- ", isPlaying);
                // console.log("sound Inside isplaying :- ", sound.isPlaying);
                this.isPlaying = false;
                // openFullscreen()
                // sound.isPlaying = false; 
                // console.log("sound Inside isplaying this:- ", this.isPlaying);
                // console.log("sound Inside isplaying :- ", sound.isPlaying);

                // if(nextAudio == true){
                // presentationTwo()
                // nextAudio = false
                // testingAudio2()
                // playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")
                // console.log("audio2Load status:-", audio2Load);
                // audio2Load = true
                // if (audio2Load == true){
                //     // playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")
                //     presentationTwo()
                //     // insTwoLoad = false
                //     audio2Load = false
                // }

                // }

                // if (this.isPlaying == false){
                //     console.log("playing");
                //     audioPlayed = true
                // }
            }
        });
    }
}


function homePageHandler(path) {
    // console.log("planerecogEqualLHS Status:- ", planerecogEqualLHS.visible);
    // Audio Indicating Equal
    // playAudio("../Sounds/level0_sounds/ML_A_L0_10.mp3")
    // openFullscreen()
    // playAudio("../Sounds/HomePage_sounds/GL_A_1.mp3")
    // playAudio("../Sounds/Global_Music/GL_A_5_Home.mp3") // Active
    // playAudio("../Sounds/Global_Music/GL_A_5_Home.mp3") // gl_a_5 audio
    playAudio(Audio_GL_5) // gl_a_5 audio


    //  ------------------------  Working  --------------------------
    // Inner Function Change Image onClick         
    // Load play again image 
    const loadImg = new THREE.TextureLoader();
    loadImg.load(
        // "../asset/Let's_play.png",
        // "../asset/logo/Play again.png",
        // "../asset/logo/Continue game.png",
        // "../asset/logo/Continue_Green.png", // Active
        Continue_Green,

        function (texture) {
            var planeMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            // var planeGeometry = new THREE.PlaneBufferGeometry(0.9, 0.9); // active
            var planeGeometry = new THREE.PlaneBufferGeometry(1, 0.87);
            var planeLZCLHS = new THREE.Mesh(planeGeometry, planeMaterial);
            scene.add(planeLZCLHS);
            planeLZCLHS.position.x = -1
            planeLZCLHS.position.y = -0.3
            // planeLZCLHS.position.z = 1

            // OnClick Event For planeLHS
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(planeLZCLHS, 'click', function (event) {
                // console.log("planeLZCLHS clicked")
                // console.log("Function Working")

                // window.location.replace(`${endPoint}/index.html`); // Active
                // planeLZCLHS.dispose

                // Only Remove but Button is Active after this event perform
                scene.remove(planeLZCLHS, planeLZCRHS);

                // var lastLevelStr = sessionStorage.getItem('skipClick')
                // var lastLevel = Number(lastLevelStr)
                // console.log(lastLevel)

                if (lastLevel == 4) {
                    console.log("go to level4");
                    // console.log(typeof (lastLevel))
                    // console.log(Number(lastLevel))
                    // console.log(typeof (lastLevel))
                    // window.location.replace(`/level4.html`); // Testing
                    // window.location.replace(`${endPoint}/level4.html`); // working
                    window.location.replace(`level4.html`); // Testing
                } else {

                    // history.back()   // Send back to last location Page // Working
                    // window.location.replace(`${endPoint}/index.html`); // path change
                    // window.location.replace(`${endPoint}/level0.html`);
                    window.location.replace(`level0.html`);
                }


                // Redirect to Level0 onClick - working
                // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
                // location.href = 'index.html';   // Main Redirect Page    // Woking

                // Push user To Last Location
                // history.back()   // Send back to last location Page // Working
                // history.go(-1)   // Send back to last location Page // Working

                // history.pushState('index.html')   // Send back to last location Page
                // history.pushState()   // Send back to last location Page
                // history.forward()   // Send back to last location Page
                // location.href = 'testing.html';


                // firstVisitAgain()

                // console.log("planeInnerLHS origDomEvent", event.origDomEvent)
                // console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
                // var btndisable = event.origDomEvent.isTrusted;
                // console.log("btndisable",btndisable);
                // if (audioPlayed == true){
                //     console.log("this is true");
                //     plane.visible = false;
                //     init();     // call Main Function

                //     // Comment audio only for testing purpose
                //     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
                //     // btndisable = false

                //     insOneLoad = false;  // Make instructor 1 invisible
                //     insTwoLoad = false;  // Make instructor 2 invisible
                //     console.log("insOneLoad inside Function", insOneLoad);
                //     console.log("insTwoLoad inside Function", insTwoLoad);
                // }
                // else{
                //     console.log("btndisable updated", btndisable);
                // }
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


    //  ------------------------  Working  --------------------------
    // RHS Inner Function Change Image onClick
    //  var meshRHS;         
    const introMoreloadRHS = new THREE.TextureLoader();
    introMoreloadRHS.load(
        // Play Next Level Image
        //    "../asset/logo/Play the next level.png",
        // "../asset/logo/Pick new game.png",
        // "../asset/logo/Pick_New_Game_Blue.png", // Active
        PickupNewGame,


        function (textureintroMoreRHS) {
            var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreRHS,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            // var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(0.95, 0.95); // active
            var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(1.2, 0.9);
            planeLZCRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
            scene.add(planeLZCRHS);
            planeLZCRHS.position.x = 1
            planeLZCRHS.position.y = -0.3
            // planeLZCRHS.position.z = 1

            // // OnClick Event For planeLHS
            const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            domEventsInnerLHS.addEventListener(planeLZCRHS, 'click', function (event) {
                console.log("planeInnerLHS clicked")
                // openFullscreen()

                // location.href = "level1_Pre.html"

                // planeLZCLHS.visible = false
                // planeLZCRHS.visible = false
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

    //Render the scene
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);

    // Active
    // // Resize the Screen  - Global
    // window.addEventListener('resize', function () {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    // })
}

function init() {

    homePageHandler()

    // renderInsOne();
    presentationOne();
    // console.log("nextaudio status------", nextAudio);
    // introMore();
    // renderInsThree()
    // setTimeout(

    // controls.update();

    // Render Scene and Camera - Global
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);

    // Active
    // // Resize the Screen  - Global
    // window.addEventListener('resize', function () {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    // })

}
