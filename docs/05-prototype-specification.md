# Prototype Specification

**Product:** Music as Medicine  
**Version:** 0.1  
**Status:** In progress  
**Current slice:** Section 1 provisionally approved

## Purpose

This is the concise source of truth for the clickable validation prototype. The prototype is being built as connected vertical sections so each section can be experienced, reviewed, and provisionally approved before the next is added.

The production authentication, storage, recommendation, email, audio, export, and calendar systems remain simulated until the journey is validated.

## Section plan

| Section | Experience | Status |
|---|---|---|
| 0 | Design foundation | First version implemented |
| 1 | Landing, access, welcome, privacy, and practice context | Provisionally approved |
| 2 | Intention and feeling discovery | Next |
| 3 | Build the mix | Not started |
| 4 | Listen and create meaning | Not started |
| 5 | Ritual and rhythm | Not started |
| 6 | Result and return | Not started |

## Working method

For each section:

1. Specify only the requirements needed for the section.
2. Add it to the responsive browser prototype.
3. Review it as an experience rather than as isolated screens.
4. Record owner decisions and revisions.
5. Treat it as provisionally approved and continue.

## Section 0 — Design foundation

### Visual direction implemented

- Retro analog editorial rather than neon synthwave
- Butter yellow, warm paper, near-black, raspberry, aubergine, dusty blue, coral, and mint
- Poster-like typography and generous scale contrast
- Cassette, vinyl, track-list, label, ruled-paper, and tape-counter motifs
- Rectangular tactile buttons with offset shadows
- Calm, legible writing and form surfaces
- Responsive mobile and desktop compositions
- Visible focus states and reduced-motion support

### Typography

The prototype requests Montserrat Classic and Neue Einstellung first, then uses close system fallbacks. Licensed webfont files have not yet been supplied or embedded.

### Reusable components introduced

- Product header and journey header
- Phase progress indicator
- Primary and text buttons
- Track cards
- Ruled form panel
- Selectable choice cards
- Selectable pill controls
- Cassette and vinyl graphic motifs
- Summary ticket and tape counter

## Section 1 — Enter the experience

### Implemented path

1. **Landing** — promise, outcomes, create-my-mix action, and sign-in action
2. **How it works** — five-movement explanation
3. **Get access** — required email and optional first name
4. **Verify access** — simulated six-digit code with resend and change-email actions
5. **Welcome** — preparation and permission to answer briefly
6. **Journal choice** — saved privately or session-only
7. **Practice context** — practice stage and experience level in one view
8. **Section handoff** — selected-context recap and transition to intention

### Confirmed behavior represented

- Access is presented without password language.
- Code entry keeps the user on the page; the future email also contains an access link.
- Journal retention remains separate from account access.
- Marketing choices are not shown or preselected during access.
- Session-only copy explains the later choice to keep only the finished playlist and ritual.
- Practice stage and experience level are combined.
- Practice stage is positioned as changing framing rather than access.
- The user can move backward without losing current selections.
- Progress uses phase or track language rather than a total screen count.

### Simulated behavior

- No email is sent.
- Any six-digit code advances the prototype.
- No account, journal, or preference data is persisted.
- Sign in uses the same prototype access path as first-time access.

### Owner-review questions

1. Does the landing page feel recognizably aligned with the reference direction?
2. Does the analog styling feel expressive without becoming costume-like?
3. Does the transition from landing to access feel appropriately paced?
4. Is the privacy choice understandable before personal writing begins?
5. Does combining practice stage and experience level feel natural?
6. Does the section handoff create anticipation for naming the intention?

### Owner review outcome

- The retro graphics, colors, and typographic character are strongly aligned with the intended direction.
- The complete Section 1 pacing and interaction flow feel good.
- The `press play on purpose` label required stronger contrast when it overlapped the white cassette; it was changed to a high-contrast mint analog sticker.
- The landing cassette was revised using a supplied retro illustration as directional reference only. The original CSS graphic now uses a stronger dark shell, coral body, mint reels, blue label, berry base, and higher-contrast internal details.
- Desktop and mobile local testing exposed viewport-dependent scaling and sticker drift. The cassette was rebuilt as a self-contained responsive composition with proportional internal rows and stickers anchored to the artwork rather than the full background panel.
- Owner review rejected orange, lime/mint, and fuchsia inside the cassette. The cassette now uses only butter, warm white, near-black, aubergine, and blue. Both reels use identical height-based geometry and shared alignment; the handwritten and editorial labels are anchored to the cassette lockup.
- Further cross-viewport review showed that the CSS-built cassette still distorted and no longer read clearly as a cassette. It has been replaced by the supplied fixed-proportion vector asset, recolored into the established palette. The editorial and handwritten labels remain independently anchored around the stable artwork.
- Section 1 is provisionally approved and can be revisited if later testing exposes a cross-section issue.

## Section 2 — Intention and feeling discovery

The next slice will include:

- Intention category and writing in one progressive view
- Optional coaching prompts
- Future-oriented intention reflection
- Broad feeling-family selection
- Feeling-word selection across families
- Guiding-feeling confirmation
- Body location, sensation, and present-or-longed-for response
- Transition into building the mix

## Current validation boundary

The prototype validates interaction, meaning, pacing, and visual direction. It does not yet validate technical delivery, persistent data, email reliability, recommendation quality, or reminder delivery.
