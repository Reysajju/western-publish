import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Terms of Service - Western Publish</title>
        <meta 
          name="description" 
          content="Terms of Service for Western Publish's ghostwriting, editing, publishing, and marketing services." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-blue-300 mx-auto mb-8" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Please read these terms carefully before using our publishing services. 
              These terms govern your use of Western Publish's services.
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using Western Publish's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-600 mb-4">
              Western Publish provides ghostwriting, editing, publishing, and marketing services. All services are provided "as is" and subject to these terms.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Ghostwriting services</li>
              <li>Editing and proofreading</li>
              <li>Publishing assistance</li>
              <li>Marketing and promotion</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment terms vary by service package. Detailed payment schedules will be provided in individual service agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              Upon completion of services and full payment, clients retain all rights to their work. Western Publish maintains rights to promotional materials created during service delivery.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Confidentiality</h2>
            <p className="text-gray-600 mb-4">
              We maintain strict confidentiality regarding all client information and projects. NDAs are available upon request.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Project Timeline</h2>
            <p className="text-gray-600 mb-4">
              Project timelines are estimates and may vary based on project scope and complexity. Specific deadlines will be outlined in individual service agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Revisions and Changes</h2>
            <p className="text-gray-600 mb-4">
              Revision policies vary by service package. Additional revisions beyond package inclusions may incur additional charges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <ul className="text-gray-600">
              <li>Email: legal@westernpublish.com</li>
              <li>Phone: +1 (505) 396-2071</li>
              <li>Address: Albuquerque, NM</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
