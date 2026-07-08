/*
 * Good Tide Club — chapter & impact data (platform v0)
 *
 * THIS IS THE ONLY FILE YOU EDIT to update the site. Then redeploy.
 *
 * ADD A CHAPTER: copy a block below, fill it in, set status:
 *   "launching" — approved, first event not yet held (shows as coming soon)
 *   "live"      — holding events (shows schedule + WhatsApp link)
 *   "dormant"   — paused (shows greyed with "back soon")
 *
 * UPDATE IMPACT (monthly, from ops/impact-log.csv totals):
 *   events = number of rows, bags/kg = column sums. All-time totals, not monthly.
 *   The impact strip stays hidden until events > 0.
 */
window.TT_DATA = {
  chapters: [
    {
      town: "San Juan del Sur",
      country: "Nicaragua",
      flag: "🇳🇮",
      beach: "Playa San Juan del Sur",
      day: "",            // e.g. "Saturday" — set when the host confirms the slot
      time: "",           // e.g. "9:00 AM"
      meetingPoint: "",   // e.g. "the flagpole"
      host: "",           // e.g. "Casa Oro Eco Hostel"
      whatsapp: "",       // chapter group invite link
      status: "launching"
    }
  ],
  impact: {
    events: 0,
    bags: 0,
    kg: 0
  }
};
