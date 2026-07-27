import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 md:p-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-600 max-w-none font-medium leading-relaxed">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="font-serif font-bold text-2xl text-gray-900 mt-10 mb-4">1. Introduction</h2>
          <p className="mb-6">
            Welcome to The Connecting Link. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="font-serif font-bold text-2xl text-gray-900 mt-10 mb-4">2. The Data We Collect About You</h2>
          <p className="mb-6">
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="font-serif font-bold text-2xl text-gray-900 mt-10 mb-4">3. How We Use Your Personal Data</h2>
          <p className="mb-6">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>To process your volunteer or partner application.</li>
            <li>To manage our relationship with you.</li>
            <li>To improve our website, services, marketing, and user experiences.</li>
          </ul>

          <h2 className="font-serif font-bold text-2xl text-gray-900 mt-10 mb-4">4. Data Security</h2>
          <p className="mb-6">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
          </p>
        </div>
      </div>
    </div>
  );
}
