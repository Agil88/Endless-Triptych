import "./styles.css";

const rive = require("@rive-app/canvas");

const r = new rive.Rive({
  // Hosted .riv asset, or a local one. Uncomment line 8 to try with
  // a local basketball.riv asset, or add your own!
  src: "DD.riv",
  // src: "basketball.riv",
  canvas: document.getElementById("canvas"),
  stateMachines: "Explode",
  autoplay: true,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  }
});
