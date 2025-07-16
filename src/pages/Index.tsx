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
      color: "bg-gradient-to-r from-purple-500 to-blue-500"
    },
    {
      title: "Недвижимость",
      description: "Сделки с недвижимостью, оформление прав собственности",
      icon: "Home",
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      title: "Семейное право",
      description: "Развод, раздел имущества, алименты, опека",
      icon: "Heart",
      color: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      title: "Налоговое право",
      description: "Налоговое планирование, споры с ФНС, налоговые проверки",
      icon: "Calculator",
      color: "bg-gradient-to-r from-orange-500 to-yellow-500"
    },
    {
      title: "Уголовное право",
      description: "Защита в уголовных делах, обжалование приговоров",
      icon: "Shield",
      color: "bg-gradient-to-r from-red-500 to-pink-500"
    },
    {
      title: "Трудовое право",
      description: "Трудовые споры, увольнения, защита прав работников",
      icon: "Users",
      color: "bg-gradient-to-r from-purple-500 to-indigo-500"
    }
  ];

  const team = [
    {
      name: "Анна Петрова",
      position: "Партнер, корпоративное право",
      experience: "15 лет опыта",
      image: "/img/60e98612-c10f-4bb7-9d95-7b244969ebeb.jpg"
    },
    {
      name: "Михаил Иванов",
      position: "Старший юрист, недвижимость",
      experience: "12 лет опыта",
      image: "/img/60e98612-c10f-4bb7-9d95-7b244969ebeb.jpg"
    },
    {
      name: "Елена Сидорова",
      position: "Ведущий юрист, семейное право",
      experience: "10 лет опыта",
      image: "/img/60e98612-c10f-4bb7-9d95-7b244969ebeb.jpg"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Icon name="Scale" className="text-white" size={20} />
              </div>
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ЮрЭксперт</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
              <Icon name="Phone" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="animate-fade-in">
                <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                    Профессиональная
                  </span>
                  <span className="block text-gray-900">юридическая помощь</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
                  Защищаем ваши интересы с 2010 года. Более 1000 успешных дел, 
                  индивидуальный подход к каждому клиенту и гарантия результата.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-xl">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Бесплатная консультация
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg shadow-lg"
                    onClick={() => setChatOpen(true)}
                  >
                    <Icon name="Bot" size={20} className="mr-2" />
                    Чат-бот помощник
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:flex justify-center">
              <div className="relative">
                <img 
                  src="/img/faf20c09-b5d2-489d-aab7-a8a995aeeabc.jpg" 
                  alt="Современный юридический офис"
                  className="w-full max-w-lg rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">15+</div>
                    <div className="text-sm text-gray-600">лет опыта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">1000+</div>
              <div className="text-gray-600">успешных дел</div>
            </div>
            <div className="text-center animate-slide-up bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-600">поддержка</div>
            </div>
            <div className="text-center animate-slide-up bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-600">успешность</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Наши услуги</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр юридических услуг для физических и юридических лиц
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 shadow-md">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">О компании</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ЮрЭксперт — ведущая юридическая компания с 15-летним опытом работы. 
                Мы специализируемся на решении сложных правовых вопросов и защите 
                интересов наших клиентов.
              </p>
              
              <div className="relative mb-8">
                <img 
                  src="/img/35c3a72f-2f2a-4208-8df9-e8dbcdbef478.jpg" 
                  alt="Консультация с клиентом"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">Индивидуальный подход к каждому клиенту</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">Высокая квалификация юристов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">Прозрачная система ценообразования</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">Гарантия конфиденциальности</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-2xl text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Наша команда</span>
              </h3>
              <div className="space-y-6">
                {team.map((member, index) => (
                  <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">{member.name}</h4>
                          <p className="text-gray-600 text-sm">{member.position}</p>
                          <p className="text-purple-600 text-sm font-medium">{member.experience}</p>
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
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Контакты</span>
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для получения профессиональной юридической помощи
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-6">Наши контакты</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">info@jurexpert.ru</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">г. Москва, ул. Тверская, д. 15</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-heading bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Обратная связь</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" className="border-purple-200 focus:border-purple-400" />
                  <Input placeholder="Телефон" className="border-purple-200 focus:border-purple-400" />
                  <Input placeholder="Email" className="border-purple-200 focus:border-purple-400" />
                  <Textarea placeholder="Опишите вашу ситуацию" className="min-h-[100px] border-purple-200 focus:border-purple-400" />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Icon name="Scale" size={20} className="text-white" />
            </div>
            <span className="font-heading font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ЮрЭксперт</span>
          </div>
          <p className="text-gray-300 mb-4">
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
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Icon name="Bot" size={16} className="text-white" />
              </div>
              <span>Юридический помощник</span>
            </DialogTitle>
            <DialogDescription>
              Получите предварительную консультацию по вашему вопросу
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="h-64 overflow-y-auto space-y-3 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg shadow-md ${
                    message.isBot 
                      ? 'bg-white text-gray-900 border border-purple-200' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
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
                className="border-purple-200 focus:border-purple-400"
              />
              <Button onClick={handleSendMessage} size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Chat Button */}
      <Button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl z-50 animate-pulse"
        size="sm"
      >
        <Icon name="MessageCircle" size={24} className="text-white" />
      </Button>
    </div>
  );
};

export default Index;