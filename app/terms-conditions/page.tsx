import Reveal from "@/components/animation/reveal";
import React from "react";

function TermsAndConditionsPage() {
  return (
    <Reveal>
      <section className="container mt-8">
        <p className="mb-2 font-extralight text-sm">
          The terms <strong>&quot;We,&quot; &quot;Us,&quot; &quot;Our,&quot;</strong> and <strong>&quot;Company&quot;</strong> individually and collectively refer to <strong>Institution 1</strong>, and the terms <strong>&quot;Visitor,&quot; &quot;User&quot;</strong> refer to the users of this website.
        </p>

        <p className="mb-2 font-extralight text-sm">
          This page states the Terms and Conditions under which you, as a Visitor, may visit this website (<strong>&quot;Website&quot;</strong>). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we request you to exit this site. 
          The company, its divisions, subsidiaries, associate companies, or any other related entities reserve the right to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself, as these Terms and Conditions are binding on all users of this Website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Use of Content</h2>
        <p className="mb-2 font-extralight text-sm">
          All logos, brands, marks, headings, labels, names, signatures, numerals, shapes, or any combination thereof appearing on this site, except as otherwise noted, are properties either owned or used under license by the company or its associate entities. The use of these properties, except as provided in the Terms, is strictly prohibited. 
          You may not modify, sell, reproduce, display, distribute, or otherwise use the content for any public or commercial purposes without the organization&apos;s written permission.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Acceptable Website Use</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">(A) Security Rules</h3>
        <p className="mb-2 font-extralight text-sm">
          Visitors are prohibited from violating or attempting to violate the security of the Website, including but not limited to:
        </p>
        <ul className="list-disc pl-6 mb-2 font-extralight text-sm">
          <li>Accessing data not intended for the user or logging into an account they are not authorized to access.</li>
          <li>Attempting to probe, scan, or test the vulnerability of any system or network or breach security without proper authorization.</li>
          <li>Attempting to interfere with service to any user, host, or network.</li>
          <li>Sending unsolicited emails, including promotions or advertising of products or services.</li>
        </ul>
        <p className="mb-2 font-extralight text-sm">
          Violations may result in civil or criminal liability. The company will have the right to investigate occurrences involving such violations and cooperate with law enforcement authorities in prosecuting users involved.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">(B) General Rules</h3>
        <p className="mb-2 font-extralight text-sm">
          Visitors may not use the Website to transmit, distribute, store, or destroy material that could encourage criminal conduct, infringe intellectual property rights, or violate the privacy of others.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Indemnity</h2>
        <p className="mb-2 font-extralight text-sm">
          The User agrees to indemnify and hold harmless the Company, its officers, directors, employees, and agents from any claims, actions, liabilities, or damages arising from their use of the website or their breach of the Terms.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Liability</h2>
        <p className="mb-2 font-extralight text-sm">
          The User agrees that the Company and its affiliates will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from the use of the Website, even if the Company has been advised of such possibilities. This includes damages for loss of profits, data, or other intangible losses.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Disclaimer of Consequential Damages</h2>
        <p className="mb-2 font-extralight text-sm">
          In no event shall the Company or its associated entities be liable for any consequential damages, including lost profits or business interruptions, resulting from the use or inability to use the Website or its content.
        </p>
      </section>
    </Reveal>
  );
}

export default TermsAndConditionsPage;
