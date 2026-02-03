import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const mostPlayed = [
    { id: 1, title: '3D Sprunki', image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg', hours: 12 },
    { id: 2, title: '3D Спрунки', image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg', hours: 9 },
    { id: 3, title: 'Крутое обло...', image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg', hours: 2 },
    { id: 4, title: 'EVENT!! Spru...', image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg', hours: 1 },
  ];

  const featuredGames = [
    {
      id: 1,
      title: '[UPD] Суперзвезда Бейсбола',
      subtitle: 'Knock it out of the park',
      image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg',
      badge: 'Новые способности'
    },
    {
      id: 2,
      title: 'Be Dino 🦖 - Юрский симулятор динозавров',
      subtitle: 'Rule the Jurassic jungle',
      image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg',
      badge: 'Новые предметы'
    },
    {
      id: 3,
      title: '[2X] ⚽ Футбольные Легенды ⚽',
      subtitle: 'Dominate the gridiron',
      image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg',
      badge: null
    },
  ];

  const recommended = [
    { id: 1, title: 'Sammy', players: '5.7M играющих', image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg' },
    { id: 2, title: 'Русский чат', players: '1.2M играющих', image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg' },
    { id: 3, title: 'SPRUNKI RP', players: '890K играющих', image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg' },
    { id: 4, title: 'JOIN ANY PLAYER!', players: '650K играющих', image: 'https://cdn.poehali.dev/files/7343a25d-299b-47ca-9872-4a1bcb1c9292.jpg' },
  ];

  return (
    <div className="min-h-screen flex">
      <aside className="w-[200px] bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-4 border-b border-sidebar-border flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold">
            VS
          </div>
          <span className="text-sm font-medium text-sidebar-foreground">Venom_Sprun...</span>
        </div>

        <nav className="flex-1 py-4">
          <div className="space-y-1 px-3">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="Home" size={18} />
              <span className="text-sm font-medium">Home</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="User" size={18} />
              <span className="text-sm font-medium">Profile</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="MessageSquare" size={18} />
              <span className="text-sm font-medium">Messages</span>
              <Badge variant="secondary" className="ml-auto">2</Badge>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="Users" size={18} />
              <span className="text-sm font-medium">Connect</span>
              <Badge variant="secondary" className="ml-auto">595</Badge>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="UserCircle" size={18} />
              <span className="text-sm font-medium">Avatar</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="Boxes" size={18} />
              <span className="text-sm font-medium">Sandbox</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="Package" size={18} />
              <span className="text-sm font-medium">Inventory</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="Repeat" size={18} />
              <span className="text-sm font-medium">Trade</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="Receipt" size={18} />
              <span className="text-sm font-medium">Transactions</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="Layers" size={18} />
              <span className="text-sm font-medium">Communities</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="Palette" size={18} />
              <span className="text-sm font-medium">Themes</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="Crown" size={18} />
              <span className="text-sm font-medium">Premium</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors">
              <Icon name="BookOpen" size={18} />
              <span className="text-sm font-medium">Blog</span>
            </button>
          </div>
        </nav>

        <div className="p-3">
          <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white font-semibold">
            Get Premium
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b border-border bg-card flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-foreground">ROBLOX</h1>
          </div>

          <nav className="flex items-center gap-6">
            <button 
              onClick={() => setActiveTab('home')}
              className={`text-sm font-medium transition-colors ${activeTab === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('charts')}
              className={`text-sm font-medium transition-colors ${activeTab === 'charts' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Charts
            </button>
            <button 
              onClick={() => setActiveTab('marketplace')}
              className={`text-sm font-medium transition-colors ${activeTab === 'marketplace' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Marketplace
            </button>
            <button 
              onClick={() => setActiveTab('create')}
              className={`text-sm font-medium transition-colors ${activeTab === 'create' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Create
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search" 
                className="w-[300px] pl-10 bg-secondary border-input"
              />
            </div>
            <button className="hover:bg-secondary p-2 rounded-md transition-colors">
              <Icon name="Bell" size={20} />
            </button>
            <button className="hover:bg-secondary p-2 rounded-md transition-colors">
              <Icon name="Users" size={20} />
            </button>
            <button className="hover:bg-secondary p-2 rounded-md transition-colors">
              <Icon name="ShoppingBag" size={20} />
            </button>
            <button className="hover:bg-secondary p-2 rounded-md transition-colors">
              <Icon name="CircleDollarSign" size={20} />
              <span className="text-xs font-semibold ml-1">92</span>
            </button>
            <button className="hover:bg-secondary p-2 rounded-md transition-colors">
              <Icon name="Settings" size={20} />
            </button>
            <button className="hover:bg-secondary p-2 rounded-md transition-colors">
              <Icon name="Globe" size={20} />
            </button>
            <button className="hover:bg-secondary p-2 rounded-md transition-colors">
              <Icon name="Menu" size={20} />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <main className="p-6 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Home</h2>
            </div>

            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Your Most Played</h3>
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  See All <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {mostPlayed.map((game) => (
                  <div key={game.id} className="group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden bg-card mb-2 relative transform transition-transform hover:scale-105">
                      <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button className="bg-primary hover:bg-primary/90">
                          <Icon name="Play" size={20} className="mr-2" />
                          Играть
                        </Button>
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm truncate">{game.title}</h4>
                    <p className="text-xs text-muted-foreground">🕐 {game.hours} hours</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Выбор дня</h3>
              <p className="text-sm text-muted-foreground mb-4">Кураторская подборка ежедневных событий</p>
              <div className="grid grid-cols-3 gap-4">
                {featuredGames.map((game) => (
                  <div key={game.id} className="group cursor-pointer">
                    <div className="aspect-video rounded-lg overflow-hidden bg-card mb-2 relative transform transition-transform hover:scale-105">
                      <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                      {game.badge && (
                        <Badge className="absolute top-2 left-2 bg-white/90 text-black hover:bg-white">
                          {game.badge}
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button className="bg-primary hover:bg-primary/90">
                          <Icon name="Play" size={20} className="mr-2" />
                          Играть
                        </Button>
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{game.title}</h4>
                    <p className="text-xs text-muted-foreground">{game.subtitle}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Recommended For You</h3>
              <div className="grid grid-cols-4 gap-4">
                {recommended.map((game) => (
                  <div key={game.id} className="group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden bg-card mb-2 relative transform transition-transform hover:scale-105">
                      <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button className="bg-primary hover:bg-primary/90">
                          <Icon name="Play" size={20} className="mr-2" />
                          Играть
                        </Button>
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm truncate">{game.title}</h4>
                    <p className="text-xs text-muted-foreground">{game.players}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Crown" size={32} className="text-yellow-400" />
                    <h3 className="text-2xl font-bold">Premium подписка</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">Получите эксклюзивный контент и возможности</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span className="text-sm">Эксклюзивные игры и предметы</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span className="text-sm">450 Robux каждый месяц</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span className="text-sm">Приоритетная поддержка</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span className="text-sm">Уникальный значок Premium</span>
                    </li>
                  </ul>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white font-semibold">
                    Оформить Premium
                  </Button>
                </div>
                <div className="text-6xl">👑</div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;