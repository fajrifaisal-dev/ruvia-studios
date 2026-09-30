import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data handling at Ruvia Studios.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen pt-12 pb-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 prose prose-slate">
        <h1 className="text-3xl font-bold text-[var(--ink)] mb-8">Privacy Policy</h1>
        <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm text-[var(--ink-muted)] space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you fill out a contact form, communicate with us via WhatsApp, or request a project quote. This may include your name, email address, phone number, and business details.
          </p>

          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to communicate with you, process your requests, manage your projects, and improve our services. We do not sell or rent your personal information to third parties.
          </p>

          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">3. Client Data & Confidentiality</h2>
          <p>
            Any proprietary business data, credentials, or customer information shared with us during the development of your custom system is treated with strict confidentiality. It is only used for the purpose of developing and testing your software.
          </p>

          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">4. Analytics and Tracking</h2>
          <p>
            We may use standard analytics tools (like Google Analytics) to understand how visitors interact with our website. This data is anonymized and used solely to improve our website's user experience.
          </p>

          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at <strong>{site.email}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
