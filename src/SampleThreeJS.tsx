import { useRef, useState } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three';

function SampleThreeJS(props: MeshProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null);
  // Hold state for hovered and clicked events
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (!ref.current) {
      return;
    }
    ref.current.rotation.x += delta
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default SampleThreeJS