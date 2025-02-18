import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Heart, Youtube, Clock, Globe, Menu } from 'lucide-react';

const translations = {
  en: {
    urgent: "URGENT MEDICAL APPEAL",
    needsSurgery: "Abdeslam needs immediate heart surgery to survive",
    donate: "Donate Now",
    impact: "Impact",
    updates: "Updates",
    medical: "Medical",
  },
  fr: {
    urgent: "APPEL MÉDICAL URGENT",
    needsSurgery: "Abdeslam a besoin d'une chirurgie cardiaque immédiate",
    donate: "Faire un don",
    impact: "Impact",
    updates: "Mises à jour",
    medical: "Médical",
  },
  ar: {
    urgent: "نداء طبي عاجل",
    needsSurgery: "عبد السلام يحتاج إلى جراحة قلب فورية",
    donate: "تبرع الآن",
    impact: "التأثير",
    updates: "التحديثات",
    medical: "طبي",
  }
};

const SaveAbdeslamMobile = () => {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      {/* Language Selector */}
      <div className="flex justify-end mb-2">
        <select 
          value={lang} 
          onChange={(e) => setLang(e.target.value)}
          className="bg-white border rounded-lg px-2 py-1"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      {/* Emergency Banner */}
      <Alert className="bg-red-50 border-red-200">
        <AlertTitle className="text-red-700 text-lg font-bold">{t.urgent}</AlertTitle>
        <AlertDescription className="text-red-600">
          {t.needsSurgery}
        </AlertDescription>
      </Alert>

      {/* Quick Donate Button */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold">
        {t.donate}
      </button>

      {/* Main Content */}
      <Card className="border-none shadow-lg">
        <CardContent className="p-4 space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="font-bold text-lg">$200,000</h3>
              <p className="text-sm text-gray-600">Needed</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="font-bold text-lg">29M+</h3>
              <p className="text-sm text-gray-600">Views</p>
            </div>
          </div>

          {/* Updates Carousel */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">{t.updates}</h3>
            <div className="overflow-x-auto whitespace-nowrap">
              <div className="inline-block min-w-full">
                <div className="flex space-x-4">
                  <Card className="w-64 shrink-0">
                    <CardContent className="p-3">
                      <p className="text-sm text-gray-500">February 2025</p>
                      <p className="text-sm">Current condition update</p>
                    </CardContent>
                  </Card>
                  <Card className="w-64 shrink-0">
                    <CardContent className="p-3">
                      <p className="text-sm text-gray-500">January 2025</p>
                      <p className="text-sm">Medical assessment completed</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-2">
            <a href="#" className="text-blue-600 text-sm hover:underline">YouTube Channel 1</a>
            <a href="#" className="text-blue-600 text-sm hover:underline">YouTube Channel 2</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaveAbdeslamMobile;