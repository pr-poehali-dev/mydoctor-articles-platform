import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const articles = [
    {
      id: 1,
      title: 'Профилактика сердечно-сосудистых заболеваний',
      excerpt: 'Основные методы предотвращения заболеваний сердца и сосудов. Правильное питание, физическая активность и регулярные обследования.',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/aecd4361-5016-478c-af26-aac9e1f152e5.jpg',
      date: '15 октября 2024'
    },
    {
      id: 2,
      title: 'Как правильно укреплять иммунитет',
      excerpt: 'Научно обоснованные способы укрепления иммунной системы. Витамины, режим дня, закаливание и другие эффективные методы.',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/aecd4361-5016-478c-af26-aac9e1f152e5.jpg',
      date: '10 октября 2024'
    },
    {
      id: 3,
      title: 'Здоровый сон: рекомендации врача',
      excerpt: 'Важность качественного сна для здоровья. Практические советы по улучшению качества сна и борьбе с бессонницей.',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/aecd4361-5016-478c-af26-aac9e1f152e5.jpg',
      date: '5 октября 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Мой Доктор</h1>
            </div>
            <div className="flex space-x-4">
              <Button
                variant={activeSection === 'about' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('about')}
                className="text-base"
              >
                Обо мне
              </Button>
              <Button
                variant={activeSection === 'articles' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('articles')}
                className="text-base"
              >
                Статьи
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'about' && (
          <section className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src="https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/27e42938-6716-4d31-8e50-f0fab86aabfc.jpg"
                      alt="Доктор"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Обо мне
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-lg leading-relaxed">
                        Добро пожаловать на мой медицинский блог! Я врач с многолетним опытом, 
                        и моя миссия — делиться знаниями о здоровье в доступной форме.
                      </p>
                      <p className="leading-relaxed">
                        Я глубоко уважаю профессию врача и понимаю, насколько важно доверие 
                        между доктором и пациентом. Здесь я делюсь проверенной медицинской 
                        информацией, основанной на научных исследованиях и клинической практике.
                      </p>
                      <p className="leading-relaxed">
                        Моя цель — помочь вам лучше понимать своё здоровье, разбираться в 
                        различных заболеваниях и их профилактике, а также принимать осознанные 
                        решения о своём благополучии.
                      </p>
                      <div className="pt-6 flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="Award" className="text-primary" size={20} />
                          <span className="text-sm">Сертифицированный врач</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="BookOpen" className="text-primary" size={20} />
                          <span className="text-sm">50+ статей</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'articles' && (
          <section className="animate-fade-in">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Статьи о здоровье
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Научно обоснованная информация о профилактике и лечении различных заболеваний
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                        <Icon name="Calendar" size={16} />
                        <span>{article.date}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {article.excerpt}
                      </CardDescription>
                      <Button className="mt-4 w-full" variant="outline">
                        <span>Читать статью</span>
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-white border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" size={24} className="text-primary" />
              <span className="font-semibold">Мой Доктор</span>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              Профессиональная медицинская информация для вашего здоровья
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
