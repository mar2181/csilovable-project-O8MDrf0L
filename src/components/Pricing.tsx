import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { DollarSign, Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">MEMBERSHIP OPTIONS</h2>
          <p className="text-gray-400 text-lg">Flexible pricing for every fighter's goals and budget</p>
        </div>

        <Card className="bg-black border-2 border-red-600 shadow-2xl shadow-red-600/20">
          <CardHeader className="text-center border-b-2 border-red-600 pb-8">
            <DollarSign className="text-red-600 mx-auto mb-4" size={40} />
            <CardTitle className="text-white text-2xl font-black">PRICING VARIES BY PROGRAM</CardTitle>
            <CardDescription className="text-gray-300 text-lg mt-4">
              From beginner fundamentals to elite competition training, we offer customized packages tailored to your goals.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Unlimited Class Access</p>
                  <p className="text-gray-400 text-sm">Drop-in rates and monthly memberships available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Competition Training Programs</p>
                  <p className="text-gray-400 text-sm">Specialized coaching for aspiring fighters</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Youth & Family Packages</p>
                  <p className="text-gray-400 text-sm">Discounts for multiple family members</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Special Offers & Early Bird Pricing</p>
                  <p className="text-gray-400 text-sm">Ask about seasonal promotions and new member discounts</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
              <p className="text-gray-400 text-center">
                <span className="font-bold text-white text-lg">FREE TRIAL CLASS</span>
                <br />
                Experience CSI risk-free. All skill levels welcome.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = 'tel:+19563785608'}
                className="bg-red-600 hover:bg-red-700 text-white font-black text-lg px-8 py-6 flex-1"
              >
                CALL FOR CURRENT RATES
              </Button>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-lg px-8 py-6 flex-1"
              >
                CONTACT US
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;