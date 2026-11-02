/**
 * Client quotes. Empty on purpose: the site never shows a placeholder or a
 * paraphrase. Add an entry only with the client's written yes to the exact
 * wording, their name as they want it shown, and their business type.
 *
 * The first entry renders on the home page directly under the hero. With an
 * empty list, nothing renders and the page looks exactly as it does now.
 *
 * Example shape (do not uncomment without a real, approved quote):
 *
 *   {
 *     quote: 'One or two sentences, in the client's own words.',
 *     name: 'First Last',
 *     business: 'Owner, Business Name or business type',
 *   },
 */

export interface Testimonial {
  quote: string;
  name: string;
  business: string;
}

export const testimonials: Testimonial[] = [];
