import { Award, Brain, GraduationCap, Code } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">>Designed by a Neurosurgeon Who Started as a Physical Therapist</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Image */}
        <div className="w-48 h-48 relative shrink-0 mx-auto md:mx-0">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
            <Image
              src="/dr-verdon.png"
              alt="Dr. Michael Verdon"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
        </div>

        {/* Bio Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Michael Verdon, DO, FACOS</h3>
            <p className="text-blue-700 font-medium">Neurological Surgeon & Founder of Dayton Neurologic Associates</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-800">
              <Award className="w-5 h-5 shrink-0 text-blue-600" />
              <span>Fellow of the American Osteopathic Board of Surgeons</span>
            </div>
            <div className="flex items-center gap-2 text-blue-800">
              <Brain className="w-5 h-5 shrink-0 text-blue-600" />
              <span>20+ Years Experience in Spinal Disorders</span>
            </div>
            <div className="flex items-center gap-2 text-blue-800">
              <GraduationCap className="w-5 h-5 shrink-0 text-blue-600" />
              <span>Neurological Surgery Residency - St. John/Providence Hospital, Detroit</span>
            </div>
            <div className="flex items-center gap-2 text-blue-800">
              <Code className="w-5 h-5 shrink-0 text-blue-600" />
              <span>Award-Winning Work in Machine Learning for Spinal Diagnostics</span>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg space-y-3">
            <p className="text-blue-800 leading-relaxed">
              Dr. Verdon brings a unique perspective to spine surgery decisions. Beginning his career as a physical therapist in the late 1990s before becoming a neurosurgeon in 2010, he understands both surgical and non-surgical approaches to spine care.
            </p>
            <p className="text-blue-800 leading-relaxed">
              "Having worked as both a physical therapist and a neurosurgeon, I've seen spine care from multiple angles. This assessment tool helps patients understand their options and make informed decisions about their care."
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-blue-700">
              <strong>Education:</strong>
              <br />
              • Doctorate in Osteopathic Medicine - Lake Erie College of Osteopathic Medicine
              <br />
              • Masters in Physical Therapy - Wheeling Jesuit University
            </p>
            <p className="text-sm text-blue-700">
              <strong>Special Recognition:</strong>
              <br />
              2018 Award for implementing machine learning algorithm in spinal pain diagnosis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
