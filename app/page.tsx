'use client';
import { Brain, Clock2, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xzzbrvdr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          interest: 'spine surgery assessment'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white">Should I Have Spine Surgery?</h1>
          <p className="mt-2 text-lg text-blue-100">Take our 2-minute assessment designed by neurosurgeons</p>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-lg mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-8">
                Find Out If You Might Need Spine Surgery
              </h2>
              <p className="text-xl text-blue-800 mb-8">
                Complete our clinically-validated assessment to understand if spine surgery might be right for you
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
                        placeholder="Enter your email to take the assessment"
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        name="email"
                      />

                      <button 
                        type="submit"
                        disabled={submitting}
                        className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-md transition duration-200 overflow-hidden disabled:opacity-50"
                      >
                        <span className="absolute right-0 top-0 h-full w-12 transform translate-x-12 group-hover:-translate-x-0 transition-transform duration-300 bg-gradient-to-r from-transparent to-blue-500/20">
                          <Send className="h-6 w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </span>
                        <span className="group-hover:pr-8 transition-all duration-300">
                          {submitting ? 'Processing...' : 'Start Free Assessment'}
                        </span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium">
                      Thank you! Check your email to begin the assessment.
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
                <Clock2 className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Quick & Easy</h3>
              <p className="text-blue-700">
                Complete the assessment in just 2 minutes with simple yes/no questions
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-200 border border-blue-100">
              <div className="flex justify-center mb-4">
                <Brain className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Expert-Designed</h3>
              <p className="text-blue-700">
                Assessment created and validated by leading neurosurgeons
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-200 border border-blue-100">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Get Clear Results</h3>
              <p className="text-blue-700">
                Receive your personalized likelihood score immediately
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white shadow-xl">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-blue-200" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Important Information</h3>
            <p className="text-blue-100 mb-6">
              This assessment tool provides general guidance about your likelihood of needing spine surgery. It is not a diagnosis or medical advice. Always consult with qualified healthcare providers about your specific situation.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <p className="text-center text-blue-100">
            © 2024 ShouldIHaveSurgery.com - Spine Surgery Assessment Tool
          </p>
        </div>
      </footer>
    </div>
  );
}
