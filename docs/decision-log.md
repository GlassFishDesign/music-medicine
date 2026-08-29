# Decision Log

This file records confirmed product decisions and unresolved questions so they remain visible as the project evolves.

## Confirmed

### 2026-08-28 — Product identity

- Use **Music as Medicine** as the working product name.
- Lead explicitly with microdosing rather than beginning with a broader intentional-music product.
- Consider broader positioning only after validating the microdosing-focused product.

### 2026-08-28 — Audience

- Include people who are actively microdosing.
- Include people preparing for a future microdosing practice.
- Focus on people who want to deepen their practice.

### 2026-08-28 — Product model

- Use the guided playlist experience as both a lead magnet and the free entry point to a monetizable app.
- Provide all three core outcomes: a playlist, personal insight, and a repeatable ritual.
- Treat approximately 15–20 minutes as a target for the first-time guided experience, not a promise.
- Do not require users to listen to complete songs during the creation journey.
- Require an email address to use the app and receive or download results.
- Create a premium layer with guided meditations, ritual ideas, and continuing practice features.
- Use a combination of the creator's voice and additional facilitator voices for guided content.

### 2026-08-28 — Music and community

- Allow users to bring their own songs and receive recommendations.
- Begin the recommendation library with creator curation.
- Launch with creator-curated song recommendations.
- Begin with approximately 100 creator-curated songs.
- Allow moderated community song contributions later.
- Keep the first release independent of Spotify, Apple Music, and Pandora.

### 2026-08-28 — Reflection and privacy

- Identify themes across user responses.
- Allow the user to edit generated themes.
- Let the user choose whether journal entries are saved.
- Support PDF, email, copy, text download, and device sharing for journal output.

### 2026-08-28 — Content and interaction model

- Add **Transformation and Awakening** as a seventh paired feeling family.
- Present broad feeling families before individual feeling words.
- Treat the starter feeling vocabulary as sufficient for now and continue refining it as the product develops.
- Include practice stage—actively microdosing or preparing to begin—in onboarding.
- Include microdosing experience level in onboarding.
- Make meditation optional within a journey but highly suggested.

### 2026-08-29 — Rhythm guided by time

- Treat rhythm guided by time as a core theme of Music as Medicine.
- Include an in-app practice calendar in the first version.
- Let a free user schedule the completed ritual and receive one follow-up reminder.
- Support standard external-calendar export in the first version.
- Design the technical architecture from the beginning for schedules, recurrence, timezones, reminder delivery, push notifications, and future external-calendar connections.
- Reserve recurring rhythms, multiple schedules, web-push reminders, and deeper calendar connections for premium development.

### 2026-08-29 — Audit alignment

- Define three build stages: validation prototype, first commercial release, and premium platform.
- Remove a fixed requirement for three anchor songs; validate the useful number during prototyping.
- Store calendar and reminder information separately from session-only journal content.
- Limit the first commercial release to creator-curated recommendations.
- Stage internal administration and build only the minimum content-management capability needed for launch.
- Use the confirmed experience levels: new, some experience, established, and prefer not to say.
- Omit microdosing-day versus non-microdosing-day context from MVP onboarding.
- Use both a body illustration and an accessible written list.
- Let users play songs in their preferred music app and return for reflection.
- Place the optional, highly suggested meditation before anchor-song reflection.
- Present program-interest questions after the completed result as the current direction.
- Ask users to choose their next ritual date and suggest one only when they do not choose.
- Give free users one saved playlist and ritual, one active scheduled practice, an email reminder, manual completion or rescheduling, and one short follow-up reflection.
- Build the Feeling Map through additional coaching questions and prompts, keeping meaning human-authored and user-confirmed.
- Do not assume an AI implementation for Feeling Map creation.
- Include a simple explicit-language label and an optional concise curator note when useful.

### 2026-08-29 — Visual design direction

- Use a retro analog editorial direction inspired by the 1980s and 1990s.
- Avoid making neon synthwave, arcade styling, or old-computer interfaces the dominant aesthetic.
- Use Montserrat Classic and Neue Einstellung as the intended typefaces, subject to confirming webfont availability and permissions.
- Begin with butter yellow, near-black, warm white, raspberry, and deep aubergine, then introduce additional retro colors.
- Draw imagery from cassette tapes and the broader world of analog music.
- Combine editorial layouts with playful analog controls.
- Keep **Microdosing Magic Music Mix** as a possible name for the free experience, not the app name and not a final requirement.
- Treat the attached seven-page guide as visual and tonal reference only.

### 2026-08-29 — User journey audit decisions

- Allow a user to complete the core journey with one song and one anchor-song reflection.
- Continue to design the experience around building a genuine playlist. Encourage additional songs and retain five to ten songs as guidance rather than a gate.
- Refer to a one-song result as a starting mix when useful.
- Use a balanced interaction structure: combine administrative and closely related choices while preserving separate space for meaningful reflective moments.
- Keep one shared core journey for active and preparing users.
- Use practice stage for light but visible personalization in framing, explanation, ritual language, and scheduling.
- Use experience level only to adjust the amount of explanation; do not use it as a hidden qualification score.
- For a session-only journey, ask at completion whether the user wants to retain only the finished playlist and ritual.
- Delete the raw journal responses from a session-only journey even when the user retains the finished practice.
- If the session-only user does not retain the finished practice, keep only neutral calendar information they explicitly requested.
- Keep scheduling optional but highly encouraged. Declining to schedule does not block the completed result, and the app creates no calendar entry or reminder without permission.
- Build Feeling Map themes through a mirror-and-confirm process using the user's words, selections, and coaching responses.
- Allow clearly marked wording suggestions when a user wants help, but do not provide psychological interpretations or claim hidden insight.
- Keep playlist sequencing as an optional creative layer. Let users retain their current order and skip the arc automatically for a one-song mix.
- Require passwordless email verification before personal reflection begins.
- Offer both an on-page verification code and a clickable access link while preserving the user's place.
- Present the step as receiving access rather than creating an account. Create a lightweight account after verification without requiring a password.
- Make first name optional or collect it later. Keep email verification, journal storage, requested product messages, marketing permission, and program communication separate.

## Open

### Community attribution

The working direction is to show an approved contributor's explanation alongside an editor's note. Confirm this after reviewing representative submissions.

Questions still to resolve include:

- An anonymous or attributed contribution
- How much editing is permitted while preserving the contributor's voice

### Recommendation descriptions

- Test a provisional minimum of 60 characters for each song-recommendation explanation.
- Determine whether a character minimum produces useful explanations or whether a different content guideline is needed.

### Content considerations

- Confirmed: use a simple explicit-language label and an optional concise curator note when useful.

### Meditation personalization

- Determine whether the free meditation should be a general arrival practice or tailored to the user's selected feeling.

### Calendar details

- Determine which practice types appear on the first-version calendar beyond the completed ritual.
- Determine when the free follow-up reminder is sent.
- Determine whether the app suggests a rhythm or asks the user to choose the next date without a suggestion.
- Determine how microdosing days, meditation days, listening rituals, and integration days differ visually.
- Reminder timing remains open. The earlier 15-minute suggestion referred only to how long before a scheduled practice the notification might arrive.

### Free return loop

- Confirmed: free users can reopen one saved ritual, complete or manually reschedule one active practice, receive an email reminder, and answer one follow-up reflection prompt.

### Feeling Map generation

- Confirmed direction: the Feeling Map develops through additional coaching questions and prompts.
- The user remains the author of meaning and confirms the connections that appear.
- No AI implementation is assumed.
