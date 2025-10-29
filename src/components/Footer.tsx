import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <Icon name="Stethoscope" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">Мой Доктор</span>
            </div>
            <p className="text-muted-foreground">
              Профессиональный медицинский блог о здоровье и медицине
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">Обо мне</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Статьи</a></li>
              <li><a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Галерея</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Icon name="Mail" size={20} />
                <span>info@mydoctor.ru</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Icon name="Phone" size={20} />
                <span>+7 (999) 123-45-67</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Мой Доктор. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
