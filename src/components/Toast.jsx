import React from 'react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-black text-white px-5 py-3 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-2 border border-neutral-700 animate-slideUp pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}

