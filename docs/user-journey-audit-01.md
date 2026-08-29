# User Journey Audit 01

**Product:** Music as Medicine  
**Audit lens:** Product Owner and Business Analyst  
**Audit date:** 2026-08-29  
**Primary document reviewed:** Screen-by-Screen Experience v0.1  
**Supporting documents:** Product Brief, Content and Data Model, Screen Inventory, Planning Audit 01, and Decision Log  
**Status:** Owner reviewed; eight pre-prototype decisions confirmed

## Audit purpose

This audit evaluates whether the proposed user journey:

- Delivers a clear and meaningful user outcome
- Supports email-list growth and future program qualification
- Creates a credible free-to-premium path
- Can be completed without unnecessary friction
- Preserves the user's authorship and privacy choices
- Contains enough defined behavior to become a testable prototype and, later, a build specification

This is a product and requirements audit, not a copy critique or visual-design review.

## Executive assessment

The journey has a strong, differentiated product spine:

> Intention → Feeling → Music → Reflection → Meaning → Ritual → Rhythm → Return

The strongest parts are the embodied feeling discovery, the human-authored Feeling Map, and the move from a one-time insight into a scheduled practice. Together, they make the experience more substantial than a playlist generator or downloadable worksheet.

The current proposal is ready to become a prototype after a focused consolidation pass. It is not yet ready to become a build specification.

The primary journey currently contains 43 numbered screens. Screen count alone is not the problem; several steps represent meaningful pauses. The risk is cumulative cognitive load: account access, privacy, practice context, intention, feeling selection, song selection, external listening, reflection, theme confirmation, playlist sequencing, ritual creation, scheduling, exporting, communication consent, and qualification all occur in one first-time journey.

The main product recommendation is to establish a **shortest meaningful completion path** and let users opt into additional depth. A user should be able to reach the core result with one anchor song, while additional songs, deeper prompts, playlist sequencing, and further reflection remain available without becoming completion requirements.

## Owner decisions following the audit

1. One song and one anchor reflection are sufficient to complete the core journey. The app still encourages a genuine playlist, with five to ten songs offered as guidance.
2. Administrative and closely related choices will be combined; meaningful reflective moments will retain their own space.
3. Active and preparing users share one core journey with light but visible personalization.
4. Session-only users will be asked at completion whether they want to retain only the finished playlist and ritual. Raw journal responses will still be deleted.
5. Scheduling remains optional and highly encouraged. No event or reminder is created without permission.
6. Feeling Map themes use a mirror-and-confirm process and do not offer psychological interpretation.
7. Playlist sequencing is an optional creative layer and is skipped for a one-song mix.
8. Passwordless email verification occurs before personal reflection. Users can enter an on-page code or follow an access link; no password is required.

## Overall scorecard

| Area | Assessment | Product-owner finding |
|---|---|---|
| Core value proposition | Strong | The experience has a clear transformation and is not merely a content download. |
| Audience fit | Strong with one gap | Active and preparing users are included, but their journeys do not yet meaningfully differ. |
| Human-centered approach | Strong | The user remains the author of meaning; no opaque interpretation is assumed. |
| First-time completion | At risk | The number of decisions and transitions may delay the first meaningful payoff. |
| Email acquisition | Defined with friction risk | Email is captured early, but leaving the app for a magic link may interrupt momentum. |
| Privacy and user control | Strong concept, incomplete rules | Saved and session-only choices are clear, but later return behavior conflicts with session-only deletion. |
| Rhythm and retention | Strategically strong | Scheduling and returning are meaningful differentiators; event lifecycle rules need definition. |
| Free-to-premium path | Promising, not yet operational | Premium value is visible, but precise entitlements and upgrade triggers are not yet specified. |
| Program qualification | Well placed | Questions occur after value delivery, but consent, routing, and response handling need business rules. |
| Prototype readiness | Nearly ready | A shorter critical path and a few branching rules must be defined first. |
| Build readiness | Not ready | Assembly logic, state behavior, acceptance criteria, analytics, and edge cases remain incomplete. |

## Business-goal traceability

| Business goal | Journey support | Finding |
|---|---|---|
| Grow the email list | S03 account access and S41 communication choice | Email access is present, and marketing permission is correctly separate. The account-access transition needs to be tested for abandonment. |
| Qualify potential flagship-program participants | S42 deeper-support questions | Placement after the completed result protects trust. Define how each answer changes follow-up. |
| Deliver a valuable standalone lead magnet | S07–S40 | The result is substantial: playlist, Feeling Map, ritual, schedule, and export. The path may be too demanding for users seeking a quick first win. |
| Encourage return behavior | S35–S38 and R01–R05 | The scheduled practice creates a credible return loop. Session-only behavior and event lifecycle are unresolved. |
| Support a premium product | R05 and premium previews | Continuity is a sound premium value proposition. Free rescheduling and premium recurrence need a clean boundary. |
| Keep the experience human | S25–S30 | Strong direction. The actual non-AI rules for forming candidate themes and summaries are still unspecified. |

## What should remain intact

These choices form the product's strongest foundation and should not be lost during consolidation:

1. **The user begins with an intention rather than a music genre.** This keeps the experience purpose-led.
2. **Broad feeling family comes before individual words.** This makes a large emotional vocabulary approachable.
3. **Body awareness appears before meaning-making.** This supports a reflective rather than purely analytical experience.
4. **Users can bring songs, receive curated recommendations, or combine both.** This balances personal relevance and discovery.
5. **One anchor song is enough to continue.** This is essential to a flexible first-time journey.
6. **Meditation is optional and highly suggested.** The placement before reflection is coherent.
7. **Themes are proposed invitationally and confirmed by the user.** This protects authorship.
8. **The Feeling Map is editable.** It should feel like a personal artifact, not an assessment.
9. **The completed value appears before communication and qualification questions.** This is the correct trust sequence.
10. **The ritual is placed in time.** Scheduling transforms the experience from a one-time exercise into a returnable practice.

## Priority findings

### P0-1 — Define the shortest meaningful completion path

**Affected screens:** S07–S40  
**Why it matters:** Completion, email-lead quality, emotional momentum, and prototype validity

The current path has many individually reasonable steps, but their combined weight may make the experience feel like a long intake followed by several creation tasks. The first clear artifact does not appear until the Feeling Map at S30, and the full result does not appear until S39.

**Recommended requirement:**

A user must be able to complete the core journey with:

- One intention
- One guiding feeling
- At least one song
- One anchor-song reflection
- User-confirmed themes
- One editable Feeling Map
- One listening ritual
- An optional scheduled return
- One export or save choice

Additional feeling words, songs, anchor reflections, sequencing, and coaching depth should enrich the result without blocking it.

**Recommended interaction principle:** Show a complete-enough path first, then invite depth with choices such as `explore another song` or `add more to this mix`.

**Prototype validation:** Compare completion, felt value, and actual duration between users who explore one anchor and users who choose additional depth.

### P0-2 — Consolidate decisions without flattening the experience

**Affected screens:** S07–S15, S24–S27, S31–S34, S35–S38  
**Why it matters:** Cognitive load and mobile usability

Forty-three screen IDs do not necessarily require 43 separate page loads. Several can become progressive sections or moments within one view.

Good consolidation candidates are:

- Practice stage and experience level
- Intention category and intention writing
- Feeling words and guiding-feeling confirmation
- Body noticing and energy shift
- Song-reflection confirmation and the choice to explore another
- Playlist arc introduction and arrangement
- Ritual preferences and ritual preview
- Date, time, reminder, and calendar confirmation
- Communication choices and optional deeper-support questions

The intention is not to rush reflection. It is to reduce navigation overhead and repeated `continue` decisions.

### P0-3 — Make practice stage change the experience

**Affected screens:** S07, S08, S34–S38, R02–R04  
**Why it matters:** Relevance and data minimization

The app asks whether the user is actively microdosing or preparing to begin, but the documented downstream journey is the same for both.

Because this question is confirmed for onboarding, at least one visible behavior should use it. Examples include:

- Preparing users receive language about building a practice to return to when ready.
- Active users receive language about reconnecting an existing practice to intention.
- Scheduling language avoids assuming that the selected date is a microdosing day.
- Reminder and ritual copy reflect the user's chosen stage without changing the core exercise.

Experience level should likewise change only the amount of explanation. If it does not change content, it should not be used as a hidden qualification score.

### P0-4 — Specify the human Feeling Map assembly rules

**Affected screens:** S28–S30  
**Why it matters:** This is the central product result and the largest implementation ambiguity

The journey correctly rejects opaque interpretation, but phrases such as “small relevant set,” “candidate themes,” and “coaching-led summary” do not yet specify how the app produces them without AI.

The prototype specification needs a deterministic content rule set. At minimum, define:

- Which inputs can become a candidate theme
- How repeated selected words are surfaced
- How a custom user phrase is carried forward verbatim
- Which coaching prompt appears after each input pattern
- How many candidate themes are shown
- What happens when no repeated pattern exists
- What happens when responses are mixed or contradictory
- What minimum confirmation is needed to create the map
- Which summary sentences come from templates and which come from the user

**Recommended pattern:** The system can organize and reflect; the user names, confirms, edits, or removes. No generated statement should enter the final map without a visible confirmation action.

### P0-5 — Resolve the session-only return contradiction

**Affected screens:** S06, S34, S37–S40, R01–R05  
**Why it matters:** Trust, privacy, and functional consistency

The journey says session-only journal, Feeling Map, and ritual content will be removed. The return loop later expects the user to reopen the playlist and listening ritual. These cannot both be true without a more precise rule.

Choose and document one session-only return model:

1. **Minimal reminder only:** retain date, time, neutral title, and a generic arrival practice; the user relies on their exported playlist and ritual.
2. **User-selected retained artifact:** journal responses are deleted, but the user separately consents to retaining the playlist and ritual.
3. **No in-app return content:** retain only calendar metadata and direct the user to the export they saved elsewhere.

The current data model is closest to option 1. The return screens should not promise retained playlist or ritual content to a session-only user unless the policy changes.

### P0-6 — Define scheduling and return-event lifecycle

**Affected screens:** S35–S38 and R01–R05  
**Why it matters:** Rhythm is a core product promise, not an accessory feature

The following rules are still unclear:

- Can a user schedule without an email reminder?
- What is created when the user chooses `continue without scheduling`?
- Does the free follow-up reflection arrive as a second email, a calendar entry, or only after the practice is marked complete?
- When does a scheduled practice become missed?
- Can a missed practice be completed later?
- Does rescheduling create a new event or update the existing event?
- After completion, can the same free practice be scheduled again indefinitely?
- What exactly counts as the free user's one active scheduled practice?
- What happens when timezone or daylight-saving changes occur?

**Recommended first-release lifecycle:** `scheduled → completed`, `scheduled → rescheduled`, `scheduled → skipped`, or `scheduled → missed`. A follow-up reflection becomes available after completion and may be offered after a missed or skipped event without implying failure.

### P0-7 — Decide what “email required to use the app” means operationally

**Affected screens:** S03–S05 and X01  
**Why it matters:** Top-of-funnel conversion and journey recovery

The documents sometimes use “email access” and “account creation” as if they are identical. They may be implemented together, but the user experience needs one clear model.

Define:

- Whether every email submission creates an account
- Whether the user must leave the current browser to verify
- Whether a code can be entered without leaving the page
- How long an access link remains valid
- Whether first name is required to begin or can be collected later
- Whether progress is created before verification
- What happens when the access email is delayed or opened on another device

**Prototype focus:** Test whether the email step feels like access to something valuable or like an interruption before value begins.

## Important P1 findings

### P1-1 — Clarify when the user first experiences value

The landing page names all final outputs, which is helpful, but the user's first personalized payoff occurs late. Add small moments of earned value during the journey:

- Reflect the written intention after S10.
- Show the growing set of feelings after S13.
- Show the working mix continuously after the first song is added.
- Reflect one confirmed insight immediately after the anchor-song reflection.

This creates progress through visible meaning, not only through a phase counter.

### P1-2 — Give playlist building a reliable success path

**Affected screens:** S16–S20

Define business rules for:

- The minimum number of songs needed to proceed; the current five-to-ten range is guidance, not a validated requirement.
- What happens when recommendations return no strong matches.
- Whether the user can proceed with one song.
- Duplicate songs or alternate recordings.
- Broken or unavailable external links.
- Region-specific availability.
- How `not for me` affects only the current session versus future recommendations.
- Whether a private song link is validated or simply stored as entered.

The shortest meaningful path should not depend on finding five songs.

### P1-3 — Keep playlist arc optional until its value is proven

**Affected screens:** S26 and S31–S32

Playlist roles are introduced during song reflection and again during sequencing. They may be useful, but they are also a second categorization task after the user has already selected feelings and themes.

The prototype should test whether the arc:

- Helps the user understand how to use the playlist
- Improves the listening ritual
- Feels like creative play
- Or feels like extra organization after the emotional work is complete

Allow `keep my current order` as a prominent completion path.

### P1-4 — Define ritual assembly and editing rules

**Affected screens:** S33–S34

As with the Feeling Map, “create my ritual” requires explicit non-AI rules. Define which preference selects each ritual component, how the user's intention is inserted, which elements are optional, and what edit controls are available.

The final ritual should remain useful when:

- The user chose no meditation
- The user reflected from memory
- The user has only one song
- The user selected session-only storage
- The user does not schedule a return

### P1-5 — Separate product, marketing, and program permissions in the visible flow

**Affected screens:** S03, S40–S42

The data model correctly separates these permissions. The interface should map each user action to a specific permission:

- Account and transactional access
- Delivery of a requested result
- Practice reminder requested by the user
- Ongoing practices and playlist communication
- Flagship-program information

S41 currently combines “occasional practices” and “opportunities to go deeper” as choices, which is reasonable if each is stored independently. S42 responses should not silently change marketing permission.

### P1-6 — Define qualification routing

**Affected screen:** S42

For each interest response, define the product behavior:

| Response | Suggested behavior |
|---|---|
| I am exploring | Save the response only; no sales-oriented follow-up without permission. |
| I may be interested later | Offer relevant communication permission and a gentle future pathway. |
| I would like to learn more soon | Show the next informational step and record a qualified-interest signal. |
| I am ready to hear about the program | Show a clear program action and record a high-intent signal. |

Also define who can access the responses, where they are reviewed, and how long they are retained.

### P1-7 — Treat export as a capability matrix, not one universal behavior

**Affected screen:** S40

PDF download, email, clipboard copy, plain text, and device share do not behave identically across browsers and devices. “Share to Notes” may be available through a device share sheet but cannot be promised everywhere.

The requirements should define:

- The preferred action on mobile and desktop
- A fallback when device sharing is unavailable
- What is included in each format
- Whether private journal responses are included by default or selected explicitly
- When temporary export files are deleted for session-only users
- Whether email delivery contains an attachment, secure link, or formatted message

### P1-8 — Make the premium boundary behaviorally explicit

The strategic distinction is good: free proves the practice; premium supports continuity. The build specification must define exact entitlements, especially:

- Whether the free journey can be edited after completion
- Whether the free playlist can continue to grow
- Whether the completed practice can be rescheduled more than once
- What happens when a user tries to create a second journey
- Whether previous free content remains accessible after upgrading or cancelling
- Which premium preview appears after each completed free action

The upgrade invitation should arise from a real next desire—another intention, another scheduled practice, more meditations, or patterns over time—rather than interrupting the first journey.

### P1-9 — Add funnel and outcome measurement requirements

The current success indicators are directionally useful but not yet measurable. The prototype and first release should track a privacy-conscious funnel such as:

1. Landing viewed
2. Experience started
3. Email access requested
4. Access completed
5. Intention completed
6. First song added
7. Anchor reflection completed
8. Feeling Map confirmed
9. Ritual created
10. Practice scheduled or scheduling declined
11. Result saved or exported
12. Communication permission chosen
13. Program-interest response shared or skipped
14. Scheduled practice opened
15. Practice completed, skipped, missed, or rescheduled
16. Follow-up reflection completed
17. Premium interest action taken

Event tracking should record completion states and choices without copying private journal text into analytics.

## P2 quality requirements

These do not block a clickable prototype but should be included before the first commercial build is accepted:

- Keyboard and screen-reader behavior for every selection control
- Non-drag alternative for playlist reordering
- Color contrast across the expanded retro palette
- Reduced-motion behavior for tape and reel animations
- Audio transcript and an equivalent path when playback fails
- Clear required, optional, error, and autosave states
- Character and input limits that do not punish concise reflection
- Mobile app-switch recovery testing
- Empty, skipped, and contradictory response states
- Data deletion, account deletion, and export-history behavior
- Content versioning when a recommendation, prompt, meditation, or ritual template changes

## Recommended first-time critical path

This is a product-flow recommendation, not a final screen count.

| Moment | Required outcome | Optional depth |
|---|---|---|
| 1. Understand | User understands the promise and how music will be used | View additional explanation |
| 2. Access | Email access succeeds and the journey can be recovered | Provide first name |
| 3. Choose privacy | User selects saved or session-only | Learn more about retention |
| 4. Set context | Practice stage and experience level are captured together | View stage-specific explanation |
| 5. Name intention | User writes an intention in their own words | Category and coaching prompts |
| 6. Find feeling | User chooses a family, words, and one guiding feeling | Add custom words and body detail |
| 7. Build a starting mix | User adds at least one song | Add recommendations and more songs |
| 8. Explore one doorway | User reflects on one anchor song | Meditation and additional anchors |
| 9. Confirm meaning | User confirms, edits, or names themes | Answer deeper coaching questions |
| 10. Receive the map | Feeling Map is assembled and confirmed | Title and refine the map |
| 11. Shape the practice | User receives an editable ritual | Arrange a playlist arc |
| 12. Set a rhythm | User schedules, deliberately declines, or postpones | Add external calendar and choose reminder |
| 13. Take it away | User saves or exports the completed result | Choose additional formats |
| 14. Continue by choice | User chooses communication and optional program interest | Explore premium or program details |

## Branches that require explicit prototype states

The prototype should show more than the ideal happy path. At minimum, represent:

1. Active microdoser versus preparing to begin
2. Saved journey versus session-only journey
3. Bring-my-own-song versus recommendations versus both
4. Reflect from memory versus leave for an external music app
5. Meditation accepted versus skipped
6. One anchor song versus an additional anchor song
7. Themes confirmed versus renamed or removed
8. Playlist reordered versus current order retained
9. Practice scheduled versus intentionally not scheduled
10. Reminder selected versus no reminder
11. Result saved versus exported only
12. Communication accepted versus account-only
13. Program interest shared versus skipped
14. Scheduled practice completed versus rescheduled, skipped, or missed

## Decisions resolved before the prototype specification

The eight pre-prototype requirements identified in this audit were resolved through an owner interview. They are recorded in the Owner Decisions section above and in the project decision log.

## Questions the prototype should answer through testing

These should remain hypotheses rather than being settled by internal discussion alone:

1. Where do users first feel that the experience has become personally valuable?
2. Does email verification interrupt their willingness to continue?
3. Do practice stage and experience level make the guidance feel more relevant?
4. Do users understand intention, feeling family, feeling words, and guiding feeling as distinct steps?
5. Is one anchor reflection enough to create a Feeling Map that feels meaningful?
6. When do users want another song or a deeper prompt?
7. Does external music-app switching break concentration or improve reflection?
8. Does the meditation feel helpful, skippable, or like an obligation?
9. Do candidate themes feel like reflections of the user's words?
10. Does playlist sequencing add value after the Feeling Map?
11. Does the ritual feel specific enough to use again?
12. Does scheduling feel integral to the practice?
13. Which reminder choice feels natural?
14. Do users understand what is and is not retained in session-only mode?
15. Do they prefer saving, PDF, email, plain text, or device sharing?
16. Does the return experience deliver what they expected at the time of scheduling?
17. At what moment do premium features feel like a welcome continuation?

## Suggested acceptance criteria for the validation prototype

The prototype is ready for moderated testing when:

- A participant can complete the shortest meaningful path without facilitator rescue.
- A participant can choose saved or session-only and later explain the practical difference.
- Both practice-stage paths contain visibly appropriate language.
- A participant can proceed with one song and one anchor reflection.
- A participant can skip meditation without being blocked or shamed.
- Every candidate theme can be traced to something the participant selected or wrote.
- A participant can edit or reject every item that enters the Feeling Map.
- A participant can retain the current playlist order without performing a drag task.
- A participant can edit the generated ritual.
- A participant can intentionally decline scheduling and still reach the completed result.
- A session-only result does not appear as a saved journal in the return experience.
- A participant sees the full completed value before any program-interest question.
- Communication options are unselected and distinguish account messages from ongoing communication.
- The prototype includes at least one return-loop scenario, not only the first-time journey.

## Product-owner recommendation

Proceed to the prototype specification, but do not translate all 43 screen IDs directly into 43 designed pages.

The eight pre-prototype decisions are now confirmed. Specify a **core path with optional depth**, using the existing screen content as a component library. The prototype should test the journey's emotional pacing, not simply whether users can click through every documented step.

The product does not need a fundamental rethink. It needs a clearer minimum path, explicit branching, and defined state behavior so that its strongest promise—turning music and intention into a practice guided by time—can be experienced before fatigue sets in.
