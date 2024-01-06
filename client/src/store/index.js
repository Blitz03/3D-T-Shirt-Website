import { proxy } from "valtio";

const state = proxy({
  intro: true, // Checking whether we are currently on the home page or not
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
