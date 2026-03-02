const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col">
      <section className="py-10 md:py-14 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your information
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information you provide directly, such as your name, email address, phone number, and business details when you use our contact forms, subscribe to our services, or communicate with us.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the collected information to provide and improve our services, communicate with you regarding inquiries and service updates, process transactions, and send relevant marketing communications with your consent.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">3. Data Protection</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and access is restricted to authorized personnel only.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">4. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">5. Third-Party Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our business, subject to confidentiality agreements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">6. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time by contacting us or using the unsubscribe link in our emails.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">7. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">9. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:Sindhu@adlead.in" className="text-primary hover:underline">
                  Sindhu@adlead.in
                </a>{" "}
                or call{" "}
                <a href="tel:+917780105776" className="text-primary hover:underline">
                  +91 7780105776
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
