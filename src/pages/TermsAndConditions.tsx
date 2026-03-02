const TermsAndConditions = () => {
  return (
    <div className="flex flex-col">
      <section className="py-10 md:py-14 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to AdLead Digital Media. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">2. Services</h2>
              <p className="text-muted-foreground">
                AdLead Digital Media provides digital communication solutions including but not limited to Bulk SMS, Bulk WhatsApp, Bulk Voice Calls, IVR & Missed Call Services, Bulk Email Marketing, Digital Marketing, and Website Development.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">3. User Obligations</h2>
              <p className="text-muted-foreground">
                Users agree to provide accurate and complete information when using our services. Users must not use our services for any unlawful purpose or in violation of any applicable laws and regulations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">4. Payment Terms</h2>
              <p className="text-muted-foreground">
                All payments for services must be made as per the agreed pricing plan. Prices are subject to change with prior notice. Refund policies are governed by individual service agreements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, logos, and materials on this website are the property of AdLead Digital Media and are protected by applicable intellectual property laws. Unauthorized use is strictly prohibited.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                AdLead Digital Media shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the user for the specific service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">7. Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate services if users violate these terms. Users may also terminate their engagement by providing written notice as per the service agreement.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">9. Changes to Terms</h2>
              <p className="text-muted-foreground">
                AdLead Digital Media reserves the right to modify these Terms and Conditions at any time. Changes will be effective upon posting on this page. Continued use of our services constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">10. Contact</h2>
              <p className="text-muted-foreground">
                For any questions regarding these Terms and Conditions, please contact us at{" "}
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

export default TermsAndConditions;
