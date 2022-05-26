
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js'; 
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
console.log("Hint Page Btn Working");
console.log("New 25/05")


// Loader When Page is Load
window.onload = function () { document.getElementById("loading").style.display = "none" }

// window.onload = function () {
//     document.getElementById('clickButton').click();
// }

// Access Canvas From index.html File
// const canvas = document.querySelector('.skipBtnPage');
const canvas = document.querySelector('.hintBtnPage');



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

// Global Varibale are Declare Here
var isAudioPlaying = false;
var isFirstVisit = false;
var audioPlayed = true;  // This is Check the audio is complete or Not
var insOneLoad = true;
var insTwoLoad = true;
var ins2Hide = false;
// var audio2Load = false;
var planeInsL0_1, planeInsL0_2, planeLHSMain, planeRHSMain, sound, listener, storeAudioState;

// Level Data Variables
var islevel0Skip, islevel1Skip, islevel2Skip, islevel3Skip

// LevelZeroComplete (LZC) Variables 
var planeLZCLHS, planeLZCRHS;

// var sound = document.getElementById("sound").value;
var nextAudio = false;  // For Next audio Approval default (false)
// console.log("nextAudio ", nextAudio);

// All Images global paths
//  ---------------------------------------------------------------------------------
// var BGImg = "../asset/BackgroundL0.png" 
var BGImg = "asset/BackgroundL0.png"

var let_play = "asset/Let's_play.png"

// var ContinueBtnImg = "asset/logo/Continue_Green.png"
// var playNextBtn = "asset/logo/Play the next level.png"

var ContinueBtnImg = "asset/logo/Continue_Green.png"
// var ContinueBtnImg = "asset/logo/Continue game.png"
// var playPreviousBtn = "asset/logo/Previous level.png"
// var playPreviousBtn = "asset/logo/previous level blue.png"
var exitBtn = "asset/logo/exit blue.png"
//  ---------------------------------------------------------------------------------

// All Sounds
//  ---------------------------------------------------------------------------------
var Audio1 = 'Sounds/level0_sounds/ML_A_L0_1.mp3'

// var Audio_GL_17 = "Sounds/Global_Music/GL_A_17.mp3"
// var Audio_GL_2 = "Sounds/Global_Music/GL_A_2.mp3"
var Audio_GL_7 = "Sounds/Global_Music/GL_A_7.mp3"

//  ---------------------------------------------------------------------------------


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


// Pause Audio is Tab Switch
var musicImgStatus = true
// ------------------------------------------------------------------------------------------

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
// ------------------------------------------------------------------------------------------

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

// Play Next Button Redirection Function
function playNextRed(path) {
  // console.log("PlayNextRed Function working")

  // Check Presenatation is Completed or not

  // Check where to redirect
  // const islevel0SkipStr = localStorage.getItem('level0')
  const islevel1PreSkipStr = localStorage.getItem('level1_Pre')
  const islevel2PreSkipStr = localStorage.getItem('level2_Pre')
  const islevel3PreSkipStr = localStorage.getItem('level3_Pre')
  const islevel4PreSkipStr = localStorage.getItem('level4_Pre')

  // const islevel0Skip = JSON.parse(islevel0SkipStr)
  var islevel1PreSkip = JSON.parse(islevel1PreSkipStr)
  var islevel2PreSkip = JSON.parse(islevel2PreSkipStr)
  var islevel3PreSkip = JSON.parse(islevel3PreSkipStr)
  var islevel4PreSkip = JSON.parse(islevel4PreSkipStr)

  // Put Condition Here for Checking on which level to redirect
  // console.log("Switch function working")
  console.log("Presentation levels value checking", islevel1PreSkip, islevel2PreSkip, islevel3PreSkip)
  console.log("path value checking", path) // true
  switch (path) {

    case "islevel0Skip":
      console.log("L0 switch");
      // Check is Presentation is complete or not
      // if (localStorage.getItem('level2_Pre') == true) {
      if (islevel1PreSkip == false && islevel2PreSkip == false && islevel3PreSkip == false) {
        console.log("Go to Level1 Pre")
        // window.location.replace(`/level1_Pre.html`); // Testing
        window.location.replace(`level1_Pre.html`); // Testing
      } else {
        console.log("Go to Level1")
        // window.location.replace(`/level1.html`); // Testing
        window.location.replace(`level1.html`); // Testing
      }
      break;

    case "islevel1Skip":
      console.log("L1 switch");
      // Check is Presentation is complete or not
      // if (localStorage.getItem('level2_Pre') == true) {
      if (islevel1PreSkip == true && islevel2PreSkip == false && islevel3PreSkip == false) {
        console.log("Go to Level2 Pre")
        window.location.replace(`level2_Pre.html`); // Testing
      } else {
        console.log("Go to Level2")
        window.location.replace(`level2.html`); // Testing
      }
      break;

    case "islevel2Skip":
      console.log("L2 switch");
      // Check is Presentation is complete or not
      if (islevel1PreSkip == true && islevel2PreSkip == true && islevel3PreSkip == false) {
        console.log("Go to Level3 Pre")
        window.location.replace(`level3_Pre.html`); // Testing
      } else {
        console.log("Go to Level3")
        window.location.replace(`level3.html`); // Testing
      }

      break;

    case "islevel3Skip":
      console.log("L3 switch");
      // Check is Presentation is complete or not
      // if (islevel1PreSkip == true && islevel2PreSkip == true && islevel3PreSkip == true) { // active
      if (islevel1PreSkip == true && islevel2PreSkip == true && islevel3PreSkip == true && islevel4PreSkip == false) {
        console.log("Go to Level4 Pre")
        window.location.replace(`level4_Pre.html`); // Testing
      } else {
        console.log("Go to Level4")
        window.location.replace(`level4.html`); // Testing
      }

      break;

    default:
      break;
  }

}

// // function histroy back
// function historyBack() {
//   console.log("back function");
//   history.back()
// }


function homePageHandler() {
  // console.log("planerecogEqualLHS Status:- ", planerecogEqualLHS.visible);
  // Audio Indicating Equal
  // playAudio("../Sounds/level0_sounds/ML_A_L0_10.mp3")
  // openFullscreen()
  // playAudio("../Sounds/HomePage_sounds/GL_A_1.mp3")
  // playAudio("../Sounds/Global_Music/GL_A_5_Home.mp3")
  // playAudio("../Sounds/Global_Music/GL_A_17.mp3") // Active- working
  // playAudio(Audio_GL_17)
  // playAudio(Audio_GL_2)
  playAudio(Audio_GL_7)

  //  ------------------------  Working  --------------------------
  // Inner Function Change Image onClick         
  // Load play again image 
  const loadImg = new THREE.TextureLoader();
  loadImg.load(
    // "../asset/Let's_play.png",
    // "../asset/logo/Play again.png",
    // "../asset/logo/Continue game.png",
    // "../asset/logo/Continue_Green.png",
    ContinueBtnImg,

    function (texture) {
      var planeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // var planeGeometry = new THREE.PlaneBufferGeometry(1, 1);
      // var planeGeometry = new THREE.PlaneBufferGeometry(0.9, 0.9); // active
      var planeGeometry = new THREE.PlaneBufferGeometry(1, 0.85);
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
        console.log("Continue Button Working")

        // planeLZCLHS.dispose

        // Only Remove but Button is Active after this event perform
        scene.remove(planeLZCLHS, planeLZCRHS);

        // Redirect to Level0 onClick - working
        // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
        // location.href = 'index.html';   // Main Redirect Page    // Woking
        // console.log("-------------------", window.history)

        // historyBack()
        // history.back()

        // console.log(window.history.state.prevUrl)
        // console.log("------------------- referrer", document.referrer)
        // -----------------------------------------------------------------------------------------------
        // var lastLevelStr = sessionStorage.getItem('skipClick')
        // var lastLevelStr = sessionStorage.getItem('backBtnClick')
        var lastLevelStr = sessionStorage.getItem('hintClick')
        var lastLevel = Number(lastLevelStr)
        console.log(lastLevel)

        // if (lastLevel == 0) {
        //   console.log("go to level0");
        //   // console.log(typeof (lastLevel))
        //   // console.log(Number(lastLevel))
        //   // console.log(typeof (lastLevel))
        //   // window.location.replace(`/index.html`); // Testing -- path change
        //   window.location.replace(`level0.html`); // Testing
        // } else if (lastLevel == 1) {
        //   console.log("go to level1");
        //   // console.log(typeof (lastLevel))
        //   // console.log(Number(lastLevel))
        //   // console.log(typeof (lastLevel))
        //   // window.location.replace(`/level1.html`); // Testing
        //   window.location.replace(`level1.html`); // Testing
        // } else if (lastLevel == 2) {
        //   console.log("go to level2");
        //   // window.location.replace(`/level2.html`); // Testing
        //   window.location.replace(`level2.html`); // Testing
        // } else if (lastLevel == 3) {
        //   console.log("go to level3");
        //   // window.location.replace(`/level3.html`); // Testing
        //   window.location.replace(`level3.html`); // Testing
        // }

        switch (lastLevel) {
          // case 1:
          //   window.location.replace(`level1.html`);
          //   break;
          case 1:
            // case 11:
            window.location.replace(`level1_Pre.html`);
            break;
          // case 2:
          //   window.location.replace(`level2.html`);
          //   break;
          case 2:
            // case 21:
            window.location.replace(`level2_Pre.html`);
            break;
          // case 3:
          //   window.location.replace(`level3.html`);
          //   break;
          case 3:
            // case 31:
            window.location.replace(`level3_Pre.html`);
            break;
          // case 4:
          //   window.location.replace(`level4.html`);
          //   break;
          // case 41:
          //   window.location.replace(`level4_Pre.html`);
          //   break;

          default:
            window.location.replace(`index.html`)
            break;
        }
        // -----------------------------------------------------------------------------------------------

        // console.log("------------------- referrer", document.referrer)
        // var PageUrl = document.referrer
        // var PageUrlStr = sessionStorage.getItem('previous_Level')
        // console.log("str", PageUrlStr);

        // var PageUrl = JSON.parse(PageUrlStr)
        // console.log("==", pageUrl);
        // history.push(PageUrl)
        // history.push(PageUrlStr)
        // window.location.replace(PageUrlStr)

        // console.log(history.back());
        // console.log(history.back());

        // Push user To Last Location
        // window.history.back()   // Send back to last location Page // Working
        // history.back()   // Send back to last location Page // Working
        // console.log("back----------", window.history);
        // history.go(-1)   // Send back to last location Page // Working
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
    // "../asset/logo/Pick_New_Game_Blue.png",
    // "../asset/logo/Play the next level.png",
    // playPreviousBtn,
    exitBtn,

    function (textureintroMoreRHS) {
      var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
        map: textureintroMoreRHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      // var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(0.95, 0.95);
      // var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(1.1, 0.9); // active
      // var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(1.2, 0.85);
      var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(0.85, 0.85);
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

        // // ---------------------------------------------------------------------------------------------------------
        // // Check where to redirect
        // const islevel0SkipStr = localStorage.getItem('level0')
        // const islevel1SkipStr = localStorage.getItem('level1')
        // const islevel2SkipStr = localStorage.getItem('level2')
        // const islevel3SkipStr = localStorage.getItem('level3')


        // islevel0Skip = JSON.parse(islevel0SkipStr)
        // islevel1Skip = JSON.parse(islevel1SkipStr)
        // islevel2Skip = JSON.parse(islevel2SkipStr)
        // islevel3Skip = JSON.parse(islevel3SkipStr)

        // console.log(islevel0Skip, islevel1Skip, islevel2Skip, islevel3Skip);
        // if (islevel0Skip == true && islevel1Skip == false && islevel2Skip == false && islevel3Skip == false) {
        //   console.log("level1 redirect");
        //   // playNextRed(islevel0Skip)
        //   playNextRed("islevel0Skip")
        // }
        // else if (islevel0Skip == false && islevel1Skip == true && islevel2Skip == false && islevel3Skip == false) {
        //   console.log("level2 redirect");
        //   playNextRed("islevel1Skip")

        // } else if (islevel0Skip == false && islevel1Skip == true && islevel2Skip == true && islevel3Skip == false) {
        //   console.log("level3 redirect");
        //   playNextRed("islevel2Skip")

        // } else if (islevel0Skip == false && islevel1Skip == true && islevel2Skip == true && islevel3Skip == true) {
        //   console.log("level4 redirect");
        //   playNextRed("islevel3Skip")
        // }
        // // ---------------------------------------------------------------------------------------------------------

        // -----------------------------------------------------------------------------------------------
        // var lastLevelStr = sessionStorage.getItem('skipClick')
        // var lastLevelStr = sessionStorage.getItem('backBtnClick')
        var lastLevelStr = sessionStorage.getItem('hintClick')
        var lastLevel = Number(lastLevelStr)
        console.log(lastLevel)

        // if (lastLevel == 0) {
        //   console.log("go to level0");
        //   // console.log(typeof (lastLevel))
        //   // console.log(Number(lastLevel))
        //   // console.log(typeof (lastLevel))
        //   // window.location.replace(`/index.html`); // Testing -- path change
        //   window.location.replace(`level0.html`); // Testing
        // } else if (lastLevel == 1) {
        //   console.log("go to level1");
        //   // console.log(typeof (lastLevel))
        //   // console.log(Number(lastLevel))
        //   // console.log(typeof (lastLevel))
        //   // window.location.replace(`/level1.html`); // Testing
        //   window.location.replace(`level1.html`); // Testing
        // } else if (lastLevel == 2) {
        //   console.log("go to level2");
        //   // window.location.replace(`/level2.html`); // Testing
        //   window.location.replace(`level2.html`); // Testing
        // } else if (lastLevel == 3) {
        //   console.log("go to level3");
        //   // window.location.replace(`/level3.html`); // Testing
        //   window.location.replace(`level3.html`); // Testing
        // }

        switch (lastLevel) {
          case 1:
            window.location.replace(`level1.html`);
            break;
          // case 11:
          //   window.location.replace(`level0.html`);
          //   break;
          case 2:
            window.location.replace(`level2.html`);
            break;
          // case 21:
          //   window.location.replace(`level1.html`);
          //   break;
          case 3:
            window.location.replace(`level3.html`);
            break;
          // case 31:
          //   window.location.replace(`level2.html`);
          //   break;
          // case 4:
          //   window.location.replace(`level3.html`);
          //   break;
          // case 41:
          //   window.location.replace(`level3.html`);
          //   break;

          default:
            window.location.replace(`index.html`)
            break;
        }
        // -----------------------------------------------------------------------------------------------



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

// -----------------------------------------------------------------------------------------------------------------
