interface IconProps {
  color: string;
}
export function BoardIcon({ color }:IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="82"
      height="82"
      fill="none"
      viewBox="0 0 82 82"
    >
      <g clipPath="url(#clip0_381_389)">
        <path
          fill={color}
          fillRule="evenodd"
          d="M47.833 10.25a6.834 6.834 0 016.817 6.32l.017.513v3.605l12.44 3.335a6.833 6.833 0 014.947 7.872l-.116.495-8.842 33.005a6.834 6.834 0 01-7.872 4.944l-.496-.113-2.005-.536a6.824 6.824 0 01-4.258 2.033l-.632.027h-30.75a6.834 6.834 0 01-6.816-6.32l-.017-.513V17.083a6.834 6.834 0 016.32-6.816l.513-.017h30.75zm0 6.833h-30.75v47.834h30.75V17.083zm6.834 10.68v35.374l1.828.488L65.34 30.62l-10.673-2.856z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_381_389">
          <path fill="#fff" d="M0 0H82V82H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}