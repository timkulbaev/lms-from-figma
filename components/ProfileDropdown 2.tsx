import { User, Settings, BookOpen, LogOut, Bell, HelpCircle } from 'lucide-react';

interface ProfileDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ProfileDropdown({ isOpen, onToggle }: ProfileDropdownProps) {
  const menuItems = [
    { icon: User, label: 'Профиль' },
    { icon: BookOpen, label: 'Мои курсы' },
    { icon: Bell, label: 'Уведомления' },
    { icon: Settings, label: 'Настройки' },
    { icon: HelpCircle, label: 'Помощь' },
    { icon: LogOut, label: 'Выйти', danger: true },
  ];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150"
        style={{ backgroundColor: isOpen ? 'rgba(255,255,255,0.08)' : 'transparent' }}
        onMouseEnter={(e) => { if (!isOpen) (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
        onMouseLeave={(e) => { if (!isOpen) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium flex-shrink-0"
          style={{ backgroundColor: '#38a169', color: '#ffffff', fontFamily: 'Nunito' }}
        >
          ТК
        </div>
        <div className="text-left min-w-0">
          <div className="text-sm font-medium truncate" style={{ color: '#e2e8f0', fontFamily: 'Nunito' }}>
            Тимур К.
          </div>
          <div className="text-xs truncate" style={{ color: '#718096', fontFamily: 'Nunito' }}>
            Администратор
          </div>
        </div>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={onToggle} />
          <div
            className="absolute bottom-full left-0 mb-2 z-50 w-56 rounded-xl overflow-hidden"
            style={{
              backgroundColor: '#ffffff',
              boxShadow: '0 8px 24px rgba(0,0,0,0.16)',
              border: '1px solid #e2e8f0',
            }}
          >
            <div className="px-3 py-2.5 border-b" style={{ borderColor: '#e2e8f0' }}>
              <div style={{ fontFamily: 'Nunito', fontSize: 13, fontWeight: 500, color: '#2d3748' }}>
                Тимур Кулбаев
              </div>
              <div style={{ fontFamily: 'Nunito', fontSize: 12, color: '#718096' }}>
                me@timconsulting.co
              </div>
            </div>
            <div className="py-1">
              {menuItems.map((item, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors duration-150"
                  style={{
                    fontFamily: 'Nunito',
                    color: item.danger ? '#e53e3e' : '#4a5568',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = item.danger ? '#fff5f5' : '#f7fafc';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
