import { Canvas, useFrame ,useLoader} from '@react-three/fiber';
import { Suspense, lazy, useRef, useState } from 'react';
import { Mesh } from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Window from './Window'


function Box(props:any) { 
      const mesh = useRef<Mesh>(null!);
    useFrame((state, delta) => (mesh.current.rotation.y += delta));
    return (    
    <mesh {...props}  ref={mesh}>      
        <boxGeometry args={[1, 1, 1]} />     
        <meshStandardMaterial color={'orange'} />   
    </mesh>  );
}

function Shoe(props:any) {
   
    const obj = useLoader(GLTFLoader,require('../assets/models/window.gltf'));  
    return <mesh {...props} >
        <primitive object={obj} scale={10} />
        </mesh>
}
export default function View3D() { 
    const [active, setActive] = useState(false); 
  
    return <Canvas style={{position:'absolute',width:'100%',height:'100%', zIndex:10}}>
        <ambientLight intensity={4}/>
        <Suspense fallback={null}>
              <Box position={[0, 0, 0]}/> 

        </Suspense>
      
    </Canvas>;
}