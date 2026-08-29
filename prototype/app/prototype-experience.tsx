'use client';

import { FormEvent, useMemo, useState } from 'react';

type Step =
  | 'landing'
  | 'how'
  | 'access'
  | 'verify'
  | 'welcome'
  | 'privacy'
  | 'context'
  | 'handoff';

const journeySteps: Step[] = [
  'landing',
  'how',
  'access',
  'verify',
  'welcome',
  'privacy',
  'context',
  'handoff',
];

const phaseLabels: Record<Step, string> = {
  landing: 'side a / invitation',
  how: 'track 01 / how it works',
  access: 'track 02 / get access',
  verify: 'track 02 / verify access',
  welcome: 'track 03 / tune in',
  privacy: 'track 04 / your journal',
  context: 'track 05 / your practice',
  handoff: 'side a / ready',
};

export default function PrototypeExperience() {
  const [step, setStep] = useState<Step>('landing');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [storage, setStorage] = useState<'saved' | 'session' | ''>('');
  const [practiceStage, setPracticeStage] = useState<'active' | 'preparing' | ''>('');
  const [experience, setExperience] = useState('');

  const stepIndex = journeySteps.indexOf(step);
  const progress = useMemo(() => {
    if (step === 'landing') return 0;
    return Math.round((stepIndex / (journeySteps.length - 1)) * 100);
  }, [step, stepIndex]);

  function goBack() {
    if (stepIndex > 0) setStep(journeySteps[stepIndex - 1]);
  }

  function submitEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setStep('verify');
  }

  function submitCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (code.replace(/\D/g, '').length === 6) setStep('welcome');
  }

  if (step === 'landing') {
    return (
      <main className="site-shell">
        <header className="site-header">
          <button className="wordmark wordmark-button" type="button" onClick={() => setStep('landing')}>
            music as medicine
          </button>
          <div className="header-meta">
            <span className="edition">first edition / side a</span>
            <button className="text-button" type="button" onClick={() => setStep('access')}>
              sign in
            </button>
          </div>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">entheogenic priestess presents</p>
            <h1>
              build a playlist
              <span>that helps you remember</span>
              what matters.
            </h1>
            <p className="hero-intro">
              Start with an intention. Follow what your music awakens. Leave with
              a personal mix, a Feeling Map, a listening ritual, and a rhythm for
              returning to it.
            </p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={() => setStep('how')}>
                <span>create my mix</span>
                <span aria-hidden="true">→</span>
              </button>
              <p className="microcopy">
                A guided first experience. Pause whenever you need.
              </p>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of an analog cassette tape">
            <div className="art-composition">
              <div className="cassette-lockup">
                <div className="poster-tag">music for becoming</div>
                <img
                  className="cassette-artwork"
                  src="/cassette-tape-brand.svg"
                  alt=""
                  aria-hidden="true"
                />
                <div className="scribble">press play on purpose</div>
              </div>
            </div>
          </div>
        </section>

        <section className="outcomes" aria-label="What you will create">
          <p className="outcomes-label">your takeaways</p>
          <ol>
            <li><span>01</span> your music mix</li>
            <li><span>02</span> your Feeling Map</li>
            <li><span>03</span> your listening ritual</li>
            <li><span>04</span> your next moment in time</li>
          </ol>
        </section>
      </main>
    );
  }

  return (
    <main className={`journey-shell step-${step}`}>
      <JourneyHeader label={phaseLabels[step]} progress={progress} onBack={goBack} />

      {step === 'how' && (
        <section className="journey-stage how-stage">
          <div className="stage-heading wide-heading">
            <p className="eyebrow small-eyebrow">your listening journey</p>
            <h2>five movements.<br />one mix that feels like yours.</h2>
          </div>
          <ol className="track-stack">
            <TrackCard number="01" title="name what matters" detail="Begin with an intention in your own words." color="berry" />
            <TrackCard number="02" title="find the feeling" detail="Notice what you are moving toward—and where it lives in your body." color="mint" />
            <TrackCard number="03" title="follow the music" detail="Bring your songs, discover new ones, or mix both." color="blue" />
            <TrackCard number="04" title="listen inward" detail="Explore what one meaningful song awakens." color="coral" />
            <TrackCard number="05" title="set a rhythm" detail="Create a ritual and choose whether to place it in time." color="lavender" />
          </ol>
          <div className="stage-actions centered-actions">
            <button className="primary-button" type="button" onClick={() => setStep('access')}>
              <span>i’m ready</span><span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}

      {step === 'access' && (
        <section className="journey-stage split-stage">
          <div className="stage-heading">
            <p className="eyebrow small-eyebrow">your email is the key</p>
            <h2>let’s save your place.</h2>
            <p className="stage-intro">
              We’ll send a code and access link. No password. Your journal and
              communication choices come later and remain separate.
            </p>
          </div>
          <form className="form-panel ruled-panel" onSubmit={submitEmail}>
            <label htmlFor="email">email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label htmlFor="firstName">first name <span>optional</span></label>
            <input id="firstName" name="firstName" type="text" autoComplete="given-name" placeholder="What should we call you?" />
            <button className="primary-button form-submit" type="submit">
              <span>send my access code</span><span aria-hidden="true">→</span>
            </button>
            <p className="form-note">Account messages only. Nothing else is preselected.</p>
          </form>
        </section>
      )}

      {step === 'verify' && (
        <section className="journey-stage centered-stage">
          <div className="verification-card">
            <div className="mini-cassette" aria-hidden="true"><span /><span /></div>
            <p className="eyebrow small-eyebrow">check your inbox</p>
            <h2>your access is on its way.</h2>
            <p className="stage-intro">
              Enter the six-digit code sent to <strong>{email}</strong>, or use the link in that message.
            </p>
            <form onSubmit={submitCode}>
              <label className="sr-only" htmlFor="accessCode">six-digit access code</label>
              <input
                className="code-input"
                id="accessCode"
                inputMode="numeric"
                maxLength={6}
                placeholder="000000"
                value={code}
                onChange={(event) => setCode(event.target.value.replace(/\D/g, ''))}
              />
              <p className="prototype-note">For this prototype, enter any six digits.</p>
              <button className="primary-button form-submit" type="submit" disabled={code.length !== 6}>
                <span>verify and continue</span><span aria-hidden="true">→</span>
              </button>
            </form>
            <div className="inline-links">
              <button type="button">resend</button>
              <button type="button" onClick={() => setStep('access')}>use a different email</button>
            </div>
          </div>
        </section>
      )}

      {step === 'welcome' && (
        <section className="journey-stage welcome-stage">
          <div className="vinyl" aria-hidden="true"><div><span>music<br />as<br />medicine</span></div></div>
          <div className="stage-heading welcome-copy">
            <p className="eyebrow small-eyebrow">take a breath</p>
            <h2>this is your mix.</h2>
            <p className="stage-intro">
              You do not need the perfect intention or the perfect songs. Bring
              what feels alive, unfinished, curious, or true.
            </p>
            <ul className="prep-list">
              <li>settle somewhere comfortable</li>
              <li>have headphones nearby if you want them</li>
              <li>open the music app you usually use</li>
              <li>answer in a word or a paragraph</li>
            </ul>
            <button className="primary-button" type="button" onClick={() => setStep('privacy')}>
              <span>begin</span><span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}

      {step === 'privacy' && (
        <section className="journey-stage privacy-stage">
          <div className="stage-heading wide-heading">
            <p className="eyebrow small-eyebrow">before personal writing begins</p>
            <h2>how would you like us to hold this journey?</h2>
            <p className="stage-intro">You can change this choice before you leave with your result.</p>
          </div>
          <div className="choice-grid">
            <ChoiceCard
              selected={storage === 'saved'}
              color="blue"
              kicker="return anytime"
              title="save it privately"
              detail="Return to your playlist, reflections, Feeling Map, and ritual later."
              onClick={() => setStorage('saved')}
            />
            <ChoiceCard
              selected={storage === 'session'}
              color="coral"
              kicker="you choose what remains"
              title="keep it session-only"
              detail="Complete and export the journey, then remove the journal. At the end, choose whether to keep only your finished playlist and ritual."
              onClick={() => setStorage('session')}
            />
          </div>
          <div className="stage-actions centered-actions">
            <button className="primary-button" type="button" disabled={!storage} onClick={() => setStep('context')}>
              <span>continue</span><span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}

      {step === 'context' && (
        <section className="journey-stage context-stage">
          <div className="stage-heading">
            <p className="eyebrow small-eyebrow">meet you where you are</p>
            <h2>tell us about your practice.</h2>
            <p className="stage-intro">This changes the framing and amount of explanation—not what you can access.</p>
          </div>
          <div className="context-form">
            <fieldset>
              <legend>where are you in your practice?</legend>
              <div className="pill-options">
                <Pill selected={practiceStage === 'active'} onClick={() => setPracticeStage('active')}>actively microdosing</Pill>
                <Pill selected={practiceStage === 'preparing'} onClick={() => setPracticeStage('preparing')}>preparing to begin</Pill>
              </div>
            </fieldset>
            <fieldset>
              <legend>how familiar does microdosing feel?</legend>
              <div className="pill-options">
                {['new', 'some experience', 'established', 'prefer not to say'].map((item) => (
                  <Pill key={item} selected={experience === item} onClick={() => setExperience(item)}>{item}</Pill>
                ))}
              </div>
            </fieldset>
            <button
              className="primary-button form-submit"
              type="button"
              disabled={!practiceStage || !experience}
              onClick={() => setStep('handoff')}
            >
              <span>continue to my intention</span><span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}

      {step === 'handoff' && (
        <section className="journey-stage centered-stage">
          <div className="handoff-card">
            <div className="tape-counter" aria-hidden="true">00:01</div>
            <p className="eyebrow small-eyebrow">section one complete</p>
            <h2>you’re tuned in.</h2>
            <p className="stage-intro">
              Next, we’ll name what matters and find the feeling beneath it.
            </p>
            <div className="summary-ticket">
              <span>{practiceStage === 'active' ? 'active practice' : 'preparing to begin'}</span>
              <span>{experience}</span>
              <span>{storage === 'saved' ? 'saved privately' : 'session-only journal'}</span>
            </div>
            <button className="primary-button" type="button" disabled>
              <span>section 2 coming next</span><span aria-hidden="true">→</span>
            </button>
            <button className="restart-button" type="button" onClick={() => setStep('landing')}>replay section 1</button>
          </div>
        </section>
      )}
    </main>
  );
}

function JourneyHeader({ label, progress, onBack }: { label: string; progress: number; onBack: () => void }) {
  return (
    <header className="journey-header">
      <button className="back-button" type="button" onClick={onBack} aria-label="Go back">←</button>
      <button className="wordmark wordmark-button" type="button" onClick={() => window.location.reload()}>music as medicine</button>
      <div className="progress-block" aria-label={`${progress}% through this section`}>
        <span>{label}</span>
        <div className="progress-track"><i style={{ width: `${progress}%` }} /></div>
      </div>
    </header>
  );
}

function TrackCard({ number, title, detail, color }: { number: string; title: string; detail: string; color: string }) {
  return <li className={`track-card color-${color}`}><span>{number}</span><strong>{title}</strong><p>{detail}</p></li>;
}

function ChoiceCard({ selected, color, kicker, title, detail, onClick }: { selected: boolean; color: string; kicker: string; title: string; detail: string; onClick: () => void }) {
  return (
    <button className={`choice-card color-${color} ${selected ? 'is-selected' : ''}`} type="button" onClick={onClick} aria-pressed={selected}>
      <span className="choice-mark" aria-hidden="true">{selected ? '●' : '○'}</span>
      <small>{kicker}</small><strong>{title}</strong><p>{detail}</p>
    </button>
  );
}

function Pill({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button className={`pill ${selected ? 'is-selected' : ''}`} type="button" onClick={onClick} aria-pressed={selected}>{children}</button>;
}
