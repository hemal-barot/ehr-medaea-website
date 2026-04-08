const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "January 2025",
    icon: "🔒",
    sections: [
      { heading: "1. Introduction", body: "Medaea.ai ('Company', 'we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered EMR platform and related services." },
      { heading: "2. Information We Collect", body: "We collect information you provide directly to us, including: Protected Health Information (PHI) in accordance with HIPAA, practice and provider information, usage data and analytics (de-identified), technical data such as IP addresses, browser type, and device information." },
      { heading: "3. HIPAA Compliance", body: "We act as a Business Associate under HIPAA for covered entities using our services. All PHI is handled in accordance with HIPAA Privacy Rule and Security Rule requirements. We maintain appropriate administrative, physical, and technical safeguards." },
      { heading: "4. How We Use Your Information", body: "We use information to: provide and improve our clinical documentation and billing services, comply with legal obligations including HIPAA, communicate with you about service updates, analyze usage patterns to enhance platform features." },
      { heading: "5. Data Security", body: "We implement industry-standard security measures including: AES-256 encryption at rest and in transit, multi-factor authentication, role-based access controls, regular security audits and penetration testing, zero-trust network architecture." },
      { heading: "6. Data Retention", body: "We retain PHI for the period required by applicable law and our BAA with covered entities. Non-PHI data is retained as necessary for business purposes, typically not exceeding 7 years." },
      { heading: "7. Your Rights", body: "Depending on your location, you may have rights including: access to your personal information, correction of inaccurate data, deletion of your data (subject to legal retention requirements), data portability, objection to certain processing." },
      { heading: "8. Contact Us", body: "For privacy-related questions or to exercise your rights, contact our Privacy Officer at privacy@medaea.ai." },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    lastUpdated: "January 2025",
    icon: "📋",
    sections: [
      { heading: "Medical Disclaimer", body: "The information provided by Medaea.ai is for general informational and operational purposes only. Our AI tools are designed to assist licensed healthcare professionals and do not constitute medical advice, diagnosis, or treatment recommendations. Clinical judgment always remains with the licensed provider." },
      { heading: "AI Output Disclaimer", body: "While Medaea's AI systems are designed to provide accurate coding suggestions and clinical documentation assistance, all AI-generated content must be reviewed and approved by a qualified healthcare professional before use in patient care or billing submissions." },
      { heading: "No Warranty", body: "The service is provided 'as is' without warranties of any kind. We do not warrant that the service will be uninterrupted, error-free, or that defects will be corrected." },
      { heading: "Limitation of Liability", body: "To the maximum extent permitted by law, Medaea.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service." },
    ],
  },
  "saas-terms": {
    title: "SaaS Terms of Service",
    lastUpdated: "January 2025",
    icon: "📄",
    sections: [
      { heading: "1. Acceptance of Terms", body: "By accessing or using Medaea.ai's Software-as-a-Service platform, you agree to be bound by these SaaS Terms of Service." },
      { heading: "2. Service Description", body: "Medaea.ai provides an AI-powered Electronic Medical Records (EMR) and Revenue Cycle Management (RCM) platform delivered as a cloud-based SaaS solution." },
      { heading: "3. Subscription and Payment", body: "Access to the platform requires a valid subscription. Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law." },
      { heading: "4. HIPAA Business Associate Agreement", body: "Your use of Medaea.ai requires execution of a Business Associate Agreement (BAA). The BAA is incorporated by reference into these Terms." },
      { heading: "5. Data Ownership", body: "You retain ownership of all data you input into the platform, including patient records and clinical notes. Medaea.ai does not claim ownership of your data." },
      { heading: "6. Acceptable Use", body: "You agree to use the platform only for lawful purposes and in accordance with applicable healthcare regulations including HIPAA, HITECH, and applicable state laws." },
      { heading: "7. Service Level Agreement", body: "We commit to 99.9% uptime for core platform features (excluding scheduled maintenance). Service credits may be available for extended outages." },
      { heading: "8. Termination", body: "Either party may terminate the subscription with 30 days written notice. Data export will be made available for 30 days after termination." },
    ],
  },
  "web-terms": {
    title: "Website Terms of Service",
    lastUpdated: "January 2025",
    icon: "🌐",
    sections: [
      { heading: "1. Acceptance", body: "By accessing and using medaea.ai website and related web properties, you accept and agree to be bound by these Website Terms of Service." },
      { heading: "2. Intellectual Property", body: "The content on this website, including text, graphics, logos, images, and software, is the property of Medaea.ai and is protected by applicable intellectual property laws." },
      { heading: "3. User Content", body: "Any content you submit through our website grants us a non-exclusive license to use that content for the purpose of providing our services and improving our platform." },
      { heading: "4. Links to Third Parties", body: "Our website may contain links to third-party websites. We do not endorse or assume responsibility for any content on third-party websites." },
      { heading: "5. Governing Law", body: "These terms are governed by the laws of the United States, without regard to conflict of law principles." },
    ],
  },
};

export default function Legal({ page }) {
  const content = LEGAL_CONTENT[page] || LEGAL_CONTENT.privacy;

  return (
    <>
      <section className="relative pt-28 pb-16 hero-bg overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-5xl mb-4">{content.icon}</div>
          <span className="badge-primary mb-4 inline-block">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 leading-tight">{content.title}</h1>
          <p className="text-slate-500 text-sm">Last updated: {content.lastUpdated}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 p-5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 text-sm">
            <strong>Important Notice:</strong> This document applies to your use of Medaea.ai's platform and services. By using our services, you agree to these terms. For questions, contact <a href="mailto:legal@medaea.ai" className="underline font-semibold">legal@medaea.ai</a>.
          </div>
          <div className="space-y-5">
            {content.sections.map((section) => (
              <div key={section.heading} className="bg-white rounded-xl border border-slate-200 shadow-card p-7 hover:border-medical-200 hover:shadow-card-hover transition-all">
                <h2 className="text-slate-800 font-bold text-lg mb-3 flex items-start gap-2">
                  <span className="text-medical-600 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </span>
                  {section.heading}
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm pl-7">{section.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <p className="text-slate-600 text-sm mb-3">Questions about this policy? We're here to help.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:legal@medaea.ai" className="btn-primary px-5 py-2.5 text-sm rounded-xl inline-block">Contact Legal Team</a>
              <a href="mailto:privacy@medaea.ai" className="btn-outline px-5 py-2.5 text-sm rounded-xl">Privacy Officer</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
