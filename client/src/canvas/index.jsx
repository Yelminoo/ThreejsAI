import { Canvas } from "@react-three/fiber";
import { Environment, Center, useTexture } from "@react-three/drei";

import Shirt from "./Shirt";

import CameraRig from "./CamerRig";
import Backdrop from "./Backdrop";

const Background = () => {
  const bgTexture = useTexture("./ai_bg.avif");
  // Load your texture

  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[6, 3, 10, 10]} />
      <meshBasicMaterial map={bgTexture} side={useTexture.BackSide} />
    </mesh>
  );
};

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <Background />
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <Backdrop />
      <CameraRig>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
