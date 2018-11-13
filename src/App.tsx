import * as React from "react";
import * as THREE from "three";
import "./App.css";

class App extends React.Component<{}> {
    private mount: HTMLDivElement | null;
    private scene: THREE.Scene;
    private camera: THREE.Camera;
    private cube: THREE.Mesh;
    private frameID: number;
    private renderer: THREE.WebGLRenderer;
    constructor(props: {}) {
        super(props);

        this.animate = this.animate.bind(this);
    }

    public componentDidMount() {
        if (!this.mount) {
            throw new Error("Component did not mount the mount");
        }
        const w = this.mount.clientWidth;
        const h = this.mount.clientHeight;

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
        this.camera.position.z = 4;

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor("#000000");
        this.renderer.setSize(w, h);
        this.mount.appendChild(this.renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: "#433F81" });

        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        this.start();
    }

    public componentWillUnmount() {
        this.stop();
        if (!this.mount) {
            throw new Error("Component did not mount the mount");
        }
        this.mount.removeChild(this.renderer.domElement);
    }

    public render() {
        return (
            <div
                style={{ width: "400px", height: "400px" }}
                ref={mount => {
                    this.mount = mount;
                }}
            />
        );
    }

    private start() {
        if (!this.frameID) {
            this.frameID = requestAnimationFrame(this.animate);
        }
    }

    private stop() {
        cancelAnimationFrame(this.frameID);
    }

    private animate() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderScene();
        this.frameID = window.requestAnimationFrame(this.animate);
    }

    private renderScene() {
        this.renderer.render(this.scene, this.camera);
    }
}

export default App;
