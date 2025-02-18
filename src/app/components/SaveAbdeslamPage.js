import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Heart, Youtube, Clock, MapPin } from 'lucide-react';

const SaveAbdeslamPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Emergency Banner */}
      <Alert className="bg-red-50 border-red-200">
        <AlertTitle className="text-red-700 text-lg font-bold">URGENT MEDICAL APPEAL</AlertTitle>
        <AlertDescription className="text-red-600">
          Abdeslam needs immediate heart surgery to survive. Direct PayPal support helps cover urgent medical needs.
        </AlertDescription>
      </Alert>

      {/* Hero Section */}
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-blue-50 rounded-t-lg">
          <CardTitle className="text-2xl text-center text-blue-800">Save Morocco's Guardian Angel of Stray Animals</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column - Quick Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Urgent Need</h3>
                  <p className="text-gray-600">LVAD Heart Surgery Required</p>
                  <p className="text-gray-600">Cost: $200,000</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Youtube className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Verified Impact</h3>
                  <p className="text-gray-600">29M+ Views</p>
                  <p className="text-gray-600">230K+ Subscribers</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Time Critical</h3>
                  <p className="text-gray-600">Condition deteriorating</p>
                  <p className="text-gray-600">Immediate support needed</p>
                </div>
              </div>
            </div>

            {/* Right Column - Donation Box */}
            <Card className="bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Support Abdeslam's Medical Care</h3>
              <div className="space-y-4">
                <p className="text-gray-700">Direct PayPal Support:</p>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-mono text-blue-800">[PayPal Details]</p>
                </div>
                <p className="text-sm text-gray-600">Your support helps cover:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Daily heart medications</li>
                  <li>Medical tests</li>
                  <li>Hospital visits</li>
                  <li>Transportation to medical facilities</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Impact Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">A Decade of Impact</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4">
                <h4 className="font-semibold text-gray-800">Thousands</h4>
                <p className="text-gray-600">of animals rescued and rehabilitated</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-gray-800">Community</h4>
                <p className="text-gray-600">transformed through education and care</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-gray-800">Sustainable</h4>
                <p className="text-gray-600">farm placement program created</p>
              </Card>
            </div>
          </div>

          {/* Verification Links */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Verify Abdeslam's Work</h3>
            <div className="space-y-2">
              <a href="#" className="text-blue-600 hover:underline block">Pets are Angels YouTube Channel</a>
              <a href="#" className="text-blue-600 hover:underline block">Kittens and Puppies are a Life YouTube Channel</a>
              <p className="text-sm text-gray-600 mt-2">Medical documentation available upon request</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaveAbdeslamPage;