/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf 
Author: TeKen_art30 (https://sketchfab.com/ken_art30)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/robot-rocket-f04d70f5a38943098da45f76e7ebb238
Title: Robot RoCKet
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/scene.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
          <group name="99bb25453ae64b8c9ac16992b24eafaefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sphere" position={[0, 45.158, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={101.805} />
                <group name="metarig" position={[0, -126.157, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={141.779}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_8" position={[0, 45.158, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={101.805} />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.naranja} skeleton={nodes.Object_9.skeleton} />
                    <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.naranja} skeleton={nodes.Object_10.skeleton} />
                    <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.turqueza} skeleton={nodes.Object_11.skeleton} />
                    <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.luz_neon} skeleton={nodes.Object_12.skeleton} />
                    <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.azul} skeleton={nodes.Object_13.skeleton} />
                    <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.azul} skeleton={nodes.Object_14.skeleton} />
                    <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.azul} skeleton={nodes.Object_15.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')