export default function Advice({ children }: { children: React.ReactNode }) {
  return (
    <div className=" border-dashed border-2 p-2 pt-1 border-yellow-100 rounded-lg">
      <p className="text-2xl">💡</p>
      <p>{children}</p>
    </div>
  );
}
