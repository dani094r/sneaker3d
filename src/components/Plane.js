export function Plane() {
      
    return (
      <mesh receiveShadow castShadow rotation={[Math.PI/2, Math.PI, 0]} position= {[0,-2,0]}>
        <planeBufferGeometry attach="geometry" args= {[75,150]} />
        <meshPhysicalMaterial attach="material" color="#ffa726"/>
      </mesh>
        
    )
  }