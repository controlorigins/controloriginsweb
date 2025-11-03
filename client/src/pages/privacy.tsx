import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import BackToTop from "@/components/back-to-top";
import Breadcrumb from "@/components/breadcrumb";

export default function Privacy() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy", active: true }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Privacy Policy | Control Origins"
        description="Control Origins Privacy Policy - Learn how we collect, use, and protect your information when you visit our website and use our services."
        keywords="privacy policy, data protection, GDPR, CCPA, personal information, cookies, analytics"
        url="https://controlorigins.com/privacy"
      />
      <Navigation />
      <main role="main" className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> November 3, 2025<br />
              <strong>Last Updated:</strong> November 3, 2025
            </p>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Control Origins ("we," "us," or "our") respects your privacy and is committed to protecting 
                your personal information. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website at controlorigins.com (the "Site").
              </p>
              <p className="text-muted-foreground mb-4">
                By accessing or using our Site, you acknowledge that you have read, understood, and agree 
                to be bound by this Privacy Policy. If you do not agree with this policy, please do not 
                use our Site.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Information You Provide</h3>
              <p className="text-muted-foreground mb-4">
                We collect information that you voluntarily provide when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Connect with us through LinkedIn</li>
                <li>Send us inquiries or communications</li>
                <li>Interact with our professional network</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you visit our Site, we automatically collect certain information about your device 
                and browsing behavior through:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our Site. This includes data such as pages visited, time spent on pages, browser type, device type, and general geographic location.</li>
                <li><strong>Microsoft Clarity:</strong> We use Microsoft Clarity to analyze user behavior through session recordings and heatmaps to improve user experience.</li>
                <li><strong>LinkedIn Insight Tag:</strong> We use LinkedIn's tracking pixel (Partner ID: 6796212) for conversion tracking, retargeting, and analytics purposes.</li>
                <li><strong>Browser Information:</strong> IP address, browser type, operating system, referring URLs, and pages visited.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to improve your experience on our Site. 
                You can control cookies through your browser settings, though disabling cookies may affect 
                Site functionality.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Provide, operate, and maintain our Site</li>
                <li>Improve and personalize your experience</li>
                <li>Understand how you use our Site through analytics</li>
                <li>Communicate with you about our services</li>
                <li>Send marketing and promotional communications (with your consent)</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect and prevent fraud or security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                We use the following third-party services that may collect information about you:
              </p>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
                <p className="text-muted-foreground mb-2">
                  Tracking ID: G-1T7N4ZN4W0<br />
                  Purpose: Website analytics and performance monitoring<br />
                  Privacy Policy: <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-foreground mb-2">Microsoft Clarity</h4>
                <p className="text-muted-foreground mb-2">
                  Project ID: 4me1k8d6vt<br />
                  Purpose: User behavior analysis and UX optimization<br />
                  Privacy Policy: <a href="https://privacy.microsoft.com/en-us/privacystatement" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Privacy Statement</a>
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-foreground mb-2">LinkedIn Insight Tag</h4>
                <p className="text-muted-foreground mb-2">
                  Partner ID: 6796212<br />
                  Purpose: Conversion tracking, retargeting, and professional network analytics<br />
                  Privacy Policy: <a href="https://www.linkedin.com/legal/privacy-policy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Privacy Policy</a>
                </p>
              </div>

              <p className="text-muted-foreground mt-4">
                These third-party services have their own privacy policies and are not controlled by 
                Control Origins. We encourage you to review their privacy policies.
              </p>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. How We Share Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li><strong>Service Providers:</strong> With third-party vendors who provide analytics, hosting, and other services</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> When you explicitly consent to sharing</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information. However, no method of transmission over the internet or electronic 
                storage is 100% secure. While we strive to protect your information, we cannot guarantee 
                absolute security.
              </p>
              <p className="text-muted-foreground mb-4">
                Our Site is hosted on Azure Static Web Apps with automatic HTTPS encryption. We regularly 
                review and update our security practices.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information</li>
                <li><strong>Object:</strong> Object to processing of your information</li>
                <li><strong>Restrict:</strong> Request restriction of processing</li>
                <li><strong>Portability:</strong> Request transfer of your information</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                To exercise any of these rights, please contact us through our LinkedIn company page at 
                <a href="https://www.linkedin.com/company/control-origins" className="text-accent hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  linkedin.com/company/control-origins
                </a>
              </p>
            </section>

            {/* Cookie Management */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookie Management</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies</li>
                <li><strong>Google Analytics Opt-Out:</strong> Use the <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>LinkedIn Opt-Out:</strong> Manage LinkedIn advertising settings in your LinkedIn account</li>
                <li><strong>Do Not Track:</strong> We respect browser Do Not Track signals</li>
              </ul>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your information may be transferred to and processed in countries other than your country 
                of residence. These countries may have different data protection laws. By using our Site, 
                you consent to the transfer of your information to the United States and other countries.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our Site is not intended for children under 18 years of age. We do not knowingly collect 
                personal information from children. If you believe we have collected information from a 
                child, please contact us immediately.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and 
                enforce our agreements. Analytics data is typically retained for 26 months in accordance 
                with Google Analytics default settings.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date. You are 
                advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <strong>Control Origins</strong><br />
                  <span className="text-sm text-muted-foreground">Remote-Based Business - Portfolio Brand</span>
                </p>
                <p className="text-muted-foreground mb-2">
                  LinkedIn (Primary Contact): <a href="https://www.linkedin.com/company/control-origins" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/company/control-origins</a>
                </p>
                <p className="text-muted-foreground">
                  Website: <a href="https://controlorigins.com" className="text-accent hover:underline">controlorigins.com</a>
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  <em>Note: Control Origins is not currently accepting new business engagements.</em>
                </p>
              </div>
            </section>

            {/* Compliance */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Legal Compliance</h2>
              <p className="text-muted-foreground mb-4">
                This Privacy Policy is designed to comply with applicable privacy laws, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li><strong>GDPR:</strong> General Data Protection Regulation (European Union)</li>
                <li><strong>CCPA:</strong> California Consumer Privacy Act</li>
                <li><strong>COPPA:</strong> Children's Online Privacy Protection Act</li>
                <li><strong>CAN-SPAM:</strong> Controlling the Assault of Non-Solicited Pornography and Marketing Act</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
