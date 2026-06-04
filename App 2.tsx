import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { CourseGrid } from './components/CourseGrid';
import { SectionGrid } from './components/SectionGrid';
import { LessonGrid } from './components/LessonGrid';
import { LessonContent } from './components/LessonContent';
import { Breadcrumb } from './components/Breadcrumb';

const courses = [
  {
    id: 'transformation-4-0',
    title: 'Трансформация 4.0',
    description: 'Комплексный курс по цифровой трансформации бизнеса в эпоху Industry 4.0',
    lessonsCount: 24
  },
  {
    id: 'transformation-2-1',
    title: 'Трансформация 2.1',
    description: 'Основы бизнес-трансформации и адаптации к новым рыночным условиям',
    lessonsCount: 18
  },
  {
    id: 'scale',
    title: 'Масштаб',
    description: 'Стратегии и методы масштабирования бизнеса для устойчивого роста',
    lessonsCount: 15
  },
  {
    id: 'ai',
    title: 'Искусственный интеллект',
    description: 'Применение ИИ в бизнесе: от автоматизации до принятия решений',
    lessonsCount: 22
  },
  {
    id: 'leadership',
    title: 'Лидерство в цифровую эпоху',
    description: 'Развитие лидерских качеств и управление командами в условиях цифровой трансформации',
    lessonsCount: 16
  },
  {
    id: 'data-analytics',
    title: 'Данные и аналитика',
    description: 'Принятие решений на основе данных и внедрение аналитических решений',
    lessonsCount: 20
  },
  {
    id: 'customer-experience',
    title: 'Клиентский опыт',
    description: 'Создание выдающегося клиентского опыта в цифровой среде',
    lessonsCount: 14
  },
  {
    id: 'innovation',
    title: 'Инновации и R&D',
    description: 'Методологии инновационного развития и управления исследованиями',
    lessonsCount: 19
  }
];

const sectionsData = {
  'transformation-4-0': [
    {
      id: 'foundation',
      title: 'Основы трансформации',
      description: 'Фундаментальные принципы цифровой трансформации',
      lessonsCount: 8,
      icon: '🎯'
    },
    {
      id: 'product-development',
      title: 'Разработка продуктов',
      description: 'Создание и развитие цифровых продуктов',
      lessonsCount: 8,
      icon: '🚀'
    },
    {
      id: 'marketing',
      title: 'Маркетинг и продвижение',
      description: 'Стратегии продвижения в цифровой среде',
      lessonsCount: 8,
      icon: '📈'
    }
  ],
  'transformation-2-1': [
    {
      id: 'change-management',
      title: 'Управление изменениями',
      description: 'Методологии управления организационными изменениями',
      lessonsCount: 6,
      icon: '🔄'
    },
    {
      id: 'process-optimization',
      title: 'Оптимизация процессов',
      description: 'Анализ и улучшение бизнес-процессов',
      lessonsCount: 6,
      icon: '⚡'
    },
    {
      id: 'culture-transformation',
      title: 'Трансформация культуры',
      description: 'Создание культуры инноваций и адаптивности',
      lessonsCount: 6,
      icon: '🌟'
    }
  ],
  'scale': [
    {
      id: 'growth-strategies',
      title: 'Стратегии роста',
      description: 'Планирование и реализация стратегий масштабирования',
      lessonsCount: 5,
      icon: '📊'
    },
    {
      id: 'operations-scaling',
      title: 'Масштабирование операций',
      description: 'Построение масштабируемых операционных процессов',
      lessonsCount: 5,
      icon: '🏭'
    },
    {
      id: 'team-scaling',
      title: 'Масштабирование команды',
      description: 'Найм, развитие и управление растущими командами',
      lessonsCount: 5,
      icon: '👥'
    }
  ],
  'ai': [
    {
      id: 'ai-fundamentals',
      title: 'Основы ИИ',
      description: 'Понимание принципов и возможностей искусственного интеллекта',
      lessonsCount: 7,
      icon: '🤖'
    },
    {
      id: 'ai-implementation',
      title: 'Внедрение ИИ',
      description: 'Практические аспекты внедрения ИИ-решений в бизнес',
      lessonsCount: 8,
      icon: '⚙️'
    },
    {
      id: 'ai-ethics',
      title: 'Этика и ИИ',
      description: 'Этические аспекты использования искусственного интеллекта',
      lessonsCount: 7,
      icon: '🛡️'
    }
  ],
  'leadership': [
    {
      id: 'digital-leadership',
      title: 'Цифровое лидерство',
      description: 'Лидерские качества для цифровой эпохи',
      lessonsCount: 5,
      icon: '👑'
    },
    {
      id: 'team-management',
      title: 'Управление командой',
      description: 'Эффективное управление удаленными и гибридными командами',
      lessonsCount: 6,
      icon: '🎯'
    },
    {
      id: 'strategic-thinking',
      title: 'Стратегическое мышление',
      description: 'Развитие навыков стратегического планирования',
      lessonsCount: 5,
      icon: '🧠'
    }
  ],
  'data-analytics': [
    {
      id: 'data-fundamentals',
      title: 'Основы работы с данными',
      description: 'Понимание принципов сбора, обработки и анализа данных',
      lessonsCount: 7,
      icon: '📊'
    },
    {
      id: 'analytics-tools',
      title: 'Инструменты аналитики',
      description: 'Практическое использование аналитических платформ',
      lessonsCount: 7,
      icon: '🔧'
    },
    {
      id: 'data-driven-decisions',
      title: 'Решения на основе данных',
      description: 'Принятие стратегических решений с использованием данных',
      lessonsCount: 6,
      icon: '💡'
    }
  ]
};

const lessonsData = {
  'foundation': [
    {
      id: 'intro',
      title: 'Введение в трансформацию',
      description: 'Знакомство с основными концепциями цифровой трансформации',
      duration: '15 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      assignments: 2
    },
    {
      id: 'principles',
      title: 'Принципы трансформации',
      description: 'Ключевые принципы успешной цифровой трансформации',
      duration: '25 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      assignments: 3
    },
    {
      id: 'strategy',
      title: 'Стратегическое п��анирование',
      description: 'Разработка стратегии цифровой трансформации',
      duration: '30 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
      assignments: 4
    },
    {
      id: 'implementation',
      title: 'Внедрение изменений',
      description: 'Практические аспекты внедрения трансформационных процессов',
      duration: '40 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
      assignments: 3
    },
    {
      id: 'measurement',
      title: 'Измерение результатов',
      description: 'KPI и метрики успешности цифровой трансформации',
      duration: '35 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso',
      assignments: 2
    },
    {
      id: 'risk-management',
      title: 'Управление рисками',
      description: 'Идентификация и минимизация рисков при трансформации',
      duration: '28 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/ZXsQAXx_ao0',
      assignments: 3
    },
    {
      id: 'stakeholder-management',
      title: 'Управление стейкхолдерами',
      description: 'Работа с заинтересованными сторонами в процессе изменений',
      duration: '32 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/CdBtNQZH8a4',
      assignments: 2
    },
    {
      id: 'best-practices',
      title: 'Лучшие практики',
      description: 'Изучение успешных кейсов цифровой трансформации',
      duration: '45 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/M7lc1UVf-VE',
      assignments: 4
    }
  ],
  'product-development': [
    {
      id: 'product-strategy',
      title: 'Продуктовая стратегия',
      description: 'Разработка стратегии развития цифрового продукта',
      duration: '35 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/0JODA7hrKZE',
      assignments: 3
    },
    {
      id: 'user-research',
      title: 'Исследование пользователей',
      description: 'Методы изучения потребностей и поведения пользователей',
      duration: '40 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/BaW_jenozKc',
      assignments: 4
    },
    {
      id: 'product-design',
      title: 'Дизайн продукта',
      description: 'UX/UI дизайн и принципы создания интуитивных интерфейсов',
      duration: '50 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/YQHsXMglC9A',
      assignments: 5
    },
    {
      id: 'mvp-development',
      title: 'Разработка MVP',
      description: 'Создание минимально жизнеспособного продукта',
      duration: '45 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/hTWKbfoikeg',
      assignments: 4
    },
    {
      id: 'product-testing',
      title: 'Тестирование продукта',
      description: 'Методы валидации и тестирования продуктовых гипотез',
      duration: '38 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      assignments: 3
    },
    {
      id: 'product-launch',
      title: 'Запуск продукта',
      description: 'Стратегии и тактики успешного вывода продукта на рынок',
      duration: '42 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      assignments: 4
    },
    {
      id: 'product-growth',
      title: 'Рост продукта',
      description: 'Методы ускорения роста и масштабирования продукта',
      duration: '48 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
      assignments: 5
    },
    {
      id: 'product-analytics',
      title: 'Продуктовая аналитика',
      description: 'Анализ метрик и принятие решений на основе данных',
      duration: '44 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
      assignments: 4
    }
  ],
  'marketing': [
    {
      id: 'digital-marketing-strategy',
      title: 'Стратегия цифрового маркетинга',
      description: 'Разработка комплексной стратегии продвижения в digital',
      duration: '35 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso',
      assignments: 3
    },
    {
      id: 'content-marketing',
      title: 'Контент-маркетинг',
      description: 'Создание и продвижение качественного контента',
      duration: '40 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/ZXsQAXx_ao0',
      assignments: 4
    },
    {
      id: 'social-media-marketing',
      title: 'Маркетинг в социальных сетях',
      description: 'Эффективное продвижение в социальных платформах',
      duration: '38 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/CdBtNQZH8a4',
      assignments: 3
    },
    {
      id: 'seo-optimization',
      title: 'SEO-оптимизация',
      description: 'Поисковая оптимизация и органическое продвижение',
      duration: '45 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/M7lc1UVf-VE',
      assignments: 4
    },
    {
      id: 'paid-advertising',
      title: 'Платная реклама',
      description: 'Настройка и оптимизация рекламных кампаний',
      duration: '42 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/0JODA7hrKZE',
      assignments: 5
    },
    {
      id: 'email-marketing',
      title: 'Email-маркетинг',
      description: 'Автоматизация и персонализация email-коммуникаций',
      duration: '36 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/BaW_jenozKc',
      assignments: 3
    },
    {
      id: 'marketing-automation',
      title: 'Маркетинговая автоматизация',
      description: 'Внедрение CRM и автоматизация маркетинговых процессов',
      duration: '44 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/YQHsXMglC9A',
      assignments: 4
    },
    {
      id: 'marketing-analytics',
      title: 'Маркетинговая аналитика',
      description: 'Измерение эффективности и ROI маркетинговых активностей',
      duration: '40 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/hTWKbfoikeg',
      assignments: 4
    }
  ],
  'change-management': [
    {
      id: 'change-fundamentals',
      title: 'Основы управления изменениями',
      description: 'Теория и практика организационных изменений',
      duration: '30 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      assignments: 2
    },
    {
      id: 'resistance-management',
      title: 'Преодоление сопротивления',
      description: 'Работа с сопротивлением изменениям в организации',
      duration: '35 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      assignments: 3
    },
    {
      id: 'communication-strategy',
      title: 'Коммуникационная стратегия',
      description: 'Эффективная коммуникация в процессе изменений',
      duration: '32 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
      assignments: 3
    },
    {
      id: 'change-planning',
      title: 'Планирование изменений',
      description: 'Разработка детального плана внедрения изменений',
      duration: '38 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
      assignments: 4
    },
    {
      id: 'training-development',
      title: 'Обучение и развитие',
      description: 'Подготовка сотрудников к новым процессам и технологиям',
      duration: '40 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso',
      assignments: 3
    },
    {
      id: 'change-sustainability',
      title: 'Устойчивость изменений',
      description: 'Закрепление результатов и предотвращение откатов',
      duration: '36 мин',
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/ZXsQAXx_ao0',
      assignments: 3
    }
  ]
};

const lessonContents = {
  'intro': `Добро пожаловать в курс "Трансформация 4.0"!

В этом уроке мы рассмотрим основные концепции цифровой трансформации и их влияние на современный бизнес.

Цифровая трансформация - это не просто внедрение новых технологий, а комплексное изменение бизнес-модели, процессов и культуры организации.

Ключевые темы урока:
• Что такое Industry 4.0
• Основные драйверы цифровой трансформации  
• Влияние на бизнес-процессы
• Подготовка к изменениям

Этот урок заложит фундамент для понимания всего курса.

Задания:
1. Проанализируйте свою отрасль и определите основные технологические тренды
2. Составьте список потенциальных возможностей для цифровой трансформации в вашей компании`,
  
  'product-strategy': `Продуктовая стратегия в цифровую эпоху

Разработка эффективной продуктовой стратегии требует глубокого понимания рынка, пользователей и технологических возможностей.

Основные компоненты продуктовой стратегии:

1. Видение продукта
   • Определение долгосрочных целей
   • Формулировка ценностного предложения
   • Позиционирование на рынке

2. Анализ рынка и конкурентов
   • Исследование целевой аудитории
   • Анализ конкурентного ландшафта
   • Выявление рыночных возможностей

3. Продуктовая roadmap
   • Планирование развития продукта
   • Приоритизация функций
   • Управление ресурсами

4. Метрики успеха
   • KPI продукта
   • Пользовательские метрики
   • Бизнес-показатели

Практические задания помогут вам применить полученные знания к реальным проектам.

Задания:
1. Создайте vision statement для вашего продукта
2. Проведите анализ конкурентов
3. Разработайте roadmap на 6 месяцев`,

  'digital-marketing-strategy': `Стратегия цифрового маркетинга

Современный маркетинг требует интегрированного подхода к продвижению в цифровых каналах.

Основы цифрового маркетинга:

1. Целевая аудитория
   • Создание персон покупателей
   • Сегментация аудитории
   • Customer journey mapping

2. Многоканальность
   • SEO и контент-маркетинг
   • Социальные сети
   • Email-маркетинг
   • Платная реклама

3. Автоматизация
   • CRM-системы
   • Marketing automation
   • Персонализация контента

4. Аналитика и оптимизация
   • Веб-аналитика
   • A/B-тестирование
   • ROI измерение

Этот урок поможет вам построить эффективную маркетинговую стратегию.

Задания:
1. Создайте персоны ваших целевых клиентов
2. Разработайте контент-план на месяц
3. Настройте базовую аналитику`
};

export default function App() {
  const [currentView, setCurrentView] = useState<'courses' | 'sections' | 'lessons' | 'lesson-content'>('courses');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedCourseName, setSelectedCourseName] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [selectedSectionName, setSelectedSectionName] = useState<string>('');
  const [selectedLesson, setSelectedLesson] = useState<string>('');
  const [selectedLessonName, setSelectedLessonName] = useState<string>('');

  const handleSelectCourse = (courseId: string, courseName: string) => {
    setSelectedCourse(courseId);
    setSelectedCourseName(courseName);
    setCurrentView('sections');
  };

  const handleSelectSection = (sectionId: string, sectionName: string) => {
    setSelectedSection(sectionId);
    setSelectedSectionName(sectionName);
    setCurrentView('lessons');
  };

  const handleSelectLesson = (lessonId: string) => {
    const lesson = currentLessons.find(l => l.id === lessonId);
    if (lesson) {
      setSelectedLesson(lessonId);
      setSelectedLessonName(lesson.title);
      setCurrentView('lesson-content');
    }
  };

  const handleNextLesson = () => {
    const currentIndex = currentLessons.findIndex(l => l.id === selectedLesson);
    if (currentIndex < currentLessons.length - 1) {
      const nextLesson = currentLessons[currentIndex + 1];
      setSelectedLesson(nextLesson.id);
      setSelectedLessonName(nextLesson.title);
    }
  };

  const handlePreviousLesson = () => {
    const currentIndex = currentLessons.findIndex(l => l.id === selectedLesson);
    if (currentIndex > 0) {
      const prevLesson = currentLessons[currentIndex - 1];
      setSelectedLesson(prevLesson.id);
      setSelectedLessonName(prevLesson.title);
    }
  };

  const handleBackToCourses = () => {
    setCurrentView('courses');
    setSelectedCourse('');
    setSelectedCourseName('');
    setSelectedSection('');
    setSelectedSectionName('');
    setSelectedLesson('');
    setSelectedLessonName('');
  };

  const handleBackToSections = () => {
    setCurrentView('sections');
    setSelectedSection('');
    setSelectedSectionName('');
    setSelectedLesson('');
    setSelectedLessonName('');
  };

  const handleBackToLessons = () => {
    setCurrentView('lessons');
    setSelectedLesson('');
    setSelectedLessonName('');
  };

  const handleCompleteLesson = () => {
    // Mark lesson as completed and go back to lessons
    setCurrentView('lessons');
    setSelectedLesson('');
    setSelectedLessonName('');
  };

  const currentSections = selectedCourse ? sectionsData[selectedCourse as keyof typeof sectionsData] || [] : [];
  const currentLessons = selectedSection ? lessonsData[selectedSection as keyof typeof lessonsData] || [] : [];
  const currentLessonContent = selectedLesson ? lessonContents[selectedLesson as keyof typeof lessonContents] || '' : '';

  const getBreadcrumbItems = () => {
    switch (currentView) {
      case 'courses':
        return [{ 
          label: 'Все курсы',
          items: courses.map(course => ({
            label: course.title,
            onClick: () => handleSelectCourse(course.id, course.title)
          }))
        }];
      case 'sections':
        return [
          { 
            label: 'Все курсы', 
            onClick: handleBackToCourses,
            items: courses.map(course => ({
              label: course.title,
              onClick: () => handleSelectCourse(course.id, course.title)
            }))
          },
          { 
            label: selectedCourseName,
            items: currentSections.map(section => ({
              label: section.title,
              onClick: () => handleSelectSection(section.id, section.title)
            }))
          }
        ];
      case 'lessons':
        return [
          { 
            label: 'Все курсы', 
            onClick: handleBackToCourses,
            items: courses.map(course => ({
              label: course.title,
              onClick: () => handleSelectCourse(course.id, course.title)
            }))
          },
          { 
            label: selectedCourseName, 
            onClick: handleBackToSections,
            items: currentSections.map(section => ({
              label: section.title,
              onClick: () => handleSelectSection(section.id, section.title)
            }))
          },
          { 
            label: selectedSectionName,
            items: currentLessons.map(lesson => ({
              label: lesson.title,
              onClick: () => handleSelectLesson(lesson.id)
            }))
          }
        ];
      case 'lesson-content':
        return [
          { 
            label: 'Все курсы', 
            onClick: handleBackToCourses,
            items: courses.map(course => ({
              label: course.title,
              onClick: () => handleSelectCourse(course.id, course.title)
            }))
          },
          { 
            label: selectedCourseName, 
            onClick: handleBackToSections,
            items: currentSections.map(section => ({
              label: section.title,
              onClick: () => handleSelectSection(section.id, section.title)
            }))
          },
          { 
            label: selectedSectionName, 
            onClick: handleBackToLessons,
            items: currentLessons.map(lesson => ({
              label: lesson.title,
              onClick: () => handleSelectLesson(lesson.id)
            }))
          },
          { 
            label: selectedLessonName
          }
        ];
      default:
        return [{ label: 'Все курсы' }];
    }
  };

  const getNavigationTitle = () => {
    switch (currentView) {
      case 'courses':
        return 'Курсы';
      case 'sections':
        return selectedCourseName;
      case 'lessons':
        return selectedSectionName;
      case 'lesson-content':
        return selectedLessonName;
      default:
        return 'Курсы';
    }
  };

  const getNavigationView = () => {
    return currentView === 'courses' ? 'courses' : 'lessons';
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#edf2f7', fontFamily: 'Nunito, sans-serif' }}>
      {/* Sidebar */}
      <Navigation
        currentView={getNavigationView()}
        currentCourse={getNavigationTitle()}
        onBackToCourses={handleBackToCourses}
      />

      {/* Main */}
      <div className="flex-1 flex flex-col" style={{ marginLeft: 240, minHeight: '100vh' }}>
        {/* Breadcrumb / top bar */}
        <Breadcrumb items={getBreadcrumbItems()} />

        {/* Content */}
        <main className="flex-1">
          {currentView === 'courses' && (
            <CourseGrid
              courses={courses}
              onSelectCourse={handleSelectCourse}
            />
          )}

          {currentView === 'sections' && (
            <SectionGrid
              sections={currentSections}
              onSelectSection={handleSelectSection}
            />
          )}

          {currentView === 'lessons' && (
            <LessonGrid
              lessons={currentLessons}
              onSelectLesson={handleSelectLesson}
            />
          )}

          {currentView === 'lesson-content' && selectedLesson && (
            <LessonContent
              lessonTitle={selectedLessonName}
              lessonContent={currentLessonContent}
              duration={currentLessons.find(l => l.id === selectedLesson)?.duration || ''}
              videoUrl={currentLessons.find(l => l.id === selectedLesson)?.videoUrl || ''}
              onComplete={handleCompleteLesson}
              onNext={handleNextLesson}
              onPrevious={handlePreviousLesson}
              hasNext={currentLessons.findIndex(l => l.id === selectedLesson) < currentLessons.length - 1}
              hasPrevious={currentLessons.findIndex(l => l.id === selectedLesson) > 0}
            />
          )}
        </main>
      </div>
    </div>
  );
}