import { CaretRight } from '@phosphor-icons/react';

export default function InfoBlock({
  icon,
  title,
  values,
  secondValues,
  action,
}) {
  return (
    <div className="w-fit flex flex-col gap-3 min-w-[18rem] px-4">
      <div className="flex gap-3 items-center">
        <div>{icon}</div>
        <p className="font-bold text-xl">{title}</p>
      </div>
      <div className="flex flex-col pl-9 text-gray-500 text-sm font-semibold">
        {values.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>
      {secondValues && (
        <div className="flex flex-col pl-9 text-gray-500 text-sm font-semibold">
          {secondValues.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      )}
      {action && (
        <div className="flex text-sm pl-9 font-semibold text-orange items-center cursor-pointer hover:underline gap-1">
          <p>{action}</p>
          <CaretRight size={16} weight="bold" />
        </div>
      )}
    </div>
  );
}
