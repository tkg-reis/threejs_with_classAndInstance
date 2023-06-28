import './style.css';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import dat from "lil-gui";

export class ThreeInit {
  constructor(canvas, fov, near, far) {
    this.scene = new THREE.Scene();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas = document.querySelector(canvas)
    this.camera = new THREE.PerspectiveCamera(fov, this.width / this.height , near, far);
    this.rederer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.rederer = this.rederer.setSize(this.width / this.height);
    this.rederer = this.rederer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 2, 2);
  }
  positon() {

  }
  rotation() {

  }
  light() {

  }
  geometry() {

  }
  material() {

  }
  obtControls() {
    new OrbitControls().enableDamping = true;
  }
  lilGui() {

  }
  resize() {
    window.addEventListener("resize", () => {

    });
  }
  animate() {
    window.requestAnimationFrame(this.animate);
    this.rederer(this.camera, this.camera);
  }
}