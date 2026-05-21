import React from 'react';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              BUILT FOR
              <span className="text-red-600 block">CHAMPIONS</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Combat Sports Institute is the premier martial arts school serving Mission, McAllen, Weslaco, and Edinburg, Texas. We are dedicated to developing disciplined fighters, empowered individuals, and community leaders.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With championship-level instruction, state-of-the-art facilities, and a thriving community of 1,000+ followers, we pride ourselves on our proven track record of NAGA competition victories and personalized training programs for all skill levels.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="bg-gray-900 p-4 rounded-lg border border-red-600">
                <div className="text-red-600 font-black text-3xl mb-2">1K+</div>
                <p className="text-sm text-gray-300">Community Members</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-red-600">
                <div className="text-red-600 font-black text-3xl mb-2">10+</div>
                <p className="text-sm text-gray-300">Championship Titles</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-red-600">
                <div className="text-red-600 font-black text-3xl mb-2">7</div>
                <p className="text-sm text-gray-300">Disciplines Offered</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            style={{
              backgroundImage: 'url(https://v3b.fal.media/files/b/0a9b287e/MJocRCNA5s0Lb2CUP20N7_ee83602dbd16420e8d0931e5318592f2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-red-600 hover:shadow-xl transition">
            <Target className="text-red-600 mb-4" size={40} />
            <h3 className="text-xl font-black text-white mb-3">Discipline</h3>
            <p className="text-gray-400">Rigorous training develops mental toughness and physical excellence.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-red-600 hover:shadow-xl transition">
            <Users className="text-red-600 mb-4" size={40} />
            <h3 className="text-xl font-black text-white mb-3">Community</h3>
            <p className="text-gray-400">Build lasting friendships with fighters who share your passion.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-red-600 hover:shadow-xl transition">
            <Award className="text-red-600 mb-4" size={40} />
            <h3 className="text-xl font-black text-white mb-3">Excellence</h3>
            <p className="text-gray-400">Championship-level instruction from seasoned combat professionals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;