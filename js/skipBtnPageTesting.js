// import skip2 from "./skipbtn2.js";
// import { demo } from "./level1Old.js";


const Skiptesting = () => {
  console.log("Skip button file is working------------------------------------------------------------------------");
  // document.getElementById("loading").style.display = "visible"
  // document.getElementById("wrapper").innerHTML = "Abhishek" // Working
  // skip2()
  // init()
  // demo()
  openNav()


}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

export default Skiptesting;
export { openNav, closeNav }