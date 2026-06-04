import { AnimatedButton } from './AnimatedButton';

interface Course {
  id: string;
  title: string;
  description: string;
  lessonsCount: number;
}

interface CourseGridProps {
  courses: Course[];
  onSelectCourse: (courseId: string, courseName: string) => void;
}

const COURSE_COLORS = [
  { bg: '#c6f6d5', icon: '#276749', dot: '#38a169' },
  { bg: '#bee3f8', icon: '#2a4365', dot: '#2c5282' },
  { bg: '#fefcbf', icon: '#744210', dot: '#975a16' },
  { bg: '#fed7d7', icon: '#822727', dot: '#c53030' },
  { bg: '#e9d8fd', icon: '#553c9a', dot: '#805ad5' },
  { bg: '#c6f6d5', icon: '#276749', dot: '#38a169' },
  { bg: '#bee3f8', icon: '#2a4365', dot: '#2c5282' },
  { bg: '#fefcbf', icon: '#744210', dot: '#975a16' },
];

export function CourseGrid({ courses, onSelectCourse }: CourseGridProps) {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 style={{ fontFamily: 'Nunito', fontSize: 24, fontWeight: 500, color: '#2d3748' }}>
          Все курсы
        </h1>
        <p style={{ fontFamily: 'Nunito', fontSize: 14, color: '#718096', marginTop: 4 }}>
          {courses.length} курсов доступно
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {courses.map((course, index) => {
          const colors = COURSE_COLORS[index % COURSE_COLORS.length];
          return (
            <div
              key={course.id}
              className="cursor-pointer group"
              onClick={() => onSelectCourse(course.id, course.title)}
            >
              <div
                className="rounded-xl p-6 flex flex-col h-56 transition-shadow duration-200"
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
                  <span>📚</span>
                </div>

                {/* Title */}
                <h3
                  className="font-medium line-clamp-2 mb-2 flex-1"
                  style={{ fontFamily: 'Nunito', fontSize: 16, fontWeight: 500, color: '#2d3748' }}
                >
                  {course.title}
                </h3>

                {/* Description */}
                <p
                  className="line-clamp-2 mb-4"
                  style={{ fontFamily: 'Nunito', fontSize: 13, color: '#718096', lineHeight: 1.5 }}
                >
                  {course.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.dot }}
                    />
                    <span style={{ fontFamily: 'Nunito', fontSize: 13, color: '#4a5568' }}>
                      {course.lessonsCount} уроков
                    </span>
                  </div>
                  <AnimatedButton
                    bgColor={colors.bg}
                    textColor={colors.icon}
                    onClick={(e) => { e.stopPropagation(); onSelectCourse(course.id, course.title); }}
                  >
                    Открыть →
                  </AnimatedButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
