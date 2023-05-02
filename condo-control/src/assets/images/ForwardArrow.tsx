import * as React from "react"; //https://react-svgr.com/playground/
const ForawrdArrow = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 96 960 960"
    {...props}
  >
    <path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z" />
  </svg>
);
export default ForawrdArrow;
