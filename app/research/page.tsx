export default function ResearchPage() {
  return (
    <main className="px-6 md:px-12 lg:px-24 py-16 max-w-4xl">

      <h1 className="text-3xl font-semibold mb-10">
        Research
      </h1>

      {/* Publication 1 */}
      <div className="mb-10">
        <h2 className="font-semibold">
          Domain-Specific NLP for Personalized Radiation Treatment Pathways with LLM
        </h2>

        <p className="text-sm text-slate-600 mt-1">
          IEEE WIECON-ECE 2025
        </p>

        <p className="text-slate-600 mt-3 leading-relaxed">
          Developed a domain-adapted large language model pipeline for
          structured treatment recommendation generation in clinical oncology.
        </p>
      </div>

      {/* Publication 2 */}
      <div className="mb-10">
        <h2 className="font-semibold">
          Hybrid Deep Learning Framework for Real-Time Traffic Risk Prediction
        </h2>

        <p className="text-sm text-slate-600 mt-1">
          IEEE QPAIN 2026
        </p>

        <p className="text-slate-600 mt-3 leading-relaxed">
          Designed a multi-modal deep learning system combining temporal and
          spatial features for risk-aware traffic prediction.
        </p>
      </div>

      {/* Book Chapter */}
      <div className="mb-10">
        <h2 className="font-semibold">
          Enhancing Cybersecurity in Supply Chains
        </h2>

        <p className="text-sm text-slate-600 mt-1">
          IGI Global Book Chapter
        </p>

        <p className="text-slate-600 mt-3 leading-relaxed">
          Analyzed AI-driven security vulnerabilities and proposed
          mitigation frameworks for modern digital supply chains.
        </p>
      </div>

    </main>
  );
}