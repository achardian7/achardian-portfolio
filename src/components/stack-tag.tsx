const StackTag = ({ stack }: { stack: string }) => {
  return (
    <div className="rounded-full bg-emerald-500/5 p-2 text-[12px] font-medium text-emerald-500">
      {stack}
    </div>
  );
};

export default StackTag;
