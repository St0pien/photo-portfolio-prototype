import {
  // OrbitControls,
  ScreenSpace,
  Scroll,
  ScrollControls
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Spinner } from './three/components/Spinner';
import { Home } from './ui/sections/Home';

import cover1 from './assets/images/cover1.png';
import cover2 from './assets/images/cover2.png';
import cover3 from './assets/images/cover3.png';
import cover4 from './assets/images/cover4.png';
import cover5 from './assets/images/cover5.png';

function App() {
  const covers = [cover1, cover2, cover3, cover4, cover5];

  return (
    <Canvas camera={{ position: [0, 4, 8], fov: 40 }}>
      <ScrollControls pages={2} damping={0.1}>
        {/* <ParticleEffect /> */}
        <Scroll>
          <ScreenSpace depth={8}>
            <Spinner
              images={covers}
              rotationSpeed={0.3}
              radius={1.2}
              position={[0, -0.2, 0]}
              rotation={[0.3, 0, 0]}
            />
          </ScreenSpace>
        </Scroll>
        <pointLight position={[0, 0, 0]} intensity={0.6} castShadow />
        <ambientLight intensity={0.2} />
        <Scroll html>
          <Home />
        </Scroll>
      </ScrollControls>
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
}

export default App;
