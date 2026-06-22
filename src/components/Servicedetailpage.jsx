import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Reusable shell for every individual service page (Sports Injury
 * Rehabilitation, Back Pain Treatment, etc). Each route component stays a
 * thin wrapper: build a `data` object shaped like the example in
 * SportsInjuryRehabilitation.jsx and pass it in here.
 *
 * SEO note: `data.seoTitle` and `data.metaDescription` are included in the
 * data shape so they're easy to find, but this component doesn't write to
 * <head> itself. Wire them up with whatever head-management approach your
 * app uses (e.g. react-helmet-async) inside each route wrapper.
 */

// Every "Book Appointment" CTA across every service page routes here.
// Change it in this one place if the path ever moves.
const BOOKING_PATH = "/book-appointment";

function CheckIcon({ className = "h-5 w-5 text-[#8CC63F]" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42l2.79 2.8 6.79-6.8a1 1 0 011.42 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`h-5 w-5 shrink-0 text-[#0055B8] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, intro, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-[68ch] text-center">
      <p
        className={`font-data mb-3 text-xs uppercase tracking-[0.2em] sm:text-sm ${
          light ? "text-[#8CC63F]" : "text-[#0A73D9]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display mb-4 text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-[#1F2937]"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${light ? "text-white/80" : "text-[#1F2937]/70"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

function ImageOrPlaceholder({ src, alt, className = "" }) {
  const [errored, setErrored] = useState(false);
  if (src && !errored) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setErrored(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0055B8] to-[#0A73D9] ${className}`}
    >
      <span className="font-data px-6 text-center text-xs uppercase tracking-wide text-white/70">
        {alt}
      </span>
    </div>
  );
}

function Hero({ data }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003E87] via-[#0055B8] to-[#0A73D9] px-6 pb-16 pt-24 text-white sm:px-10 sm:pb-20 sm:pt-28">
      <div className="absolute inset-0">
        {data.hero.image && (
          <img
            src={data.hero.image}
            alt=""
            className="h-full w-full object-cover opacity-25"
            aria-hidden="true"
          />
        )}
      </div>
      <div
        className="pointer-events-none absolute -right-[10%] -top-[20%] h-[140%] w-[60%] bg-[radial-gradient(circle,rgba(140,198,63,0.18)_0%,rgba(140,198,63,0)_65%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="font-data mb-4 text-xs uppercase tracking-[0.2em] text-[#8CC63F] sm:text-sm">
          {data.hero.eyebrow}
        </p>
        <h1 className="font-display mb-3 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          {data.h1}
        </h1>
        <p className="font-display mb-6 text-xl font-semibold text-[#C9EB95] sm:text-2xl">
          {data.hero.headline}
        </p>
        {data.hero.copy.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="mx-auto mb-4 max-w-[62ch] text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {para}
          </p>
        ))}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={BOOKING_PATH}
            className="font-display rounded-full bg-[#8CC63F] px-8 py-4 text-sm font-semibold text-[#14210F] shadow-lg shadow-[#8CC63F]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7CBF32] hover:shadow-xl hover:shadow-[#8CC63F]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {data.hero.primaryCta}
          </Link>
          <a
            href="#book"
            className="font-display rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {data.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function Overview({ data }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-[68ch] text-center">
        {data.overview.intro.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="mb-4 text-base leading-relaxed text-[#1F2937]/75 sm:text-lg"
          >
            {para}
          </p>
        ))}
        <p className="font-display mb-5 text-base font-semibold text-[#1F2937]">
          {data.overview.focusNote}
        </p>
      </div>
      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
        {data.overview.focusAreas.map((area) => (
          <span
            key={area}
            className="font-data rounded-full border border-[#0055B8]/15 bg-[#F2F7FC] px-4 py-1.5 text-xs uppercase tracking-wide text-[#0055B8]"
          >
            {area}
          </span>
        ))}
      </div>
      {data.overview.closing && (
        <p className="mx-auto mt-8 max-w-[60ch] text-center text-base leading-relaxed text-[#1F2937]/70">
          {data.overview.closing}
        </p>
      )}
    </section>
  );
}

function ConditionsTreated({ data }) {
  return (
    <section className="bg-[#F2F7FC] px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What We Treat"
          title={data.conditionsHeading}
        />
        <div className="mb-12 overflow-hidden rounded-[20px] shadow-lg shadow-[#0055B8]/10">
          <div className="aspect-[21/9]">
            <ImageOrPlaceholder
              src={data.conditionsImage}
              alt="Runner receiving knee rehabilitation therapy"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.conditions.map((condition) => (
            <div
              key={condition.title}
              className="flex flex-col gap-3 rounded-[20px] border border-[#0055B8]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0055B8]/10"
            >
              <h3 className="font-display text-lg font-semibold text-[#1F2937]">
                {condition.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#1F2937]/70">
                {condition.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {condition.examples.map((ex) => (
                  <span
                    key={ex}
                    className="font-data rounded-full border border-[#8CC63F]/45 bg-[#F2F7FC] px-3 py-1 text-[0.66rem] uppercase tracking-wide text-[#0055B8]"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignsSection({ data }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
      <SectionHeading
        eyebrow="Know The Signs"
        title="Signs You Need Sports Rehabilitation"
      />
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
        {data.signs.map((sign) => (
          <div key={sign} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-sm leading-relaxed text-[#1F2937]/80 sm:text-base">
              {sign}
            </span>
          </div>
        ))}
      </div>
      {data.signsNote && (
        <p className="mx-auto mt-8 max-w-[56ch] text-center text-sm font-medium italic text-[#0A73D9]">
          {data.signsNote}
        </p>
      )}
    </section>
  );
}

function Benefits({ data }) {
  return (
    <section className="bg-[#F2F7FC] px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why It Works"
          title={`Benefits of ${data.h1}`}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[18px] border border-[#0055B8]/10 bg-white p-6"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#8CC63F]/15">
                <CheckIcon className="h-5 w-5 text-[#7CBF32]" />
              </div>
              <h3 className="font-display mb-1.5 text-base font-semibold text-[#1F2937]">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#1F2937]/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <SectionHeading eyebrow="Our Method" title="Our Treatment Approach" />
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[20px] shadow-lg shadow-[#0055B8]/10 lg:sticky lg:top-8">
          <div className="aspect-[4/5]">
            <ImageOrPlaceholder
              src={data.approachImage}
              alt="Football player recovering from ankle injury"
            />
          </div>
        </div>
        <div className="flex flex-col gap-7">
          {data.approach.map((step) => (
            <div key={step.title}>
              <h3 className="font-display mb-2.5 text-lg font-semibold text-[#1F2937]">
                {step.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {step.items.map((item) => (
                  <span
                    key={item}
                    className="font-data rounded-full border border-[#0055B8]/15 bg-[#F2F7FC] px-3.5 py-1.5 text-xs uppercase tracking-wide text-[#0055B8]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs({ data }) {
  return (
    <section className="bg-gradient-to-br from-[#003E87] via-[#0055B8] to-[#0A73D9] px-6 py-16 text-white sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why RehabCare"
          title="Why Choose Our Clinic?"
          light
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-[18px] border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="font-display mb-1.5 text-base font-semibold text-[#C9EB95]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSteps({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <SectionHeading eyebrow="What To Expect" title="Our Treatment Process" />
      <div className="mb-12 overflow-hidden rounded-[20px] shadow-lg shadow-[#0055B8]/10">
        <div className="aspect-[21/9]">
          <ImageOrPlaceholder
            src={data.processImage}
            alt="Physiotherapist guiding strength exercises"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.process.map((step) => (
          <div
            key={step.step}
            className="rounded-[18px] border border-[#0055B8]/10 bg-[#F2F7FC] p-6"
          >
            <span className="font-data text-3xl font-semibold text-[#0A73D9]/30">
              {step.step}
            </span>
            <h3 className="font-display mb-1.5 mt-2 text-base font-semibold text-[#1F2937]">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#1F2937]/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQs({ data }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-[#F2F7FC] px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked Questions"
        />
        <div className="flex flex-col gap-3">
          {data.faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={faq.question}
                className="rounded-[16px] border border-[#0055B8]/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-display text-sm font-semibold text-[#1F2937] sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronIcon open={open} />
                </button>
                {open && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-[#1F2937]/70 sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ data }) {
  return (
    <section
      id="book"
      className="relative overflow-hidden px-6 py-20 text-white sm:px-10 sm:py-24"
    >
      <div className="absolute inset-0">
        <ImageOrPlaceholder
          src={data.finalCta.image}
          alt="Athlete returning to training after recovery"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003E87]/93 via-[#0055B8]/90 to-[#0A73D9]/85" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-display mb-4 text-3xl font-bold leading-tight sm:text-4xl">
          {data.finalCta.headline}
        </h2>
        <p className="mx-auto mb-3 max-w-[58ch] text-base leading-relaxed text-white/85 sm:text-lg">
          {data.finalCta.copy}
        </p>
        <p className="font-display mb-8 text-lg font-semibold text-[#C9EB95]">
          {data.finalCta.subheadline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${data.finalCta.phoneNumber}`}
            className="font-display rounded-full bg-[#8CC63F] px-8 py-4 text-sm font-semibold text-[#14210F] shadow-lg shadow-[#8CC63F]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7CBF32]"
          >
            {data.finalCta.phoneCta}
          </a>
          <Link
            to={BOOKING_PATH}
            className="font-display rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            {data.finalCta.bookCta}
          </Link>
        </div>
        <p className="font-data mt-6 text-xs uppercase tracking-wide text-white/65">
          {data.finalCta.address}
        </p>
      </div>
    </section>
  );
}

const FONT_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500;600&family=Sora:wght@500;600;700;800&display=swap');

.font-display { font-family: 'Sora', ui-sans-serif, system-ui, sans-serif; }
.font-data { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
`;

export default function ServiceDetailPage({ data }) {
  return (
    <div
      className="font-sans text-[#1F2937] antialiased"
      style={{
        fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <style>{FONT_STYLES}</style>
      <Hero data={data} />
      <Overview data={data} />
      <ConditionsTreated data={data} />
      <SignsSection data={data} />
      <Benefits data={data} />
      <Approach data={data} />
      <WhyChooseUs data={data} />
      <ProcessSteps data={data} />
      <FAQs data={data} />
      <FinalCta data={data} />
    </div>
  );
}
