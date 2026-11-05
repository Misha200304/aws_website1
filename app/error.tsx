'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const isChunkError =
    error?.name === 'ChunkLoadError' ||
    (typeof error?.message === 'string' &&
      (error.message.includes('ChunkLoadError') ||
        error.message.includes('Loading chunk')));

  useEffect(() => {
    console.error('Captured application error:', error);
    if (isChunkError) {
      const reloadKey = 'chunk_reload_attempt';
      const last = sessionStorage.getItem(reloadKey);
      const now = Date.now();
      if (!last || now - parseInt(last, 10) > 8000) {
        sessionStorage.setItem(reloadKey, String(now));
        window.location.reload();
      }
    }
  }, [error, isChunkError]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#f9f9ff]">
      <div className="w-12 h-12 rounded-full bg-[#e6fbf1] text-[#007a3d] flex items-center justify-center mb-4">
        <span className="font-mono text-xl font-bold">!</span>
      </div>
      <h2 className="text-2xl font-semibold text-[#181c23] mb-3">
        {isChunkError ? 'Refreshing Application Resources' : 'Something went wrong!'}
      </h2>
      <p className="text-[#545B64] max-w-md mb-8">
        {isChunkError
          ? 'New updates or script chunks are available. Click reload to refresh the application.'
          : 'An unexpected error occurred. Please try again.'}
      </p>
      <button
        onClick={() => {
          if (isChunkError) {
            window.location.reload();
          } else {
            reset();
          }
        }}
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#005A36] hover:bg-[#00482B] text-white font-semibold transition-colors shadow-sm"
      >
        {isChunkError ? 'Reload page' : 'Try again'}
      </button>
    </div>
  );
}
