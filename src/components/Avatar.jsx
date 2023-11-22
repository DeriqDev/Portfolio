/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Avatar(props) {
  const { nodes, materials } = useGLTF("/model/MetaRiq.glb");
  const ref= useRef()
  useFrame(() => {
     //ref.current.rotation.y += Math.sin(Math.PI / 2) * 0.01
  })
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head.geometry}
        material={materials["Material.001"]}
        position={[0, 0.372, 0]}
        scale={[0.144, 0.18, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hair.geometry}
        material={materials.materialhair}
        position={[0, 0.372, 0]}
        scale={[0.144, 0.18, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barbe.geometry}
        material={materials.materialhair}
        position={[0, 0.372, 0.003]}
        scale={[0.144, 0.18, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hat.geometry}
        material={materials["Material.005"]}
        position={[0, 0.503, -0.049]}
        scale={[0.157, 0.248, 0.187]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dentbas.geometry}
        material={materials.dents}
        position={[0, 0.304, 0.147]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.042, 0.008, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Denthaut.geometry}
        material={materials.dents}
        position={[0, 0.327, 0.15]}
        scale={[0.049, 0.009, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nez.geometry}
        material={materials["Material.001"]}
        position={[0.001, 0.365, 0.176]}
        scale={[0.023, 0.018, 0.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.langue.geometry}
        material={materials["Material.004"]}
        position={[0.001, 0.301, 0.118]}
        scale={[0.027, 0.019, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oreille.geometry}
        material={materials["Material.001"]}
        position={[0.13, 0.385, -0.005]}
        rotation={[Math.PI / 2, -0.286, 0]}
        scale={[0.034, 0.016, 0.042]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.yeux.geometry}
        material={materials["Material.003"]}
        position={[0.037, 0.393, 0.161]}
        scale={[0.01, 0.016, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sourcils.geometry}
        material={materials["Material.003"]}
        position={[0.035, 0.424, 0.166]}
      />
    </group>
  );
}

useGLTF.preload("/model/MetaRiq.glb");