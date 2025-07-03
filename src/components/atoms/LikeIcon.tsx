import { Heart } from "lucide-react";
import clsx from "clsx";

type IconProps = {
  size?: number;
  color?: string;
  className?: string;
  fill?: boolean;
};

export const LikeIcon = ({
  size = 20,
  color = "currentColor",
  className = "",
  fill = false,
}: IconProps) => {
  return (
    <>
      {fill ? (
        <Heart
          size={size}
          fill="#E14434"
          strokeWidth={0}
          className={clsx("inline-block", className)}
        />
      ) : (
        <Heart
          size={size}
          color={color}
          className={clsx("inline-block", className)}
        />
      )}
    </>
  );
};
