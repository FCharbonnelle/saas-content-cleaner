'use client';

import React, { useState } from 'react';
import { ContentCleaner } from '@/lib/contentCleaner';
import { CleaningOptions, HistoryItem } from '@/types/content';
import { StatsCard } from './StatsCard';
import { Button } from './Button';
import { Tabs } from './Tabs';
import { AdvancedAnalytics } from './AdvancedAnalytics';
import Header from './Header';
import Footer from './Footer';
import FeaturesSection from './FeaturesSection';
import StatsOverview from './StatsOverview';

const SAMPLE_TEXTS = [
  'Welcome to   our SaaS   platform.  We provide amazing tools!',
  '<p>This is HTML <b>content</b> with   extra   spaces</p>',
  'Check this link: https://example.com   and   contact   us!!!',
  'Text with special chars: @#$%^&*()   and   numbers   123456',
];

export default function ContentCleanerDemo() {
  const [input, setInput] = useState('');
  const [cleanedContent, setCleanedContent] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [showPresets, setShowPresets] = useState(false);
  const [activeTab, setActiveTab] = useState<'options' | 'history'>('options');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const [options, setOptions] = useState<CleaningOptions>({
    trim: true,
    removeHtml: false,
    removeUrls: false,
    removeSpecialChars: false,
    removeExtraSpaces: true,
    normalizePunctuation: false,
    removeLineBreaks: true,
    toLowerCase: false,
    toUpperCase: false,
    removeNumbers: false,
  });

  const showNotification = (msg: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleOptionToggle = (key: keyof CleaningOptions) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleClean = () => {
    if (input.trim()) {
      const cleaned = ContentCleaner.clean(input, options);
      setCleanedContent(cleaned);

      const newStats = ContentCleaner.getStats(input, cleaned);
      setStats(newStats);

      const historyItem: HistoryItem = {
        id: Math.random().toString(36).substring(7),
        original: input,
        cleaned,
        options: { ...options },
        timestamp: Date.now(),
      };

      setHistory((prev) => [historyItem, ...prev.slice(0, 9)]);
      showNotification('✓ Content cleaned successfully!', 'success');
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as 'options' | 'history');
  };

  const handleSampleText = (text: string) => {
    setInput(text);
  };

  const handleLoadFromHistory = (item: HistoryItem) => {
    setCleanedContent(item.cleaned);
    setStats(ContentCleaner.getStats(item.original, item.cleaned));
    showNotification('✓ Loaded from history!', 'success');
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    showNotification('✓ Copied to clipboard!', 'success');
  };

  const handleClear = () => {
    setInput('');
    setCleanedContent('');
    setStats(null);
  };

  const handleExportCsv = () => {
    if (history.length === 0) {
      showNotification('No history to export', 'error');
      return;
    }

    let csv = 'Original,Cleaned,Characters Removed,Date\n';
    history.forEach((item) => {
      const date = new Date(item.timestamp).toLocaleString();
      const charRemoved = item.original.length - item.cleaned.length;
      csv += `"${item.original.replace(/"/g, '""')}","${item.cleaned.replace(
        /"/g,
        '""'
      )}",${charRemoved},"${date}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content-cleaner-history.csv';
    a.click();
    showNotification('✓ Exported as CSV!', 'success');
  };

  const handlePreset = (preset: string) => {
    switch (preset) {
      case 'aggressive':
        setOptions({
          trim: true,
          removeHtml: true,
          removeUrls: true,
          removeSpecialChars: true,
          removeExtraSpaces: true,
          normalizePunctuation: true,
          removeLineBreaks: true,
          toLowerCase: false,
          toUpperCase: false,
          removeNumbers: false,
        });
        showNotification('Applied: Aggressive preset', 'info');
        break;
      case 'minimal':
        setOptions({
          trim: true,
          removeHtml: false,
          removeUrls: false,
          removeSpecialChars: false,
          removeExtraSpaces: true,
          normalizePunctuation: false,
          removeLineBreaks: false,
          toLowerCase: false,
          toUpperCase: false,
          removeNumbers: false,
        });
        showNotification('Applied: Minimal preset', 'info');
        break;
      case 'html':
        setOptions({
          trim: true,
          removeHtml: true,
          removeUrls: true,
          removeSpecialChars: false,
          removeExtraSpaces: true,
          normalizePunctuation: true,
          removeLineBreaks: true,
          toLowerCase: false,
          toUpperCase: false,
          removeNumbers: false,
        });
        showNotification('Applied: HTML preset', 'info');
        break;
    }
    setShowPresets(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="mb-4 inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold">
                ✨ Professional Content Cleaning
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 leading-tight">
              ContentFlow
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade content cleaning with advanced analytics and batch processing capabilities
            </p>
          </div>

          {/* Main Cleaner Section - Centered Container */}
          <div className="w-full max-w-6xl mx-auto">
            {/* Input & Output Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Input Card */}
              <div className="h-full">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 rounded-3xl h-full">
                  <div className="bg-slate-900 rounded-3xl p-8 h-full backdrop-blur-xl border border-white border-opacity-5">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">📝</div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">Your Content</h2>
                          <p className="text-xs text-cyan-400">Add your raw content</p>
                        </div>
                      </div>
                      {input.length > 0 && (
                        <span className="text-xs px-3 py-1 bg-cyan-600 bg-opacity-40 text-cyan-300 rounded-full border border-cyan-400 border-opacity-50">
                          {input.length} chars
                        </span>
                      )}
                    </div>

                    {/* Sample Buttons */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-gray-400 mb-3">⚡ Try Examples:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {SAMPLE_TEXTS.map((text, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSampleText(text)}
                            className={`text-xs px-3 py-2 rounded-lg transition-all duration-300 font-semibold border-2 ${
                              idx === 0
                                ? 'bg-cyan-600 border-cyan-400 hover:bg-cyan-500 text-white'
                                : idx === 1
                                ? 'bg-purple-600 border-purple-400 hover:bg-purple-500 text-white'
                                : idx === 2
                                ? 'bg-pink-600 border-pink-400 hover:bg-pink-500 text-white'
                                : 'bg-orange-600 border-orange-400 hover:bg-orange-500 text-white'
                            }`}
                            title={text}
                          >
                            {idx === 0 && '📋'} {idx === 1 && '🏷️'} {idx === 2 && '🔗'} {idx === 3 && '⚙️'} #{idx + 1}
                          </button>
                        ))}
                      </div>
                    </div>

                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Paste your content here... We'll work our magic! 🎯"
                      className="w-full h-48 p-4 bg-slate-800 bg-opacity-50 border-2 border-cyan-500 border-opacity-30 rounded-2xl focus:border-cyan-400 focus:outline-none resize-none text-white placeholder-gray-500 text-sm backdrop-blur-sm transition-all duration-300 hover:border-opacity-50"
                    />

                    <div className="flex gap-3 mt-6">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={handleClean}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600"
                        icon="✨"
                      >
                        Clean Content
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        onClick={handleClear}
                        icon="🗑️"
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Output Card */}
              <div className="h-full">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-0.5 rounded-3xl h-full">
                  <div className="bg-slate-900 rounded-3xl p-8 h-full backdrop-blur-xl border border-white border-opacity-5 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">✨</div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">Cleaned Result</h2>
                          <p className="text-xs text-green-400">Ready to copy</p>
                        </div>
                      </div>
                      {cleanedContent.length > 0 && (
                        <span className="text-xs px-3 py-1 bg-green-600 bg-opacity-40 text-green-300 rounded-full border border-green-400 border-opacity-50">
                          {cleanedContent.length} chars
                        </span>
                      )}
                    </div>

                    {cleanedContent ? (
                      <>
                        <textarea
                          value={cleanedContent}
                          readOnly
                          className="w-full flex-1 p-4 bg-slate-800 bg-opacity-50 border-2 border-green-500 border-opacity-30 rounded-2xl resize-none focus:outline-none backdrop-blur-sm text-white text-sm mb-4"
                        />
                        <Button
                          variant="success"
                          size="lg"
                          onClick={() => handleCopy(cleanedContent)}
                          className="w-full bg-gradient-to-r from-green-500 to-emerald-600"
                          icon="📋"
                        >
                          Copy to Clipboard
                        </Button>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center flex-1">
                        <div className="text-6xl mb-3 animate-pulse">🔮</div>
                        <p className="text-gray-400 text-center">Clean your content to see the magic!</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid - Below Main Cards */}
            {stats && (
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-0.5 rounded-3xl mb-8">
                <div className="bg-slate-900 rounded-3xl p-8 backdrop-blur-xl border border-white border-opacity-5">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span>📊</span> Cleaning Statistics
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatsCard
                      label="Characters Removed"
                      value={stats.charRemoved}
                      icon="✂️"
                      bgColor="bg-cyan-500 bg-opacity-10"
                      borderColor="border-cyan-400"
                      textColor="text-cyan-300"
                    />
                    <StatsCard
                      label="Reduction %"
                      value={`${stats.percentReduced}%`}
                      icon="📉"
                      bgColor="bg-purple-500 bg-opacity-10"
                      borderColor="border-purple-400"
                      textColor="text-purple-300"
                    />
                    <StatsCard
                      label="Words Before"
                      value={stats.wordsBefore}
                      icon="📄"
                      bgColor="bg-orange-500 bg-opacity-10"
                      borderColor="border-orange-400"
                      textColor="text-orange-300"
                    />
                    <StatsCard
                      label="Words After"
                      value={stats.wordsAfter}
                      icon="✓"
                      bgColor="bg-green-500 bg-opacity-10"
                      borderColor="border-green-400"
                      textColor="text-green-300"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Advanced Analytics Card */}
            {stats && cleanedContent && (
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-0.5 rounded-3xl mb-8">
                <AdvancedAnalytics original={input} cleaned={cleanedContent} stats={stats} />
              </div>
            )}

            {/* Options & History Tabs Card */}
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-0.5 rounded-3xl">
              <div className="bg-slate-900 rounded-3xl p-8 backdrop-blur-xl border border-white border-opacity-5 overflow-hidden">
                <Tabs
                  tabs={[
                    { id: 'options', label: '⚙️ Cleaning Options' },
                    { id: 'history', label: '📜 History', count: history.length },
                  ]}
                  activeTab={activeTab}
                  onTabChange={handleTabChange}
                />

                <div className="mt-6">
                  {activeTab === 'options' && (
                    <div className="animate-fade-in">
                      {/* Presets Card */}
                      <div className="mb-8 p-6 bg-gradient-to-br from-cyan-600 to-blue-600 bg-opacity-20 rounded-2xl border-2 border-cyan-500 border-opacity-50">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-bold text-white text-lg">🎯 Preset Configurations</h3>
                          <button
                            onClick={() => setShowPresets(!showPresets)}
                            className="text-sm px-3 py-1 bg-cyan-600 bg-opacity-40 text-cyan-300 rounded-lg hover:bg-opacity-60 transition-all duration-300 border border-cyan-400 border-opacity-50"
                          >
                            {showPresets ? 'Hide' : 'Show'}
                          </button>
                        </div>
                        {showPresets && (
                          <div className="grid grid-cols-3 gap-3">
                            <button
                              onClick={() => handlePreset('minimal')}
                              className="p-4 bg-cyan-600 bg-opacity-30 border-2 border-cyan-400 rounded-xl hover:bg-opacity-50 transition-all duration-300 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50"
                            >
                              🎯 Minimal
                            </button>
                            <button
                              onClick={() => handlePreset('html')}
                              className="p-4 bg-green-600 bg-opacity-30 border-2 border-green-400 rounded-xl hover:bg-opacity-50 transition-all duration-300 text-white font-semibold hover:shadow-lg hover:shadow-green-500/50"
                            >
                              🏷️ HTML
                            </button>
                            <button
                              onClick={() => handlePreset('aggressive')}
                              className="p-4 bg-red-600 bg-opacity-30 border-2 border-red-400 rounded-xl hover:bg-opacity-50 transition-all duration-300 text-white font-semibold hover:shadow-lg hover:shadow-red-500/50"
                            >
                              ⚡ Aggressive
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Options Grid */}
                      <p className="text-sm font-semibold text-gray-300 mb-4">🔧 Advanced Options</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {Object.entries(options).map(([key, value], idx) => {
                          const colors = [
                            'from-blue-600 to-cyan-600',
                            'from-purple-600 to-pink-600',
                            'from-green-600 to-emerald-600',
                            'from-orange-600 to-red-600',
                            'from-indigo-600 to-blue-600',
                            'from-rose-600 to-pink-600',
                          ];
                          const colorClass = colors[idx % colors.length];

                          return (
                            <label
                              key={key}
                              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                value
                                  ? `bg-gradient-to-br ${colorClass} bg-opacity-40 border-opacity-70 shadow-lg`
                                  : 'bg-white bg-opacity-5 border-white border-opacity-20 hover:border-opacity-40'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={value || false}
                                onChange={() => handleOptionToggle(key as keyof CleaningOptions)}
                                className="rounded w-5 h-5 cursor-pointer"
                              />
                              <span className="text-sm text-white font-medium">{formatOptionName(key)}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {activeTab === 'history' && (
                    <div className="animate-fade-in">
                      {history.length > 0 ? (
                        <div>
                          <Button
                            variant="success"
                            size="lg"
                            onClick={handleExportCsv}
                            className="mb-6 w-full bg-gradient-to-r from-green-500 to-emerald-600"
                            icon="📥"
                          >
                            Export History as CSV
                          </Button>
                          <div className="space-y-3 max-h-96 overflow-y-auto pr-4">
                            {history.map((item, idx) => {
                              const charRemoved = item.original.length - item.cleaned.length;
                              const date = new Date(item.timestamp).toLocaleString();
                              const historyColors = [
                                'from-blue-600 to-cyan-600',
                                'from-purple-600 to-pink-600',
                                'from-green-600 to-emerald-600',
                                'from-orange-600 to-red-600',
                                'from-indigo-600 to-blue-600',
                              ];
                              const bgColor = historyColors[idx % historyColors.length];

                              return (
                                <div
                                  key={item.id}
                                  className={`p-4 bg-gradient-to-br ${bgColor} bg-opacity-15 rounded-xl border-2 border-opacity-30 hover:border-opacity-60 hover:bg-opacity-25 transition-all duration-300 group`}
                                >
                                  <div className="flex justify-between items-start gap-3 mb-2">
                                    <div className="flex-1 min-w-0">
                                      <p className="text-xs text-gray-400 mb-1">🕐 {date}</p>
                                      <p className="text-sm font-semibold text-white truncate group-hover:text-cyan-300 transition-colors">
                                        {item.original.substring(0, 60)}...
                                      </p>
                                      <p className="text-xs text-gray-400 mt-2">
                                        ✂️ {charRemoved} chars removed • 📄 {item.cleaned.length} result
                                      </p>
                                    </div>
                                    <Button
                                      variant="primary"
                                      size="sm"
                                      onClick={() => handleLoadFromHistory(item)}
                                      icon="📂"
                                    >
                                      Load
                                    </Button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                          <div className="text-5xl mb-4">📭</div>
                          <p className="text-gray-400 text-lg">No history yet!</p>
                          <p className="text-gray-500 text-sm mt-2">Your cleaning sessions will appear here</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <FeaturesSection />

        {/* Stats Overview */}
        <StatsOverview />

        {/* Footer */}
        <Footer />
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-2xl animate-bounce border border-green-400">
          <p className="font-semibold">{toastMessage}</p>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}

function formatOptionName(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}