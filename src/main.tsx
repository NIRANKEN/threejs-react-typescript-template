import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
// import SampleThreeJS from "./SampleThreeJS";
import SampleCamera from "./camera/SampleCamera";
import SampleBulbLight from "./light/SampleBulbLight";
import SampleHemiLight from "./light/SampleHemiLight";
import SampleFloorMesh from "./mesh/SampleFloorMesh";
import SampleBallMesh from "./mesh/SampleBallMesh";
import SampleBoxMesh from "./mesh/SampleBoxMesh";
import { OrbitControls, Stats } from "@react-three/drei";
// import { PresentationControls } from "@react-three/drei";
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        {/* <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <SampleThreeJS position={[-1.2, 0, 0]} />
      <SampleThreeJS position={[1.2, 0, 0]} /> */}
        <SampleCamera />
        <SampleBulbLight />
        <SampleHemiLight />
        <SampleFloorMesh />
        <SampleBallMesh />
        <SampleBoxMesh position={[-0.5, 0.25, -1]} />
        <SampleBoxMesh position={[0, 0.25, -5]} />
        <SampleBoxMesh position={[7, 0.25, 0]} />
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  </StrictMode>
);
