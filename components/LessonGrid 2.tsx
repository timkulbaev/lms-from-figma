interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean;
  assignments?: number;
}

interface LessonGridProps {
  lessons: Lesson[];
  onSelectLesson: (lessonId: string) => void;
}

export function LessonGrid({ lessons, onSelectLesson }: LessonGridProps) {
  const completedCount = lessons.filter((l) => l.completed).length;
  const progress = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  return (
    <div className="p-8">
      {/* Progress header */}
      <div
        className="rounded-xl p-5 mb-6 flex items-center justify-between"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
      >
        <div>
          <p style={{ fontFamily: 'Nunito', fontSize: 13, color: '#718096', marginBottom: 6 }}>
            Прогресс раздела
          </p>
          <div className="flex items-center gap-3">
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ width: 200, backgroundColor: '#e2e8f0' }}
            >
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%`, backgroundColor: '#38a169' }}
              />
            </div>
            <span style={{ fontFamily: 'Nunito', fontSize: 14, fontWeight: 500, color: '#2d3748' }}>
              {progress}%
            </span>
          </div>
        </div>
        <div className="text-right">
          <span style={{ fontFamily: 'Nunito', fontSize: 13, color: '#4a5568' }}>
            {completedCount} из {lessons.length} уроков
          </span>
        </div>
      </div>

      {/* Lessons grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className="cursor-pointer"
            onClick={() => onSelectLesson(lesson.id)}
          >
            <div
              className="rounded-xl p-5 flex flex-col h-48 transition-shadow duration-200"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                borderLeft: lesson.completed ? '3px solid #38a169' : '3px solid #e2e8f0',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
              }}
            >
              {/* Number + status */}
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium"
                  style={{
                    fontFamily: 'Nunito',
                    backgroundColor: lesson.completed ? '#c6f6d5' : '#edf2f7',
                    color: lesson.completed ? '#276749' : '#4a5568',
                  }}
                >
                  {lesson.completed ? '✓' : index + 1}
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    fontFamily: 'Nunito',
                    backgroundColor: '#edf2f7',
                    color: '#718096',
                  }}
                >
                  {lesson.duration}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-medium line-clamp-2 mb-1.5 flex-1"
                style={{ fontFamily: 'Nunito', fontSize: 15, fontWeight: 500, color: '#2d3748' }}
              >
                {lesson.title}
              </h3>

              {/* Description */}
              <p
                className="line-clamp-2 mb-3"
                style={{ fontFamily: 'Nunito', fontSize: 12, color: '#718096', lineHeight: 1.5 }}
              >
                {lesson.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                {lesson.assignments ? (
                  <span style={{ fontFamily: 'Nunito', fontSize: 12, color: '#a0aec0' }}>
                    {lesson.assignments} заданий
                  </span>
                ) : <span />}
                <button
                  className="text-xs px-3 py-1.5 rounded-lg font-medium transition-colors duration-150"
                  style={{
                    fontFamily: 'Nunito',
                    backgroundColor: lesson.completed ? '#c6f6d5' : '#bee3f8',
                    color: lesson.completed ? '#276749' : '#2a4365',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '0.85';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }}
                >
                  {lesson.completed ? 'Повторить' : 'Начать'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
