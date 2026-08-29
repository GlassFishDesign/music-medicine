# Screen-by-Screen Experience

**Product:** Music as Medicine  
**Version:** 0.1  
**Status:** In review  
**Scope:** Validation prototype and first commercial release

## Purpose

This document translates the product brief, content model, screen inventory, audit decisions, and visual direction into the complete participant experience.

It describes what the user sees, what the app asks, what actions are available, what information is retained, and how each moment should feel. Copy is an initial working draft rather than final marketing or coaching language.

## Experience premise

The user is not completing a form or receiving an external interpretation. They are moving through a human-centered coaching journey:

> Intention → Music → Feeling → Reflection → Ritual → Rhythm → Return

The app asks thoughtful questions, reflects the user's words back to them, and helps them assemble a meaningful personal journey.

## Experience phases

The first-time journey is organized into eight phases:

1. Tune in
2. Name the intention
3. Find the feeling
4. Build the mix
5. Listen inward
6. Shape the journey
7. Set the rhythm
8. Take it with you

The interface can use restrained analog labels such as `SIDE A`, `SIDE B`, and `TRACK 01`, but the phase name must remain visible and understandable.

## Global journey behavior

### Progress

- Show the current phase rather than an intimidating total number of screens.
- A tape-counter or track-counter motif can indicate progress.
- Let users move backward without losing completed responses.
- Saved users can pause and resume.
- Session-only users receive a clear explanation of temporary recovery behavior.

### Writing

- Ask one primary question at a time.
- Make most writing optional unless the response is essential to the result.
- Accept short phrases as readily as paragraphs.
- Use selections to reduce effort, then offer writing for depth.
- Never require the user to disclose a memory or feeling they do not want to record.

### Music

- Users play songs in their preferred music application.
- Full-song listening is optional during playlist creation.
- A user can reflect from memory, listen to a meaningful portion, or listen to the complete song.
- Returning from another music app should restore the exact reflection step.

### Coaching

- Ask additional questions when the user wants to explore further.
- Avoid presenting hidden or definitive interpretations.
- Use the user's own language in summaries.
- Ask the user to confirm which connections feel meaningful.
- Preserve mixed and difficult feelings without forcing positivity.

### Visual language

- Use warm paper-like backgrounds and bold editorial type.
- Keep journaling surfaces calm and highly legible.
- Use analog controls as moments of delight rather than as the only indication of function.
- Introduce color by phase while preserving the foundational butter, ink, warm white, berry, and aubergine palette.
- Use Montserrat Classic and Neue Einstellung when webfont access is confirmed.

---

## Phase 1 — Tune in

### S01 — Landing page

**Goal:** Help the visitor understand the value of the experience and choose to begin.

**Working headline:**

> Build a microdosing playlist that helps you remember what matters.

**Working support copy:**

> Start with an intention. Follow what your music awakens. Leave with a personal mix, a Feeling Map, a listening ritual, and a rhythm for returning to it.

**Visible outcomes:**

- Your music mix
- Your Feeling Map
- Your listening ritual
- Your next practice on the calendar
- A journal you can save or take with you

**Primary action:** `create my mix`

**Secondary action:** `sign in`

**Interaction notes:**

- Do not present 15–20 minutes as a guarantee.
- A gentle note can say that this is a first-time guided experience and that users can pause.
- If headphones or a music app will help, mention that before the user begins.

**Design cue:** Poster-like composition with one central analog-music object, oversized lowercase headline, butter-yellow field, berry accent, and a tactile primary button.

### S02 — How it works

**Goal:** Make the journey feel clear before requesting an email address.

**Working sequence:**

1. Name what you are moving toward.
2. Find the feeling beneath it.
3. Choose songs that help you access it.
4. Explore what the songs awaken.
5. Create a ritual and choose when to return.

**Primary action:** `I'm ready`

**Secondary action:** `back`

**Design cue:** Five cassette-label or record-sleeve cards arranged like a short track list.

### S03 — Get access or sign in

**Goal:** Provide verified access with minimal friction.

**Fields:**

- Email address
- Optional first name, either here or later

**Working copy:**

> Your email gives you access to the experience and lets us deliver anything you choose to save. Emails about future practices and programs are a separate choice.

**Primary action:** `send my access code`

**Returning-user action:** `I already have an account`

**Data behavior:**

- Send both a six-digit verification code and a clickable access link.
- Preserve the open page and the user's place while verification is pending.
- Create or locate a lightweight account after verification without requiring a password.
- Do not enroll the user in marketing automatically.
- Record product email permission separately from marketing permission.

### S04 — Check your email

**Goal:** Help the user complete account access.

**Working copy:**

> Your access link is on its way to **[email]**.

**Actions:**

- Enter the six-digit code
- `resend`
- `use a different email`
- `I used the access link`

**Support state:** Explain expiration and recovery without making the user start the journey again.

### S05 — Welcome

**Goal:** Create a transition from account setup into reflection.

**Working headline:**

> take a breath. this is your mix.

**Working copy:**

> You do not need the perfect intention or the perfect songs. Bring what feels alive, unfinished, curious, or true.

**Preparation suggestions:**

- Settle somewhere comfortable.
- Have headphones nearby if you want them.
- Open the music app you usually use.
- Give yourself permission to answer briefly.

**Primary action:** `begin`

### S06 — Choose journal storage

**Goal:** Let the user choose how this journey is handled before personal writing begins.

**Working headline:**

> how would you like us to hold this journey?

**Choice A:**

> **Save it privately**  
> Return to your playlist, reflections, Feeling Map, and ritual later.

**Choice B:**

> **Keep it session-only**  
> Use your responses to complete this journey, then remove the journal after the session. You can still export your result and save a minimal calendar reminder.

**Primary action:** `continue`

**Data behavior:** Save the choice per journey. The user can change it before leaving the completed result.

---

## Phase 2 — Name the intention

### S07 — Practice stage

**Goal:** Understand the user's current relationship with microdosing.

**Working prompt:**

> where are you in your practice?

**Choices:**

- I am actively microdosing.
- I am preparing to begin.

**Primary action:** `continue`

**Personalization behavior:** Active and preparing users follow the same core journey. Adjust framing, explanations, ritual language, and scheduling so the experience acknowledges their stage without assuming the scheduled ritual is a microdosing day.

### S08 — Experience level

**Goal:** Adapt explanations without evaluating the user.

**Working prompt:**

> how familiar does microdosing feel to you?

**Choices:**

- New to microdosing
- Some experience
- Established practice
- Prefer not to say

**Primary action:** `continue`

**Behavior:** Change the amount of explanation, not feature access, scoring, or qualification. In the prototype, combine practice stage and experience level into one coherent view.

### S09 — Intention category

**Goal:** Offer an easy starting point without replacing the user's language.

**Working prompt:**

> what is calling for your attention?

**Choices:**

- Clarity
- Creativity
- Connection
- Emotional healing
- Self-trust
- Courage
- Presence
- Growth or change
- Rest and restoration
- Something else

**Interaction:** Choosing a category reveals a short optional coaching prompt rather than locking the user into a path.

### S10 — Write the intention

**Goal:** Capture the user's intention in their own words.

**Working prompt:**

> what are you devoted to right now?

**Support copy:**

> A word, a sentence, or something unfinished is enough.

**Optional prompt links:**

- What are you ready to understand?
- What are you strengthening?
- What are you releasing?
- What are you inviting?

**Input:** Short or long text.

**Primary action:** `this is enough for now`

### S11 — Imagine it taking root

**Goal:** Move from outcome language toward lived experience.

**Working prompt:**

> imagine this intention has begun to take root—not perfectly, just enough for you to notice. what is different inside you?

**Optional responses:**

- I notice something in my body.
- I see an image or memory.
- A word or feeling comes forward.
- I am not sure yet.

**Optional writing:** `write what you notice`

**Primary action:** `find the feeling`

---

## Phase 3 — Find the feeling

### S12 — Choose a feeling family

**Goal:** Help the user enter the vocabulary through a broad doorway.

**Working prompt:**

> which family feels closest to what you are moving toward?

**Families:**

- Grounding and restoration
- Connection and openness
- Courage and agency
- Freedom and aliveness
- Clarity and creativity
- Acceptance and integration
- Transformation and awakening
- Something else

**Interaction:** Each family appears as a large editorial card with a distinct color and a few example words.

### S13 — Choose feeling words

**Goal:** Select three to five words without requiring the user to remain in one family.

**Working prompt:**

> choose the words that feel alive—even if they do not all match.

**Actions:**

- Select feeling words.
- Explore another family.
- Add my own word.
- Remove a selected word.

**Support copy:**

> These may be feelings you already sense, feelings you long for, or both.

### S14 — Choose the guiding feeling

**Goal:** Identify the feeling that will guide recommendations and reflection.

**Working prompt:**

> if one feeling could guide this mix, which would you choose?

**Interaction:** Present the user's selected words as cassette-label tabs or record stickers.

**Primary action:** `choose this feeling`

### S15 — Locate it in the body

**Goal:** Connect the guiding feeling with embodied awareness.

**Working prompt:**

> when you imagine this feeling, where do you notice a response?

**Inputs:**

- Simple body illustration
- Accessible written body-location list
- Sensation words
- Optional custom sensation

**Follow-up:**

> is this feeling present now, longed for, or a little of both?

**Choices:** Present now / Longed for / Both / Not sure

**Primary action:** `continue`

---

## Phase 4 — Build the mix

### S16 — Choose a song path

**Goal:** Let users bring songs, discover songs, or combine both.

**Working headline:**

> where do you want to begin?

**Choices:**

- I have songs in mind.
- Help me discover songs.
- I want to do both.

**Design cue:** Present the choices as `MY TRACKS`, `DISCOVER`, and `MIX BOTH` cassette tabs.

### S17A — Add a song

**Goal:** Add a private song without a streaming-service connection.

**Fields:**

- Song title
- Artist
- Optional link
- Optional note: “Why this one?”

**Actions:**

- `add to my mix`
- `add another`
- `show me recommendations`

**Data behavior:** The song remains private unless the later community-submission process is separately chosen.

### S17B — Recommendation preferences

**Goal:** Narrow the creator-curated collection.

**Working prompt:**

> what kind of listening would support you today?

**Selections:**

- Lyrics / Instrumental / Either
- Settling / Steady / Rising / Expansive
- Familiar / Exploratory / Either
- Optional genres or sound qualities
- Optional “I would rather avoid…”

**Primary action:** `find some tracks`

### S18 — Recommended tracks

**Goal:** Offer human-curated possibilities connected to the user's chosen feeling.

**Each track card includes:**

- Song title and artist
- Creator-written explanation
- Feeling tags
- Suggested playlist role
- Instrumental or lyrical label
- Explicit-language label or concise content note when useful
- External listening links where available
- `add` and `not for me` actions

**Working introduction:**

> These are invitations, not prescriptions. Choose what your body responds to.

**Recommendation behavior:**

- Match against the launch library of approximately 100 creator-curated songs.
- Avoid implying that the app knows what the user should feel.
- Let users move freely between their own songs and recommendations.

### S19 — Working mix

**Goal:** Review, reorder, and complete the first playlist draft.

**Includes:**

- Track list
- Add, remove, and reorder
- User-selected versus recommended indicator
- Optional private note
- Suggested range of five to ten songs without blocking continuation
- Permission to continue with one song; call it a starting mix when useful

**Primary action:** `explore my mix`

**Secondary action:** `keep adding songs`

### S20 — Choose anchor songs

**Goal:** Select the first song or songs the user wants to explore more deeply.

**Working prompt:**

> which song feels like a doorway right now?

**Support copy:**

> Begin with one. Choose another if you want to keep exploring. You do not need to listen to every song or complete every reflection today.

**Primary action:** `explore this song`

**Prototype question:** Observe whether users naturally choose one, two, or more anchor songs.

---

## Phase 5 — Listen inward

### S21 — Meditation invitation

**Goal:** Highly recommend a short arrival practice without requiring it.

**Working headline:**

> before you press play, would you like to arrive?

**Working copy:**

> This short practice can help you soften your attention and notice what the music awakens.

**Includes:**

- Duration
- Facilitator
- `begin meditation`
- `continue without it`

### S22 — Meditation player

**Goal:** Offer a calm, accessible arrival.

**Controls:**

- Play and pause
- Restart
- Progress
- Transcript
- Facilitator details
- Continue

**Design cue:** Restrained cassette-deck controls with slow reel movement. Reduced-motion mode uses a static progress indicator.

### S23 — Prepare the song

**Goal:** Make external listening and return behavior clear.

**Working prompt:**

> bring **[song]** to mind—or open it in the music app you use.

**Choices:**

- I can feel it from memory.
- I want to listen to part of it.
- I want to listen to the full song.

**Primary action:** `I'm ready to reflect`

**System behavior:** Preserve this exact screen when the user switches applications.

### S24 — Notice the body

**Goal:** Notice before explaining.

**Working prompt:**

> before you make meaning, what do you notice in your body?

**Inputs:**

- Body illustration and written list
- Sensation words
- Energy shift: settling, steady, rising, expansive, mixed, or unsure
- Optional writing

**Primary action:** `continue`

### S25 — Name what the song awakens

**Goal:** Explore feelings, images, memories, and longings.

**Working prompt:**

> what does this song awaken?

**Selectable starting points:**

- A feeling
- A memory
- An image
- A longing
- Movement or energy
- Something I cannot name yet

**Optional follow-ups:**

- What feels most alive about it?
- What part of you recognizes this song?
- Is anything asking to be heard?
- Would you like to stay with this or move on?

### S26 — Connect it to the intention

**Goal:** Let the user identify the song's role without assigning one for them.

**Working prompts:**

> what does this song help you remember?

> how might it support the intention you named?

**Optional role choices:**

- Arrive
- Open
- Deepen
- Remember
- Carry forward
- I am not sure yet

### S27 — Song reflection

**Goal:** Confirm the user's words before continuing.

**Includes:**

- Song and artist
- Body response
- Feelings and images
- User's written words
- Connection to intention
- Playlist role

**Actions:**

- `this feels true`
- `edit`
- `explore another anchor song`
- `continue with this one`

---

## Phase 6 — Shape the journey

### S28 — Notice the connections

**Goal:** Use coaching questions to help the user recognize patterns.

**Working introduction:**

> You have named an intention, followed a feeling, and listened inward. Let’s notice what connects them.

**Coaching questions:**

- Which feeling keeps returning?
- What surprised you?
- What do these songs remind you about yourself?
- Is there a word you chose earlier that now feels different?
- If this mix could speak, what might it say you are ready for?

**Interaction:** Ask only a small relevant set. Let users skip any question and add their own words.

### S29 — Name the themes

**Goal:** Keep the user in authorship of the Feeling Map.

**Working prompt:**

> which connections feel true enough to keep?

**Includes:**

- Repeated user words
- Candidate themes phrased as questions or invitations
- Add my own theme
- Rename, remove, or set aside

**Examples of invitational phrasing:**

- Is self-trust part of this journey?
- Does movement seem connected to freedom for you?
- Is tenderness asking for more room?

The examples are interaction patterns, not fixed interpretations.

### S30 — Feeling Map

**Goal:** Assemble the user's confirmed meaning into a personal artifact.

**Includes:**

- Intention
- Guiding feeling
- Supporting feelings
- Confirmed themes
- Body cues
- Song connections
- A user-authored or coaching-led summary
- Optional title or phrase

**Actions:**

- Edit any words
- Revisit a coaching question
- Remove a theme
- `this feels like mine`

**Design cue:** Layered labels, connecting lines, analog track references, and restrained color blocks. It should resemble a personal mixtape insert rather than an assessment report.

### S31 — Introduce the playlist arc

**Goal:** Explain how sequence can support the journey.

**Working copy:**

> A mix can have movement. Some songs help you arrive. Some open a door. Some take you deeper. Some help you remember. Some carry you back into your day.

**Roles:** Arrive / Open / Deepen / Remember / Carry forward

**Primary action:** `shape the sequence`

**Secondary action:** `keep my current order`

**Behavior:** Present the arc as an optional creative layer. Skip this step automatically for a one-song mix.

### S32 — Arrange the mix

**Goal:** Let the user order songs and assign roles.

**Interactions:**

- Drag or button-based reorder
- Suggested role based on the user's reflection
- Manual role selection
- Continue without changing the current order

**Primary action:** `save this sequence`

### S33 — Ritual preferences

**Goal:** Gather only information that changes the ritual.

**Working prompt:**

> how would you like to meet this mix?

**Possible choices:**

- A short practice / More spacious
- Quiet and still / Movement welcome
- Include the arrival meditation / Begin on my own
- Listen privately / Share with someone trusted

**Primary action:** `create my ritual`

### S34 — Listening ritual

**Goal:** Assemble a practical, editable way of returning.

**Includes:**

- Arrival cue
- Breath or body invitation
- Intention statement using the user's words
- How to begin the playlist
- Optional pause point
- Closing coaching question
- Carry-forward action
- Meditation link when selected

**Actions:**

- Edit
- Remove an element
- Save
- `set my rhythm`

---

## Phase 7 — Set the rhythm

### S35 — Rhythm invitation

**Goal:** Move from insight into a future practice.

**Working headline:**

> when would you like to meet this mix again?

**Working copy:**

> A rhythm does not have to be rigid. Choose one moment to return.

**Actions:**

- Choose a date
- Choose a time
- `suggest a time for me`
- Continue without scheduling

**Suggestion behavior:** Offer a suggestion only when the user asks or does not choose. The prototype should not imply one universal cadence.

**Decline behavior:** Scheduling is optional. Do not create an event or reminder when the user continues without scheduling. Saved users can schedule later from their result. Session-only users can export the practice or decide at completion whether to retain the finished playlist and ritual.

### S36 — Choose the reminder

**Goal:** Make reminder timing understandable and user-controlled.

**Working prompt:**

> when should we remind you?

**Options for prototype testing:**

- At the scheduled time
- 15 minutes before
- One hour before
- The day before
- No email reminder

No hidden default should be assumed until user testing shows what feels natural.

Show this step only after a date and time have been selected.

### S37 — Add to calendar

**Goal:** Save the rhythm inside the app and optionally outside it.

**Includes:**

- Date, time, and timezone
- Playlist and ritual title
- Reminder choice
- `add to my Music as Medicine calendar`
- `add to Apple, Google, or Outlook calendar`

**Session-only behavior:** Save only the minimal practice information needed for the calendar. Do not retain the intention, reflections, or Feeling Map unless the user changes the storage choice.

### S38 — Rhythm confirmed

**Goal:** Create a satisfying transition into the completed result.

**Working copy:**

> Your mix has a place in time. We’ll meet you there.

**Includes:**

- Scheduled date and time
- Reminder choice
- Edit or reschedule
- `see my complete journey`

**Design cue:** Calendar entry appears like a dated cassette label or record-store sticker placed onto the rhythm calendar.

---

## Phase 8 — Take it with you

### S39 — Completed journey

**Goal:** Deliver the full value before qualification or sales messaging.

**Includes:**

- Personal journey title
- Intention
- Guiding feeling and supporting feelings
- Playlist and arc
- Anchor-song reflections
- Feeling Map
- Listening ritual
- Scheduled return, if chosen
- Closing commitment

**Working closing prompt:**

> what do you want to remember when you leave this screen?

**Primary action:** `save or share my journey`

### S40 — Save and export

**Goal:** Let the user take their journal into the environment they prefer.

**Actions:**

- Download designed PDF
- Email my result
- Copy formatted journal
- Download plain text
- Share to Notes or another supported app
- Save privately to my account

**Session-only behavior:** Explain what will be removed and when. Ask whether the user wants to retain only the finished playlist and ritual for future practice while still deleting the raw journal. If they decline, retain only neutral calendar information they explicitly requested. Offer a final chance to change to private saving without pressure.

### S41 — Communication choice

**Goal:** Ask separately whether the user wants continuing practices and program communication.

**Choices:**

- Send me occasional practices, playlists, and reflections.
- Tell me about opportunities to go deeper.
- Keep my account email only.

No option should be preselected.

### S42 — Deeper-support questions

**Goal:** Learn what support the user wants after delivering the completed result.

**Working introduction:**

> If you would like support going deeper, tell us what would be most useful.

**Possible questions:**

- What would help you go deeper with your practice?
- What feels difficult to sustain on your own?
- What kind of support are you looking for?

**Interest choices:**

- I am exploring.
- I may be interested later.
- I would like to learn more soon.
- I am ready to hear about the program.

**Actions:** `share my response` / `not now`

### S43 — Journey complete

**Goal:** Close warmly and show the next available actions.

**Working headline:**

> press play when you are ready.

**Actions:**

- View my journey
- View my calendar
- Open my ritual
- Return home
- Learn about deeper support, when requested

---

## Free return loop

### R01 — Account home

**Goal:** Give the free user a meaningful reason to return without recreating the full premium experience.

**Includes:**

- One saved playlist and ritual
- One active scheduled practice
- Upcoming reminder
- Saved result, when journal storage is enabled
- Premium preview

**Primary actions:**

- `open my ritual`
- `view my calendar`
- `continue an unfinished journey`

**Session-only behavior:** Show a retained playlist and ritual only when the user explicitly chose to keep those finished artifacts. Otherwise show only neutral scheduled-practice information, when created.

### R02 — Reminder arrival

**Goal:** Return the user directly to the scheduled practice.

**Email content:**

- Practice title
- Scheduled time
- One-line intention or ritual cue only when the user saved it
- `open my practice`
- Reschedule link

Do not place private journal content in the email.

### R03 — Scheduled practice

**Goal:** Make the return feel immediate rather than administrative.

**Includes:**

- Playlist
- Listening ritual
- Optional arrival meditation
- Scheduled time
- Mark complete
- Reschedule

**Session-only behavior:** When the user did not retain the finished practice, show the neutral reminder and a general arrival option rather than reconstructing deleted journal, Feeling Map, playlist, or ritual content.

### R04 — Follow-up reflection

**Goal:** Complete the free return loop with one short moment of integration.

**Working prompt:**

> what did you notice when you returned?

**Response:** Optional short text or feeling selection.

**Actions:**

- Save with the journey, when enabled
- Export or copy
- Continue into premium possibilities

### R05 — Free rhythm complete

**Goal:** Show the value of continuation without blocking access to the existing result.

**Includes:**

- Reopen playlist, ritual, and saved result
- Manually reschedule the existing practice
- Preview premium recurring rhythms, multiple journeys, meditation library, and patterns over time

---

## Supporting states

### X01 — Resume journey

Return the user to the last completed phase with a short recap and no loss of responses.

### X02 — Session recovery

Explain how long temporary responses remain recoverable. The final duration will be determined during technical architecture.

### X03 — External music return

Restore the exact song and prompt after app switching. Provide a visible `return to reflection` action when needed.

### X04 — Connection interruption

Preserve local progress where possible. Clearly distinguish saved, temporarily held, and unsent responses.

### X05 — Feeling Map assembly interruption

Return to the user's confirmed words and coaching answers. Never discard the underlying journal because a summary view fails.

### X06 — Export failure

Offer retry, another format, or email delivery without requiring the user to repeat the journey.

### X07 — Audio unavailable

Offer the transcript and a clear path to continue without the meditation.

### X08 — Reminder delivery failure

Keep the calendar event active and show the reminder status in account settings.

---

## Validation prototype scope

The clickable prototype should demonstrate:

- Landing and account-value explanation
- Storage choice
- Practice stage and experience level
- Intention and feeling discovery
- User-added songs and representative curated recommendations
- Working mix and flexible anchor selection
- Meditation invitation
- One complete anchor-song reflection
- Coaching-led Feeling Map assembly
- Playlist arc
- Listening ritual
- Calendar scheduling and reminder choice
- Completed result and export preview
- Free return loop

The prototype can simulate:

- Authentication
- Email delivery
- Curated recommendation matching
- Audio playback
- PDF export
- Calendar export
- Reminder delivery

The prototype should not include:

- Payments
- Full premium libraries
- Recurring schedules
- Push notifications
- Live music-service integration
- Community contribution
- A complete internal administration system

## First commercial release scope

The first commercial release adds working:

- Email-based account access
- Saved and session-only journeys
- Creator-curated recommendation matching across approximately 100 songs
- External-song links and app-switch recovery
- Coaching-led Feeling Map construction
- Meditation audio and transcript
- PDF, email, text, copy, and device-share exports
- In-app calendar
- One active free scheduled practice
- Email reminder delivery
- External-calendar export
- Follow-up reflection
- Communication permissions
- Program-interest capture
- Basic content management and product analytics

## Questions to validate in the prototype

1. Does the journey feel human and coached rather than automated?
2. Do users understand the distinction between intention, feeling family, and guiding feeling?
3. How many anchor songs do users naturally want to explore?
4. Do users need to hear part of a song, or can they reflect effectively from memory?
5. Does switching to a music app interrupt the emotional flow?
6. Are the coaching questions spacious enough without feeling vague?
7. Does the Feeling Map feel authored by the user?
8. Do playlist roles help or add unnecessary complexity?
9. Is the meditation invitation placed at the right moment?
10. Do users understand saved versus session-only journeys?
11. Does the calendar feel integral rather than added at the end?
12. What reminder timing feels natural?
13. Does the retro analog expression support reflection and clarity?
14. Does the free return loop make users want to come back?

## Items intentionally left open

- Final name of the free experience
- Final marketing copy
- Exact reminder default
- Exact number of anchor-song reflections
- General versus feeling-specific free meditation
- Final expanded color palette
- Final typography implementation pending font access
- Exact session-only expiration period
- Premium pricing and packaging
