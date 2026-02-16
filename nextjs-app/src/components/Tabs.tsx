'use client';

interface TabProps {
  tabs: { id: string; label: string; count?: number }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function Tabs({ tabs, activeTab, onTabChange }: TabProps) {
  return (
    <div className="flex gap-2 flex-wrap border-b-2 border-gray-200 pb-4">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-6 py-3 font-semibold transition-all duration-300 rounded-t-lg
            ${activeTab === tab.id
              ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }
          `}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ml-2 px-2 py-1 bg-white bg-opacity-30 rounded-full text-sm">
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
