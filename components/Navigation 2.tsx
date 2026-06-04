import { useState } from 'react';
import { ProfileDropdown } from './ProfileDropdown';

interface NavigationProps {
  currentView: 'courses' | 'lessons';
  currentCourse?: string;
  onBackToCourses: () => void;
}

const NAV_ITEMS = [
  { label: 'Курсы', view: 'courses' as const, icon: '📚' },
];

export function Navigation({ currentView, onBackToCourses }: NavigationProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <aside
      className="fixed top-0 left-0 bottom-0 flex flex-col z-50"
      style={{ width: 240, backgroundColor: '#1a202c' }}
    >
      {/* Logo */}
      <div className="px-6 py-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-medium"
            style={{ backgroundColor: '#38a169' }}
          >
            LW
          </div>
          <div>
            <div className="text-white text-sm font-medium" style={{ fontFamily: 'Nunito' }}>LearnWithTimur</div>
            <div className="text-xs" style={{ color: '#718096' }}>LMS Platform</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = currentView === 'courses' ? item.view === 'courses' : false;
          return (
            <button
              key={item.view}
              onClick={item.view === 'courses' ? onBackToCourses : undefined}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors duration-150"
              style={{
                fontFamily: 'Nunito',
                backgroundColor: active ? 'rgba(56,161,105,0.15)' : 'transparent',
                color: active ? '#68d391' : '#a0aec0',
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}

        {currentView === 'lessons' && (
          <button
            onClick={onBackToCourses}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors duration-150"
            style={{ fontFamily: 'Nunito', color: '#718096' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <span>←</span>
            <span>Назад к курсам</span>
          </button>
        )}
      </nav>

      {/* Profile */}
      <div className="px-3 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <ProfileDropdown
          isOpen={isProfileOpen}
          onToggle={() => setIsProfileOpen(!isProfileOpen)}
        />
      </div>
    </aside>
  );
}
