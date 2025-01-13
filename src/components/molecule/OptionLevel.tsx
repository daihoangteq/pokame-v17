import { useDispatch } from "@src/hooks/core";

import { Option } from "../atom/level/Option";

export const OptionLevel = () => {
  const dispatch = useDispatch();
  const selectLevel = (limit: number) => {
    dispatch({ type: "SELECT_LEVEL", payload: { limit: limit, offset: 0 } });
  };
  return (
    <div className="w-fit text-red-500 mx-auto flex gap-3 mt-1">
      <Option onClick={() => selectLevel(100)}>Level 100</Option>
      <Option onClick={() => selectLevel(200)}>Level 200</Option>
      <Option onClick={() => selectLevel(300)}>Level 300</Option>
    </div>
  );
};
