"use client";

interface MockupFrameProps {
  children: React.ReactNode;
}

export function MockupFrame({ children }: MockupFrameProps) {
  return (
    <div className="glass-card overflow-hidden">
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-bd">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-4">
          <div className="glass rounded-md px-3 py-1 text-tx3 text-[10px] font-mono max-w-xs mx-auto text-center">
            genfy.studio
          </div>
        </div>
      </div>
      {/* Content area */}
      <div className="p-4 md:p-6">
        {children}
      </div>
    </div>
  );
}
