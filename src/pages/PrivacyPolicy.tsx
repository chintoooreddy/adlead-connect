import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col">
      <section className="py-10 md:py-14 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Privacy Policy – AdLead Digital Media
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <p className="text-muted-foreground">
              This Privacy Policy explains how AdLead Digital Media ("Company", "We", "Our", "Us") collects, uses, protects, and handles your personal information when you use our website and services, including Bulk SMS, Bulk WhatsApp, Bulk Email, RCS, Voice, and Digital Marketing services.
            </p>
            <p className="text-muted-foreground">
              By accessing our website or purchasing our services, you agree to the terms of this Privacy Policy.
            </p>

            {/* 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">1️⃣ Information We Collect</h2>
              <p className="text-muted-foreground">We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Full Name</li>
                <li>Company Name</li>
                <li>Mobile Number</li>
                <li>Email Address</li>
                <li>Billing Address & GST Details (if applicable)</li>
                <li>Uploaded Contact Lists (for campaigns)</li>
                <li>IP Address and browser/device information</li>
                <li>Payment details (processed securely via authorized payment gateway)</li>
              </ul>
              <p className="text-muted-foreground">We collect only the information necessary to provide and improve our services.</p>
            </div>

            {/* 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">2️⃣ How We Use Your Information</h2>
              <p className="text-muted-foreground">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>To create and manage your account</li>
                <li>To provide Bulk SMS, WhatsApp, RCS, Voice, Email, and marketing services</li>
                <li>To process payments and generate invoices</li>
                <li>To provide technical and customer support</li>
                <li>To improve our website and services</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">📩 To Communicate With You</h3>
              <p className="text-muted-foreground">We may use your information to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Respond to your inquiries</li>
                <li>Provide customer service support</li>
                <li>Send important service-related updates</li>
                <li>Send billing notifications</li>
                <li>Share promotional or marketing communications (only with your consent)</li>
              </ul>

              <p className="text-muted-foreground">Communication may be sent through various channels including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>SMS</li>
                <li>Email</li>
                <li>RCS</li>
                <li>WhatsApp</li>
                <li>Voice Calls</li>
              </ul>
              <p className="text-muted-foreground">You may opt-out of marketing communication at any time.</p>
            </div>

            {/* 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">3️⃣ Consent & Anti-Spam Responsibility</h2>
              <p className="text-muted-foreground">AdLead Digital Media is a messaging service provider.</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>We do not send messages independently on our own behalf.</li>
                <li>Users must ensure all recipient data is permission-based (opt-in).</li>
                <li>We are not responsible for misuse of uploaded contact databases.</li>
              </ul>
              <p className="text-muted-foreground">Accounts involved in spam complaints may be suspended without notice.</p>
            </div>

            {/* 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">4️⃣ Data Security</h2>
              <p className="text-muted-foreground">We are committed to safeguarding your data. We implement:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>SSL encryption</li>
                <li>Secure hosting infrastructure</li>
                <li>Limited staff access to sensitive data</li>
                <li>Secure payment gateway integrations</li>
              </ul>
              <p className="text-muted-foreground">While we strive to protect your data, no online transmission is completely secure.</p>
            </div>

            {/* 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">5️⃣ Sharing of Information</h2>
              <p className="text-muted-foreground">We do not sell, rent, or trade your personal information.</p>
              <p className="text-muted-foreground">We may share information only when necessary with:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>SMS Gateway Providers</li>
                <li>WhatsApp Business API Providers</li>
                <li>RCS & Voice Service Providers</li>
                <li>Email SMTP Providers</li>
                <li>Payment Gateway Providers</li>
                <li>Government or regulatory authorities (if legally required)</li>
              </ul>
              <p className="text-muted-foreground">All sharing is done strictly for service delivery or legal compliance.</p>
            </div>

            {/* 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">6️⃣ Cookies Policy</h2>
              <p className="text-muted-foreground">Our website may use cookies to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Analyze website traffic</li>
                <li>Improve user experience</li>
                <li>Store preferences</li>
              </ul>
              <p className="text-muted-foreground">You can disable cookies through your browser settings. Some features may not function properly if cookies are disabled.</p>
            </div>

            {/* 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">7️⃣ Your Rights</h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Request access to your data</li>
                <li>Request correction of incorrect information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-muted-foreground">
                For any such request, contact us at:{" "}
                <a href="mailto:Sindhu@adlead.in" className="text-primary hover:underline">📧 Sindhu@Adlead.in</a>
              </p>
              <p className="text-muted-foreground">We will respond within a reasonable timeframe as required by applicable laws.</p>
            </div>

            {/* 8 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">8️⃣ Data Retention</h2>
              <p className="text-muted-foreground">We retain your information:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>As long as your account is active</li>
                <li>As required for regulatory compliance</li>
                <li>As necessary for legal and accounting purposes</li>
              </ul>
              <p className="text-muted-foreground">After this period, data may be securely deleted.</p>
            </div>

            {/* 9 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">9️⃣ Regulatory Compliance</h2>
              <p className="text-muted-foreground">Our services operate in compliance with applicable laws including:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>TRAI Guidelines (India)</li>
                <li>DLT Regulations</li>
                <li>IT Act 2000</li>
                <li>Digital Personal Data Protection (DPDP) Act 2023</li>
                <li>WhatsApp Business Policies</li>
              </ul>
            </div>

            {/* 10 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">🔟 Policy Updates</h2>
              <p className="text-muted-foreground">
                AdLead Digital Media may update this Privacy Policy from time to time. Changes will be posted on this page. Continued use of services indicates acceptance of updated terms.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="space-y-4 border-t border-border pt-8">
              <h2 className="text-2xl font-bold">Disclaimer</h2>
              <p className="text-muted-foreground">
                AdLead Digital Media provides communication and marketing tools. Users are solely responsible for ensuring their campaigns comply with applicable laws and consent requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
