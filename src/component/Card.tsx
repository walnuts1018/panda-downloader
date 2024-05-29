export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border-2 border-white p-4">{children}</div>;
}
