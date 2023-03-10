/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: Taha Bin Ashar (https://sketchfab.com/tahabinasharchaudhary)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/treasure-chest-7e50a5b9f5294aa98d623975d8300d8f
Title: Treasure Chest
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Scene(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.03, 0, -0.01]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Material} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
