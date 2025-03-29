import Particles from "@/src/views/common/components/particles";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <Particles className="absolute inset-0 -z-10" quantity={150} />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-200">Privacy Policy</h1>
      </div>

      <div className="text-lg text-zinc-400">
        <p className="mb-8">
          At Rock Can Code, we value your privacy. This privacy policy outlines how we handle your data when you interact with our website and services.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Personal Information</h2>
        <p className="mb-8">
          We do not collect, store, or process any personal information from users who visit our website. Your privacy is important to us, and we are committed to ensuring that your personal data remains private.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Cookies</h2>
        <p className="mb-8">
          We may use cookies to improve your browsing experience, specifically for tracking purposes related to our usage of Vercel's analytics. These cookies are used for site performance, debugging, and optimizing the user experience. Please note that cookies do not store any personal information.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Data Storage and Security</h2>
        <p className="mb-8">
          As a company based in the European Union, we ensure compliance with all applicable data protection laws, including the General Data Protection Regulation (GDPR). We do not retain any personal data, and no personal information is transferred or stored outside of the European Union.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-8">
          We reserve the right to update or modify this privacy policy at any time. Any changes will be reflected on this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Contact Us</h2>
        <p>
          If you have any questions or concerns about this privacy policy, feel free to <a href="/contact" className="text-zinc-200 hover:text-zinc-100">contact us</a>.
        </p>
      </div>
    </div>
  );
}
