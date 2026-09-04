/**
 * Site-wide constants. Anything that appears on more than one page, or that
 * has to change in exactly one place at launch, lives here.
 */

export const SITE_NAME = 'Project Pineapple';
export const LEGAL_NAME = 'Project Pineapple LLC';
export const CITY = 'Salt Lake City, Utah';
export const EMAIL = 'adam@projectpineapple.com';

/**
 * Cal.com booking event. A 30-minute event, matching the copy everywhere on
 * the site. If the event slug ever changes, update these two values and
 * nothing else.
 */
export const CAL_LINK = 'adammalmborg/30min';
export const CAL_NAMESPACE = '30min';

/** Every CTA on the site reads the same. Deliberate; do not vary per page. */
export const CTA_LABEL = "Let's jump on a call";

/** Microcopy under hero buttons. */
export const CTA_MICROCOPY_HOME =
  'Thirty minutes. You keep everything I find, whether or not we work together.';
export const CTA_MICROCOPY_INDUSTRY = 'Thirty minutes. You keep everything I find.';

/** Cal.com embed config, shared by the modal triggers and the inline embed. */
export const CAL_CONFIG = { layout: 'month_view' } as const;
