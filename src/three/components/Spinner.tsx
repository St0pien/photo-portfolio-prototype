import { useScroll, useTexture } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { DoubleSide, Group, ShaderMaterial } from 'three';

import vaporizeVert from '../shaders/vaporize.vert';
import vaporizeFrag from '../shaders/vaporize.frag';

interface SpinnerOptions extends GroupProps {
  images: string[];
  rotationSpeed: number;
  radius: number;
}

type Uniform<T> = {
  value: T;
};

type VaporizeUniforms = {
  uDisperse: Uniform<number>;
  uSeed: Uniform<number>;
};

export const Spinner = ({
  images,
  rotationSpeed,
  radius,
  ...props
}: SpinnerOptions) => {
  const textures = useTexture(images);
  const group = useRef<Group>(null);
  const mat = useRef<ShaderMaterial>(null);

  const uniforms: VaporizeUniforms = useMemo(
    () => ({
      uDisperse: {
        value: 1
      },
      uSeed: {
        value: 0
      }
    }),
    []
  );

  const test = useScroll();

  useFrame((_, time) => {
    group.current!.rotation.y -= rotationSpeed * time;
    mat.current!.uniforms.uSeed.value += time * 5;
    mat.current!.uniforms.uDisperse.value = test.range(0, 1 / 4);
  });

  return (
    <group ref={group} {...props}>
      {textures.map((texture, id) => (
        <mesh
          rotation={[
            0,
            -Math.PI / 2 - ((Math.PI * 2) / textures.length) * id,
            0
          ]}
          key={id}
          position={[
            radius * Math.cos(((Math.PI * 2) / textures.length) * id),
            0,
            radius * Math.sin(((Math.PI * 2) / textures.length) * id)
          ]}
        >
          <planeGeometry args={[1, 1, 100, 100]} />
          {/* <meshBasicMaterial map={texture} side={DoubleSide} /> */}
          <shaderMaterial
            ref={mat}
            side={DoubleSide}
            transparent
            vertexShader={vaporizeVert as string}
            fragmentShader={vaporizeFrag as string}
            uniforms={{
              ...uniforms,
              uTexture: {
                value: texture
              }
            }}
          />
        </mesh>
      ))}
    </group>
  );
};
