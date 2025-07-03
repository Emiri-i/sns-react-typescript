type AvatarProps = {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

export const Avatar = ({
  src,
  alt = "User avatar",
  size = "md",
  className = "",
}: AvatarProps) => {
  return (
    <img
      src={src || "/placeholder-avatar.png"}
      alt={alt}
      className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
    />
  );
};
