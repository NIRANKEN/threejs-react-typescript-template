function SampleBulbLight() {
  return (
    <pointLight
      color={0xffee88}
      intensity={1}
      distance={100}
      decay={2}
      castShadow
      position={[0, 2, 0]}
    >
      <mesh>
        <sphereGeometry args={[0.2, 16, 8]} />
        <meshStandardMaterial
          color={0x000000}
          emissive={0xffffee}
          emissiveIntensity={1}
        />
      </mesh>
    </pointLight>
  );
}

export default SampleBulbLight;
