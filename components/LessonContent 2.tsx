interface LessonContentProps {
  lessonTitle: string;
  lessonContent: string;
  duration: string;
  videoUrl: string;
  onComplete: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export function LessonContent({
  lessonTitle,
  lessonContent,
  duration,
  videoUrl,
  onComplete,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: LessonContentProps) {
  return (
    <div className="p-8">
      <div className="max-w-4xl">
        {/* Video card */}
        <div
          className="rounded-xl overflow-hidden mb-5"
          style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4 flex items-start justify-between">
            <div>
              <h1
                style={{ fontFamily: 'Nunito', fontSize: 21, fontWeight: 500, color: '#2d3748' }}
              >
                {lessonTitle}
              </h1>
            </div>
            <span
              className="rounded-lg px-3 py-1 text-sm flex-shrink-0 ml-4"
              style={{
                fontFamily: 'Nunito',
                backgroundColor: '#edf2f7',
                color: '#4a5568',
                fontSize: 13,
              }}
            >
              {duration}
            </span>
          </div>

          {/* Video */}
          <div className="px-6">
            <div
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: '16/9', backgroundColor: '#1a202c' }}
            >
              <iframe
                src={videoUrl}
                title={lessonTitle}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Content */}
          {lessonContent && (
            <div className="px-6 py-5">
              <div
                className="whitespace-pre-line leading-relaxed"
                style={{ fontFamily: 'Nunito', fontSize: 15, color: '#4a5568', lineHeight: 1.7 }}
              >
                {lessonContent}
              </div>
            </div>
          )}
        </div>

        {/* Navigation row */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {hasPrevious && (
              <button
                onClick={onPrevious}
                className="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
                style={{
                  fontFamily: 'Nunito',
                  backgroundColor: '#e2e8f0',
                  color: '#4a5568',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#cbd5e0'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#e2e8f0'; }}
              >
                ← Предыдущий
              </button>
            )}
            {hasNext && (
              <button
                onClick={onNext}
                className="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
                style={{
                  fontFamily: 'Nunito',
                  backgroundColor: '#bee3f8',
                  color: '#2a4365',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#90cdf4'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#bee3f8'; }}
              >
                Следующий →
              </button>
            )}
          </div>

          <button
            onClick={onComplete}
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
            style={{
              fontFamily: 'Nunito',
              backgroundColor: '#c6f6d5',
              color: '#276749',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#9ae6b4'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#c6f6d5'; }}
          >
            Завершить урок ✓
          </button>
        </div>
      </div>
    </div>
  );
}
