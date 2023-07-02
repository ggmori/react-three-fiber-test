/* eslint-disable react/no-unknown-property */
import {
  ContactShadows,
  Float,
  Html,
  // OrbitControls,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import "./App.css";
import { Canvas } from "react-three-fiber";

function App() {
  const mavbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  const coffee = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/expresso-cup/model.gltf"
  );

  const book = useGLTF("./book.gltf");

  return (
    <div>
      <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 1.5, 6] }}>
        {/* <color args={["#000000"]} attach={"background"} /> */}
        {/* <OrbitControls /> */}
        <ambientLight />
        <directionalLight intensity={1.4} />
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
        <PresentationControls
          global
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 300 }}
        >
          {/* macbook */}
          <Float rotationIntensity={1.5}>
            <rectAreaLight
              color={"#32cd32"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={(0, 0, -1)}
            ></rectAreaLight>
            <primitive object={mavbook.scene} position={[0, -1.5, 0]}>
              {/* 外部サイトを表示する */}
              <Html
                position={[0, 1.56, -1.4]}
                distanceFactor={1.17}
                rotateX={-0.256}
                transform
                wrapperClass="htmlScreen"
              >
                {/* サイトのパス */}
                <iframe src="" frameborder="0"></iframe>
              </Html>
            </primitive>
          </Float>
          {/* coffee */}
          <Float rotationIntensity={1.5}>
            <rectAreaLight
              color={"#32cd32"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]} // 回転
              width={2.0}
              height={1.65}
              position={(0, 0, -1)}
            ></rectAreaLight>
            <primitive
              object={coffee.scene}
              position={[-2.4, -1.3, 0.2]}
              scale={[1.3, 1.3, 1.3]} // 拡大縮小
            ></primitive>
          </Float>
          {/* book */}
          <Float rotationIntensity={1.5}>
            <rectAreaLight
              color={"#32cd32"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={(0, 0, -1)}
            ></rectAreaLight>
            <primitive
              object={book.scene}
              position={[2.4, -1.3, 0.2]} //位置
              scale={[1.5, 1.5, 1.5]} //大きさ
              rotation-x={0.4}
            ></primitive>
          </Float>
          {/* テキスト */}
          <Text
            font="./Caprasimo-Regular.ttf"
            fontSize={0.6}
            position={[0, 1.725, 0.75]}
            // maxWidth={3}
            textAlign="center"
          >
            My Portfolio
          </Text>
        </PresentationControls>
        <ContactShadows />
      </Canvas>
    </div>
  );
}

export default App;
