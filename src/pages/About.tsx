import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const achievements = [
    { icon: 'Award', text: 'Сертифицированный специалист', count: '15+' },
    { icon: 'Users', text: 'Благодарных пациентов', count: '1000+' },
    { icon: 'BookOpen', text: 'Опубликованных статей', count: '50+' },
    { icon: 'Briefcase', text: 'Лет практики', count: '10+' },
  ];

  const qualifications = [
    'Высшее медицинское образование',
    'Специализация в терапии',
    'Повышение квалификации каждый год',
    'Участие в медицинских конференциях',
    'Публикации в научных журналах',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-primary/10 to-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h1>
              <p className="text-xl text-muted-foreground">
                Врач с многолетним опытом, который любит свою профессию
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/eb2eff6d-1456-4ead-b076-bc36262a47d5.jpg"
                  alt="Доктор"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Моя история</h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Добро пожаловать на мой медицинский блог! Я врач с многолетним опытом работы, 
                    и моя главная цель — делиться медицинскими знаниями в доступной и понятной форме.
                  </p>
                  <p>
                    Я глубоко уважаю и люблю профессию врача. Для меня это не просто работа, 
                    а призвание, которое позволяет помогать людям заботиться о самом ценном — их здоровье.
                  </p>
                  <p>
                    На этом сайте я делюсь проверенной медицинской информацией, основанной на 
                    научных исследованиях и клинической практике. Моя миссия — помочь вам лучше 
                    понимать своё здоровье и принимать осознанные решения.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Достижения</h2>
              <p className="text-lg text-muted-foreground">
                Цифры, которые говорят сами за себя
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={achievement.icon as any} size={28} className="text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.count}</div>
                    <p className="text-sm text-muted-foreground">{achievement.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Образование и квалификация</h2>
              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="mt-1">
                          <Icon name="CheckCircle" size={20} className="text-primary" />
                        </div>
                        <span className="text-lg">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Моя философия</h2>
              <Card className="bg-white">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      Я верю, что каждый человек имеет право на качественную медицинскую информацию 
                      и понимание своего здоровья. Медицина не должна быть окутана тайной — она должна 
                      быть доступной и понятной.
                    </p>
                    <p className="text-xl font-semibold text-foreground">
                      "Лучшее лечение — это профилактика, а лучший врач — это образованный пациент"
                    </p>
                    <p>
                      Именно поэтому я создал этот блог — чтобы делиться знаниями, развеивать мифы 
                      и помогать вам принимать правильные решения о своём здоровье.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
