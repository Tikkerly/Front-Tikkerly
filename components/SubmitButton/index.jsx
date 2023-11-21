export default function SubmitButton({ text, type, onClick, disabled }) {
  return (
    <button
      className="avant-garde-bold cursor-pointer font-bold text-gray px-6 py-3 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
