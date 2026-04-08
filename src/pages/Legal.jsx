const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "2025",
    sections: [
      { heading: "1. Introduction", body: "Medaea.ai ('Company', 'we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered EMR platform and related services." },
      { heading: "2. Information We Collect", body: "We collect information you provide directly to us, including: Protected Health Information (PHI) in accordance with HIPAA, practice and provider information, usage data and analytics (de-identified), technical data such as IP addresses, browser type, and device information." },
      { heading: "3. HIPAA Compliance", body: "We act as a Business Associate under HIPAA for covered entities using our services. All PHI is handled in accordance with HIPAA Privacy Rule and Security Rule requirements. We maintain appropriate administrative, physical, and technical safeguards." },
      { heading: "4. How We Use Your Information", body: "We use information to: provide and improve our clinical documentation and billing services, comply with legal obligations including HIPAA, communicate with you about service updates, analyze usage patterns to enhance platform features." },
      { heading: "5. Data Security", body: "We implement industry-standard security measures including: AES-256 encryption at rest and in transit, multi-factor authentication, role-based access controls, regular security audits and penetration testing, zero-trust network architecture." },
      { heading: "6. Data Retention", body: "We retain PHI for the period required by applicable law and our BAA with covered entities. Non-PHI data is retained as necessary for business purposes, typically not exceeding 7 years." },
      { heading: "7. Your Rights", body: "Depending on your location, you may have rights including: access to your personal information, correction of inaccurate data, deletion of your data (subject to legal retention requirements), data portability, objection to certain processing." },
      { heading: "8. Contact Us", body: "For privacy-related questions or to exercise your rights, contact our Privacy Officer at privacy@medaea.ai or write to: Medaea.ai Privacy Officer, [Company Address]." },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    lastUpdated: "2025",
    sections: [
      { heading: "Medical Disclaimer", body: "The information provided by Medaea.ai is for general informational and operational purposes only. Our AI tools are designed to assist licensed healthcare professionals and do not constitute medical advice, diagnosis, or treatment recommendations. Clinical judgment always remains with the licensed provider." },
      { heading: "AI Output Disclaimer", body: "While Medaea's AI systems are designed to provide accurate coding suggestions and clinical documentation assistance, all AI-generated content must be reviewed and approved by a qualified healthcare professional before use in patient care or billing submissions." },
      { heading: "No Warranty", body: "The service is provided 'as is' without warranties of any kind. We do not warrant that the service will be uninterrupted, error-free, or that defects will be corrected. We disclaim all warranties, express or implied, including implied warranties of merchantability and fitness for a particular purpose." },
      { heading: "Limitation of Liability", body: "To the maximum extent permitted by law, Medaea.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service." },
    ],
  },
  "saas-terms": {
    title: "SaaS Terms of Service",
    lastUpdated: "2025",
    sections: [
      { heading: "1. Acceptance of Terms", body: "By accessing or using Medaea.ai's Software-as-a-Service platform, you agree to be bound by these SaaS Terms of Service. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity." },
      { heading: "2. Service Description", body: "Medaea.ai provides an AI-powered Electronic Medical Records (EMR) and Revenue Cycle Management (RCM) platform delivered as a cloud-based SaaS solution. The service includes ambient documentation, AI coding, billing automation, and analytics features as described in your subscription plan." },
      { heading: "3. Subscription and Payment", body: "Access to the platform requires a valid subscription. Subscription fees are billed in advance on a monthly or annual basis. You agree to pay all fees in accordance with your chosen plan. All fees are non-refundable except as required by law." },
      { heading: "4. HIPAA Business Associate Agreement", body: "Your use of Medaea.ai requires execution of a Business Associate Agreement (BAA). The BAA is incorporated by reference into these Terms. You must execute the BAA before processing any Protected Health Information through the platform." },
      { heading: "5. Data Ownership", body: "You retain ownership of all data you input into the platform, including patient records and clinical notes. Medaea.ai does not claim ownership of your data. Upon termination, you may export your data in standard formats within 30 days." },
      { heading: "6. Acceptable Use", body: "You agree to use the platform only for lawful purposes and in accordance with applicable healthcare regulations including HIPAA, HITECH, and applicable state laws. Prohibited uses include unauthorized access, reverse engineering, or use in ways that could harm patients or violate privacy laws." },
      { heading: "7. Service Level Agreement", body: "We commit to 99.9% uptime for core platform features (excluding scheduled maintenance). In the event of extended outages, service credits may be available as described in your subscription agreement." },
      { heading: "8. Termination", body: "Either party may terminate the subscription with 30 days written notice. We may terminate immediately for material breach including non-payment or violation of HIPAA obligations. Upon termination, your access will be suspended and data export will be made available for 30 days." },
    ],
  },
  "web-terms": {
    title: "Website Terms of Service",
    lastUpdated: "2025",
    sections: [
      { heading: "1. Acceptance", body: "By accessing and using medaea.ai website and related web properties, you accept and agree to be bound by these Website Terms of Service. If you do not agree to these terms, please do not use our website." },
      { heading: "2. Intellectual Property", body: "The content on this website, including text, graphics, logos, images, and software, is the property of Medaea.ai and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission." },
      { heading: "3. User Content", body: "Any content you submit through our website, including demo requests, contact forms, or feedback, grants us a non-exclusive license to use that content for the purpose of providing our services and improving our platform." },
      { heading: "4. Links to Third Parties", body: "Our website may contain links to third-party websites. These links are provided for convenience only. We do not endorse or assume responsibility for any content on third-party websites." },
      { heading: "5. Governing Law", body: "These terms are governed by the laws of the State of [State], United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of [State]." },
    ],
  },
};

export default function Legal({ page }) {
  const content = LEGAL_CONTENT[page] || LEGAL_CONTENT.privacy;

  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">{content.title}</h1>
          <p className="text-gray-400">Last updated: {content.lastUpdated}</p>
        </div>
      </section>

      <section className="section-pad bg-navy-900">
        <div className="max-w-3xl mx-auto space-y-8">
          {content.sections.map((section) => (
            <div key={section.heading} className="card-dark p-8 rounded-2xl">
              <h2 className="text-white font-bold text-lg mb-3">{section.heading}</h2>
              <p className="text-gray-300 leading-relaxed text-sm">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
