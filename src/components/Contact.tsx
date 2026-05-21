import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('CSI Inquiry from Website');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
    window.location.href = `mailto:combatsportsinstitute@yahoo.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">GET IN TOUCH</h2>
          <p className="text-gray-400 text-lg">Ready to start your fighting journey? Contact us today.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Address Card */}
          <Card className="bg-black border-2 border-red-600">
            <CardHeader>
              <MapPin className="text-red-600 mb-2" size={32} />
              <CardTitle className="text-white">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                2401 S. Shary Rd, Ste 5A
                <br />
                Mission, TX 78572
              </p>
              <a
                href="https://maps.google.com/?q=2401+S.+Shary+Rd,+Mission,+TX+78572"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 font-bold mt-3 inline-block"
              >
                Get Directions →
              </a>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="bg-black border-2 border-red-600">
            <CardHeader>
              <Phone className="text-red-600 mb-2" size={32} />
              <CardTitle className="text-white">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="tel:+19563785608"
                className="text-gray-300 hover:text-red-600 font-bold text-lg transition"
              >
                +1 (956) 378-5608
              </a>
              <p className="text-gray-400 text-sm mt-2">Call or text anytime</p>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="bg-black border-2 border-red-600">
            <CardHeader>
              <Mail className="text-red-600 mb-2" size={32} />
              <CardTitle className="text-white">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:combatsportsinstitute@yahoo.com"
                className="text-gray-300 hover:text-red-600 font-bold text-lg transition break-all"
              >
                combatsportsinstitute@yahoo.com
              </a>
              <p className="text-gray-400 text-sm mt-2">We reply within 24 hours</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="bg-black border-2 border-gray-800 max-w-2xl mx-auto">
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="text-white text-2xl font-black">Message Us</CardTitle>
            <CardDescription className="text-gray-400">Send us your question or booking inquiry</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-white font-bold mb-2 block">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-800 text-white placeholder-gray-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-white font-bold mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-800 text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white font-bold mb-2 block">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(956) 555-1234"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-800 text-white placeholder-gray-500"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="text-white font-bold mb-2 block">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your interest in CSI..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-800 text-white placeholder-gray-500 min-h-32 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-lg py-6"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Map Embed */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-2xl border-2 border-red-600">
          <iframe
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.0854520896657!2d-97.37177!3d26.2181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a1d3a0b0b0b1%3A0x1234567890ab!2s2401%20S%20Shary%20Rd%2C%20Mission%2C%20TX%2078572!5e0!3m2!1sen!2sus!4v1234567890"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;