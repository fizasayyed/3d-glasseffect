/* eslint-disable */
import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { useDrag } from '@use-gesture/react';
// import { useSpring, a } from '@react-spring/three';
// import { useControls } from 'leva';

export default function Model() {
    const { nodes } = useGLTF("/models/torus.glb");
    const { viewport } = useThree();
    const torus = useRef(null);
    const initialRotation = useRef([0, 0, 0]);

    const bind = useDrag(({ offset: [x, z] }) => {
        // torus.current.rotation.x = initialRotation.current[0] - x / 100;
        torus.current.rotation.z = initialRotation.current[1] + z / 100;
    }, { from: () => initialRotation.current });

    useFrame(() => {
        torus.current.rotation.x += 0.03
        torus.current.rotation.z += 0.01
    })

    return (
        <><Text position={[0, 0, 0]} font={"/OpenSans_Condensed-Bold.ttf"} fontSize={2} color="white" anchorX="center" anchorY="middle">
            Glass Effect!
        </Text><group position={[0, -3, 0]} scale={viewport.width / 9}>
                <mesh ref={torus} {...nodes.Torus004} {...bind()} >
                    <MeshTransmissionMaterial
                        thickness={0.90}
                        roughness={0}
                        transmission={1.0}
                        ior={1.2}
                        chromaticAberration={0.02}
                        backside={true} />
                </mesh>
            </group></>
    )
}