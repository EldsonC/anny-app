interface IconProps {
  color: string;
}
export function ThemeIcon({color}:IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M12 4.2a7.8 7.8 0 010 15.6V4.2zm0-1.8a9.6 9.6 0 100 19.2 9.6 9.6 0 000-19.2z"
      ></path>
    </svg>
  );
}