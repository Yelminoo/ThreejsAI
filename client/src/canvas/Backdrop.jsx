import { useRef } from "react";

import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useSnapshot } from "valtio";
import state from "../store";

const Backdrop = () => {
  const shadows = useRef();
  const snap = useSnapshot(state);

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.7}
      scae={1}
      rotation={[Math.PI / 2, 0.5, 0]}
      position={[1, 0, -0.14]}
    >
      <RandomizedLight
        amount={1}
        radius={3}
        intensity={snap.intro ? 10 : 2}
        ambient={0.25}
        position={[5, 5, 10]}
      />
      <RandomizedLight
        amount={1}
        radius={3}
        intensity={0.5}
        ambient={0.55}
        position={[-5, 5, 5]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
