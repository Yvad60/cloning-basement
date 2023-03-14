export default function Button({ children, className }) {
  return (
    <button
      className={`px-3 text-sm font-bold rounded-sm py-[6px] ${className}`}
    >
      {children}
    </button>
  );
}
