import React from 'react';

export default function TermsConditionsPage() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 md:p-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gray-900">Terms & Conditions</h1>
        <div className="prose prose-lg text-gray-600 max-w-none font-medium leading-relaxed">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="font-serif font-bold text-2xl text-gray-900 mt-10 mb-4">1. Agreement to Terms</h2>
          <p className="mb-6">
            By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2 className="font-serif font-bold text-2xl text-gray-900 mt-10 mb-4">2. Volunteer and Partner Conduct</h2>
          <p className="mb-6">
            As a volunteer or partner of The Connecting Link, you agree to conduct yourself in a manner that is respectful, ethical, and aligned with our core values. Any form of harassment, discrimination, or harmful behavior will result in immediate termination of your involvement with our initiatives.
          </p>

          <h2 className="font-serif font-bold text-2xl text-gray-900 mt-10 mb-4">3. Intellectual Property</h2>
          <p className="mb-6">
            The website and its original content, features, and functionality are owned by The Connecting Link and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="font-serif font-bold text-2xl text-gray-900 mt-10 mb-4">4. Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall The Connecting Link, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
          </p>
          
          <h2 className="font-serif font-bold text-2xl text-gray-900 mt-10 mb-4">5. Changes to Terms</h2>
          <p className="mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </div>
      </div>
    </div>
  );
}
