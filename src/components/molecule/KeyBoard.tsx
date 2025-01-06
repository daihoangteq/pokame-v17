import KeyElements from "@src/components/atom/key-elements";

const KeyBoard = () => {
  return (
    <div className="pb-7 pt-4 flex flex-col items-center">
      {/* top row */}
      <div className="mb-2">
        <KeyElements.Line rowName="topRow" Component={KeyElements.Key} />
      </div>
      {/* home row */}
      <div className="mb-2">
        <KeyElements.Line rowName="homeRow" Component={KeyElements.Key} />
      </div>
      {/* bottom row */}
      <div className="flex gap-3">
        <KeyElements.Enter />
        <KeyElements.Line rowName="bottomRow" Component={KeyElements.Key}>
          <KeyElements.BackSpace />
        </KeyElements.Line>
      </div>
    </div>
  );
};
export default KeyBoard;
