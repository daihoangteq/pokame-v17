import { useMemo } from "react";

// WordCloud3D.tsx
interface WordItem {
  word: string;
  size: number;
  color: string;
  animation: string;
}

interface Word3DItem extends WordItem {
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
}
interface Props {
  text: string;
}
const WordCloud3D = ({ text }: Props) => {
  // const [flicker, setFlicker] = useState<string>("");

  const cloudItems = useMemo(() => {
    const splitText = text.split("");
    if (!splitText || splitText.length === 0) return;
    console.log("🚀 ~ cloudItems ~ splitText:", splitText);
    return splitText.map(
      (word): Word3DItem => ({
        word,
        size: Math.random() * 20 + 50,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
        animation: `float-${Math.floor(Math.random() * 4)}`,
        z: Math.random() * 500 - 250,
        rotateX: Math.random() * 360,
        rotateY: Math.random() * 360,
        rotateZ: Math.random() * 360,
      })
    );
  }, [text]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFlicker(text);
  //   }, 1000);
  // }, [text]);

  return (
    <>
      <div className="word-cloud-container-3d">
        {cloudItems &&
          cloudItems.map((item, index) => (
            <div
              key={`${item.word}-${index}`}
              className={`word-item-3d ${item.animation}`}
              style={{
                fontSize: `${item.size}px`,
                color: item.color,
                transform: `
              translateZ(${item.z}px)
              rotateX(${item.rotateX}deg)
              rotateY(${item.rotateY}deg)
              rotateZ(${item.rotateZ}deg)
            `,
              }}
            >
              {item.word}
            </div>
          ))}
      </div>
      {/* {flicker !== text && <div className="rgb-split" />} */}
    </>
  );
};
export default WordCloud3D;
