import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Здравствуйте! Я помогу вам с предварительной консультацией. В чем ваша проблема?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const services = [
    {
      title: "Корпоративное право",
      description: "Регистрация бизнеса, корпоративные споры, слияния и поглощения",
      icon: "Building2",
      color: "bg-blue-500"
    },
    {
      title: "Недвижимость",
      description: "Сделки с недвижимостью, оформление прав собственности",
      icon: "Home",
      color: "bg-green-500"
    },
    {
      title: "Семейное право",
      description: "Развод, раздел имущества, алименты, опека",
      icon: "Heart",
      color: "bg-pink-500"
    },
    {
      title: "Налоговое право",
      description: "Налоговое планирование, споры с ФНС, налоговые проверки",
      icon: "Calculator",
      color: "bg-orange-500"
    },
    {
      title: "Уголовное право",
      description: "Защита в уголовных делах, обжалование приговоров",
      icon: "Shield",
      color: "bg-red-500"
    },
    {
      title: "Трудовое право",
      description: "Трудовые споры, увольнения, защита прав работников",
      icon: "Users",
      color: "bg-purple-500"
    }
  ];

  const team = [
    {
      name: "Анна Петрова",
      position: "Партнер, корпоративное право",
      experience: "15 лет опыта"
    },
    {
      name: "Михаил Иванов",
      position: "Старший юрист, недвижимость",
      experience: "12 лет опыта"
    },
    {
      name: "Елена Сидорова",
      position: "Ведущий юрист, семейное право",
      experience: "10 лет опыта"
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setMessages(prev => [...prev, { text: inputMessage, isBot: false }]);
    setInputMessage("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Спасибо за ваш вопрос! Для детальной консультации запишитесь на встречу по телефону +7 (495) 123-45-67 или заполните форму обратной связи.", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" className="text-blue-600" size={32} />
              <span className="font-heading font-bold text-xl text-gray-900">ЮрЭксперт</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
              Профессиональная 
              <span className="text-blue-600 block">юридическая помощь</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Защищаем ваши интересы с 2010 года. Более 1000 успешных дел, 
              индивидуальный подход к каждому клиенту и гарантия результата.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                onClick={() => setChatOpen(true)}
              >
                <Icon name="Bot" size={20} className="mr-2" />
                Чат-бот помощник
              </Button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">лет опыта</div>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">успешных дел</div>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр юридических услуг для физических и юридических лиц
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="mt-4 w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-gray-900 mb-6">О компании</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ЮрЭксперт — ведущая юридическая компания с 15-летним опытом работы. 
                Мы специализируемся на решении сложных правовых вопросов и защите 
                интересов наших клиентов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-100 text-green-800">✓</Badge>
                  <span className="text-gray-700">Индивидуальный подход к каждому клиенту</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-100 text-green-800">✓</Badge>
                  <span className="text-gray-700">Высокая квалификация юристов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-100 text-green-800">✓</Badge>
                  <span className="text-gray-700">Прозрачная система ценообразования</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-100 text-green-800">✓</Badge>
                  <span className="text-gray-700">Гарантия конфиденциальности</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-2xl text-gray-900 mb-8">Наша команда</h3>
              <div className="space-y-6">
                {team.map((member, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <Icon name="User" size={24} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{member.name}</h4>
                          <p className="text-gray-600 text-sm">{member.position}</p>
                          <p className="text-blue-600 text-sm">{member.experience}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для получения профессиональной юридической помощи
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <span className="text-gray-700">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <span className="text-gray-700">info@jurexpert.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-blue-600" />
                  <span className="text-gray-700">г. Москва, ул. Тверская, д. 15</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading">Обратная связь</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                  <Input placeholder="Email" />
                  <Textarea placeholder="Опишите вашу ситуацию" className="min-h-[100px]" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Scale" size={24} className="text-blue-400" />
            <span className="font-heading font-bold text-xl">ЮрЭксперт</span>
          </div>
          <p className="text-gray-400 mb-4">
            Профессиональная юридическая помощь с 2010 года
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 ЮрЭксперт. Все права защищены.
          </p>
        </div>
      </footer>

      {/* Chat Bot Dialog */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Icon name="Bot" size={20} className="text-blue-600" />
              <span>Юридический помощник</span>
            </DialogTitle>
            <DialogDescription>
              Получите предварительную консультацию по вашему вопросу
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="h-64 overflow-y-auto space-y-3 p-3 bg-gray-50 rounded-lg">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot 
                      ? 'bg-blue-100 text-blue-900' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Input
                placeholder="Введите ваш вопрос..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Chat Button */}
      <Button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl z-50"
        size="sm"
      >
        <Icon name="MessageCircle" size={24} className="text-white" />
      </Button>
    </div>
  );
};

export default Index;