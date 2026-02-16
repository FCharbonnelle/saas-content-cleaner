'use client';

import React from 'react';

interface AdvancedAnalyticsProps {
  original: string;
  cleaned: string;
  stats: any;
}

export function AdvancedAnalytics({ original, cleaned, stats }: AdvancedAnalyticsProps) {
  if (!original || !cleaned || !stats) return null;

  const readabilityScore = Math.min(100, Math.round((cleaned.split(/\s+/).length / original.split(/\s+/).length) * 100));
  const complexityScore = Math.max(0, 100 - readabilityScore);

  return (
    <div className="bg-slate-900 rounded-3xl p-8 backdrop-blur-xl border border-white border-opacity-5">
      <h4 className="font-semibold text-white mb-6 flex items-center gap-2 text-lg">
        <span>📊</span> Advanced Analytics
      </h4>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-gradient-to-br from-cyan-600 to-blue-600 bg-opacity-20 rounded-xl border border-cyan-400 border-opacity-30">
          <p className="text-xs text-gray-400 mb-2">Reading Time</p>
          <p className="text-2xl font-bold text-cyan-300">{Math.ceil(cleaned.split(/\s+/).length / 200)}min</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 bg-opacity-20 rounded-xl border border-purple-400 border-opacity-30">
          <p className="text-xs text-gray-400 mb-2">Sentences Before</p>
          <p className="text-2xl font-bold text-purple-300">{original.split(/[.!?]+/).length}</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-600 bg-opacity-20 rounded-xl border border-green-400 border-opacity-30">
          <p className="text-xs text-gray-400 mb-2">Sentences After</p>
          <p className="text-2xl font-bold text-green-300">{cleaned.split(/[.!?]+/).length}</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-orange-600 to-red-600 bg-opacity-20 rounded-xl border border-orange-400 border-opacity-30">
          <p className="text-xs text-gray-400 mb-2">Compression</p>
          <p className="text-2xl font-bold text-orange-300">{stats.percentReduced}%</p>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-semibold text-white">Readability Score</p>
            <p className="text-sm font-semibold text-green-400">{readabilityScore}%</p>
          </div>
          <div className="h-3 bg-white bg-opacity-10 rounded-full overflow-hidden border border-green-400 border-opacity-30">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500"
              style={{ width: `${readabilityScore}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-semibold text-white">Complexity Reduction</p>
            <p className="text-sm font-semibold text-purple-400">{complexityScore}%</p>
          </div>
          <div className="h-3 bg-white bg-opacity-10 rounded-full overflow-hidden border border-purple-400 border-opacity-30">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-500"
              style={{ width: `${complexityScore}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
