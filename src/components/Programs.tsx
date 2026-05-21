import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Zap, Users, Heart, Flame } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'MMA',
      subtitle: 'Mixed Martial Arts',
      description: 'Master striking, wrestling, and submission techniques. Compete at the highest levels.',
      icon: Flame,
      color: 'text-red-600',
    },
    {
      title: 'Brazilian Jiu-Jitsu',
      subtitle: 'BJJ',
      description: 'Learn grappling, submissions, and positional dominance. All belt levels welcome.',
      icon: Zap,
      color: 'text-red-600',
    },
    {
      title: 'Muay Thai',
      subtitle: 'Art of Eight Limbs',
      description: 'Master kicks, knees, elbows, and fists. The ancient art of Thai boxing.',
      icon: Flame,
      color: 'text-red-600',
    },
    {
      title: 'Kickboxing',
      subtitle: 'Striking Excellence',
      description: 'Combine boxing techniques with powerful kicks. High-energy conditioning.',
      icon: Zap,
      color: 'text-red-600',
    },
    {
      title: 'Boxing & Striking',
      subtitle: 'Pure Striking',
      description: 'Classic boxing fundamentals. Footwork, defense, and powerful combinations.',
      icon: Flame,
      color: 'text-red-600',
    },
    {
      title: "Women's Classes",
      subtitle: 'Empowerment & Fitness',
      description: 'Dedicated programs for female athletes. Build confidence and strength.',
      icon: Heart,
      color: 'text-red-600',
    },
    {
      title: 'Youth Classes',
      subtitle: 'Future Champions',
      description: 'Discipline, self-defense, and fun for kids ages 5-17. Safe and structured.',
      icon: Users,
      color: 'text-red-600',
    },
    {
      title: 'Open Mat Fridays',
      subtitle: '6PM–8PM • Free',
      description: 'All skill levels welcome. Roll, spar, and train with the full CSI community.',
      icon: Zap,
      color: 'text-red-600',
    },
  ];

  return (
    <section id="programs" className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            OUR PROGRAMS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            World-class instruction across seven disciplines. Find your fighting style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="bg-black border-2 border-gray-800 hover:border-red-600 transition-all duration-300 group cursor-pointer hover:shadow-xl hover:shadow-red-600/20"
              >
                <CardHeader>
                  <div className={`${program.color} mb-3 group-hover:scale-110 transition transform`}>
                    <Icon size={32} />
                  </div>
                  <CardTitle className="text-white text-lg font-black">{program.title}</CardTitle>
                  <CardDescription className="text-red-600 font-bold">{program.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;