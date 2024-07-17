'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from "@react-three/drei";
import Model from './model';

export default function Scene() {

    return (
        <Canvas style={{ background: '#000000' }}>
            <Model />
            <directionalLight intensity={2} position={[5, 2, 3]} />
            <Environment preset="city" />
        </Canvas>
    )
}