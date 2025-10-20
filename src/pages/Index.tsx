import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'dogs',
      title: 'Собаки',
      icon: 'Dog',
      color: 'bg-accent',
      image: 'https://cdn.poehali.dev/projects/76e3c91f-c622-4505-9542-554519461ba2/files/115f361c-5eca-4cfa-ac10-bea857f76e3d.jpg'
    },
    {
      id: 'cats',
      title: 'Кошки',
      icon: 'Cat',
      color: 'bg-secondary',
      image: 'https://cdn.poehali.dev/projects/76e3c91f-c622-4505-9542-554519461ba2/files/115f361c-5eca-4cfa-ac10-bea857f76e3d.jpg'
    },
    {
      id: 'birds',
      title: 'Птицы',
      icon: 'Bird',
      color: 'bg-muted',
      image: 'https://cdn.poehali.dev/projects/76e3c91f-c622-4505-9542-554519461ba2/files/e22132c2-abd3-4d02-ac38-fef0a64c4d5b.jpg'
    },
    {
      id: 'wild',
      title: 'Дикие животные',
      icon: 'Squirrel',
      color: 'bg-secondary',
      image: 'https://cdn.poehali.dev/projects/76e3c91f-c622-4505-9542-554519461ba2/files/d1b47301-23bf-4464-ad7d-892d389868cf.jpg'
    }
  ];

  const instructions = {
    dogs: [
      { title: 'Оцените состояние', content: 'Осторожно подойдите к животному. Оцените его поведение: агрессивное, испуганное или спокойное. Если собака агрессивна, не приближайтесь - вызовите специалистов.' },
      { title: 'Обеспечьте безопасность', content: 'Используйте мягкую ткань или одеяло, чтобы успокоить собаку. Говорите спокойным голосом. Если есть травмы, постарайтесь не двигать животное без необходимости.' },
      { title: 'Согрейте', content: 'Если животное переохладилось, аккуратно укройте его теплой тканью. Избегайте резких движений.' },
      { title: 'Обратитесь к ветеринару', content: 'Как можно скорее доставьте собаку в ветеринарную клинику или вызовите врача на место.' }
    ],
    cats: [
      { title: 'Подход с осторожностью', content: 'Кошки могут быть напуганы и проявлять агрессию. Подходите медленно, избегайте прямого зрительного контакта.' },
      { title: 'Используйте переноску', content: 'Если возможно, поместите кошку в переноску или картонную коробку с отверстиями для воздуха.' },
      { title: 'Проверьте на травмы', content: 'Осторожно осмотрите животное на наличие видимых повреждений. Не давите на травмированные участки.' },
      { title: 'Срочная помощь', content: 'Доставьте кошку к ветеринару в течение ближайших часов, особенно если есть кровотечение или переломы.' }
    ],
    birds: [
      { title: 'Не паникуйте', content: 'Птицы очень чувствительны к стрессу. Действуйте быстро, но аккуратно.' },
      { title: 'Возьмите в руки правильно', content: 'Используйте полотенце или ткань. Держите птицу так, чтобы крылья были прижаты к телу, но не сдавливайте грудную клетку.' },
      { title: 'Поместите в коробку', content: 'Положите птицу в коробку с вентиляционными отверстиями. Застелите дно мягкой тканью.' },
      { title: 'Срочно к специалисту', content: 'Птицы быстро слабеют - немедленно обратитесь в центр помощи диким животным или к орнитологу.' }
    ],
    wild: [
      { title: 'Безопасность прежде всего', content: 'Дикие животные могут быть опасны и переносить болезни. Используйте перчатки и держите дистанцию.' },
      { title: 'Не кормите и не поите', content: 'Неправильное питание может навредить. Оставьте это специалистам.' },
      { title: 'Минимизируйте контакт', content: 'Поместите животное в закрытый контейнер в тихом темном месте. Это снизит стресс.' },
      { title: 'Вызовите специалистов', content: 'Свяжитесь со службой спасения диких животных. Не пытайтесь лечить самостоятельно.' }
    ]
  };

  const emergencyContacts = [
    { name: 'Служба спасения животных Москвы', phone: '8 (495) 777-77-77', hours: 'Круглосуточно' },
    { name: 'Центр реабилитации диких животных', phone: '8 (800) 100-20-30', hours: '9:00 - 21:00' },
    { name: 'Городская ветеринарная служба', phone: '8 (495) 123-45-67', hours: 'Круглосуточно' },
    { name: 'Приют "Добрые руки"', phone: '8 (926) 555-55-55', hours: '10:00 - 20:00' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-foreground">Спасение животных</h1>
          </div>
          <Button variant="outline" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
            <Icon name="Phone" size={18} className="mr-2" />
            Экстренные контакты
          </Button>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Каждая жизнь важна
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Пошаговые инструкции по оказанию первой помощи животным в экстренных ситуациях
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => document.getElementById('instructions')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="BookOpen" size={20} className="mr-2" />
              Инструкции
            </Button>
            <Button size="lg" variant="secondary" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Phone" size={20} className="mr-2" />
              Контакты
            </Button>
          </div>
        </div>
      </section>

      <section id="instructions" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Выберите тип животного</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedCategory === category.id ? 'ring-2 ring-primary shadow-xl' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className={`${category.color} rounded-t-lg`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <Icon name={category.icon as any} size={32} />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover rounded-b-lg"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedCategory && (
            <div className="animate-fade-in">
              <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="AlertCircle" size={28} />
                    Инструкция по спасению: {categories.find(c => c.id === selectedCategory)?.title}
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    Следуйте шагам последовательно для безопасного оказания помощи
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {instructions[selectedCategory as keyof typeof instructions].map((step, index) => (
                      <AccordionItem key={index} value={`step-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                              {index + 1}
                            </span>
                            {step.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground pl-11">
                          {step.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="mt-6 p-4 bg-accent rounded-lg">
                    <p className="flex items-start gap-2 text-sm">
                      <Icon name="AlertTriangle" className="text-primary shrink-0 mt-0.5" size={20} />
                      <span>
                        <strong>Важно:</strong> Первая помощь не заменяет профессиональную ветеринарную помощь. 
                        После оказания первой помощи обязательно обратитесь к специалисту.
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section id="contacts" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Экстренные контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon name="Phone" className="text-primary" size={24} />
                    {contact.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-2xl font-bold text-primary hover:underline block mb-2">
                    {contact.phone}
                  </a>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    {contact.hours}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-accent">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="Info" className="text-primary shrink-0 mt-1" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold mb-2">Перед звонком подготовьте информацию:</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Вид животного и его примерный возраст</li>
                      <li>Описание состояния и видимых повреждений</li>
                      <li>Ваше точное местоположение</li>
                      <li>Возможность самостоятельной транспортировки</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Icon name="Heart" className="text-primary" size={20} />
            Сделано с заботой о животных
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
