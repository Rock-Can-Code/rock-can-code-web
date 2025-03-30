import Particles from "@/src/views/common/components/particles";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <Particles className="absolute inset-0 -z-10" quantity={150} />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-200">Terms of Service</h1>
      </div>

      <div className="text-lg text-zinc-400">
        <p className="mb-8">
          These Terms of Service govern your use of our website and services. By accessing or using Rock Can Code's website, you agree to comply with these terms. If you do not agree with any part of these terms, you may not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Acceptance of Terms</h2>
        <p className="mb-8">
          By using Rock Can Code's website and services, you agree to be bound by these Terms of Service, as well as any additional guidelines or rules that may be posted from time to time.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Use of the Website</h2>
        <p className="mb-8">
          You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. You may not misuse or interfere with the functioning of the website in any way.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Intellectual Property</h2>
        <p className="mb-8">
          All content provided on the website, including text, images, logos, and designs, is the property of Rock Can Code and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without prior written permission from Rock Can Code.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Limitation of Liability</h2>
        <p className="mb-8">
          Rock Can Code is not liable for any damages arising from the use or inability to use the website or services. We are not responsible for any indirect, incidental, or consequential damages, including loss of data or profits.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Privacy and Data</h2>
        <p className="mb-8">
          Your use of our website is subject to our Privacy Policy. By using our website, you agree to the collection, use, and processing of your data as described in our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Modifications</h2>
        <p className="mb-8">
          Rock Can Code reserves the right to modify or update these Terms of Service at any time. Any changes will be posted on this page with an updated revision date. Continued use of the website after such changes constitutes your acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Governing Law</h2>
        <p className="mb-8">
          These Terms of Service are governed by the laws of the European Union. Any disputes arising from these terms will be resolved in the courts of the European Union.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms of Service, please <a href="/contact" className="text-zinc-200 hover:text-zinc-100">contact us</a>.
        </p>
      </div>
    </div>
  );
}
