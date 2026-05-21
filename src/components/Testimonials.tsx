import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The coaches at CSI are absolutely dedicated to their students' success. I've never felt more supported in my fitness and fighting journey.",
      author: "Marcus T.",
      role: "MMA Competitor",
      initials: "MT",
    },
    {
      quote: "My son has gained so much confidence through the youth classes. The instruction is personalized and the facility is incredibly clean and professional.",
      author: "Jennifer M.",
      role: "Parent",
      initials: "JM",
    },
    {
      quote: "Championship-level training at an affordable price. The community here is unmatched. Everyone pushes each other to be better every single day.",
      author: "Andre L.",
      role: "BJJ Competitor",
      initials: "AL",
    },
    {
      quote: "I joined as a complete beginner, and the coaches broke everything down perfectly. Now I'm competing in NAGA tournaments. Best decision ever.",
      author: "Sofia R.",
      role: "Women's Class",
      initials: "SR",
    },
    {
      quote: "The facilities are top-tier, the instructors are world-class, and the community is like family. CSI is the real deal.",
      author: "David C.",
      role: "Muay Thai Student",
      initials: "DC",
    },
    {
      quote: "Open Mat Fridays are my favorite! Free training with the whole crew, amazing energy, and you always learn something new.",
      author: "Tommy G.",
      role: "Kickboxing Class",
      initials: "TG",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WHAT OUR FIGHTERS SAY
          </h2>
          <p className="text-gray-400 text-lg">
            Real stories from students, parents, and champions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-2 border-gray-800 hover:border-red-600 transition-all duration-300 group"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-red-600 text-white font-black">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-red-600 text-sm font-semibold">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;