import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for Ruvia Studios services.",
};

export default function TermsPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen pt-12 pb-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 prose prose-slate">
        <h1 className="text-3xl font-bold text-[var(--ink)] mb-8">Terms of Service</h1>
        <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm text-[var(--ink-muted)] space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">1. Project Scope & Deliverables</h2>
          <p>
            All projects begin with a clear, agreed-upon scope of work. Any additional features or requirements requested after development has started will be subject to a separate estimation and timeline adjustment.
          </p>

          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">2. Revisions</h2>
          <p>
            Standard projects include up to 2 major revision rounds during the design phase and minor bug-fixing revisions during the handover phase. Structural changes requested post-approval may incur additional costs.
          </p>

          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">3. Payment Terms</h2>
          <p>
            A standard project requires a 50% upfront deposit before work commences. The remaining 50% is due upon project completion and before the final handover or deployment to the production server.
          </p>

          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">4. Ownership & Assets</h2>
          <p>
            Upon full and final payment, the client owns the final deployed code, assets, and design files specific to their project. Ruvia Studios retains the right to use the project in our portfolio unless a Non-Disclosure Agreement (NDA) is signed.
          </p>

          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">5. Hosting & Domain</h2>
          <p>
            Unless specifically included in the package (such as the Website Starter package), clients are responsible for their own domain name renewals and hosting costs post-launch. We can assist with the setup process.
          </p>

          <h2 className="text-xl font-semibold text-[var(--ink)] mt-8">6. Post-Launch Support</h2>
          <p>
            We provide a 30-day bug-fixing warranty after launch. Ongoing maintenance, content updates, and feature additions beyond this period require a separate maintenance agreement.
          </p>
        </div>
      </div>
    </div>
  );
}
