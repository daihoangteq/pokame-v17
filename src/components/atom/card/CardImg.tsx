import type { FC } from "react";

interface Props {
  imgUrl: string;
  name?: string;
}
export const CardImg: FC<Props> = ({ imgUrl, name }) => {
  return (
    <div className="mb-2 relative group-hover:origin-center group-hover:scale-125">
      <img
        src={imgUrl}
        width="150"
        height="150"
        className="object-contain"
        style={{ imageRendering: "pixelated" }}
        alt={name || "card img"}
      />
      <div className="absolute right-0 bottom-[-50px] w-[100px] h-[150px] opacity-40 origin-[50%_50%] transition-all duration-[0.5s] ease-[ease-in-out] group-hover:bg-[linear-gradient(_rgba(0,0,0,0),rgba(255,255,255),rgba(0,0,0,0)_)]" />
    </div>
  );
};
