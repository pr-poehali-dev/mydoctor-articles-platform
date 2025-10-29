import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: 'Heart',
      title: 'Профессиональный подход',
      description: 'Актуальная информация основанная на последних медицинских исследованиях',
    },
    {
      icon: 'BookOpen',
      title: 'Образовательные статьи',
      description: 'Понятные объяснения сложных медицинских тем для каждого',
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Рекомендации с учетом особенностей каждого пациента',
    },
  ];

  const recentArticles = [
    {
      id: 1,
      title: 'Профилактика сердечно-сосудистых заболеваний',
      excerpt: 'Основные рекомендации по поддержанию здоровья сердца и сосудов в любом возрасте',
      date: '15 октября 2025',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
    },
    {
      id: 2,
      title: 'Здоровый образ жизни: с чего начать',
      excerpt: 'Практические советы для тех, кто решил изменить свои привычки и улучшить качество жизни',
      date: '10 октября 2025',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
    },
    {
      id: 3,
      title: 'Важность регулярных медицинских осмотров',
      excerpt: 'Почему профилактические визиты к врачу помогают сохранить здоровье на долгие годы',
      date: '5 октября 2025',
      image: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-primary/10 to-secondary py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  Ваше здоровье — наш приоритет
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Профессиональные медицинские статьи, советы и рекомендации от практикующего врача
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/blog">
                    <Button size="lg" className="w-full sm:w-auto">
                      Читать статьи
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Обо мне
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/29094065-0943-49da-8a1c-a53831713d62.jpg"
                  alt="Медицинский кабинет"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Качественная медицинская информация, доступная каждому
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={feature.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Последние статьи</h2>
                <p className="text-lg text-muted-foreground">
                  Актуальная информация о здоровье и медицине
                </p>
              </div>
              <Link to="/blog">
                <Button variant="outline">
                  Все статьи
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <Link to="/blog" className="text-primary font-medium hover:underline inline-flex items-center">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-white overflow-hidden">
              <CardContent className="p-12 text-center">
                <Icon name="Mail" size={48} className="mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Свяжитесь со мной для консультации или записи на прием
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Написать письмо
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
