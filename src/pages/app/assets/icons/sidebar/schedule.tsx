interface ButtonProps {
  color: string;
}

export function ScheduleIcon({color}:ButtonProps) {
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.778 1.547L4.5 14.25h6l-1.477 8.12a.11.11 0 00.198.085L19.5 9.75h-6l1.484-8.121a.114.114 0 00-.028-.09.115.115 0 00-.178.008z"
      ></path>
    </svg>
  );
}