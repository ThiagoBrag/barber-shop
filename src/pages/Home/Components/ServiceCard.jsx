export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex-1 flex flex-col max-w-[15rem] min-w-[15rem] h-auto color-bg-secondary rounded-lg items-center gap-3 p-4">
      <div className="flex w-full items-center justify-center">{icon}</div>
      <p className="font-semibold text-lg">{title}</p>
      <hr className="w-3/7 border-t border-gray-500" />
      <p className="w-full font-semibold text-sm text-gray-500 text-center">
        {description}
      </p>
    </div>
  );
}
