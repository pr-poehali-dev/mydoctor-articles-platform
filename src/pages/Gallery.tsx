import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/29094065-0943-49da-8a1c-a53831713d62.jpg',
      title: 'Современный медицинский кабинет',
      description: 'Оснащение последнего поколения',
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/eb2eff6d-1456-4ead-b076-bc36262a47d5.jpg',
      title: 'Профессиональный подход',
      description: 'Внимание к каждому пациенту',
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
      title: 'Медицинская консультация',
      description: 'Индивидуальный подход к лечению',
    },
    {
      id: 4,
      url: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/29094065-0943-49da-8a1c-a53831713d62.jpg',
      title: 'Диагностическое оборудование',
      description: 'Точная диагностика заболеваний',
    },
    {
      id: 5,
      url: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/eb2eff6d-1456-4ead-b076-bc36262a47d5.jpg',
      title: 'Медицинская практика',
      description: 'Опыт работы с различными случаями',
    },
    {
      id: 6,
      url: 'https://cdn.poehali.dev/projects/26b14aed-2ff3-462d-b6bf-6c30bb6cffd9/files/d4bf3ccd-124d-4ef7-8f9a-23608273fb17.jpg',
      title: 'Профилактические осмотры',
      description: 'Регулярная забота о здоровье',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-primary/10 to-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Галерея</h1>
              <p className="text-xl text-muted-foreground">
                Фотографии из медицинской практики и рабочих моментов
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {images.map((image) => (
                <Card
                  key={image.id}
                  className="overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <Icon
                        name="ZoomIn"
                        size={48}
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-muted-foreground text-sm">{image.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Icon name="Camera" size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Хотите увидеть больше?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Следите за обновлениями — я регулярно добавляю новые фотографии
              </p>
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Увеличенное изображение"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
