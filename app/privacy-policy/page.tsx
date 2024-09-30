import Reveal from "@/components/animation/reveal";
import React from "react";

function privacyPolicyPage() {
  return (
    <Reveal>
      <section className="container mt-8">
        <p className="mb-2 font-extralight text-sm">
          The terms <strong>"We," "Us," "Our,"</strong> and <strong>"Company"</strong> refer collectively to the company, while <strong>"You," "Your,"</strong> and <strong>"Yourself"</strong> refer to the users of the website.
        </p>

        <p className="mb-2 font-extralight text-sm">This Privacy Policy is an electronic document established under the Information Technology Act, 2000, and its related rules. It does not require a physical, electronic, or digital signature to be valid. It serves as a legally binding agreement between you and the company, governing your use of the website once you accept it, whether electronically (e.g., by clicking "I accept") or by using the website.</p>

        <p className="mb-2 font-extralight text-sm">The policy is aligned with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and covers the collection, use, storage, and transfer of sensitive personal data. By using the website, you agree to this Privacy Policy. If you do not consent, please refrain from using the site.</p>

        <p className="mb-2 font-extralight text-sm">By sharing your information with us or using the website, you give your consent for us to collect, store, process, and transfer your personal and non-personal information as outlined in this policy. You also agree that this process will not result in any loss or unlawful gain for you or anyone else.</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">User Information</h2>
        <p className="mb-2 font-extralight text-sm">To access certain services, users need to provide details such as their name, email address, gender, age, postal code, payment details, medical records, sexual orientation, biometric data, and more. This information helps us improve the site and provide a more user-friendly experience. All required information is service-dependent and helps us maintain, protect, and enhance our services, including new developments.</p>

        <p className="mb-2 font-extralight text-sm">Information publicly available or provided under laws like the Right to Information Act, 2005, is not considered sensitive.</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Cookies</h2>
        <p className="mb-2 font-extralight text-sm">To enhance user experience, we use cookies or similar technologies to assign visitors a unique identifier. This allows us to understand user preferences without knowing their identity unless they voluntarily share it. Cookies cannot read data from your hard drive, and our advertisers may set their own cookies, which we do not control.</p>

        <p className="mb-2 font-extralight text-sm">Additionally, our servers may collect your IP address when you visit the website. While this does not personally identify you, it helps us deliver content, customize the site, measure traffic, and provide advertisers with geographic information.</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Links to Other Websites</h2>
        <p className="mb-2 font-extralight text-sm">This privacy policy applies solely to our website. We provide links to third-party websites, but we are not responsible for their privacy practices.</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Information Sharing</h2>
        <p className="mb-2 font-extralight text-sm">We do not share your sensitive personal information with third parties without your consent, except in the following cases:</p>
        <ul className="list-disc pl-6 mb-2 font-extralight text-sm">
          <li>When required by law, court orders, or government authorities to verify identity, prevent or investigate offenses, or in compliance with applicable laws.</li>
          <li>With our group companies and employees, for processing personal information, ensuring they comply with this privacy policy and maintain confidentiality.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2">Information Security</h2>
        <p className="mb-2 font-extralight text-sm">We implement security measures to protect against unauthorized access or alterations to your data. This includes regular internal reviews of data collection and processing practices and encryption. Information collected is stored securely behind a firewall, with restricted access to authorized personnel only. However, no system is foolproof, and while we strive to protect your data, we cannot guarantee complete security.</p>

        <p className="mb-2 font-extralight text-sm">The internet is constantly evolving, and we may update this Privacy Policy as necessary. Rest assured, any future use of information collected will be consistent with the policy under which it was initially gathered.</p>
      </section>
    </Reveal>
  );
}

export default privacyPolicyPage;
