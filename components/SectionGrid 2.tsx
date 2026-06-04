interface Section {
  id: string;
  title: string;
  description: string;
  lessonsCount: number;
  icon: string;
}

interface SectionGridProps {
  sections: Section[];
  onSelectSection: (sectionId: string, sectionName: string) => void;
}

const SECTION_COLORS = [
  { bg: '#c6f6d5', text: '#276749', dot: '#38a169' },
  { bg: '#bee3f8', text: '#2a4365', dot: '#2c5282' },
  { bg: '#fefcbf', text: '#744210', dot: '#975a16' },
];

export function SectionGrid({ sections, onSelectSection }: SectionGridProps) {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 style={{ fontFamily: 'Nunito', fontSize: 21, fontWeight: 500, color: '#2d3748' }}>
          Разделы курса
        </h2>
        <p style={{ fontFamily: 'Nunito', fontSize: 14, color: '#718096', marginTop: 4 }}>
          {sections.length} разделов
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((section, index) => {
          const colors = SECTION_COLORS[index % SECTION_COLORS.length];
          return (
            <div
              key={section.id}
              className="cursor-pointer"
              onClick={() => onSelectSection(section.id, section.title)}
            >
              <div
                className="rounded-xl p-6 flex flex-col h-52 transition-shadow duration-200"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                  style={{ backgroundColor: colors.bg }}
                >
                  <span>{section.icon}</span>
                </div>

                {/* Title */}
                <h3
                  className="font-medium line-clamp-2 mb-2 flex-1"
                  style={{ fontFamily: 'Nunito', fontSize: 16, fontWeight: 500, color: '#2d3748' }}
                >
                  {section.title}
                </h3>

                {/* Description */}
                <p
                  className="line-clamp-2 mb-4"
                  style={{ fontFamily: 'Nunito', fontSize: 13, color: '#718096', lineHeight: 1.5 }}
                >
                  {section.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.dot }} />
                    <span style={{ fontFamily: 'Nunito', fontSize: 13, color: '#4a5568' }}>
                      {section.lessonsCount} уроков
                    </span>
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-md"
                    style={{ fontFamily: 'Nunito', backgroundColor: colors.bg, color: colors.text, fontWeight: 500 }}
                  >
                    Перейти →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
