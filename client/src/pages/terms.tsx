import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import BackToTop from "@/components/back-to-top";
import Breadcrumb from "@/components/breadcrumb";

export default function Terms() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms and Conditions", href: "/terms", active: true }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Terms and Conditions | Control Origins - Microsoft Azure & ASP.NET Consulting"
        description="Terms and Conditions for Control Origins website and consulting services. Legal terms, privacy policies, and conditions of use for our Microsoft Azure and ASP.NET consulting services."
        keywords="terms and conditions, legal terms, privacy policy, consulting terms, Microsoft Azure consulting terms, ASP.NET development terms, Control Origins legal"
        url="https://controlorigins.com/terms"
      />
      <Navigation />
      <main role="main" className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Page Header with H1 */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: September 2, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to Control Origins ("we," "our," or "us"). These Terms and Conditions ("Terms") 
                govern your use of our website at controlorigins.com (the "Service") operated by Control Origins.
              </p>
              <p className="text-muted-foreground mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these terms, then you may not access the Service.
              </p>
            </section>

            {/* Website Use */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Website Use</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Permitted Use</h3>
              <p className="text-muted-foreground mb-4">
                You may use our website for lawful purposes only. You agree not to use the site:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>To harm minors in any way</li>
                <li>To send, knowingly receive, upload, download, use, or re-use any material which does not comply with our content standards</li>
                <li>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Intellectual Property</h3>
              <p className="text-muted-foreground mb-4">
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of Control Origins and its licensors. The Service is protected by copyright, 
                trademark, and other laws.
              </p>
            </section>

            {/* Consulting Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Consulting Services</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Service Description</h3>
              <p className="text-muted-foreground mb-4">
                Control Origins provides Microsoft Azure consulting, ASP.NET development, and business 
                technology solutions. Specific terms for consulting engagements will be outlined in 
                separate Service Agreements or Statements of Work.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Professional Standards</h3>
              <p className="text-muted-foreground mb-4">
                Our consulting services are provided with professional care and skill. We maintain industry 
                certifications and follow Microsoft best practices in all technology implementations.
              </p>
            </section>

            {/* Privacy and Data Collection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Privacy and Data Collection</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Website Analytics</h3>
              <p className="text-muted-foreground mb-4">
                We use multiple analytics tools to collect non-personally identifiable information about how you 
                use our website, including Google Analytics, Microsoft Clarity, and LinkedIn Insight Tag. This may include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Pages visited and time spent on pages</li>
                <li>Browser type and version</li>
                <li>Operating system and device information</li>
                <li>Referring website and traffic sources</li>
                <li>General geographic location (country/region)</li>
                <li>User interactions and engagement patterns</li>
                <li>LinkedIn professional interest data (aggregated and anonymous)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Cookies and Tracking Technologies</h3>
              <p className="text-muted-foreground mb-4">
                Our website uses cookies and similar tracking technologies from:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li><strong>Google Analytics:</strong> Website traffic analysis and user behavior tracking</li>
                <li><strong>Microsoft Clarity:</strong> User experience analytics and heat mapping</li>
                <li><strong>LinkedIn Insight Tag:</strong> Professional audience insights and conversion tracking</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                These services help us understand our audience and improve our website experience. You can 
                disable cookies in your browser settings, though this may affect website functionality.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.3 No Personal Information Collection</h3>
              <p className="text-muted-foreground mb-4">
                Our website does not collect personally identifiable information unless you voluntarily 
                provide it through contact forms or email communication. We do not require account 
                registration or login for website access.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Cookies</h3>
              <p className="text-muted-foreground mb-4">
                We may use cookies to improve your experience on our website. You can choose to 
                disable cookies through your browser settings, though this may affect website functionality.
              </p>
            </section>

            {/* Disclaimer and Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Disclaimer and Limitation of Liability</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Website Disclaimer</h3>
              <p className="text-muted-foreground mb-4">
                THE INFORMATION ON THIS WEBSITE IS PROVIDED ON AN "AS IS" BASIS. TO THE FULLEST EXTENT 
                PERMITTED BY LAW, CONTROL ORIGINS EXCLUDES ALL REPRESENTATIONS, WARRANTIES, OBLIGATIONS, 
                AND LIABILITIES ARISING OUT OF OR IN CONNECTION WITH THE INFORMATION PROVIDED ON THIS WEBSITE.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Professional Services Disclaimer</h3>
              <p className="text-muted-foreground mb-4">
                While we strive to provide accurate and up-to-date information, the content on this website 
                should not be considered as professional advice for your specific situation. For professional 
                consulting services, please contact us directly.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Limitation of Liability</h3>
              <p className="text-muted-foreground mb-4">
                IN NO EVENT SHALL CONTROL ORIGINS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
                CONSEQUENTIAL, OR SPECIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THIS 
                WEBSITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE.
              </p>
            </section>

            {/* External Links */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. External Links</h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to external websites that are not provided or maintained 
                by Control Origins. We do not guarantee the accuracy, relevance, timeliness, or 
                completeness of any information on these external websites.
              </p>
              <p className="text-muted-foreground mb-4">
                These links are provided for convenience only and do not imply endorsement. We have no 
                control over the nature, content, and availability of those sites.
              </p>
            </section>

            {/* Compliance and Regulatory */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Compliance and Regulatory</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Regulatory Compliance</h3>
              <p className="text-muted-foreground mb-4">
                Control Origins specializes in regulatory compliance including SOX, HIPAA, and PCI compliance. 
                All compliance-related consulting services are subject to separate agreements and terms 
                specific to regulatory requirements.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">7.2 Data Protection</h3>
              <p className="text-muted-foreground mb-4">
                We are committed to protecting data in accordance with applicable data protection laws 
                including GDPR where applicable. Our consulting services include data protection assessments 
                and implementation guidance.
              </p>
            </section>

            {/* Modifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Modifications</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>
              <p className="text-muted-foreground mb-4">
                Your continued use of the Service after we post any modifications to the Terms on this 
                page will constitute your acknowledgment of the modifications and your consent to abide 
                and be bound by the modified Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms shall be interpreted and governed by the laws of the jurisdiction where 
                Control Origins operates, without regard to its conflict of law provisions.
              </p>
              <p className="text-muted-foreground mb-4">
                Our failure to enforce any right or provision of these Terms will not be considered a 
                waiver of those rights.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-none text-muted-foreground mb-4">
                <li className="mb-2"><strong>Website:</strong> controlorigins.com</li>
                <li className="mb-2"><strong>Email:</strong> Through our <a href="/contact" className="text-accent hover:text-accent/80">contact page</a></li>
                <li className="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/control-origins" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">Control Origins Company Page</a></li>
              </ul>
            </section>

            {/* Effective Date */}
            <section className="mb-8 border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> These Terms and Conditions are effective as of September 2, 2025.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Last Updated:</strong> September 2, 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
