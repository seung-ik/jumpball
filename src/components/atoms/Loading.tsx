import { SECONDARY_COLOR } from '@constants/style';

function LoadingSpinner({ width = '60px', height = '60px' }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          // margin: 'auto',
          background: 'transparent',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width={width}
        height={height}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx={50}
          cy={50}
          fill="none"
          stroke="black"
          strokeWidth={8}
          r={35}
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.4925373134328357s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    </>
  );
}

export default LoadingSpinner;
