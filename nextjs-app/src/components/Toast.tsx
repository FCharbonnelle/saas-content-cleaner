'use client';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  icon?: string;
}

export function Toast({ message, type = 'info', icon }: ToastProps) {
  const bgColor = {
    success: 'bg-green-100 border-green-300 text-green-800',
    error: 'bg-red-100 border-red-300 text-red-800',
    info: 'bg-blue-100 border-blue-300 text-blue-800',
  };

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  };

  return (
    <div className={`fixed bottom-6 right-6 p-4 rounded-lg border-2 ${bgColor[type]} shadow-lg animate-fade-in-up`}>
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold">{icon || icons[type]}</span>
        <p className="font-medium">{message}</p>
      </div>
    </div>
  );
}
