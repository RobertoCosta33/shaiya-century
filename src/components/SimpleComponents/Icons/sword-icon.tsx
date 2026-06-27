type SwordIconProps = {
  size?: number;
  color?: string;
};

const SwordIcon = ({ size = 24, color = "currentColor" }: SwordIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 2L20 7.5L9 18.5L4 19.5L5 14.5L14.5 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M13 4L19 10" stroke={color} strokeWidth="1.5" />
      <path d="M4 20L6 18" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

export default SwordIcon;
