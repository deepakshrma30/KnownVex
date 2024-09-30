import Reveal from "@/components/animation/reveal";
import React from "react";

function PaymentAndRefundPolicyPage() {
  return (
    <Reveal>
      <section className="container mt-8">
        {/* Payment Policy */}
        <h2 className="text-2xl font-bold mt-8 mb-2">Payment Policy</h2>
        <p className="mb-2 font-extralight text-sm">
          The Platform is a paid service, and the payments made by You shall be according to the plans opted by You through the Platform. You explicitly agree to pay the fees for the courses/plans that you purchase, and you authorize the Company to charge you as per the applicable payment mode opted by you.
        </p>
        <p className="mb-2 font-extralight text-sm">
          All payments shall be through the payment mechanisms put in place by the Company, and You shall be responsible for paying all fees and applicable taxes in a timely manner as per the mechanism associated with the Plan availed by You. 
        </p>
        <p className="mb-2 font-extralight text-sm">
          Users have various options to choose and proceed with the payment for the Services via payment mechanisms, including but not limited to:
        </p>
        <ul className="list-disc pl-6 mb-2 font-extralight text-sm">
          <li>Card Payment facilities</li>
          <li>Online Bank Transfer</li>
          <li>Wallet Payment</li>
        </ul>
        <p className="mb-2 font-extralight text-sm">
          With reference to Section 6, the payment gateway mechanisms are governed by the terms and conditions of third-party providers as listed on the Platform, and the User agrees to be bound by those terms. Valid Credit/Debit/Cash Cards, online bank transfers, and other payment instruments are processed using a credit card payment gateway or appropriate payment system infrastructure. The same will also be governed by the terms agreed upon between the Users and the respective issuing bank and payment instrument issuing company.
        </p>
        <p className="mb-2 font-extralight text-sm">
          We shall not be liable for any unauthorized use, fraud, payment refunds, or lost amounts in transactions. Furthermore, we are not offering any refunds for workshops conducted. We reserve the right to change any fees at any time at our sole discretion. Any changes, updates, or modifications in the fees shall become effective immediately upon the same being posted/uploaded or notified on our website.
        </p>

        {/* Refund Policy */}
        <h2 className="text-2xl font-bold mt-8 mb-2">Refund Policy</h2>
        <p className="mb-2 font-extralight text-sm">
          We are not offering any refunds for the Courses provided by <strong>Knowvex</strong>. All payments, once made, are final and are not subject to any cancellations or refunds. The User is advised to thoroughly review all the information related to the Course before proceeding with the payment.
        </p>
        <p className="mb-2 font-extralight text-sm">
          There will be no refunds made from our end. By making payments, You accept the no-refund policy along with other terms and conditions mentioned on the website/platforms.
        </p>
      </section>
    </Reveal>
  );
}

export default PaymentAndRefundPolicyPage;
