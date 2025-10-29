import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Профилактика сердечно-сосудистых заболеваний',
      excerpt: 'Сердечно-сосудистые заболевания остаются одной из главных причин смертности в мире. Узнайте о современных методах профилактики, правильном питании и физической активности для поддержания здоровья сердца.',
      date: '15 октября 2025',
      category: 'Кардиология',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
      readTime: '5 мин',
    },
    {
      id: 2,
      title: 'Здоровый образ жизни: с чего начать',
      excerpt: 'Практические советы для тех, кто решил изменить свои привычки. От режима дня до правильного питания — пошаговое руководство по переходу к здоровому образу жизни.',
      date: '10 октября 2025',
      category: 'ЗОЖ',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
      readTime: '7 мин',
    },
    {
      id: 3,
      title: 'Важность регулярных медицинских осмотров',
      excerpt: 'Профилактические осмотры помогают выявить заболевания на ранних стадиях. Узнайте, какие обследования необходимо проходить в разном возрасте и почему это важно для вашего здоровья.',
      date: '5 октября 2025',
      category: 'Профилактика',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
      readTime: '6 мин',
    },
    {
      id: 4,
      title: 'Как укрепить иммунитет: научный подход',
      excerpt: 'Развенчиваем мифы об иммунитете и рассказываем о научно обоснованных методах его укрепления. От витаминов до закаливания — что действительно работает.',
      date: '1 октября 2025',
      category: 'Иммунология',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
      readTime: '8 мин',
    },
    {
      id: 5,
      title: 'Здоровый сон: советы от врача',
      excerpt: 'Качественный сон — основа здоровья. Разбираем причины нарушений сна и делимся эффективными рекомендациями для улучшения качества ночного отдыха.',
      date: '28 сентября 2025',
      category: 'Здоровье',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
      readTime: '5 мин',
    },
    {
      id: 6,
      title: 'Стресс и здоровье: как справляться',
      excerpt: 'Хронический стресс негативно влияет на все системы организма. Узнайте о механизмах стресса и эффективных методах его преодоления для сохранения здоровья.',
      date: '25 сентября 2025',
      category: 'Психосоматика',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
      readTime: '6 мин',
    },
  ];

  const categories = ['Все', 'Кардиология', 'ЗОЖ', 'Профилактика', 'Иммунология', 'Здоровье', 'Психосоматика'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-primary/10 to-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Блог о здоровье</h1>
              <p className="text-xl text-muted-foreground">
                Научно обоснованная информация о профилактике и лечении различных заболеваний
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'Все' ? 'default' : 'outline'}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={16} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={16} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-medium">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Загрузить ещё статьи
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Icon name="Bell" size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Подпишитесь на обновления</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Получайте новые статьи о здоровье на свою электронную почту
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-white"
                />
                <Button size="lg">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
