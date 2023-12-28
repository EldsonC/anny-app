interface LogoProps {
  size?: number;
}

export function LogoIcon({size}:LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 40}
      height={size ? size : 40}
      fill="none"
      viewBox="0 0 365 365"
    >
      <rect
        width="364"
        height="364"
        x="0.5"
        y="0.5"
        fill="#111"
        stroke="#242424"
        rx="52.5"
      ></rect>
      <g clipPath="url(#clip0_1_1039)">
        <path
          fill="#1ED760"
          d="M116.667 236.444H182v-21.777h-65.333v21.777zm32.666-43.555h65.334v-21.778h-65.334v21.778zM182 149.333h65.333v-21.777H182v21.777zM105.778 280c-5.99 0-11.118-2.134-15.386-6.403-4.269-4.268-6.4-9.393-6.392-15.375V105.778c0-5.99 2.134-11.118 6.403-15.386 4.268-4.269 9.393-6.4 15.375-6.392h152.444c5.989 0 11.118 2.134 15.386 6.403 4.269 4.268 6.399 9.393 6.392 15.375v152.444c0 5.989-2.134 11.118-6.403 15.386-4.268 4.269-9.393 6.399-15.375 6.392H105.778z"
        ></path>
      </g>
      <path stroke="#000" d="M84.5 84.5H279.5V279.5H84.5z"></path>
      <defs>
        <clipPath id="clip0_1_1039">
          <path fill="#fff" d="M84 84H280V280H84z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}