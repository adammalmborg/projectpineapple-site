/**
 * Industry landing pages. One template (src/pages/[industry].astro), swapped
 * content. To add an industry, add an entry here; no layout work needed.
 *
 * These are paid-search landing pages first, SEO pages second: single
 * purpose, wordmark-only header, no nav, one CTA repeated top and bottom, no
 * testimonial.
 *
 * NOTE: the attribution claims in `breaks` are the highest-risk copy on the
 * site. They were drafted during design, not client-supplied. Confirm before
 * the DNS cutover.
 */

export interface Industry {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  breaksHeading: string;
  breaks: { heading: string; body: string }[];
  methodHeading: string;
  method: string[];
  stats: { label: string; value: string }[];
  closingHeading: string;
  closingBody: string;
}

export const industries: Record<string, Industry> = {
  dental: {
    slug: 'dental',
    title: 'Dental practice marketing that tracks patients, not form fills | Project Pineapple',
    description:
      'Paid advertising for dental practices, connected to booked appointments rather than leads. Flat fee. Free account assessment.',
    eyebrow: 'For dental practices',
    headline: 'Your ads are measured in form fills. Your practice is measured in patients who show up.',
    subhead:
      'Most dental accounts optimize toward whatever the platform can see: form submissions and clicks on your phone number. Neither one tells you whether a patient sat in the chair. I connect the spend to booked appointments, then rebuild the campaigns around it.',
    breaksHeading: 'What breaks in dental attribution',
    breaks: [
      {
        heading: "The call is the conversion, and it's counted wrong.",
        body: "Google counts a click on your phone number. It doesn't know whether the phone was answered, whether the caller booked, or whether they arrived.",
      },
      {
        heading: 'A cleaning and an implant case count as the same lead.',
        body: 'Until new patient value is established by treatment type, bidding treats them identically.',
      },
      {
        heading: 'No shows report as wins.',
        body: 'A booked appointment that never arrives still looks like a conversion in the account.',
      },
      {
        heading: 'Cost per lead hides the treatment mix.',
        body: 'Two practices with the same cost per lead can have very different months.',
      },
      {
        heading: 'Google restricts what you can do with health data.',
        body: 'Personalized advertising rules limit targeting and remarketing for dental, and accounts get assets pulled without warning when the settings are wrong. Most agencies find out after it happens.',
      },
    ],
    methodHeading: 'How I work in a dental account',
    method: [
      'Establish what a new patient is worth by treatment type, not on average.',
      'Connect the booking back to its source using call tracking and your scheduling data.',
      'Rebuild the campaigns around booked patients. Same budget, different patients.',
      "Report on what actually happened, including what I can't attribute yet.",
    ],
    stats: [
      { label: 'Practices', value: 'Single and group' },
      { label: 'Media', value: '$3K+ / month' },
      { label: 'Fee', value: 'Flat monthly' },
    ],
    closingHeading: 'Find out what your account is actually counting',
    closingBody:
      "Thirty minutes in your account and your numbers. I'll show you what's being counted as a conversion and the two or three changes that would move the most.",
  },

  legal: {
    slug: 'legal',
    title: 'Law firm marketing that tracks signed cases, not leads | Project Pineapple',
    description:
      'Paid advertising for law firms, connected to signed clients rather than form fills. Flat fee. Free account assessment.',
    eyebrow: 'For law firms',
    headline: 'Your ads are measured in leads. Your firm is measured in cases that close.',
    subhead:
      'Most law firm accounts optimize toward form fills and phone clicks, and the sales cycle means nobody finds out for months whether any of it turned into a case. I connect the spend to signed clients, then rebuild the campaigns around it.',
    breaksHeading: 'What breaks in legal attribution',
    breaks: [
      {
        heading: 'Intake is the conversion, not the click.',
        body: 'A call that rings out, a form that sits for two days, a consult that never gets scheduled. The account counts all of them as wins.',
      },
      {
        heading: 'Case values vary by an order of magnitude.',
        body: 'A traffic matter and a serious injury case can come from the same keyword. Until case value is established by practice area, the platform bids on them the same way.',
      },
      {
        heading: 'The cycle is long, so the report lies by omission.',
        body: 'What entered the pipeline this month and what closed this month are different numbers, and most reporting shows one as if it were the other.',
      },
      {
        heading: 'You have more lead sources than you can attribute.',
        body: 'Directories, referral networks, agencies sending leads, your own paid search. When nobody can say which source produced the good cases, the money keeps going to all of them.',
      },
    ],
    methodHeading: 'How I work in a law firm account',
    method: [
      'Establish what a signed case is worth by practice area, not on average.',
      'Connect the signed client back to its source using call tracking and your intake or case management data.',
      'Rebuild the campaigns around signed cases. Same budget, different callers.',
      "Report on what actually happened, and be clear about what's pipeline and what's closed.",
    ],
    stats: [
      { label: 'Firms', value: 'Solo to mid-size' },
      { label: 'Media', value: '$3K+ / month' },
      { label: 'Fee', value: 'Flat monthly' },
    ],
    closingHeading: 'Find out what your account is actually counting',
    closingBody:
      "Thirty minutes in your account and your numbers. I'll show you what's being counted as a conversion and the two or three changes that would move the most.",
  },
};
