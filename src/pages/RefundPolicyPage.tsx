import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CircleDollarSign } from 'lucide-react';

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Refund Policy - Western Publish</title>
        <meta 
          name="description" 
          content="Western Publish's refund policy for publishing services, editing, ghostwriting, and marketing services." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CircleDollarSign className="h-16 w-16 text-blue-300 mx-auto mb-8" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Refund Policy
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We strive for complete customer satisfaction. Learn about our refund policies 
              and how we handle service cancellations.
            </p>
            <div className="mt-8 text-sm text-blue-200">
              <p>Last Updated: August 18, 2025</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="prose prose-blue max-w-none">

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600 mb-4">
              At Western Publish, we are committed to ensuring your complete satisfaction with our services. This refund policy outlines the terms and conditions for refunds across our various services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ghostwriting Services</h2>
            <div className="text-gray-600">
              <p className="mb-4">
                Our ghostwriting services follow a milestone-based payment and refund structure:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Initial consultation fee is non-refundable</li>
                <li>50% refund available if cancelled before first draft delivery</li>
                <li>25% refund available if cancelled before final draft completion</li>
                <li>No refund available after final draft delivery</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Editing Services</h2>
            <div className="text-gray-600">
              <p className="mb-4">
                Editing services refund policy:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Full refund available if cancelled before editing begins</li>
                <li>50% refund if cancelled during first round of edits</li>
                <li>No refund after delivery of edited manuscript</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Publishing Services</h2>
            <div className="text-gray-600">
              <p className="mb-4">
                Publishing services refund terms:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Setup fees are non-refundable</li>
                <li>75% refund if cancelled before design phase</li>
                <li>50% refund if cancelled before proof approval</li>
                <li>No refund after publication process begins</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Marketing Services</h2>
            <div className="text-gray-600">
              <p className="mb-4">
                Marketing campaign refund structure:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Strategy development fees are non-refundable</li>
                <li>Unused advertising budget is refundable</li>
                <li>Monthly service fees are non-refundable once the month begins</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Request a Refund</h2>
            <div className="text-gray-600">
              <p className="mb-4">
                To request a refund:
              </p>
              <ol className="list-decimal pl-6 mb-4">
                <li>Contact your project manager or our support team</li>
                <li>Provide your order details and reason for refund</li>
                <li>Allow 5-7 business days for review</li>
                <li>Refund will be processed to original payment method</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For refund requests or questions about our refund policy, please contact us at:
            </p>
            <ul className="text-gray-600">
              <li>Email: support@westernpublish.com</li>
              <li>Phone: +1 (505) 396-2071</li>
              <li>Hours: Monday-Friday, 9am-5pm MST</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
