import { memo, SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.5} clipPath='url(#clip0_325_139)'>
      <path
        d='M31.4677 15C31.4677 6.97266 24.5373 0.46875 15.9836 0.46875C7.42988 0.46875 0.499489 6.97266 0.499489 15C0.499489 22.2527 6.16181 28.2645 13.5642 29.3555V19.2006H9.63075V15H13.5642V11.7984C13.5642 8.15684 15.8743 6.14531 19.4126 6.14531C21.1071 6.14531 22.879 6.42891 22.879 6.42891V10.0031H20.926C19.003 10.0031 18.403 11.1234 18.403 12.2725V15H22.6973L22.0105 19.2006H18.403V29.3555C25.8054 28.2645 31.4677 22.2527 31.4677 15Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_325_139'>
        <rect width={31.9672} height={30} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FacebookIcon);
export { Memo as FacebookIcon };
