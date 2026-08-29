# Planning Audit 01

**Product:** Music as Medicine  
**Audit date:** 2026-08-29  
**Documents reviewed:** Product brief, content and data model, screen inventory, roadmap, and decision log  
**Status:** Owner reviewed; source-document reconciliation in progress

## Audit purpose

This checkpoint evaluates whether the current planning documents describe one coherent product, whether the first build is appropriately scoped, and which decisions must be resolved before detailed screen design and technical architecture begin.

## Executive conclusion

The product has a strong and coherent center:

> Intention → Music → Feeling → Reflection → Ritual → Rhythm → Return

The addition of rhythm guided by time materially strengthens the product. It creates a continuing practice rather than a one-time exercise and provides a credible foundation for premium membership.

The project is ready to move toward screen-by-screen design after a short alignment pass. No fundamental product rethink is needed. The main work is to separate the validation prototype, first commercial release, and later premium platform more clearly.

## Owner review outcomes

- Approved launch with creator-curated recommendations and later community contributions.
- Approved the three-stage build model.
- Clarified that 15–20 minutes describes the first-time experience rather than a promise.
- Removed the assumption that users must listen to three complete songs.
- Approved separate storage for session-only journal content and calendar or reminder information.
- Accepted the recommended first-version calendar boundary.
- Set the launch recommendation library at approximately 100 creator-curated songs.
- Approved staged internal administration.
- Approved the free return loop and simple content considerations.
- Directed the Feeling Map to emerge through human-centered coaching questions rather than an assumed AI implementation.
- Left reminder timing open for clarification.

## What is already aligned

### Product identity

- Music as Medicine is the working product name.
- The product leads explicitly with microdosing.
- It serves active microdosers and people preparing to begin.
- It is designed for people who want to deepen their practice.

### Core transformation

- The user creates a playlist.
- The user explores embodied and emotional responses to music.
- The app identifies themes without presenting them as definitive.
- The user receives an editable Feeling Map and listening ritual.
- The user can export the result.
- The user can schedule a return to the ritual.

### Business model

- The free journey grows the email list and identifies interest in the flagship program.
- Premium value comes from continuity: more journeys, meditations, rituals, schedules, reminders, and patterns over time.
- The flagship program adds human guidance, accountability, community, and integration.

### Product principles

- User language remains primary.
- Journal storage is chosen by the user.
- Marketing permission is separate from account access.
- Meditation is optional but highly suggested.
- Music-service integration is not required for the first version.
- Rhythm guided by time is part of the core product architecture.

## Audit findings

### A1 — Community contribution timing is inconsistent

**Priority:** Resolve before MVP specification

The decision log says moderated community contributions will be added later. The product brief, data model, and screen inventory currently include song submission and moderation as first-version functionality.

**Recommended resolution:**

- Keep the community contribution model in the long-term data design.
- Remove submission and moderation from the validation prototype and first commercial release.
- Launch with creator-curated recommendations.
- Add community submissions after the core journey and recommendation experience are validated.

This preserves the intended community direction without requiring moderation operations during launch.

### A2 — The current MVP label covers too much

**Priority:** Resolve before technical estimation

The screen inventory currently contains:

- 54 primary MVP screens or states
- 20 MVP support states
- 9 internal MVP views
- Additional MVP emails, follow-ups, and artifacts

Many will be combined during design, but the scope still includes authentication, journal privacy, recommendations, audio, theme synthesis, exports, scheduling, reminders, account management, program qualification, content management, and community moderation.

**Recommended resolution:** Define three build stages.

#### Stage 1 — Validation prototype

- Clickable, realistic first-time journey
- Representative song recommendations
- Simulated Feeling Map
- Simulated ritual and calendar scheduling
- No production accounts, payments, or live integrations

#### Stage 2 — First commercial release

- Email account access
- Saved or session-only journal choice
- Intention and feeling discovery
- Manual songs and creator-curated recommendations
- Guided anchor-song reflection, with the useful number validated in the prototype
- Feeling Map and ritual generation
- In-app calendar
- One scheduled ritual and email reminder
- External-calendar export
- PDF, email, text, and share output
- Program-interest questions
- Basic internal content management

#### Stage 3 — Premium platform

- Multiple journeys
- Recurring schedules
- Push notifications
- External-calendar connections
- Full meditation and ritual libraries
- Patterns over time
- Payments and subscription management
- Community contributions and moderation

### A3 — The first-time experience needs a flexible listening rule

**Priority:** Resolve during screen-by-screen design

The 15–20-minute range is an orientation for the first-time experience rather than a promise. The earlier three-song assumption was introduced during product framing and was not an owner requirement.

**Recommended resolution:**

- Do not require users to listen to complete songs during the first journey.
- Validate the useful number of anchor-song reflections rather than fixing it at three.
- Let them listen to a meaningful portion, recall a familiar song, or complete full-song listening later.
- Clearly distinguish “build and discover” from the later full listening ritual.
- Validate the real completion time in prototype testing.

### A4 — Session-only journals and saved rhythms need separate behavior

**Priority:** Resolve before technical architecture

A user may decline to save journal content but still want a calendar entry and reminder. The calendar cannot depend on the journal remaining stored.

**Recommended resolution:**

- Store calendar and reminder information separately from journal content.
- Allow a session-only user to save a minimal practice entry containing the date, time, playlist or ritual title, and return link.
- Do not retain the intention, reflections, or Feeling Map unless the user explicitly chooses to save them.
- If the ritual text itself is not retained, the calendar entry can link to the user's exported copy or offer a new arrival practice.

### A5 — The free returning-user experience is not yet defined

**Priority:** Resolve before account-home design

The free user can reopen saved results and view the calendar, but the reason to return after the single journey is still incomplete.

**Recommended resolution:** Give free users a small return loop.

- View the saved result and ritual
- Open the scheduled practice
- Mark it complete, skip it, or reschedule it
- Receive one follow-up reflection prompt
- View premium options for continuing the rhythm

This makes the free calendar meaningful without providing the full premium practice system.

### A6 — Calendar scope is strong but needs a first-version boundary

**Priority:** Resolve before screen-by-screen design

The data model allows microdosing days, listening rituals, meditations, reflection days, and intention check-ins. The confirmed free offer currently promises one scheduled ritual and one reminder.

**Recommended resolution:**

- Display a simple in-app calendar in the first commercial release.
- Allow the free user to schedule the completed listening ritual.
- Let the follow-up prompt become a second calendar entry created by the system.
- Preview other practice types without enabling recurring schedules.
- Add multiple entry types and recurring rhythms in premium.

### A7 — Feeling Map should remain human-centered

**Priority:** Resolve before prototype testing

The Feeling Map should not operate as a detached system that interprets the user. It should help the user discover meaning through additional coaching questions and prompts.

**Recommended resolution:**

- Design follow-up questions that help users clarify possible connections.
- Reflect the user's own words back to them.
- Ask the user to name or confirm the themes that matter.
- Assemble confirmed responses into a coherent journey summary.
- Keep the experience as human as possible; no AI implementation is assumed.

### A8 — Song recommendations need a coverage check

**Priority:** Resolve during content preparation

The owner will curate approximately 100 songs for launch with assistance from the product-development process.

**Recommended resolution:**

- Use a small representative library for prototype testing.
- Create a coverage matrix before public launch.
- Expand the library based on gaps rather than choosing an arbitrary total.

### A9 — Internal administration should be staged

**Priority:** Resolve during technical architecture

The screen inventory currently includes separate internal systems for songs, community moderation, feelings, prompts, rituals, meditations, reminders, and analytics.

**Recommended resolution:**

- Build only the minimum editing tools needed for frequently changing content.
- Manage stable starter content through a structured content source during the pilot.
- Add a more complete internal dashboard when contribution volume and content operations justify it.

## Open interaction decisions

These do not block the product concept, but they should be resolved before completing the screen-by-screen experience.

1. Confirm or revise the proposed experience levels: new, some experience, established, and prefer not to say.
2. Decide whether the first journey asks if the playlist is for microdosing days, non-microdosing days, or both.
3. Choose a body interaction: illustration, written list, or both.
4. Confirm that users play music in their preferred music app and return for reflection.
5. Confirm meditation placement after anchor-song selection and before reflection.
6. Confirm that program-interest questions appear after the completed result.
7. Confirm the recommended free return loop.
8. Decide whether the app suggests the next ritual date or only asks the user to choose.
9. Decide when the single free reminder should arrive.
10. Determine whether content considerations belong in the recommendation experience.

## Non-blocking decisions

These can remain open during initial interaction design:

- Final community attribution presentation
- Exact minimum length of recommendation explanations
- General versus feeling-specific free meditation
- Final premium pricing
- Specific music-service integrations
- Public social or community features

## Documentation quality

### Strengths

- Decisions and open questions are traceable.
- Product, content, interaction, and business layers are separated.
- User control over reflected and assembled language is consistently represented.
- Calendar and reminder concepts now appear across the brief, model, and screen inventory.
- Later platform integrations are anticipated without becoming first-release dependencies.

### Improvements to apply after owner review

- Align community contribution timing across all documents.
- Replace the single broad MVP label with staged delivery labels.
- Clarify the external-song listening rule.
- Clarify session-only calendar behavior.
- Consolidate repeated open decisions into the decision log.
- Mark product-brief and content-model sections approved as decisions are confirmed.

## Recommended next process

1. Review and approve or revise the recommendations in findings A1 through A9.
2. Answer the ten open interaction decisions in shorthand.
3. Update the source documents so they agree.
4. Create the screen-by-screen experience for the validation prototype and first commercial release.
5. Build a low-fidelity clickable prototype.
6. Test the journey and its actual completion time.
7. Finalize the technical architecture based on validated interactions.
8. Establish the visual design direction.
9. Write the MVP build specification and begin implementation.

## Readiness assessment

**Product direction:** Ready  
**Content model:** Ready for refinement  
**Screen inventory:** Ready for consolidation  
**Prototype:** Ready after alignment decisions  
**Technical architecture:** Not yet ready for finalization  
**Implementation:** Should follow prototype validation
