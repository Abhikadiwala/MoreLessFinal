
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
// import { throttle } from 'https://cdnjs.cloudflare.com/ajax/libs/jquery-throttle-debounce/1.1/jquery.ba-throttle-debounce.min.js'
// import throttle from 'https://cdnjs.cloudflare.com/ajax/libs/jquery-throttle-debounce/1.0/jquery.ba-throttle-debounce.min.js'
// console.log("level 1 Test 04/04");
import Skiptesting from './skipBtnPageTesting.js';

console.log("New 18/04");
console.log("alert checking automatic");

// Reload page on Page visit
// location.reload();
// window.location.reload()
// const reloadUsingLocationHash = () => {
//     // window.location.hash = "reload"; // reload return in url
//     window.location.hash = "";
// }
// window.onload = reloadUsingLocationHash();

// Check Website is Open in Mobile or Desktop
// window.mobileAndTabletCheck = function () {
//     console.log("device check function");
//     alert("This is Mobile Device")
//     let check = false;
//     (function (a) {
//         if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
//     })(navigator.userAgent || navigator.vendor || window.opera);
//     return check;
// };


// Loader When Page is Load
window.onload = function () {
    ResizeCall()
    document.getElementById("loading").style.display = "none"
}
// // window.onload = init()

// window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });

// // If User Change Tab Reload
// window.onbeforeunload = function() { return "Your work will be lost." };



// Fetch EndPoint of URL
console.log("Host", location.host);
var endPoint = location.host

// var CommonPath = "http://127.0.0.1:5500"
// var endPoint = "http://127.0.0.1:5500"

// // Full Screen Function Testing
// function MakeFullScreen() {
//     console.log("full ---------------------------------------")
//     top.resizeTo(window.screen.availWidth, window.screen.availHeight)
//     top.moveTo(0, 0)

//     setTimeout(() => {
//         MakeFullScreen()
//     }, 200);
// }


// Access Canvas From index.html File
// const canvas = document.querySelector('.c');
const canvas = document.querySelector('.level1Test');
// document.addEventListener('touchstart', handler, {passive: true});

// Scene  - Global
var scene = new THREE.Scene();

// window Inner Height and weidth
// var winWidth = window.screen.width
// var winHeight = window.screen.height
var winWidth = window.innerWidth
var winHeight = window.innerHeight

// Camera - Global
var camera = new THREE.PerspectiveCamera(
    60,
    // window.innerWidth / window.innerHeight,
    winWidth / winHeight,
    1,
    1000
);
camera.position.set(0, 0, 4);

// Renderer - Global
const renderer = new THREE.WebGLRenderer({
    canvas,
    // canvasPopup,
    alpha: true,
    antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(winWidth, winHeight);
// renderer.setSize(window.screen.width, window.screen.height);
// console.log("window.innerWidth, window.innerHeight",window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Render Scene and Camera  - Global
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement);

// Resize the Screen  - Global
// window.addEventListener('resize', function () {
//     console.log("Resize W:-", winWidth, "H:-", winHeight);
//     camera.aspect = winWidth / winHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(winWidth, winHeight)
// })

// window.addEventListener('resize', function () {
//     // var 

//     // canvas.style.width = winWidth + "px";
//     // canvas.style.height = winHeight + "px";
//     // canvas.style.top = ((window.innerHeight - winHeight) / 4) + "px";
//     // canvas.style.left = ((window.innerWidth - winWidth) / 4) + "px";
//     // canvas.style.height = (winHeight - 0) + "px";

//     // console.log("Resize W:-", winWidth, "H:-", winHeight);
//     // // camera.aspect = window.innerWidth / window.innerHeight;
//     // camera.aspect = canvas.style.width / canvas.style.height;
//     // camera.updateProjectionMatrix();
//     // renderer.setSize(window.innerWidth, window.innerHeight)
//     // // renderer.setSize(canvas.style.width, canvas.style.height)

// })


function ResizeCall() {
    console.log("Resize function call ------------");
    camera.aspect = window.innerWidth / window.innerHeight;
    // camera.aspect = window.innerHeight / window.innerWidth;   // For Testing
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Render Scene and Camera  - Global
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);
}

var getFullScreen = localStorage.getItem('FullScreen')
var value = JSON.parse(getFullScreen)
console.log("ssdsd", JSON.parse(getFullScreen))
console.log(getFullScreen)
if (value == true) {
    console.log("Condition working");
    // openFullscreen()
}

//  ----------- Full Screen and Resize Function ---------------------------------------
function openFullscreen() {
    localStorage.setItem('FullScreen', true)
    console.log("Full Screen Fuction Working");
    // var elem = document.getElementById("level1Test");
    // console.log("-- W", winWidth, "H:-", winHeight);
    // console.log("Ele W:-", elem.width, "H:-", elem.height);
    // // winWidth = elem.width
    // // winHeight = elem.height

    // if (elem.requestFullscreen) {
    //     elem.requestFullscreen();
    // } else if (elem.mozRequestFullScreen) {
    //     // / Firefox /
    //     elem.mozRequestFullScreen();
    // } else if (elem.webkitRequestFullscreen) {
    //     // / Chrome, Safari & Opera /
    //     elem.webkitRequestFullscreen();
    // } else if (elem.msRequestFullscreen) {
    //     // / IE/Edge /
    //     elem.msRequestFullscreen();
    // }
    // elem.style.width = '100%';
    // elem.style.height = '100%';

    start()

    function ready() {
        const { type } = screen.orientation;
        console.log(`Fullscreen and locked to ${type}. Ready!`);
    }

    async function start() {
        // function start() {
        await document.body.requestFullscreen();
        await screen.orientation.lock("landscape");
        // screen.orientation.lock("landscape");
        ready();
    }
    // screen.orientation.lock("landscape")
    // screen.orientation.lock("landscape-primary")
    // screen.orientation.lock("landscape-secondary")
    // console.log("Lock Condition tested");

    // // renderer.setSize(window.innerWidth, window.innerHeight);
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
    // window.addEventListener('resize', throttle(
    //     () => {
    //         const width = window.innerWidth;
    //         const height = window.innerHeight;
    //         camera.aspect = width / height;
    //         camera.updateProjectionMatrix();
    //         renderer.setSize(width, height);
    //         setCanvasDimensions(renderer.domElement, width, height);
    //     },
    //     // resizeUpdateInterval,
    //     { trailing: true }
    // ))
}

// renderer.setSize(window.innerWidth, window.innerHeight);
function Resize() {
    // camera.aspect = winWidth / winHeight;
    // camera.aspect = window.innerWidth / window.screen.height
    // camera.aspect = window.screen.width / window.innerHeight

    camera.updateProjectionMatrix();
    // renderer.setSize(winWidth, winHeight)
    renderer.setSize(window.screen.width, window.innerHeight);

    // Render Scene and Camera  - Global
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);

}

// Render Scene and Camera  - Global
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement);

// Resize the Screen  - Global
window.addEventListener('resize', Resize)
//  ------------------------------------------------------------------------



// Global x,y Size For Slide Rounds -------------------------------------------------------
// SXIPosLHS = Slide X Image Position   LHS
// SYIPosLHS = Slide Y Image Position   LHS
// var SXIPosLHS = -1.75   // Old 
var SXIPosLHS = -1.93
var SYIPosLHS = -0.4

// SXIPosRHS = Slide X Image Position   RHS
// SYIPosRHS = Slide Y Image Position   RHS
// var SXIPosRHS = 1.75 // Old
var SXIPosRHS = 1.93
var SYIPosRHS = -0.4

// Hand RHS & LHS
var SXIPosHand = 2.4
var SYIPosHand = -1.7

// Home Button Position
var PHomeX = -2.8
var PHomeY = 1.5

// Back Button Position
var PBackX = -2.1
var PBackY = 1.5

// Sound Button Position
var PSoundX = 1.5
var PSoundY = 1.5

// Hint Button Position
var PHintX = 2
var PHintY = 1.5

// Reward Button Position
var PRewardX = 3
var PRewardY = 1.5

// White Box Size
// WB:- White Box
// var WBPosX = 3   // Old
// var WBPosY = 3   // Old
var WBPosX = 3.6
var WBPosY = 3.1

// Skip Button Ui
var SkipPosX = 3.7
var SkipPosY = -1.7

// if Mobile Device check properly then apply to all levels
// ----------------------------        Working       ---------------------------------
// Check Webiste is open in mobile or desktop
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// var element = document.getElementById('text');
if (isMobile) {
    // element.innerHTML = "You are using Mobile";
    console.log("This is Mobile");


    // Update Navbar Size for Mobile View
    // Home Button Position
    PHomeX = -3.3
    PHomeY = 1.5

    // Back Button Position
    PBackX = -2.8
    PBackY = 1.5

    // Change White Box Size
    WBPosX = 3.4
    WBPosY = 3

    // SXIPosLHS = Slide X Image Position   LHS
    // SYIPosLHS = Slide Y Image Position   LHS
    SXIPosLHS = -1.93
    SYIPosLHS = -0.4

    // SXIPosRHS = Slide X Image Position   RHS
    // SYIPosRHS = Slide Y Image Position   RHS
    SXIPosRHS = 1.93
    SYIPosRHS = -0.4

    // Skip Button Ui
    SkipPosX = 4
    SkipPosY = -1.66

    // setTimeout(() => {
    //     alert("This is Mobile")
    // }, 200);
    // alert("This is Mobile")

    // Showing Alert Message on Mobile Screen
    // Message is Empty
    // function tempAlert(msg, duration) {
    //     var el = document.createElement("div");
    //     el.setAttribute("style", "position:absolute;top:40%;left:20%;background-color:white;");
    //     el.innerHTML = msg;
    //     setTimeout(function () {
    //         el.parentNode.removeChild(el);
    //     }, duration);
    //     document.body.appendChild(el);
    // }
    // tempAlert("", 200)


} else {
    // element.innerHTML = "You are using Desktop";
    console.log("This is Desktop");
    // alert("This is desktop")
}
// -----------------------------------------------------------------------------------------


// Code For Orientation - Potrait
if (winHeight < winWidth) {
    console.log("This is Landscape");
    // screen.orientation.lock()

    // // Home Button Position
    // PHomeX = -3.3
    // PHomeY = 1.5

    // // Back Button Position
    // PBackX = -2.1
    // PBackY = 1.5

    let isFullScreen = false;
    let touchtime = 0;
    var elem = document.body;

    // mobile device
    // window.ontouchstart = function () {
    //     // init()
    //     console.log("bbbb")
    //     if (touchtime == 0) {
    //         // set first click
    //         touchtime = new Date().getTime();
    //     } else {
    //         // compare first click to this click and see if they occurred within double click threshold
    //         if (((new Date().getTime()) - touchtime) < 800) {
    //             // double click occurred
    //             if ((window.fullScreen) ||
    //                 (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
    //                 console.log(window.fullScreen + "____________________: " + (window.innerWidth == screen.width && window.innerHeight == screen.height));
    //             } else {
    //                 if (elem.requestFullscreen) {
    //                     elem.requestFullscreen();
    //                 } else if (elem.msRequestFullscreen) {
    //                     elem.msRequestFullscreen();
    //                 } else if (elem.mozRequestFullScreen) {
    //                     elem.mozRequestFullScreen();
    //                 } else if (elem.webkitRequestFullscreen) {
    //                     elem.webkitRequestFullscreen();
    //                 }
    //             }
    //             touchtime = 0;
    //         } else {
    //             // not a double click so set as a new first click
    //             touchtime = new Date().getTime();
    //         }
    //     }
    // }
}

// For Landscape Mode
if (winHeight > winWidth) {
    console.log("This is portrait");
    console.log("Old H:-", window.innerHeight, "W:-", window.innerWidth);

    var newH = window.innerWidth
    var newW = window.innerHeight
    console.log("New H:-", newH, "W:-", newW);
    window.innerHeight = newW
    window.innerWidth = newH


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
        antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setSize(window.screen.width, window.screen.height);
    // console.log("window.innerWidth, window.innerHeight",window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Render Scene and Camera  - Global
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);

    // Resize the Screen  - Global
    // window.addEventListener('resize', function () {
    //     camera.aspect = winWidth / winHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(winWidth, winHeight)
    // })
}

// Detect When user Move to other Slide or Change Screen
document.addEventListener("visibilitychange", function () {
    var pageHidden = document.hidden
    var pageVisible = document.visibilityState
    console.log(pageHidden, pageVisible)
    /* console.log(document.hidden, document.visibilityState)  */
    console.log("Screen is Minimize")
    if (pageHidden == true) {
        // sound.pause()
        // window.stop()
        sound2.pause()
        // window.onblur()
        // window.alert("Page Change")
        // window.location.reload()
        // document.querySelector('#level1Test').pause()
        // document.getElementById('#level1Test').pause()
        // window.requestAnimationFrame();
    }
    if (pageHidden == false) {
        // sound.play()
        if (musicImgStatus == true) {
            sound2.play()
        }
        // window.onfocus()
        // await new Promise(resolve => setTimeout(resolve, 1000));
        // window.location.reload()
        // window.requestAnimationFrame();
        // window.requestAnimationFrame(presentationOne)
    }

}, false);

// Detect Full Screen   - Not Working   ------------------------------
// document.addEventListener("fullscreenChange", function () {
//     if (fullscreenElement != null) {
//         console.log("Went full screen");
//     } else {
//         console.log("Exited full screen");
//     }
//     console.log("Full Screen Done");
// });
// document.addEventListener("webkitfullscreenchange", function () {
//     console.log("Full Screen -----------------------------");
// });
//  ----------------------------------------------------------------

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


// Globle Images Path Assign Here  ------------------------------------------------------------------
// BackGroud Image
var BGImg = "../asset/level_one_assets/Backgound.png"
// var BGImg = "https://images.unsplash.com/photo-1647960611306-575d35715bf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"

// Let's Play Image
var LetsPlay = "../asset/Let's_play.png"

// Audio Reply Btn Image
var AudioReplyBtnImg = "../asset/logo/Audio_Replay.png"

// Home Btn Image
var HomeBtnImg = "../asset/logo/Home.png"

// Back Btn Image 
var BackBtnImg = "../asset/logo/Back.png"

// Progress Bar Img
// var ProgressbarImg = "../asset/Progress_bar/Progress bar_Type_1.png"
// var ProgressbarImg = "../asset/Progress_bar/Asset 33xxxhdpi.svg"
var ProgressbarImg = "../asset/Progress_bar/Asset 41xxxhdpi.png"

// Sound Img
var SoundImgMute = "../asset/logo/Music_Mute.png"
var SoundImgUnMute = "../asset/logo/Music.png"

// Hint Img
var hintActive = false
var HintImgInActive = "../asset/logo/Hint_Inactive.png"
var HintImgActive = "../asset/logo/Hint.png"

// Reward Img
var RewardImg = "../asset/logo/Rewards.png" // testing
// var RewardImg = "../asset/logo/Rewards 0.png" // active
// var RewardImg = "../asset/Progress_bar/Asset 33xxxhdpi.svg"

// Hand Img
var handImg = "../asset/hand_img.png"

// Instructor 
var l1INS1 = "../asset/Instructor_L0_1.png"
var l1INS2 = "../asset/Instructor_L0_2.png"

// Error Images
var ErrorBorder = "../asset/level_one_assets/Incorrect answer highlight.png"
var SuccessBorder = "../asset/level_one_assets/Correct answer highlight.png"

// White Box Image & Image Size
var whiteBox = "../asset/Image place holder.png"

// Skip Button 
var skipBtn = "../asset/logo/Skip.png"

// Slides Images
// Slide 3 Images
// l1PS3 - Level 1 Presentation Slide 3
var l1PS3LHS = "../asset/level_one_assets/Image asset Lone Update/Set 7_2 pink balls.png"
var l1PS3RHS = "../asset/level_one_assets/Image asset Lone Update/Set 7_9 pink balls.png"

// Slide 6 Images
var l1PS6LHS = "../asset/level_one_assets/Image asset Lone Update/Set 1_2 blue shirts.png"
var l1PS6RHS = "../asset/level_one_assets/Image asset Lone Update/Set 1_10 blue shirts.png"

// --------------------------------------------------------------------------------------
// Reward Point Image
var R0 = "../asset/Numbers images Reward/0.png"
var R1 = "../asset/Numbers images Reward/1.png"
var R2 = "../asset/Numbers images Reward/2.png"
var R3 = "../asset/Numbers images Reward/3.png"
var R4 = "../asset/Numbers images Reward/4.png"
var R5 = "../asset/Numbers images Reward/5.png"
var R6 = "../asset/Numbers images Reward/6.png"
var R7 = "../asset/Numbers images Reward/7.png"
var R8 = "../asset/Numbers images Reward/8.png"
var R9 = "../asset/Numbers images Reward/9.png"
var R10 = "../asset/Numbers images Reward/10.png"
// --------------------------------------------------------------------------------------


// All Sound Path Put Here  ---------------------------------------------------------
// BackGroud Sound
var BGSound = '../Sounds/level0_sounds/backgroud_music_free.mp3'

// Audio Play Again
var AudioPAgain = '../Sounds/Global_Music/Here_ins_again.mp3'

// Audio Answer Selection
var WrongSelSound = '../Sounds/Global_Music/Music/For the wrong answer.mp3'
var CorrectSelSound = '../Sounds/Global_Music/Music/For correct answer.mp3'

// Level 1 All Audios
var Audio1 = '../Sounds/level1_sounds/ML_A_L1_1.mp3'
var Audio2 = '../Sounds/level1_sounds/ML_A_L1_2.mp3'
var Audio3 = '../Sounds/level1_sounds/ML_A_L1_3.mp3'
var Audio4 = '../Sounds/level1_sounds/ML_A_L1_4.mp3'

// ----------------------------------------------------------------------------------------


//  ----------------------------------------------------------------------------------------------------------------
// Controls - access OrbitControls
// const controls = new OrbitControls( camera, renderer.domElement );

// to disable zoom
// controls.enableZoom = false;

// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;
// controls.enablePan = false;

// Global Varibale are Declare Here
var isAudioPlaying = false;
var setBackgroudAudio = true;
var toggelSoundReplyStatus = false;

var isFirstVisit = false;
var planeRedStatus = false;
var planeGreenStatus = false;
var audioPlayed = true;  // This is Check the audio is complete or Not
var insOneLoad = true;
var insTwoLoad = true;
var ins2Hide = false;
var planeReplyAudio, replyAudioSound, soundReplyisPlaying = true;
// var audio2Load = false;
var planeInsL0_1, planeInsL0_2, planeLHSMain, planeRHSMain, sound, sound2, listener, listener2, storeAudioState;

// Headers Variables
var planeHome, planeBack, planeProgress, planeSound, planeSoundOff, planeHint, planeReward;

// L1 Slide 1 Variables
// var planeintroMoreLHS, planeintroMoreRHS,planeintroMoreRHSHand;
var planeS3LHS, planeS3RHS;

// Slide 4 Variables
var planeS4LHS, planeS4RHS, planeS4HandRHS;

// Slide 5 Variables
var planeS5LHS, planeS5RHS, planeS5AnsRHS;

// Slide 6 Variables
var planeS6LHS, planeS6RHS, planeS6ErrorLHS, planeS6SuccessRHS;

// Slide 6 Skip Variables
var planeS6SkipLHS, planeS6SkipRHS, planeSkipBtn;

// INS 1 varibles
// S6Cor :- Slide 6 Correct Answer 
var plane, S6Cor = false, Slide6Execute = false, isFunc4Active = false;

var isReplyBtnClick = false, isAudio3Complete = false, isAudio4Complete = false, isFunc5Active = false,
    isAudio4Working = false, dblClick = false
// var sound = document.getElementById("sound").value;
var nextAudio = false;  // For Next audio Approval default (false)
// console.log("nextAudio ", nextAudio);

//Check Image Status
var musicImgStatus = true, isDotShow = false

// All Dot varibales
var dot, dot2, dot3

var objectLevelData = {
    mData: musicImgStatus
    // mData: 'Abhishek',
    // mdData: 'kadiwala',
}
// Set Data to LoacalStorage

var setLevelData = localStorage.setItem('levelData', JSON.stringify(objectLevelData));
console.log("setLevelData", setLevelData);

// var nextAudioConst = false;

// Level 1 Backgroud Image 
const loadImg = new THREE.TextureLoader();
loadImg.load(
    // "../asset/BackgroundL0.png",    // This is For Level0
    BGImg,    // Backgroud Image

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


// window.onload = init()

// Detect Page Refresh
var pageAccessedByReload = (
    (window.performance.navigation && window.performance.navigation.type === 1) ||
    window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
);

// alert(pageAccessedByReload);
console.log("Page Refresh", pageAccessedByReload);

if (pageAccessedByReload == true) {
    // pageAccessedByReload = false
    // autoClick == true
    // init()
    firstVisit()
}

// Call All The Functions Here
// init();
// ----------------------   Working  -------------------------------------------------
// Only Hide For Auto Click function check
setTimeout(() => {
    // console.log("SetTime For Let's Play Button")
    // firstVisit()
    if (pageAccessedByReload == false) {
        init()   // Working
        // firstVisit()
    }
    // openFullscreen()
}, 300);

// -----------------------------------------------------------------------
// var head = document.getElementsByTagName('head')[0];
// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = "https://code.jquery.com/jquery-3.6.0.min.js";

// // Then bind the event to the callback function.
// // There are several events for cross browser compatibility.
// script.onreadystatechange = handler;
// script.onload = handler;

// // Fire the loading
// head.appendChild(script);

// function handler() {
//     console.log('jquery added :)');
//     if (pageAccessedByReload == true) {
//         // console.log("jquery condition check");
//         init()
//         // sound.play()
//         // sound2.play()
//     }
//     // $(document).ready(function () {
//     // sound.play()
//     //     $('level1Test').click(function (event) {
//     //         event.preventDefault();
//     //         $(this).hide("slow");
//     //         // console.log("---------------------------Wroking")
//     //         sound.play()
//     //     });
//     // });
// }
// -------------------------------------------------------------------------

// // Detect Auto Click
// var autoClick;

// setInterval(() => {
//     // setTimeout(() => {
//     if (autoClick == true) {
//         console.log("Auto Click Executed--------------------")
//         window.click()
//     }
// }, 100);


// ----------------------------------------------------------------------------------------
// openFullscreen()
// firstVisit()
// checkBGAudio()

// Stop All Logs Dispay
// console.log = function () { }


// Function For Play Audio
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
            // storeAudioState = sound.source.onended;

            // // Stop Current audio
            // switch (path) {
            //     case '../Sounds/Global_Music/Here_ins_again.mp3':
            //         console.log("Switch statment work")
            //         sound.pause()
            //         break;
            // }

            // console.log("storeAudioState", storeAudioState);
            sound.source.onended = function () {

                switch (path) {
                    // case '../Sounds/level1_sounds/ML_A_L1_1.mp3':
                    case Audio1:
                        // console.log("first end");
                        presentationTwo()
                        // playAudio("../Sounds/level1_sounds/ML_A_L1_2.mp3")
                        playAudio(Audio2)
                        break;

                    // case '../Sounds/level1_sounds/ML_A_L1_2.mp3':
                    case Audio2:
                        // console.log("Second end");
                        // introMore()
                        l1PS3()
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;

                    // case '../Sounds/level1_sounds/ML_A_L1_3.mp3':
                    case Audio3:
                        // console.log("Third end"); 
                        // introLess()
                        l1PS4()
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;

                    case '../Sounds/level0_sounds/ML_A_L0_5.mp3':
                        // console.log("Fourth end");
                        // replyAudioSound.setVolume(0)
                        l1PS5()
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;

                    case '../Sounds/level0_sounds/ML_A_L0_6.mp3':
                        // isAudio4Working = true
                        // console.log("Fifth end");
                        // playAudio("../Sounds/level1_sounds/ML_A_L1_4.mp3")
                        // replyAudio(Audio4)
                        playAudio(Audio4)
                        // isAudio4Complete = true
                        break;

                    // case '../Sounds/level1_sounds/ML_A_L1_4.mp3':
                    case Audio4:
                        isAudio4Working = false
                        // console.log("sixth end");
                        // gPlayTshirt()
                        l1PS6()
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;
                    // // case '../Sounds/level0_sounds/ML_A_L0_8.mp3':   
                    // case '../Sounds/Global_Music/tryAgain.mp3':
                    //     // console.log("seventh end");
                    //     // gPlayTshirt()    
                    //     // gPlayTshirtInCorrect()
                    //     planeRedStatus = false
                    //     break;

                    default:
                        break;
                }
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
                // sound.isPlaying = false; 
                // console.log("sound Inside isplaying this:- ", this.isPlaying);
                // console.log("sound Inside isplaying :- ", sound.isPlaying);
            }
        });

    }

}

// Pause BG Audio Here
function soundBG(path) {
    // Audio Listener Object
    listener2 = new THREE.AudioListener();
    // camera.add(listener);
    scene.add(listener2);

    // create the PositionalAudio object (passing in the listener)
    sound2 = new THREE.PositionalAudio(listener2);

    // load a sound and set it as the PositionalAudio object's buffer
    var audioLoader2 = new THREE.AudioLoader();
    // console.log("audioLoader :-", audioLoader)
    // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
    // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
    audioLoader2.load(path, function (buffer) {
        sound2.setBuffer(buffer);
        sound2.setRefDistance(20);
        sound2.setLoop(true);
        // Sound Speed Control here

        sound2.play();
        // For Autoplay audio
        // sound.autoplay = true;
        sound2.setVolume(0.1)
        // console.log("sound:- ", sound);
        storeAudioState = sound2.source.onended;
    }, false);
}

// Play Reply Audio and Pause playAudio Function sound here
function soundReplyAudio(path) {

    sound.pause()
    // Audio Listener Object
    var listener3 = new THREE.AudioListener();
    // camera.add(listener);
    scene.add(listener3);

    // create the PositionalAudio object (passing in the listener)
    replyAudioSound = new THREE.PositionalAudio(listener3);

    // load a sound and set it as the PositionalAudio object's buffer
    var audioLoader3 = new THREE.AudioLoader();
    // console.log("audioLoader :-", audioLoader)
    // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
    // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
    audioLoader3.load(path, function (buffer) {

        replyAudioSound.setBuffer(buffer);
        replyAudioSound.setRefDistance(20);
        // Sound Speed Control here
        replyAudioSound.play();

        // Stop Current audio
        switch (path) {
            // case '../Sounds/Global_Music/Here_ins_again.mp3':
            case AudioPAgain:
                console.log("Switch statment work")
                sound.pause()
                // sound.disconnect()
                break;
            // case Audio3:
            //     console.log("Audio3 Switch");
            //     sound.pause()
            //     break;
            case Audio3:
                console.log("Switch statment work")
                // if (Slide6Execute == true && isFunc4Active == false) {
                //   isFunc4Active = true
                // }
                isFunc4Active = true
                break;
        }

        // For Autoplay audio
        // sound.autoplay = true;
        // replyAudioSound.setVolume(0.1)
        // console.log("replyAudioSound:- ", replyAudioSound);
        // console.log("isPlaying Status in soundreplyAudio", replyAudioSound.isPlaying);

        replyAudioSound.source.onended = function () {
            console.log("replyAudioSound Ended");
            soundReplyisPlaying = true
            // console.log("replyAudioSound.source.onended", replyAudioSound.source.onended);
            // sound.play()
            // playAudio()
            switch (path) {
                // case '../Sounds/Global_Music/Music/For the wrong answer.mp3':
                case WrongSelSound:
                    console.log("For the wrong answer")
                    // console.log("Check Status:- ",planeLHSMainRed.visible);
                    planeS6ErrorLHS.visible = false
                    // gPlayTshirt()

                    //Render the scene for Update The Values
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                    break;

                // case '../Sounds/Global_Music/Music/For correct answer.mp3':
                case CorrectSelSound:
                    console.log("For correct answer")
                    // console.log("Check Status:- ",planeRHSMainGreen.visible);
                    // gPlayTshirt()
                    if (S6Cor == true) {
                        planeS6SuccessRHS.visible = false
                        setTimeout(l1PS6_Skip(), 1000)
                    }

                    //Render the scene for Update The Values
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                    break;

                // Audio Start Again
                // case '../Sounds/Global_Music/Here_ins_again.mp3':
                // case AudioPAgain:

                case Audio3:
                    // if (!isAudio3Complete) {
                    //     path = Audio4;
                    //     console.log("audio 3 is already complete");
                    //     break;
                    // }
                    // else {
                    //     // console.log("Audio Start Again")
                    //     // console.log("Audio 3 compplete isAudio3Complete", isAudio3Complete)
                    //     // // playAudio()
                    //     // isAudioPlaying = true
                    //     // // sound.setBuffer(buffer)
                    //     // // sound.getOutput()
                    //     // // sound.getPlaybackRate()
                    //     // // sound.connect()
                    //     // // sound.play()
                    //     // // console.log("Sound Ended Log Check", sound.source.onended = function () {
                    //     // // console.log("Sound restart")
                    //     // // playAudio(Audio3)
                    //     // if (isAudio3Complete == true) {
                    //     //     isAudio3Complete = false
                    //     //     console.log("111- ", isAudio3Complete);
                    //     //     scene.remove(planeReplyAudio)
                    //     //     planeReplyAudio.removeEventListener(planeReplyAudio, 'click', function () {
                    //     //         console.log("sddsdsfds")
                    //     //     })
                    //     //     l1PS4();
                    //     // }
                    // }

                    console.log("Audio Start Again")
                    console.log("Audio 3 compplete isAudio3Complete", isAudio3Complete)
                    // playAudio()
                    isAudioPlaying = true
                    // sound.setBuffer(buffer)
                    // sound.getOutput()
                    // sound.getPlaybackRate()
                    // sound.connect()
                    // sound.play()
                    // console.log("Sound Ended Log Check", sound.source.onended = function () {
                    // console.log("Sound restart")
                    // playAudio(Audio3)
                    // Condition when 1 audio is working
                    if (Slide6Execute == true) {
                        isFunc4Active = false
                    }

                    if (isAudio3Complete == true) {
                        isAudio3Complete = false
                        // isAudio4Complete = 
                        // console.log("111- ", isAudio3Complete);
                        // scene.remove(planeReplyAudio)
                        // planeReplyAudio.removeEventListener(planeReplyAudio, 'click', function () {
                        //     console.log("sddsdsfds")
                        // })
                        if (Slide6Execute == false) {
                            Slide6Execute = true
                            l1PS4();
                        }
                    }
                    break;

                case Audio4:
                    console.log("Audio Start Again")
                    // playAudio()
                    isAudioPlaying = true
                    // sound.setBuffer(buffer)
                    // sound.getOutput()
                    // sound.getPlaybackRate()
                    // sound.connect()
                    // sound.play()
                    // console.log("Sound Ended Log Check", sound.source.onended = function () {
                    // console.log("Sound restart")
                    // playAudio(Audio3)
                    if (isAudio4Complete == true) {
                        isAudio4Complete = false
                        l1PS6()
                    }
                    // if (isAudio4Working == false) {
                    //     l1PS6()
                    // }
                    // })
                    // var soundPlayAgain = sound.play()
                    // scene.add(soundPlayAgain)
                    // playAudio(Audio2)

                    //Render the scene for Update The Values
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                    break;

                default:
                    break;
            }
            // replyAudioSound.isPlaying = false
        }
        // this.isPlaying = false;
    }, false);
}

// Function For Reply Audio Button
// Call This Function only when user click on it
// if (isReplyBtnClick == true) {
function replyAudio(path) {
    // isReplyBtnClick = false
    // sound.pause()
    console.log("Reply Audio Working")

    const loadReplyAudio = new THREE.TextureLoader();
    loadReplyAudio.load(
        // '../asset/logo/Audio_Replay.png',
        AudioReplyBtnImg,

        function (textureReplyAudio) {
            var planeMaterialReplyAudio = new THREE.MeshBasicMaterial({
                map: textureReplyAudio,
                transparent: true,
            })

            var planeGeometryReplyAudio = new THREE.PlaneBufferGeometry(0.35, 0.35)
            planeReplyAudio = new THREE.Mesh(planeGeometryReplyAudio, planeMaterialReplyAudio)
            scene.add(planeReplyAudio)
            planeReplyAudio.position.x = 3.4
            planeReplyAudio.position.y = 1.12
            planeReplyAudio.position.z = 1

            // domEvents.addEventListener(planeReplyAudio, 'click', function (event) {
            //     console.log("Audio Reply Btn Click")
            //     // Call Reply Audio Btn
            //     //     if (!replyAudioSound.source.onended){
            //     soundReplyisPlaying = false
            //     // soundReplyAudio('../Sounds/Global_Music/Here_ins_again.mp3')    // Working
            //     // soundReplyAudio(AudioPAgain)    // Working Static Audio
            //     soundReplyAudio(path)    // Working
            //     // playAudio('../Sounds/Global_Music/Here_ins_again.mp3')    // Working
            //     // }

            //     // sound.pause() // Pause Current Audio and Play This Audio
            //     // sound.stop()   // Stop Current Audio
            //     // sound.pause()   // Pause Current audio
            // })

            // if (isFunc5Active == true) {
            //     isFunc5Active = false
            //     domEvents.removeEventListener(planeReplyAudio, 'click', function (event) {
            //         // console.log("Audio Reply Btn Click")
            //         console.log("Event remove");
            //         // Call Reply Audio Btn
            //         //     if (!replyAudioSound.source.onended){
            //         //- soundReplyisPlaying = false
            //         // soundReplyAudio(AudioPAgain)    // Working Static Audio
            //         //- soundReplyAudio(path)    // Working
            //         // playAudio('../Sounds/Global_Music/Here_ins_again.mp3')    // Working
            //         // }
            //         // sound.pause() // Pause Current Audio and Play This Audio
            //         // sound.stop()   // Stop Current Audio
            //         // sound.pause()   // Pause Current audio
            //     })
            // } else {

            // OnClick Reply Audio Play and other Sound Should be Pause
            if (isFunc4Active == false) {
                const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
                domEvents.addEventListener(planeReplyAudio, 'click', function (event) {
                    if (isFunc4Active == false) {

                        console.log("Audio Reply Btn Click")
                        // Call Reply Audio Btn
                        //     if (!replyAudioSound.source.onended){
                        soundReplyisPlaying = false
                        // soundReplyAudio('../Sounds/Global_Music/Here_ins_again.mp3')    // Working
                        // soundReplyAudio(AudioPAgain)    // Working Static Audio
                        // if (isAudio4Complete == true) {
                        //     // soundReplyAudio()

                        //     playAudio(Audio4)
                        // } else {
                        //     soundReplyAudio(path)    // Working
                        // }

                        // if (isAudio4Working == true) {
                        //     replyAudioSound.setVolume(0)
                        //     sound.setVolume(0)
                        //     playAudio(Audio4)
                        // }
                        // else {
                        soundReplyAudio(path)    // Working
                        // }

                        // playAudio('../Sounds/Global_Music/Here_ins_again.mp3')    // Working
                        // }

                        // sound.pause() // Pause Current Audio and Play This Audio
                        // sound.stop()   // Stop Current Audio
                        // sound.pause()   // Pause Current audio
                    }
                })
            }
            // }

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in planeHome.');
        }
    );
    // Active
    // // Resize the Screen  - Global
    // window.addEventListener('resize', function () {
    //     camera.aspect = winWidth / winHeight;
    //     camera.updateProjectionMatrix();
    //     // renderer.setSize(window.innerWidth, window.innerHeight)
    //     renderer.setSize(winWidth, winHeight)
    // })
}

// --------------   For Home Button on Canvas --------------------------
function homePageHandler() {
    // console.log("planerecogEqualLHS Status:- ", planerecogEqualLHS.visible);
    // Audio Indicating Equal
    // playAudio("../Sounds/level0_sounds/ML_A_L0_10.mp3")
    // openFullscreen()
    playAudio("../Sounds/HomePage_sounds/GL_A_1.mp3")

    //  ------------------------  Working  --------------------------
    // Inner Function Change Image onClick         
    // Load play again image 
    const loadImg = new THREE.TextureLoader();
    loadImg.load(
        // "../asset/Let's_play.png",
        // "../asset/logo/Play again.png",
        "../asset/logo/Continue game.png",

        function (texture) {
            var planeMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var planeGeometry = new THREE.PlaneBufferGeometry(1, 1);
            var planeLZCLHS = new THREE.Mesh(planeGeometry, planeMaterial);
            scene.add(planeLZCLHS);
            planeLZCLHS.position.x = -1
            planeLZCLHS.position.y = -0.3
            planeLZCLHS.position.z = 1

            // OnClick Event For planeLHS
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(planeLZCLHS, 'click', function (event) {
                // console.log("planeLZCLHS clicked")
                // console.log("Function Working")

                // planeLZCLHS.dispose

                // Only Remove but Button is Active after this event perform
                scene.remove(planeLZCLHS, planeLZCRHS);

                // Redirect to Level0 onClick - working
                // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
                // location.href = 'index.html';   // Main Redirect Page    // Woking

                // Push user To Last Location
                history.back()   // Send back to last location Page // Working
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
    const pickUpNewImg = new THREE.TextureLoader();
    pickUpNewImg.load(
        // Play Next Level Image
        //    "../asset/logo/Play the next level.png",
        "../asset/logo/Pick new game.png",

        function (texturePickUpNew) {
            var PM_PickUpNew = new THREE.MeshBasicMaterial({
                map: texturePickUpNew,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            var PG_PickUpNew = new THREE.PlaneBufferGeometry(1, 1);
            var planePickupNew = new THREE.Mesh(PG_PickUpNew, PM_PickUpNew);
            scene.add(planePickupNew);
            planePickupNew.position.x = 1
            planePickupNew.position.y = -0.3
            planePickupNew.position.z = 1

            // // OnClick Event For planeLHS
            const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            domEventsInnerLHS.addEventListener(planeLZCRHS, 'click', function (event) {
                console.log("planeInnerLHS clicked")
                // openFullscreen()

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
}

// --------------------------------------------------------------------- 

// For Navbar Icons
// function updateHUDSprites() {
//     console.log("Position Update Function working")

//     var width = window.innerWidth / 2;
//     var height = window.innerHeight / 2;

//     planeHome.position.set(- width, height, 1); // top left
//     // spriteTR.position.set(width, height, 1); // top right
//     // spriteBL.position.set(- width, - height, 1); // bottom left
//     // spriteBR.position.set(width, - height, 1); // bottom right
//     // spriteC.position.set(0, 0, 1); // center
// }

// All Header Components Add Here
// Home Button Function
function headerHome() {
    // console.log("Function headerHome");
    const hHome = new THREE.TextureLoader();
    hHome.load(
        // Load Home Image
        // "../asset/logo/Home.png",
        HomeBtnImg,

        function (textureHome) {
            var planeMaterialHome = new THREE.MeshBasicMaterial({
                map: textureHome,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            var planeGeometryHome = new THREE.PlaneBufferGeometry(0.37, 0.37);
            // var planeGeometryHome = new THREE.PlaneBufferGeometry(10, 10);
            planeHome = new THREE.Mesh(planeGeometryHome, planeMaterialHome);
            scene.add(planeHome);
            // planeHome.position.set(-(window.innerWidth), (window.innerHeight), 1)
            // planeHome.position.set(0, 0, 1) // active
            // planeHome.position.set(-(window.innerWidth) * 1.5, (window.innerHeight) * 0.5, 1)
            // updateHUDSprites()
            // planeHome.position.set(- width, height, 1); // top left
            // planeHome.position.set(- window.innerWidth / 2, window.innerHeight / 2, 1); // top left


            // planeHome.position.x = -2.8
            // planeHome.position.y = 1.5
            // planeHome.position.z = 1

            planeHome.position.x = PHomeX
            planeHome.position.y = PHomeY
            planeHome.position.z = 1

            // planeHome.position.x = -window.innerWidth / 2
            // planeHome.position.y = window.innerHeight / 2
            // planeHome.position.z = 1

            // Testing Position Responsive
            // planeHome.position.x = -2 * (planeHome.position.x / canvas.offsetWidth) - 2.1

            // OnClick Event For planeHome
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(planeHome, 'click', function (event) {
                console.log("planeHome clicked")
                Skiptesting()   // ------------------ Testing--working
                // openFullscreen()
                // planeLZCLHS.dispose
                // homePageHandler()

                // var currentPath = `${endPoint}/level1Testing.html`

                // if (currentPath == `${endPoint}/level1Testing.html`) {
                //     console.log("Redirect New Page");
                //     console.log("endPoint", endPoint);
                //     location.href = '/homePopup.html'
                // } else {
                //     location.href = '/homePopup.html'
                // }

                // Get Current Url of website
                // console.log("EndPoint+Path", `${endPoint}/level1Testing.html`)
                // console.log("Back URL:-", location.href)


                // // -----------      Working   -----------------------
                // location.href = '/homePopup.html'
                // if (location.href == '/homePopup.html') {
                //     console.log("This Page Again")
                //     // location.href = '/homePopup.html'
                //     location.href = '/skipbtn.html'
                // }
                // else {
                //     // location.href = '/homePopup.html'
                //     location.href = '/skipbtn.html'
                // }
                // // --------------------------------------------------


                // Only Remove but Button is Active after this event perform
                // scene.remove(planeLZCLHS, planeLZCRHS);

                // homePopup();
                // Redirect to new page onClick - working
                // domEventsLHS.userData = { URL: "http://stackoverflow.com" };

                // Redirect to new page onClick - not working
                // var mybtn = document.querySelector('.level0_4');
                // mybtn.onClick = "location.href='level0_4.html'";
                // }, false)
            }, { passive: false })

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in planeHome.');
        }
    );
    // Render Scene and Camera  - Global
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);
}

// Back Button Function
function headerBack() {
    // console.log("Function headerBack");
    const hBack = new THREE.TextureLoader();
    hBack.load(
        // Load Back_inActive Image
        // "../asset/logo/Back_Inactive.png",
        // "../asset/logo/Back.png",
        BackBtnImg,

        function (textureBack) {
            var planeMaterialBack = new THREE.MeshBasicMaterial({
                map: textureBack,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            var planeGeometryBack = new THREE.PlaneBufferGeometry(0.37, 0.37);
            planeBack = new THREE.Mesh(planeGeometryBack, planeMaterialBack);
            scene.add(planeBack);
            // planeBack.position.x = -2.1
            // planeBack.position.y = 1.5
            // planeBack.position.z = 1

            planeBack.position.x = PBackX
            planeBack.position.y = PBackY
            planeBack.position.z = 1

            //back Btn OnClick event Add Here
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(planeBack, 'click', function (event) {
                console.log("Back Btn Press")

                // New Page Redirect
                var currentPath = `${endPoint}/level1Testing.html`

                if (currentPath == `${endPoint}/level1Testing.html`) {
                    console.log("Redirect New Page");
                    location.href = "/level1_Pre.html"
                } else {
                    location.href = "/level1_Pre.html"
                }

                // // Push to Level 1 Presentation
                // location.href = "/level1_Pre.html"
                // if (location.href = "/level1_Pre.html") {
                //     console.log("This Page Again")
                //     location.href = "/level1_Pre.html"
                // }
                // else {
                //     location.href = "/level1_Pre.html"
                // }
                // },false)
            }, { passive: false })


            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in planeBack.');
        }
    );
}

// Progress Button Function
function headerProgress(RewardImg) {
    // console.log("Function headerProgress");
    const hProgress = new THREE.TextureLoader();
    hProgress.load(
        // Load Back_inActive Image
        // "../asset/Progress_bar/Progress bar_Type_1.png",
        ProgressbarImg,

        function (textureProgress) {
            var planeMaterialProgress = new THREE.MeshBasicMaterial({
                map: textureProgress,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            var planeGeometryProgress = new THREE.PlaneBufferGeometry(2, 0.37);
            planeProgress = new THREE.Mesh(planeGeometryProgress, planeMaterialProgress);
            scene.add(planeProgress);
            planeProgress.position.x = 0
            planeProgress.position.y = 1.52
            planeProgress.position.z = 1

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in planeProgress.');
        }
    );
}

// Header Sound
function headerSound(path) {

    // console.log("Function headerSound");
    const hSoundOn = new THREE.TextureLoader();
    hSoundOn.load(
        // Load Music Image
        // "../asset/logo/Music.png",
        path,

        function (textureSound) {
            var planeMaterialSound = new THREE.MeshBasicMaterial({
                map: textureSound,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            var planeGeometrySound = new THREE.PlaneBufferGeometry(0.37, 0.37);
            planeSound = new THREE.Mesh(planeGeometrySound, planeMaterialSound);
            scene.add(planeSound);
            // planeSound.position.x = 1.5
            // planeSound.position.y = 1.5
            // planeSound.position.z = 1

            planeSound.position.x = 1.5
            planeSound.position.y = 1.5
            planeSound.position.z = 1

            // Add OnClick event Here
            // Music off When This Event Occurs
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(planeSound, 'click', function (event) {
                console.log("Sound Btn Click")
                toggelMusic()

                // sound.setVolume(0);
                // }, false)
            }, { passive: false })


            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in planeSound.');
        }
    );
}

// Toggel Music Function
function toggelMusic() {

    if (musicImgStatus == true) {
        musicImgStatus = false
        sound2.pause()
        console.log("sound off");

        const hSoundOn = new THREE.TextureLoader();
        hSoundOn.load(
            // Load Music Image
            // "../asset/logo/Music_Mute.png",
            SoundImgMute,


            function (textureSound) {
                var planeMaterialSound = new THREE.MeshBasicMaterial({
                    map: textureSound,
                    transparent: true,
                    // visible: false 
                });
                //Create a 0.30x0.30 plane with texture
                var planeGeometrySound = new THREE.PlaneBufferGeometry(0.37, 0.37);
                planeSound = new THREE.Mesh(planeGeometrySound, planeMaterialSound);
                scene.add(planeSound);
                planeSound.position.x = 1.5
                planeSound.position.y = 1.5
                planeSound.position.z = 1

                //Render the scene
                renderer.render(scene, camera);
                document.body.appendChild(renderer.domElement);
            },
            // undefined,
            function (err) {
                console.error('An error happened in planeSound.');
            }
        );
    }
    else {
        musicImgStatus = true
        sound2.play();
        console.log("sound on");
        const hSoundOn = new THREE.TextureLoader();
        hSoundOn.load(
            // Load Music Image
            // "../asset/logo/Music.png",
            SoundImgUnMute,


            function (textureSound) {
                var planeMaterialSound = new THREE.MeshBasicMaterial({
                    map: textureSound,
                    transparent: true,
                    // visible: false 
                });
                //Create a 0.30x0.30 plane with texture
                var planeGeometrySound = new THREE.PlaneBufferGeometry(0.37, 0.37);
                planeSound = new THREE.Mesh(planeGeometrySound, planeMaterialSound);
                scene.add(planeSound);
                planeSound.position.x = 1.5
                planeSound.position.y = 1.5
                planeSound.position.z = 1

                // Add OnClick event Here
                // Music off When This Event Occurs
                // const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
                // domEvents.addEventListener(planeSound, 'click', function(event){
                //     console.log("Sound On Btn Click")

                //     sound2.play();

                // toggelMusic(path)
                // sound2.pause();
                // puase backgroud sound
                // setBackgroudAudio = false
                // checkBGAudio()
                // stopBGAudio();

                // audioChecker('../asset/logo/Music.png')
                // headerSoundOff()

                // sound2.stop();

                // sound.setVolume(0);
                // }, false)

                //Render the scene
                renderer.render(scene, camera);
                document.body.appendChild(renderer.domElement);
            },
            // undefined,
            function (err) {
                console.error('An error happened in planeSound.');
            }
        );
    }
}

// Hint Button Function
function headerHint() {

    if (hintActive == true) {
        var HintImg = HintImgActive
    }
    else {
        var HintImg = HintImgInActive
    }

    // console.log("Function headerHint");
    const hHint = new THREE.TextureLoader();
    hHint.load(
        // Load Hint_Inactive Image
        // "../asset/logo/Hint_Inactive.png",
        // HintImgInActive,
        HintImg,

        function (textureHint) {
            var planeMaterialHint = new THREE.MeshBasicMaterial({
                map: textureHint,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            var planeGeometryHint = new THREE.PlaneBufferGeometry(0.37, 0.37);
            planeHint = new THREE.Mesh(planeGeometryHint, planeMaterialHint);
            scene.add(planeHint);
            planeHint.position.x = 2
            planeHint.position.y = 1.5
            planeHint.position.z = 1

            if (hintActive == true) {
                const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
                domEvents.addEventListener(planeHint, 'click', function (event) {
                    console.log("Hint Active Button Click")
                    // New PAge Redirect
                    var currentPath = `${endPoint}/level1Testing.html`

                    if (currentPath == `${endPoint}/level1Testing.html`) {
                        console.log("Redirect New Page");
                        location.href = "/level1Testing.html"
                        // location.href = "/level1_Pre.html"
                    } else {
                        // location.href = "/level1_Pre.html"
                        location.href = "/level1Testing.html"
                    }

                    // location.href = '/level1_Pre.html'
                    // if (location.href = '/level1_Pre.html') {
                    //     console.log("This Page Again");
                    //     location.href = '/level1_Pre.html'
                    // } else {
                    //     location.href = '/level1_Pre.html'
                    // }
                }, false)
                // }, { passive: false })
            }

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in planeHint.');
        }
    );
}

// Reward Button Function
function headerReward() {
    // console.log("Function headerReward");
    const hReward = new THREE.TextureLoader();
    hReward.load(
        // Load Rewards Image
        // "../asset/logo/Rewards.png",
        RewardImg, // Active
        // R1,     // Testing

        function (textureReward) {
            var planeMaterialReward = new THREE.MeshBasicMaterial({
                map: textureReward,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            // var planeGeometryReward = new THREE.PlaneBufferGeometry(1, 0.37); // active
            var planeGeometryReward = new THREE.PlaneBufferGeometry(1.4, 0.5);
            planeReward = new THREE.Mesh(planeGeometryReward, planeMaterialReward);
            scene.add(planeReward);
            // planeReward.position.x = 3   // active
            // planeReward.position.y = 1.5 // active
            planeReward.position.x = 4
            planeReward.position.y = 2
            // planeReward.position.z = 1 // active

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in planeReward.');
        }
    );
    headerRewardNum()
}

// Reward Numbers
function headerRewardNum() {
    // console.log("Function headerReward");
    const hRewardnum = new THREE.TextureLoader();
    hRewardnum.load(
        // Load Rewards Image
        // "../asset/logo/Rewards.png",
        // RewardImg, // Active
        R4,     // Testing

        function (textureReward) {
            var planeMaterialReward = new THREE.MeshBasicMaterial({
                map: textureReward,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            var planeGeometryReward = new THREE.PlaneBufferGeometry(0.1, 0.17);
            // var planeGeometryReward = new THREE.PlaneBufferGeometry(0.17, 0.17); // for 100
            var planeRewardNum = new THREE.Mesh(planeGeometryReward, planeMaterialReward);
            scene.add(planeRewardNum);

            planeRewardNum.position.x = 3.04
            // planeRewardNum.position.x = 3.01           // For 100
            planeRewardNum.position.y = 1.425
            planeRewardNum.position.z = 1

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in planeReward.');
        }
    );
}

// // check full screen active or not
// if (document.fullscreenElement) {
//     console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
// } else {
//     console.log('Leaving fullscreen mode.');
// }

// Full Screen is Active or Not Detection
function fullscreenchanged(event) {
    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If not, the value
    // of the property is null.
    if (document.fullscreenElement) {
        // console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
        console.log(`Entered fullscreen mode.`);
    } else {
        console.log('Leaving fullscreen mode.');
        // Call Resize Function on Full Screen Exit
        // Resize the Screen  - Global
        ResizeCall()
        // window.addEventListener('resize', function () {
        // })
    }
};
// var el = document.getElementById('fullscreen-div');
// el.addEventListener('fullscreenchange', fullscreenchanged);
document.addEventListener('fullscreenchange', fullscreenchanged);

// -------------------      Raycast Click Event Testing     ---------------------------------
// var rendererTest, scene, camera;
var rendererTest, scene, camera;
// var controls
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// Mouse Event Detection
function onMouseMove(event) {
    console.log("Mouse Click Detection function Working");
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;   // Active
    // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1; // Active
    mouse.x = 3;
    mouse.y = 3;
}

// RayCast Click Event Testing
function MeshClckRayCast() {
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        console.log(intersects);
    }
    for (var i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
    }
    renderer.render(scene, camera);
}
// window.addEventListener('mousemove', onMouseMove, false);
//  ----------------------------------------------------------------------------------------



// Function For Full Screen
// var elem = document.getElementById("canvas");
// var elem = document.getElementById("level1Test");

// Call Full Screen Function
// openFullscreen()
// function openFullscreen() {
//     // console.log("width", window.width, "height", window.height);
//     console.log("Full Screen width", window.screen.width, "height", window.screen.height);
//     console.log("Ele", elem);
//     console.log("Ele W:-", elem.width, "H:-", elem.height);

//     // Update New Height and Width Screen Size- working    
//     // winWidth = window.screen.width
//     // winHeight = window.screen.height

//     // Update Size As Per canvas Size
//     // winWidth = elem.width
//     // winHeight = elem.height

//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { /* Safari */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE11 */
//         elem.msRequestFullscreen();
//     }
// }
// window.addEventListener('resize', Resize)


// firstVisit Function Will be Executed When Use Visit Page First Time
function firstVisit() {
    // soundBG(BGSound) //  Working
    // soundBG()
    // controls.update();
    isFirstVisit = true;
    insOneLoad = true;  // Display 1st instructor
    insTwoLoad = false; // Hide 2nd instructor
    // Load Image here Start Button 
    const loadImg = new THREE.TextureLoader();
    loadImg.load(
        // "../asset/Let's_play.png",
        LetsPlay,   // Let's Play Img

        function (texture) {
            var planeMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var planeGeometry = new THREE.PlaneBufferGeometry(0.80, 0.80);
            plane = new THREE.Mesh(planeGeometry, planeMaterial);
            scene.add(plane);
            plane.position.z = 1


            // OnClick Event For planeLHS
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(plane, 'click', function (event) {


                // // Call Full Screen Function
                openFullscreen()

                // function createPopupWin(pageURL, pageTitle,
                //     popupWinWidth, popupWinHeight) {
                //     var left = (screen.width);
                //     var top = (screen.height);
                //     var myWindow = window.open(pageURL, pageTitle,
                //         'resizable=yes, width=' + popupWinWidth
                //         + ', height=' + popupWinHeight + ', top='
                //         + top + ', left=' + left);
                // }

                // Remove EventListner Here
                domEvents.removeEventListener(plane, 'click', function (e) {
                    // console.log("remove listner call")
                    domEvents.addEventListener(plane, 'click', function (event) {
                        // console.log("Add Listne Again")
                    })
                    // plane.visible = false
                })

                // soundBG('../Sounds/level0_sounds/backgroud_music_free.mp3')
                soundBG(BGSound)
                if (audioPlayed == true) {
                    // checkBGAudio()
                    init();     // call Main Function
                    // console.log("this is true");
                    plane.visible = false;

                    // Comment audio only for testing purpose
                    // playAudio('../Sounds/level1_sounds/ML_A_L1_1.mp3')
                    playAudio(Audio1)     // Audio 1
                    // btndisable = false

                    insOneLoad = false;  // Make instructor 1 invisible
                    insTwoLoad = false;  // Make instructor 2 invisible
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

    // Render Scene and Camera  - Global
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);

    // Active
    // Resize the Screen  - Global
    // window.addEventListener('resize', function () {
    //     camera.aspect = winWidth / winHeight;
    //     camera.updateProjectionMatrix();
    //     // renderer.setSize(window.innerWidth, window.innerHeight)
    //     renderer.setSize(winWidth, winHeight)
    // })
}

// firstVisit Function Will be Executed When Use Visit Page First Time
function firstVisitAgain() {

    // isFirstVisit = true;
    insOneLoad = true;  // Display 1st instructor
    insTwoLoad = false; // Hide 2nd instructor
    // Load Image here Start Button 
    const loadImg2 = new THREE.TextureLoader();
    loadImg2.load(
        // "../asset/Let's_play.png",
        LetsPlay,

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
                    // checkBGAudio()
                    init();     // call Main Function
                    // console.log("this is true");
                    plane2.visible = false;

                    // Comment audio only for testing purpose
                    playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
                    // btndisable = false

                    // console.log("insOneLoad inside Function", insOneLoad);
                    // console.log("insTwoLoad inside Function", insTwoLoad);
                    // isFirstVisit = false

                    insOneLoad = false;  // Make instructor 1 invisible
                    insTwoLoad = false;  // Make instructor 2 invisible
                }
                else {
                    // console.log("btndisable updated", btndisable);
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
    // Render Scene and Camera  - Global
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);

    // Active
    // Resize the Screen  - Global
    // window.addEventListener('resize', function () {
    //     camera.aspect = winWidth / winHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(winWidth, winHeight)
    // })
}

// Function For Load Dynamic Images
// function loadDynamicImg() {
//     console.log("load Dynamic Image Function Working ");
//     // var multiImage = new Array();
//     // multiImage[0] = "../asset/new_image_assets/game element-01.png" 
//     // multiImage[1] = "../asset/new_image_assets/game element-02.png"
//     // multiImage[2] = "../asset/new_image_assets/game element-03.png"
// }



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
// function renderInsOne() {
// window.onload = init()


// Load Instructor-1
function presentationOne() {
    // playAudio(Audio1)
    isDotShow = true

    // Load Instructor-1 At Center 
    // if (isDotShow == true) {
    const loadInsL0_1 = new THREE.TextureLoader();
    loadInsL0_1.load(
        // "../asset/Instructor_L0_1.png",
        l1INS1,

        function (textureInsL0_1) {
            var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
                map: textureInsL0_1,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(3, 3);
            // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            scene.add(planeInsL0_1);
            planeInsL0_1.position.x = 0.5
            planeInsL0_1.position.y = -0.8
            // planeInsL0_1.position.z = 1

            // console.log("nextAudio status in One",nextAudio);
            if (nextAudio == true) {
                planeInsL0_1.visible = false
                // insTwoLoad = true;
                // presentationTwo();
            }
            nextAudio = false

            // // Hide Audio Reply Button 
            // planeReplyAudio.visible = false

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
    // }

    // var requestId = window.requestAnimationFrame(presentationOne);
    // window.requestAnimationFrame(presentationOne)


    if (isDotShow == true) {
        // Function for make circle
        function createCircleTexture(color, size) {
            var matCanvas = document.createElement('canvas');
            matCanvas.width = matCanvas.height = size;
            var matContext = matCanvas.getContext('2d');
            // create texture object from canvas.
            var texture = new THREE.Texture(matCanvas);
            // Draw a circle
            var center = size / 2;
            matContext.beginPath();
            matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
            matContext.closePath();
            matContext.fillStyle = color;
            matContext.fill();
            // need to set needsUpdate
            texture.needsUpdate = true;
            // return a texture made from the canvas
            return texture;
        }


        // Dot Put Here -1
        var dotGeometry = new THREE.BufferGeometry();
        dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute(new THREE.Vector3().toArray(), 3));
        // var dotMaterial = new THREE.PointsMaterial({ size: 0.1 });
        var dotMaterial = new THREE.PointsMaterial({
            size: 0.2,
            // map: createCircleTexture('#00ff00', 256),
            map: createCircleTexture('#ffffff', 256),
            transparent: true,
            depthWrite: false,
            // opacity: 0
        });
        dot = new THREE.Points(dotGeometry, dotMaterial);
        scene.add(dot);
        dot.position.x = 0.9
        dot.position.y = 0.27
        dot.position.z = 1


        // Dot Put Here -2
        var dotGeometry2 = new THREE.BufferGeometry();
        dotGeometry2.setAttribute('position', new THREE.Float32BufferAttribute(new THREE.Vector3().toArray(), 3));
        // var dotMaterial = new THREE.PointsMaterial({ size: 0.1 });
        var dotMaterial2 = new THREE.PointsMaterial({
            size: 0.2,
            // map: createCircleTexture('#00ff00', 256),
            map: createCircleTexture('#ffffff', 256),
            transparent: true,
            depthWrite: false,
            // opacity: 0
        });
        dot2 = new THREE.Points(dotGeometry2, dotMaterial2);
        scene.add(dot2);
        dot2.position.x = 1.08
        dot2.position.y = 0.27
        dot2.position.z = 1
        // dot.scale.set(0, 0, 0);


        // Dot Put Here -3
        var dotGeometry3 = new THREE.BufferGeometry();
        dotGeometry3.setAttribute('position', new THREE.Float32BufferAttribute(new THREE.Vector3().toArray(), 3));
        // var dotMaterial = new THREE.PointsMaterial({ size: 0.1 });
        var dotMaterial3 = new THREE.PointsMaterial({
            size: 0.2,
            // map: createCircleTexture('#00ff00', 256),
            map: createCircleTexture('#ffffff', 256),
            transparent: true,
            depthWrite: false,
            // opacity: 0
        });
        dot3 = new THREE.Points(dotGeometry3, dotMaterial3);
        scene.add(dot3);
        dot3.position.x = 1.25
        dot3.position.y = 0.27
        dot3.position.z = 1

        // dot.position.z = 0

        // showDot()

        // function showDot() {
        //     setTimeout(() => {
        //         dot.position.z = 1
        //     }, 1000)
        // }
        // Interval-1
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 1000);


        // Interval 2
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 1600);

        // Interval -3
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 2200);

        // Interval -4
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 2800);

        // Interval -5
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 3400);

        // Interval -6
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 4000);

        // Interval -7
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 4600);


        // Interval -8
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 5200);

        // Interval -9
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 5800);

        // Interval -10
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 6400);


        // Interval -11
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 7000);


        // Interval -12
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 7600);

    }

    // setTimeout(() => {
    //     console.log("timeout");
    //     dotMaterial.opacity = 0

    //     // Render Scene and Camera  - Global
    //     renderer.render(scene, camera)
    //     document.body.appendChild(renderer.domElement);

    // }, 1000);
    // window.addEventListener('resize', Resize)


    //Render the scene
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);

    // Active
    // Resize the Screen  - Global
    // window.addEventListener('resize', function () {
    //     console.log("Resize W:-", winWidth, "H:-", winHeight);
    //     camera.aspect = winWidth / winHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(winWidth, winHeight)
    // })
}

// Function for Render Instructor Slide-2
// function renderInsTwo() {
function presentationTwo() {
    scene.remove(planeInsL0_1)
    // Hide Instructor-1 After Audio-1 complete
    // nextAudio = false
    // console.log("-------");
    if (insOneLoad == false) {
        planeInsL0_1.visible = false
        // console.log("Hide Instructor here");
    }
    // console.log("Function presentationTwo Execute");
    // console.log("nextAudio in presentationTwo", nextAudio);

    // Render 2nd Instructor After 1st audio complete
    // Load Instructor After 1st audio execution done 
    const loadInsL0_2 = new THREE.TextureLoader();
    loadInsL0_2.load(
        //  "../asset/Instructor_L0_2.png",
        l1INS2,

        function (textureInsL0_2) {
            var planeMaterialInsL0_2 = new THREE.MeshBasicMaterial({
                map: textureInsL0_2,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            // var planeGeometryInsL0_2 = new THREE.PlaneBufferGeometry(2.3, 2.3);
            var planeGeometryInsL0_2 = new THREE.PlaneBufferGeometry(3, 3);
            planeInsL0_2 = new THREE.Mesh(planeGeometryInsL0_2, planeMaterialInsL0_2);
            scene.add(planeInsL0_2);
            planeInsL0_2.position.x = 2.3
            planeInsL0_2.position.y = -0.8
            // planeInsL0_2.position.z = 1

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

// Function for level 1 Presentation Slide 3
// This Function Pink Ball
function l1PS3() {

    isDotShow = false
    // scene.remove(dotMaterial, dotMaterial2, dotMaterial3)
    scene.remove(dot, dot2, dot3)
    // presentationOne()
    // Call Audio Reply Button Here
    // isReplyBtnClick = true
    isAudio3Complete = true
    replyAudio(Audio3)
    // soundReplyAudio(Audio3)
    // Audio Indicating More
    // playAudio("../Sounds/level1_sounds/ML_A_L1_3.mp3")
    playAudio(Audio3)
    if (planeInsL0_2.visible) {
        // console.log("Is Visible");
        planeInsL0_2.visible = false
    }

    //  ------------------------  Working  --------------------------
    // Inner Function Change Image onClick         
    const loadS3LHS = new THREE.TextureLoader();
    loadS3LHS.load(
        // "../asset/Set.png",
        // "../asset/level_one_assets/Image asset Lone Update/Set 7_6 pink balls.png",
        l1PS3LHS,  // Pink Ball

        function (textureS3LHS) {
            // PM:- Plane Material
            var PM_S3LHS = new THREE.MeshBasicMaterial({
                map: textureS3LHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            // PG:- Plane Geometry
            var PG_S3LHS = new THREE.PlaneBufferGeometry(3, 3);
            // planeintroMoreLHS = new THREE.Mesh(planeGeometryintroMoreLHS, planeMaterialintroMoreLHS);
            planeS3LHS = new THREE.Mesh(PG_S3LHS, PM_S3LHS);
            scene.add(planeS3LHS);
            planeS3LHS.position.x = SXIPosLHS
            planeS3LHS.position.y = SYIPosLHS

            // dispose object After Call
            PM_S3LHS.dispose()
            PG_S3LHS.dispose()
            // loadS3LHS.dispose()

            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeS3LHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)

            // // Add Hand Image Here
            // const loadLHSHand = new THREE.TextureLoader();
            // loadLHSHand.load(
            // // Hand Image
            // "../asset/hand_img.png",

            //     function (textureintroMoreLHSHand) {
            //     var planeMaterialintroMoreLHSHand = new THREE.MeshBasicMaterial({
            //             map: textureintroMoreLHSHand,
            //             transparent: true,
            //             // visible: false 
            //         });
            //         textureintroMoreLHSHand.wrapS = THREE.RepeatWrapping;
            //         textureintroMoreLHSHand.wrapT = THREE.RepeatWrapping;
            //         // textureLHS.repeat.set( 4, 4 );
            //         //Create a 2x2 plane with texture
            //         var planeGeometryintroMoreLHSHand = new THREE.PlaneBufferGeometry(0.7, 0.7);
            //         planeintroMoreLHSHand = new THREE.Mesh(planeGeometryintroMoreLHSHand, planeMaterialintroMoreLHSHand);
            //         scene.add(planeintroMoreLHSHand);
            //         planeintroMoreLHSHand.position.x = -0.55
            //         planeintroMoreLHSHand.position.y = -1.5
            //         // // OnClick Event For planeLHS
            //         // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            //         // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //         //     console.log("planeInnerLHS clicked")
            //         //     // alert("btn clicked")
            //         // }, false)

            //         //Render the scene
            //         renderer.render(scene, camera);
            //         document.body.appendChild(renderer.domElement);
            //     },
            //     // undefined,
            //     function (err) {
            //         console.error('An error happened in RHS Image.');
            //     }
            // );

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
    const loadS3RHS = new THREE.TextureLoader();
    loadS3RHS.load(
        //    "../asset/level_one_assets/Image asset Lone Update/Set 7_9 pink balls.png",
        l1PS3RHS,

        function (textureS3RHS) {
            // PM:- Plane Material
            var PM_S3RHS = new THREE.MeshBasicMaterial({
                map: textureS3RHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var PG_S3RHS = new THREE.PlaneBufferGeometry(3, 3);
            planeS3RHS = new THREE.Mesh(PG_S3RHS, PM_S3RHS);
            scene.add(planeS3RHS);
            planeS3RHS.position.x = SXIPosRHS
            planeS3RHS.position.y = SYIPosRHS

            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)

            //   // Add Hand Image Here
            //   const loadRHSHand = new THREE.TextureLoader();
            //   loadRHSHand.load(
            //   // Hand Image
            //   "../asset/hand_img.png",

            //       function (textureintroMoreRHSHand) {
            //       var planeMaterialintroMoreRHSHand = new THREE.MeshBasicMaterial({
            //               map: textureintroMoreRHSHand,
            //               transparent: true,
            //               // visible: false 
            //           });
            //           textureintroMoreRHSHand.wrapS = THREE.RepeatWrapping;
            //           textureintroMoreRHSHand.wrapT = THREE.RepeatWrapping;
            //           // textureLHS.repeat.set( 4, 4 );
            //           //Create a 2x2 plane with texture
            //           var planeGeometryintroMoreRHSHand = new THREE.PlaneBufferGeometry(0.7, 0.7);
            //           planeintroMoreRHSHand = new THREE.Mesh(planeGeometryintroMoreRHSHand, planeMaterialintroMoreRHSHand);
            //           scene.add(planeintroMoreRHSHand);
            //           planeintroMoreRHSHand.position.x = 0.75
            //           planeintroMoreRHSHand.position.y = -1.7
            //           // // OnClick Event For planeLHS
            //           // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            //           // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //           //     console.log("planeInnerLHS clicked")
            //           //     // alert("btn clicked")
            //           // }, false)

            //           //Render the scene
            //           renderer.render(scene, camera);
            //           document.body.appendChild(renderer.domElement);
            //       },
            //       // undefined,
            //       function (err) {
            //           console.error('An error happened in RHS Image.');
            //       }
            //   );



            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in RHS Image.');
        }
    );


    // Complie WebGL
    // WebGLRenderer.compile(planeS3RHS, camera)
    // renderer.compile(scene, camera)

    //Render the scene
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);

}

// Function for level 1 Presentation Slide 4
// This Function Pink Balls with hand
function l1PS4() {
    // console.log("planeintroMoreLHS Status:- ", planeintroMoreLHS.visible);
    // replyAudio()
    // Audio Indicating Less
    isFunc4Active = true
    // scene.remove(planeReplyAudio)
    playAudio("../Sounds/level0_sounds/ML_A_L0_5.mp3")
    sound.setVolume(0)
    // PlayAudio Function Call for Move to Next Function
    // if (planeS3LHS.visible) {
    //     // console.log("Is Visible introLess");
    //     planeS3LHS.visible = false
    //     planeS3RHS.visible = false
    //     // planeintroMoreLHSHand.visible = false
    // }

    //  ------------------------  Hand  --------------------------
    // Add Hand Image Here
    const loadS4HandRHS = new THREE.TextureLoader();
    loadS4HandRHS.load(
        // Hand Image
        // "../asset/hand_img.png",
        handImg,

        function (textureS4HandRHS) {
            var PM_S4HandRHS = new THREE.MeshBasicMaterial({
                map: textureS4HandRHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var PG_S4HandRHS = new THREE.PlaneBufferGeometry(0.9, 0.9);
            planeS4HandRHS = new THREE.Mesh(PG_S4HandRHS, PM_S4HandRHS);
            scene.add(planeS4HandRHS);
            // planeintroLessRHSHand.position.x = 2
            // planeintroLessRHSHand.position.y = -1.5
            planeS4HandRHS.position.x = SXIPosHand
            planeS4HandRHS.position.y = SYIPosHand


            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in RHS Image.');
        }
    );

    // //  ------------------------  Working  --------------------------
    // // Load Image into introless LHS Side
    // const loadS4LHS = new THREE.TextureLoader();
    // loadS4LHS.load(
    //     // "../asset/level_one_assets/Image asset Lone/Set 7_6 pink balls.png",
    //     l1PS3LHS,

    //     function (textureS4LHS) {
    //         var PM_S4LHS = new THREE.MeshBasicMaterial({
    //             map: textureS4LHS,
    //             transparent: true,
    //             // visible: false 
    //         });

    //         //Create a 2x2 plane with texture
    //         var PG_S4LHS = new THREE.PlaneBufferGeometry(3, 3);
    //         planeS4LHS = new THREE.Mesh(PG_S4LHS, PM_S4LHS);
    //         scene.add(planeS4LHS);
    //         planeS4LHS.position.x = SXIPosLHS
    //         planeS4LHS.position.y = SYIPosLHS

    //         //Render the scene
    //         renderer.render(scene, camera);
    //         document.body.appendChild(renderer.domElement);
    //     },
    //     // undefined,
    //     function (err) {
    //         console.error('An error happened in LHS Image.');
    //     }
    // );

    // //  ------------------------  Working  --------------------------
    // // Load Image into introless RHS Side         
    // const loadS4RHS = new THREE.TextureLoader();
    // loadS4RHS.load(
    //     //    "../asset/level_one_assets/Image asset Lone/Set 7_9 pink balls.png",
    //     l1PS3RHS,

    //     function (textureS4RHS) {
    //         var PM_S4RHS = new THREE.MeshBasicMaterial({
    //             map: textureS4RHS,
    //             transparent: true,
    //             // visible: false 
    //         });

    //         //Create a 2x2 plane with texture
    //         var PG_S4RHS = new THREE.PlaneBufferGeometry(3, 3);
    //         planeS4RHS = new THREE.Mesh(PG_S4RHS, PM_S4RHS);
    //         scene.add(planeS4RHS);
    //         planeS4RHS.position.x = SXIPosRHS
    //         planeS4RHS.position.y = SYIPosRHS

    //         // Add Hand Image Here
    //         const loadS4HandRHS = new THREE.TextureLoader();
    //         loadS4HandRHS.load(
    //             // Hand Image
    //             // "../asset/hand_img.png",
    //             handImg,

    //             function (textureS4HandRHS) {
    //                 var PM_S4HandRHS = new THREE.MeshBasicMaterial({
    //                     map: textureS4HandRHS,
    //                     transparent: true,
    //                     // visible: false 
    //                 });

    //                 //Create a 2x2 plane with texture
    //                 var PG_S4HandRHS = new THREE.PlaneBufferGeometry(0.9, 0.9);
    //                 planeS4HandRHS = new THREE.Mesh(PG_S4HandRHS, PM_S4HandRHS);
    //                 scene.add(planeS4HandRHS);
    //                 // planeintroLessRHSHand.position.x = 2
    //                 // planeintroLessRHSHand.position.y = -1.5
    //                 planeS4HandRHS.position.x = SXIPosHand
    //                 planeS4HandRHS.position.y = SYIPosHand


    //                 //Render the scene
    //                 renderer.render(scene, camera);
    //                 document.body.appendChild(renderer.domElement);
    //             },
    //             // undefined,
    //             function (err) {
    //                 console.error('An error happened in RHS Image.');
    //             }
    //         );

    //         //Render the scene
    //         renderer.render(scene, camera);
    //         document.body.appendChild(renderer.domElement);
    //     },
    //     // undefined,
    //     function (err) {
    //         console.error('An error happened in RHS Image.');
    //     }
    // );

    //Render the scene
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);
}

// Function for level 1 Presentation Slide 5
// This Function Pink Ball with highlight
function l1PS5() {
    isAudio4Complete = true
    // isFunc5Active = true
    // scene.add(planeReplyAudio)
    // Audio Indicating Less
    playAudio("../Sounds/level0_sounds/ML_A_L0_6.mp3")
    // replyAudio(Audio4)
    // playAudio("../Sounds/level1_sounds/ML_A_L1_4.mp3")
    sound.setVolume(0)
    // replyAudioSound.setVolume(0)
    planeS4HandRHS.visible = false  // Hand Image Hide
    // PlayAudio Function Call for Move to Next Function
    // if (planeS4LHS.visible) {
    //     // console.log("Is Visible introLess");
    //     planeS4LHS.visible = false
    //     planeS4RHS.visible = false
    //     planeS4HandRHS.visible = false  // Hand Image Hide
    //     // planeintroMoreLHSHand.visible = false
    // }

    //  ------------------------  Success Border  --------------------------
    // Load RHS Image Here
    const loadRHSImg = new THREE.TextureLoader();
    loadRHSImg.load(
        // "../asset/level_one_assets/Correct answer highlight.png",
        SuccessBorder,

        function (textureS5AnsRHS) {
            // console.log("LHS Function Executed");
            var PM_S5AnsRHS = new THREE.MeshBasicMaterial({
                map: textureS5AnsRHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            // var PG_S5AnsRHS = new THREE.PlaneBufferGeometry(3, 3);
            var PG_S5AnsRHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
            // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
            planeS5AnsRHS = new THREE.Mesh(PG_S5AnsRHS, PM_S5AnsRHS);
            // console.log("planeRHS", planeRHS)
            scene.add(planeS5AnsRHS);
            // planeIntroRHSHighlight.visible = false
            planeS5AnsRHS.position.x = SXIPosRHS
            planeS5AnsRHS.position.y = SYIPosRHS

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        undefined,
        function (err) {
            console.error('An error happened in RHS Image.');
        }
    );

    // //  ------------------------  Working  --------------------------
    // // Load Image LHS Side
    // const loadS5LHS = new THREE.TextureLoader();
    // loadS5LHS.load(
    //     // "../asset/level_one_assets/Image asset Lone/Set 7_6 pink balls.png",
    //     l1PS3LHS,

    //     function (textureS5LHS) {
    //         var PM_S5LHS = new THREE.MeshBasicMaterial({
    //             map: textureS5LHS,
    //             transparent: true,
    //             // visible: false 
    //         });

    //         //Create a 2x2 plane with texture
    //         var PG_S5LHS = new THREE.PlaneBufferGeometry(3, 3);
    //         planeS5LHS = new THREE.Mesh(PG_S5LHS, PM_S5LHS);
    //         scene.add(planeS5LHS);
    //         planeS5LHS.position.x = SXIPosLHS
    //         planeS5LHS.position.y = SYIPosLHS

    //         //Render the scene
    //         renderer.render(scene, camera);
    //         document.body.appendChild(renderer.domElement);
    //     },
    //     // undefined,
    //     function (err) {
    //         console.error('An error happened in LHS Image.');
    //     }
    // );

    //  ------------------------  Working  --------------------------
    // Load Image into introless RHS Side         
    // const loadS5RHS = new THREE.TextureLoader();
    // loadS5RHS.load(
    //     //    "../asset/level_one_assets/Image asset Lone/Set 7_9 pink balls.png",
    //     l1PS3RHS,

    //     function (textureS5RHS) {
    //         var PM_S5RHS = new THREE.MeshBasicMaterial({
    //             map: textureS5RHS,
    //             transparent: true,
    //             // visible: false 
    //         });

    //         //Create a 2x2 plane with texture
    //         var PG_S5RHS = new THREE.PlaneBufferGeometry(3, 3);
    //         planeS5RHS = new THREE.Mesh(PG_S5RHS, PM_S5RHS);
    //         scene.add(planeS5RHS);
    //         planeS5RHS.position.x = SXIPosRHS
    //         planeS5RHS.position.y = SYIPosRHS



    //         //Render the scene
    //         renderer.render(scene, camera);
    //         document.body.appendChild(renderer.domElement);
    //     },
    //     // undefined,
    //     function (err) {
    //         console.error('An error happened in RHS Image.');
    //     }
    // );
    //Render the scene
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);

}

// Function for level 1 Presentation Slide 6
// This Function Blue Tshirt
function l1PS6() {
    console.log("Slide 6 Function Working")
    Slide6Execute = true
    isFunc4Active = false
    hintActive = true
    headerHint()
    replyAudio(Audio3)

    if (planeS3LHS.visible) {
        // console.log("Is Visible introLess");
        planeS3LHS.visible = false
        planeS3RHS.visible = false
        // planeLHSMainRed.visible = false
        planeS5AnsRHS.visible = false
        console.log("planeS5AnsRHS false", planeS5AnsRHS.visible)
        // planeintroMoreLHSHand.visible = false
    }

    //  ------------------------  Working  --------------------------
    // Load Image LHS Side
    const loadS6LHS = new THREE.TextureLoader();
    loadS6LHS.load(
        // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
        l1PS6LHS,

        function (textureS6LHS) {
            var PM_S6LHS = new THREE.MeshBasicMaterial({
                map: textureS6LHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var PG_S6LHS = new THREE.PlaneBufferGeometry(3, 3);
            planeS6LHS = new THREE.Mesh(PG_S6LHS, PM_S6LHS);
            scene.add(planeS6LHS);
            planeS6LHS.position.x = SXIPosLHS
            planeS6LHS.position.y = SYIPosLHS


            // Dispose Material and Geometry
            PM_S6LHS.dispose()
            PG_S6LHS.dispose()

            console.log("1 PM_S6LHS:- ", PM_S6LHS);
            console.log("1 PG_S6LHS:- ", PG_S6LHS);

            // Detect Double Click
            const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
            domEventsdbl.addEventListener(planeS6LHS, "dblclick", event => {
                console.log("Double-click detected")
                // Double-click detected
                dblClick = true
                if (dblClick == true) {
                    dblClick = false
                    planeS6ErrorLHS.visible = false

                    domEventsdbl.removeEventListener(planeS6LHS, 'click', false)

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                }
            })

            // Add onClick Event Here - Wrong Answer
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
            domEvents.addEventListener(planeS6LHS, 'click', function (event) {
                console.log("Wrong Answer Click")

                // Dispose Material and Geometry
                PM_S6LHS.dispose()
                PG_S6LHS.dispose()

                console.log("2 PM_S6LHS:- ", PM_S6LHS);
                console.log("2 PG_S6LHS:- ", PG_S6LHS);

                domEvents.removeEventListener(planeS6LHS, 'click', false)
                // Check planeRedStatus
                console.log("planeRedStatus onClick:- ", planeRedStatus);

                // Make Highlight True
                planeRedStatus = true

                if (planeRedStatus == true) {
                    planeRedStatus = false
                    console.log("Red Highlight Active");

                    // For InCorrect Answer
                    // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
                    soundReplyAudio(WrongSelSound)

                    // Load RHS Image Here
                    const loadS6LHS_Ans = new THREE.TextureLoader();
                    loadS6LHS_Ans.load(
                        // "../asset/level_one_assets/Incorrect answer highlight.png",
                        ErrorBorder,

                        function (textureS6LHS_Ans) {
                            var PM_S6LHS_Ans = new THREE.MeshBasicMaterial({
                                map: textureS6LHS_Ans,
                                transparent: true,
                                // visible: false 
                            });

                            //Create a 2x2 plane with texture
                            var PG_S6LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                            // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                            planeS6ErrorLHS = new THREE.Mesh(PG_S6LHS_Ans, PM_S6LHS_Ans);
                            // console.log("planeRHS", planeRHS)
                            scene.add(planeS6ErrorLHS);
                            planeS6ErrorLHS.position.x = SXIPosLHS
                            planeS6ErrorLHS.position.y = SYIPosLHS

                            // // Hide Worng Answer
                            // setTimeout(
                            //     // console.log("Hide 2nd Wrong answer"),
                            //     planeS6ErrorLHS.visible = false
                            //     , 2000)

                            //Render the scene
                            renderer.render(scene, camera);
                            document.body.appendChild(renderer.domElement);
                        },
                        // undefined,
                        function (err) {
                            console.error('An error happened in RHS Image.');
                        }
                    );
                }
            }, false)

            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in LHS Image.');
        }
    );

    //  ------------------------  Working  --------------------------
    // Load Image RHS Side         
    const loadS6RHS = new THREE.TextureLoader();
    loadS6RHS.load(
        //    "../asset/level_one_assets/Image asset Lone/Set 1_10 blue shirts.png",
        l1PS6RHS,

        function (textureS6RHS) {
            var PM_S6RHS = new THREE.MeshBasicMaterial({
                map: textureS6RHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var PG_S6RHS = new THREE.PlaneBufferGeometry(3, 3);
            // var PG_S6RHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
            planeS6RHS = new THREE.Mesh(PG_S6RHS, PM_S6RHS);
            scene.add(planeS6RHS);
            planeS6RHS.position.x = SXIPosRHS
            planeS6RHS.position.y = SYIPosRHS


            // Add onClick Event Here Tshirt - Correct Answer
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
            domEvents.addEventListener(planeS6RHS, 'click', function (event) {
                console.log("Correct Answer Click")
                S6Cor = true
                domEvents.removeEventListener(planeS6RHS, 'click', false)


                // call Skip Function Here  after some time limit
                // setTimeout(gPlayTshirtSkip(), 5000)
                // setTimeout(l1PS6_Skip(), 5000)

                // Check Green Highlight Status
                console.log("GreenStatus onClick:- ", planeGreenStatus);

                // Make Highlight True
                planeGreenStatus = true

                // Put Condition to Show Highlight
                if (planeGreenStatus == true) {
                    planeGreenStatus = false
                    console.log("Green Highlight Active");

                    //For Correct Answer Audio
                    // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
                    soundReplyAudio(CorrectSelSound)

                    // Load RHS Image Here
                    const loadRHSImg = new THREE.TextureLoader();
                    loadRHSImg.load(
                        // "../asset/level_one_assets/Correct answer highlight.png",
                        SuccessBorder,

                        function (textureSuccessRHS) {
                            // console.log("LHS Function Executed");
                            var PM_SuccessRHS = new THREE.MeshBasicMaterial({
                                map: textureSuccessRHS,
                                transparent: true,
                                // visible: false 
                            });

                            //Create a 2x2 plane with texture
                            // var PG_SuccessRHS = new THREE.PlaneBufferGeometry(3, 3);
                            var PG_SuccessRHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                            // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
                            planeS6SuccessRHS = new THREE.Mesh(PG_SuccessRHS, PM_SuccessRHS);
                            // console.log("planeRHS", planeRHS)
                            scene.add(planeS6SuccessRHS);
                            planeS6SuccessRHS.position.x = SXIPosRHS
                            planeS6SuccessRHS.position.y = SYIPosRHS

                            //Render the scene
                            renderer.render(scene, camera);
                            document.body.appendChild(renderer.domElement);
                        },
                        undefined,
                        function (err) {
                            console.error('An error happened in RHS Image.');
                        }
                    );

                }
                else {
                    console.log("Green Highlight Not Active");
                }

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

}

// Function for level 1 Presentation Slide 6 Skip
// This Function indicate Tshirt
function l1PS6_Skip() {
    console.log("l1PS6_Skip Working")
    // if (planeS6RHS.visible) {
    //     // console.log("Is Visible introLess");
    //     planeS6LHS.visible = false
    //     planeS6RHS.visible = false
    //     // planeS6SuccessRHS.visible = false
    //     // console.log("planeS6SuccessRHS gPlayTshirtSkip", planeS6SuccessRHS.visible)
    // }

    // ------------------------ Put Skip Button Here    ----------------------------
    const loadSkipbtn = new THREE.TextureLoader();
    loadSkipbtn.load(
        // "../asset/logo/Skip.png",
        skipBtn,

        function (textureSkipBtn) {
            var planeMaterialSkipbtn = new THREE.MeshBasicMaterial({
                map: textureSkipBtn,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            var planeGeometrySkipbtn = new THREE.PlaneBufferGeometry(0.50, 0.50);
            planeSkipBtn = new THREE.Mesh(planeGeometrySkipbtn, planeMaterialSkipbtn);
            scene.add(planeSkipBtn);
            // planeSkipBtn.position.x = 3.7
            // planeSkipBtn.position.y = -1.7

            planeSkipBtn.position.x = SkipPosX
            planeSkipBtn.position.y = SkipPosY

            // Add onClick Event Here Tshirt - Wrong Answer
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
            domEvents.addEventListener(planeSkipBtn, 'click', function (event) {
                console.log("Skip btn Click")
                // Play try Again Audio - incorrect
                // New PAge Redirect
                var currentPath = `${endPoint}/level1Testing.html`

                if (currentPath == `${endPoint}/level1Testing.html`) {
                    console.log("Redirect New Page");
                    location.href = '/level1.html'
                    // location.href = '/level1.js'

                } else {
                    location.href = '/level1.html'
                    // location.href = '/level1.js'

                }

                // // playAudio('../Sounds/tryAgain.mp3')
                // location.href = 'level1.html'
                // if (location.href == '/level1Testing.html') {
                //     console.log("Redirect to This Page Again");
                //     location.href = 'level1.html'
                // }
                // else {
                //     location.href = 'level1.html'
                // }
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

    // //  ------------------------  Working  --------------------------
    // // Load Image into introless LHS Side
    // const loadl1PS6_SkipLHS = new THREE.TextureLoader();
    // loadl1PS6_SkipLHS.load(
    //     // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    //     l1PS6LHS,

    //     function (textureS6SkipLHS) {
    //         var PM_S6SkipLHS = new THREE.MeshBasicMaterial({
    //             map: textureS6SkipLHS,
    //             transparent: true,
    //             // visible: false 
    //         });

    //         //Create a 2x2 plane with texture
    //         var PG_S6SkipLHS = new THREE.PlaneBufferGeometry(3, 3);
    //         planeS6SkipLHS = new THREE.Mesh(PG_S6SkipLHS, PM_S6SkipLHS);
    //         scene.add(planeS6SkipLHS);
    //         planeS6SkipLHS.position.x = SXIPosLHS
    //         planeS6SkipLHS.position.y = SYIPosLHS

    //         //Render the scene
    //         renderer.render(scene, camera);
    //         document.body.appendChild(renderer.domElement);
    //     },
    //     // undefined,
    //     function (err) {
    //         console.error('An error happened in LHS Image.');
    //     }
    // );

    // //  ------------------------  Working  --------------------------
    // // Load Image into introless RHS Side         
    // const loadl1PS6_SkipRHS = new THREE.TextureLoader();
    // loadl1PS6_SkipRHS.load(
    //     //    "../asset/level_one_assets/Image asset Lone/Set 1_10 blue shirts.png",
    //     l1PS6RHS,

    //     function (textureS6SkipRHS) {
    //         var PM_S6SkipRHS = new THREE.MeshBasicMaterial({
    //             map: textureS6SkipRHS,
    //             transparent: true,
    //             // visible: false 
    //         });

    //         //Create a 2x2 plane with texture
    //         var PG_S6SkipRHS = new THREE.PlaneBufferGeometry(3, 3);
    //         planeS6SkipRHS = new THREE.Mesh(PG_S6SkipRHS, PM_S6SkipRHS);
    //         scene.add(planeS6SkipRHS);
    //         planeS6SkipRHS.position.x = SXIPosRHS
    //         planeS6SkipRHS.position.y = SYIPosRHS

    //         //Render the scene
    //         renderer.render(scene, camera);
    //         document.body.appendChild(renderer.domElement);
    //     },
    //     undefined,
    //     function (err) {
    //         console.error('An error happened in RHS Image.');
    //     }
    // );
    //Render the scene
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);
}

// Function For Display Canvas
function init() {
    // document.getElementById("loading").style.display = "none"
    soundBG(BGSound) //  Working
    playAudio(Audio1)


    // playAudio('../Sounds/level0_sounds/backgroud_music_free.mp3');

    // Call Full Screen Function
    // openFullscreen()

    // ------------------       working       ---------------------------------
    // Load LHS Image Here

    const loadLHSImg = new THREE.TextureLoader();
    loadLHSImg.load(
        // "../asset/Image place holder.png",
        whiteBox,

        function (textureLHS) {
            var planeMaterialLHS = new THREE.MeshBasicMaterial({
                map: textureLHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            // var planeGeometryLHS = new THREE.PlaneBufferGeometry(3, 3);
            var planeGeometryLHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
            planeLHSMain = new THREE.Mesh(planeGeometryLHS, planeMaterialLHS);
            scene.add(planeLHSMain);
            // planeLHSMain.position.x = -1.75
            // planeLHSMain.position.y = -0.4
            planeLHSMain.position.x = SXIPosLHS
            planeLHSMain.position.y = SYIPosLHS

            // // OnClick Event For planeLHS
            // const domEventsLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsLHS.addEventListener(planeLHSMain, 'click', function (event) {
            //     // console.log("planeLHS clicked")

            // }, false)
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
        // "../asset/Image place holder.png",
        whiteBox,

        function (textureRHS) {
            // console.log("LHS Function Executed");
            var planeMaterialRHS = new THREE.MeshBasicMaterial({
                map: textureRHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            // var planeGeometryRHS = new THREE.PlaneBufferGeometry(3, 3);
            var planeGeometryRHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
            // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
            planeRHSMain = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
            // console.log("planeRHS", planeRHS)
            scene.add(planeRHSMain);
            // planeRHSMain.position.x = 1.75
            // planeRHSMain.position.y = -0.4
            planeRHSMain.position.x = SXIPosRHS
            planeRHSMain.position.y = SYIPosRHS

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        undefined,
        function (err) {
            console.error('An error happened in RHS Image.');
        }
    );

    NavBar()
    // Call All Header Functions Here
    function NavBar() {
        headerHome()
        headerBack()
        headerProgress(RewardImg)
        headerSound(SoundImgUnMute)
        // headerSound('../asset/logo/Music.png')
        // headerSound()
        // toggelMusic()
        headerHint()
        headerReward()
        // headerRewardNum() // for Numbers
        // replyAudio()

        // Call Full Screen Function
        // openFullscreen()
        // Call Presentation Function Here
    }

    presentationOne();

    // renderInsOne();
    // presentationOne();

    // setTimeout(() => {
    //     presentationOne();

    // }, 300);


    //Render the scene
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);

    // Active
    // // controls.update();
    // Resize the Screen  - Global
    // window.addEventListener('resize', function () {
    //     camera.aspect = winWidth / winHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(winWidth, winHeight)
    // })
    // window.addEventListener('resize', function () {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    // })

}

// // Function For Homebtn Popup
// function homePopup() {

//     const canvasPopup = document.querySelector('.homepopup');


//     // Scene  - Popup
//     var scenePopup = new THREE.Scene();

//     // Camera For Popup
//     var cameraPopup = new THREE.PerspectiveCamera(
//         60,
//         // window.innerWidth / window.innerHeight,
//         600 / 500,
//         0.5,
//         1000
//     );
//     cameraPopup.position.set(0, 0, 4);

//     // RendererPopup- Global
//     const rendererPopup = new THREE.WebGLRenderer({
//         // canvas,
//         canvasPopup,
//         alpha: true,
//     });
//     // rendererPopup.setPixelRatio(window.devicePixelRatio);
//     // rendererPopup.setSize(window.innerWidth, window.innerHeight);
//     rendererPopup.setPixelRatio(600);
//     rendererPopup.setSize(600, 500);
//     document.body.appendChild(rendererPopup.domElement);

//     // Render 2nd Instructor After 1st audio complete
//     // Load Instructor After 1st audio execution done 
//     const loadPopup = new THREE.TextureLoader();
//     loadPopup.load(
//         "../asset/Instructor_L0_2.png",

//         function (texturePopup) {
//             var planeMaterialPopup = new THREE.MeshBasicMaterial({
//                 map: texturePopup,
//                 transparent: true,
//                 // visible: false 
//             });
//             // textureInsL0_1.wrapS = THREE.RepeatWrapping;
//             // textureInsL0_1.wrapT = THREE.RepeatWrapping;
//             // textureLHS.repeat.set( 4, 4 );
//             //Create a 2x2 plane with texture
//             var planeGeometryPopup = new THREE.PlaneBufferGeometry(2.3, 2.3);
//             var planePopup = new THREE.Mesh(planeGeometryPopup, planeMaterialPopup);

//             scene.add(planePopup);
//             planePopup.position.x = 2
//             planePopup.position.y = -0.7
//             planePopup.position.z = 1

//             //Render the scene
//             rendererPopup.render(scenePopup, cameraPopup);
//             document.body.appendChild(rendererPopup.domElement);
//         },
//         // undefined,
//         function (err) {
//             console.error('An error happened in Instructor L0_2 Image.');
//         }
//     );
//     // }
//     // Render Scene and Camera Popup - Global
//     rendererPopup.render(scene, camera)
//     document.body.appendChild(rendererPopup.domElement);

//     // Resize the Screen Popup - Global
//     window.addEventListener('resize', function () {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         // camera.aspect = 600 / 500;
//         camera.updateProjectionMatrix();
//         rendererPopup.setSize(window.innerWidth, window.innerHeight)
//         // rendererPopup.setSize(600, 500)
//     })
// }