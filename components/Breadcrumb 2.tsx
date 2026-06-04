import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface BreadcrumbDropdownItem {
  label: string;
  onClick: () => void;
}

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  items?: BreadcrumbDropdownItem[];
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="px-8 py-4 border-b" style={{ borderColor: '#e2e8f0', backgroundColor: '#ffffff' }}>
      <div className="flex items-center flex-wrap gap-1.5">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className="relative"
              onMouseEnter={() => item.items && setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors duration-150"
                  style={{
                    fontFamily: 'Nunito',
                    color: '#38a169',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#f0fff4'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                >
                  {item.label}
                  {item.items && <ChevronDown className="w-3 h-3" />}
                </button>
              ) : (
                <span
                  className="flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium"
                  style={{
                    fontFamily: 'Nunito',
                    color: '#2d3748',
                    backgroundColor: '#edf2f7',
                  }}
                >
                  {item.label}
                  {item.items && <ChevronDown className="w-3 h-3" />}
                </span>
              )}

              {item.items && hoveredIndex === index && (
                <div
                  className="absolute top-full left-0 mt-1 min-w-56 z-50 rounded-lg overflow-hidden"
                  style={{
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div className="py-1">
                    {item.items.map((dropdownItem, i) => (
                      <button
                        key={i}
                        onClick={dropdownItem.onClick}
                        className="w-full text-left px-3 py-2 text-sm transition-colors duration-150"
                        style={{ fontFamily: 'Nunito', color: '#4a5568' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#f7fafc'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {index < items.length - 1 && (
              <span style={{ color: '#a0aec0', fontSize: 14 }}>/</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
