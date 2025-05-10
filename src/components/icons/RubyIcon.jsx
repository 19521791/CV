/* eslint-disable react/prop-types */
const RubyIcon = ({ fill='currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill={fill}
        d="M4.293 4 8.058.236 9.73 4H4.293ZM14.293 0l-3.632 3.632L9.047 0h5.246ZM.236 8.058 4 9.73V4.293L.236 8.058ZM3.632 10.661 0 9.047v5.246l3.632-3.632ZM5 9.293 9.293 5H5v4.293ZM15 13.731l-3.907-9.117L15 .707v13.024ZM14.048 14.048l-3.717-8.672-4.955 4.955 8.672 3.717ZM4.614 11.093 13.731 15H.707l3.907-3.907Z"
      />
    </svg>
  )
}

export default RubyIcon