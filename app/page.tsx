'use client';
import { AlertCircle, CheckCircle, Search, Shield, Send } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [helpType, setHelpType] = useState('');
  const [surgeryType, setSurgeryType] = useState('');
  const [customSurgery, setCustomSurgery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send this to your backend
    console.log({ email, helpType, surgeryType, customSurgery });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white">Should I Have Surgery?</h1>
          <p className="mt-2 text-lg text-blue-100">Make informed decisions about your surgical care</p>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-lg mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-8">
                Your Trusted Guide to Surgical Decisions
              </h2>
              <p className="text-xl text-blue-800 mb-8">
                We help you understand your options, find the right surgeon, and prepare for a successful procedure.
              </p>
              
              {/* Email Signup */}
              <div className="max-w-lg mx-auto mb-4">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col gap-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      <select
                        value={helpType}
                        onChange={(e) => {
                          setHelpType(e.target.value);
                          setSurgeryType('');
                          setCustomSurgery('');
                        }}
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        required
                      >
                        <option value="">How can we help you?</option>
                        <option value="specific-surgery">Information about a specific type of surgery</option>
                        <option value="find-surgeon">Help finding/evaluating surgeons</option>
                        <option value="general-advice">General surgery decision-making advice</option>
                        <option value="cost-insurance">Surgery costs and insurance information</option>
                        <option value="recovery">Recovery and rehabilitation guidance</option>
                        <option value="other">Something else</option>
                      </select>

                      {helpType === 'specific-surgery' && (
                        <select
                          value={surgeryType}
                          onChange={(e) => setSurgeryType(e.target.value)}
                          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                          required
                        >
                          <option value="">Select surgery type</option>
                          <option value="spine">Spine Surgery</option>
                          <option value="knee">Knee Surgery</option>
                          <option value="hip">Hip Replacement</option>
                          <option value="shoulder">Shoulder Surgery</option>
                          <option value="lasik">LASIK</option>
                          <option value="gastric">Gastric/Weight Loss Surgery</option>
                          <option value="cardiac">Heart Surgery</option>
                          <option value="other">Other Surgery Type</option>
                        </select>
                      )}

                      {surgeryType === 'other' && (
                        <input
                          type="text"
                          value={customSurgery}
                          onChange={(e) => setCustomSurgery(e.target.value)}
                          placeholder="Please specify the surgery type"
                          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      )}

                      <button 
                        type="submit"
                        className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-md transition duration-200 overflow-hidden"
                      >
                        <span className="absolute right-0 top-0 h-full w-12 transform translate-x-12 group-hover:-translate-x-0 transition-transform duration-300 bg-gradient-to-r from-transparent to-blue-500/20">
                          <Send className="h-6 w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </span>
                        <span className="group-hover:pr-8 transition-all duration-300">
                          Get Personalized Updates
                        </span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium">
                      Thank you for signing up! We'll keep you updated about{' '}
                      {helpType === 'specific-surgery' 
                        ? (surgeryType === 'other' ? customSurgery : surgeryType + ' surgery') 
                        : helpType.replace('-', ' ')}
                      .
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-200 border border-blue-100">
              <div className="flex justify-center mb-4">
                <Search className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Research Your Procedure</h3>
              <p className="text-blue-700">
                Access comprehensive guides and checklists for common surgical procedures
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-200 border border-blue-100">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Research Your Surgeon</h3>
              <p className="text-blue-700">
                Learn how to evaluate surgeon credentials and experience
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-200 border border-blue-100">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Make Your Decision</h3>
              <p className="text-blue-700">
                Get the tools you need to make an informed choice about surgery
              </p>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white shadow-xl">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-blue-200" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
            <p className="text-blue-100 mb-6">
              We're building a comprehensive resource to help patients make informed decisions about surgery. 
              Sign up above to be notified when we launch new features.
            </p>
            <p className="text-sm text-blue-200">
              This site does not provide medical advice. Always consult with qualified healthcare providers about your specific situation.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <p className="text-center text-blue-100">
            © 2024 ShouldIHaveSurgery.com - Your Guide to Informed Surgical Decisions
          </p>
        </div>
      </footer>
    </div>
  );
}
