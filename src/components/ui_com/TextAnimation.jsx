import { TextAnimate } from "../magicui/text-animate";

export function TextAnimation() {
  return (
    <div className="text-red-500 font-bold">
      <TextAnimate animation="blurInUp" by="character" once>
        Blur in by character
      </TextAnimate>
    </div>
  );
}
