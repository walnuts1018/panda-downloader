export default function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height="24px"
      width="24px"
      className={`h-full w-full object-contain text-black ${className}`}
    >
      <path d="M479.24-333.83 241.5-571.33l75.26-73.02 109.89 110.37v-317.37h105.18v317.37l109.89-110.37 75.02 73.02-237.5 237.5Zm-217.7 177.18q-43.64 0-74.27-30.77-30.62-30.78-30.62-74.41v-72h105.18v72h436.34v-72h105.18v72q0 43.81-30.79 74.5-30.78 30.68-74.43 30.68H261.54Z" />
    </svg>
  );
}
