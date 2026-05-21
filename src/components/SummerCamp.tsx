import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Clock, Award } from 'lucide-react';

const SummerCamp = () => {
  const sessions = [
    { month: 'June', dates: '1–5 & 8–12' },
    { month: 'July', dates: '6–10 & 13–17' },
    { month: 'August', dates: '3–7 & 10–14' },
  ];

  return (
    <section id="summer-camp" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-red-600 text-black font-black px-4 py-2 rounded mb-4">SUMMER 2026</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Youth MMA
              <span className="text-red-600 block">Summer Camp</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Prepare young athletes for championship-level competition. Our intensive summer camp combines all major combat disciplines under the guidance of elite coaches.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Clock className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Daily Schedule</p>
                  <p className="text-gray-400">10:00 AM – 3:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Curriculum</p>
                  <p className="text-gray-400">Boxing • Kickboxing • Wrestling • Jiu-Jitsu • MMA</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600 mb-8">
              <p className="text-sm text-gray-400 mb-2">SPECIAL OFFERS</p>
              <p className="text-white font-bold">Member Pricing & Early Bird Specials Available</p>
            </div>

            <Button
              onClick={() => window.location.href = 'mailto:combatsportsinstitute@yahoo.com?subject=Summer%20Camp%202026%20Inquiry'}
              className="bg-red-600 hover:bg-red-700 text-white font-black text-lg px-8 py-6"
            >
              Message Us for Pricing
            </Button>
          </div>

          {/* Sessions */}
          <div className="space-y-6">
            {sessions.map((session, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-2 border-red-600 hover:shadow-xl hover:shadow-red-600/30 transition"
              >
                <CardHeader>
                  <CardTitle className="text-white text-2xl font-black flex items-center gap-2">
                    <Calendar className="text-red-600" />
                    {session.month}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg font-bold">{session.dates}</p>
                  <p className="text-red-600 font-semibold text-sm mt-2">10:00 AM – 3:30 PM Daily</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCamp;