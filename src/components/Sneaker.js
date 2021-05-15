import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { state } from '../state/State';

export function Model(props) {
  const group = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('/sneaker_small.glb')
  const [hovered, set] = useState(null)

   useEffect(() => {
    const cursor = `
    <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/>
            <g filter="url(#filter0_d)">
                <path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.colors[hovered]}"/>
            </g>
            <path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <path fill="#fff" d="M0 0h64v64H0z"/>
            </clipPath>
            <filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="3"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
        </defs>
    </svg>`
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : null)}'), auto`
  }, [hovered])

  return (
    <group ref={group} {...props} dispose={null}
        onPointerOver = {(e) => {e.stopPropagation(); set(e.object.material.name)}}
        onPointerOut = {(e) => {e.intersections.length===0 && set(null)}}
        onPointerDown = {(e) => {e.stopPropagation(); state.current=e.object.material.name}}
        onPointerMissed = {(e) => {state.current = null}}
        >
        <group rotation={[-Math.PI/2, 0, Math.PI]} scale={[0.11, 0.11, 0.11]} position={[0,-1, 0]} >
            <mesh receiveShadow castShadow material-color={snap.colors.blade} geometry={nodes.Mesh_0.geometry} material={materials.blade} />
            <mesh receiveShadow castShadow material-color={snap.colors.counter_lining} geometry={nodes.Mesh_1.geometry} material={materials.counter_lining} />
            <mesh receiveShadow castShadow material-color={snap.colors.tongue_top} geometry={nodes.Mesh_10.geometry} material={materials.tongue_top} />
            <mesh receiveShadow castShadow material-color={snap.colors.laces} geometry={nodes.Mesh_2.geometry} material={materials.laces} />
            <mesh receiveShadow castShadow material-color={snap.colors.sole} geometry={nodes.Mesh_3.geometry} material={nodes.Mesh_3.material} />
            <mesh receiveShadow castShadow material-color={snap.colors.sole} geometry={nodes.Mesh_4.geometry} material={nodes.Mesh_4.material} />
            <mesh receiveShadow castShadow material-color={snap.colors.back_panel} geometry={nodes.Mesh_5.geometry} material={nodes.Mesh_5.material} />
            <mesh receiveShadow castShadow material-color={snap.colors.back_panel} geometry={nodes.Mesh_6.geometry} material={nodes.Mesh_6.material} />
            <mesh receiveShadow castShadow material-color={snap.colors.back_panel} geometry={nodes.Mesh_7.geometry} material={nodes.Mesh_7.material} />
            <mesh receiveShadow castShadow material-color={snap.colors.ramp_back} geometry={nodes.Mesh_8.geometry} material={materials.ramp_back} />
            <mesh receiveShadow castShadow material-color={snap.colors.lining} geometry={nodes.Mesh_9.geometry} material={materials.lining} />
        </group>
    </group>

  )
}


