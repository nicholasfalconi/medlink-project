import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Download } from "lucide-react";

const McatPrep = () => {
  useEffect(() => {
    document.title = "MCAT Prep Guide | MedLink Resources";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'A practical MCAT prep guide from the MedLink Project: study schedules, resource recommendations, and a framework for scoring 518.');
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section className="relative bg-background overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-secondary/50 blur-3xl" />
          </div>

          <div className="section-padding">
            <div className="max-w-7xl mx-auto px-4 relative">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>MCAT Prep Guide</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <header className="mt-6 text-center animate-fade-in">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">MCAT Prep Guide</h1>
                <p className="mt-3 text-sm text-muted-foreground">Written by Braeden Hill &middot; March 1, 2026</p>
              </header>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <p>
                The MCAT is a big deal, but it's also just a long, learnable test. The trick isn't finding the "perfect" schedule, it's building a plan that fits your real life, pushes you into active practice early, and stays consistent enough to compound over time. In this post for the MedLink Project, I'll be sharing a few realistic ways to structure prep (full-time sprint, long game, and a hybrid), provide some resource recommendations to help improve scores, and the explain the framework I used to score a 518 while working 40 hours a week from May to August without giving up the gym or a social life. The emphasis is on building a plan you can sustain. With clear phases (content review, then practice), daily habits that keep momentum (CARS and spaced repetition), and full-length exams that standardize timing and test-day routines.
              </p>
            </div>
          </div>
        </section>

        {/* Three ways to structure MCAT prep */}
        <section className="bg-blue-50">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">Three ways to structure MCAT prep</h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. The full-time summer sprint (8-10 weeks)</h3>
              <p>
                You clear your schedule and treat prep like a job: 6-8 hours/day, 5-6 days/week. The upside is immersion, as content sticks faster when you're seeing it constantly. The risk is burnout if you don't deliberately rotate topics and keep a weekly "lighter" day. If you choose this route, anchor the week with at least one timed CARS set daily and 1-2 full-length tests (FLs) in the second half of prep. Section timing, format, and length should be practiced until they feel like normal routine (e.g., CP/BB/PS are 95 minutes/59 Qs; CARS is 90 minutes/53 Qs).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. The long game (4-8 months)</h3>
              <p>
                This works well if you're in school or working a job. Set aside 60-120 minutes on school/work nights, 3-6 hours on weekends, with steady Anki and CARS practice to fill gaps here and there in between. Because motivation can dip over months, build mini-milestones (e.g., finish orgo book by Week 5, hit all AAMC Question Banks by Week 10, write first practice FL by Week 12). Think of it as laying bricks, where consistent, small sessions win here. Students who do this effectively keep resources focused. For example, try to narrow your efforts into one book set, one Anki deck, Jack Westin for CARS, then UWorld + AAMC materials.
              </p>
              <p>
                This is the setup I used over a 4-month summer (103 days) while working a full-time job to score a 518 on my first attempt at the MCAT. For me, there was no secret to success, just consistency and purpose in my content review and practice over the long-term.
              </p>
              <div className="mt-4 mb-4">
                <a href="/MCAT_SCHEDULE_MEDLINK.xlsx" download className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors no-underline">
                  <Download className="h-4 w-4" />
                  Download My MCAT Study Schedule (Excel)
                </a>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. The hybrid (what most people actually end up doing)</h3>
              <p>
                You do "maintenance mode" during the school term (Anki, CARS, a couple of chapters a week), then switch to a focused practice phase 6-8 weeks out. This balances life with score growth and reduces the shock of jumping straight into full-lengths. Think of it like blending your favourite parts of all we've discussed so far. The reality is, there is no one-size fits all plan for MCAT studying, so try to take away strategies, schedules, resources, and tips that will together amalgamate to a study setup that works best for you and your circumstances!
              </p>
            </div>
          </div>
        </section>

        {/* What to use */}
        <section className="bg-white">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">What to use (and what to skip)</h2>
              <p>
                There are a million resources for MCAT studying and you do not need them all. Here is a framework that I used and have seen work for others:
              </p>

              <div className="grid md:grid-cols-2 gap-6 not-prose mt-6">
                <div className="rounded-xl border bg-blue-50 p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Anki for the sticky bits</h3>
                  <p className="text-sm text-muted-foreground">Psych/soc terms, amino acids, pathways, equations. Daily spaced repetition is really helpful for memorizing random facts that can make the difference on narrowing down to the right answers on test day (especially for P/S). The Anki deck by MileDown is a popular choice for MCAT studying.</p>
                </div>
                <div className="rounded-xl border bg-blue-50 p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">A structured book set</h3>
                  <p className="text-sm text-muted-foreground">A structured book set (e.g., Kaplan) for content review during Phase 1. It gives you a clean spine so you don't fall into YouTube rabbit holes. I purchased a previous year's edition of Kaplan review for a discount on Amazon. You also can get great deals on second handbooks from friends or on Facebook. Other test prep companies make good books as well (Kaplan and Princeton review tend to be most common).</p>
                </div>
                <div className="rounded-xl border bg-blue-50 p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Jack Westin for CARS every day</h3>
                  <p className="text-sm text-muted-foreground">One timed passage + quick review is the minimum effective dose, scale up to doing more if CARS is a pain point for your studying. Jack Westin has an email list where you can sign up for their CARS passage of the day. They also have a great bank of previous passages to practice with.</p>
                </div>
                <div className="rounded-xl border bg-blue-50 p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">UWorld + AAMC question banks</h3>
                  <p className="text-sm text-muted-foreground">Use these to learn how MCAT questions think, then AAMC full length practice tests to calibrate pacing and endurance (treat each FL like the real thing, try to emulate your test day timing, breaks, snacks). The AAMC Official Prep Hub is the best place to get study material for the MCAT that emulates the style of the exam. The AAMC full-length practice tests are the most important paid resources you can get for MCAT prep. UWorld's MCAT Qbanks are a great third party-resource for practice questions that are reflective of the AAMC format and material. Blueprint test prep is another third-party company that offers a free full-length test and some other study resources.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Podcasts/YouTube to reinforce weak points</h3>
              <p>
                Since I studied on a condensed timeline while working a full-time job, I found it very helpful to listen to podcasts or youtube videos on specific topics I was struggling with while walking to work or driving places (saved me time during my focused study periods). Khan Academy has an amazing free set of videos for every MCAT topic you can imagine - great for helping you understand topics where the textbooks just aren't enough. There is also a 300-page document from Khan Academy breaking down every psych/soc topic in a more digestible format for studying compared to the official prep books. There are a variety of MCAT prep podcasts out there that can help supplement your learning when you aren't seated at a desk.
              </p>
              <p className="mt-6">
                Finally, know the exam's structure and weights so you can plan smarter (e.g., BB is 65% bio/25% biochem; CP is a mix of gen chem/physics/biochem/orgo; P/S is 65% psych/30% soc; CARS is all passage reasoning). The full test day runs ~7.5 hours including intros and breaks, so it is key to practice your stamina, not just your facts.
              </p>
            </div>
          </div>
        </section>

        {/* My study plan */}
        <section className="bg-blue-50">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">My study plan (May - August): content first, then practice</h2>
              <p>
                Context: I worked 40 hours/week and still exercised 5 days a week and had at least one day where my day was focused on relaxing with family or friends first.
              </p>
              <p>My approach had two clean phases:</p>

              <div className="not-prose grid md:grid-cols-2 gap-6 mt-6">
                <div className="rounded-xl border bg-white p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Phase 1: Content Review (approx. 6-7 weeks)</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li><strong>Evenings, Weekdays (~3 hours total):</strong> I always studied two topics per night, 1-2 chapters each (e.g., BB then CP). This rotation kept me fresh and prevented getting stuck in one domain.</li>
                    <li><strong>Daily non-negotiables:</strong> 1 Jack Westin CARS passage (timed + quick review), Anki (P/S heavy, plus equations and high-yield bio/biochem).</li>
                    <li><strong>Weekends:</strong> 3-4 hours max to catch up; I avoided 8-hour grinds during content phase to preserve energy.</li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-white p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Phase 2: Practice (approx. 6-7 weeks)</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li><strong>Weekdays:</strong> Two 90-minute blocks of questions (UWorld/AAMC Question Banks), still rotating topics. Would immediately review questions I got wrong and keep track of which concepts I am consistently messing up on (focus on why an answer is right/wrong, then tag weak concepts for targeted content refresh).</li>
                    <li><strong>Weekends:</strong> Full-length on Saturday - 4 hours of review Sunday (triage: timing errors, passage mapping, data interpretation, and "MCAT logic" misses). I used a mix of 2 Blueprint FLs early + 4 AAMC FLs leading up to my test date.</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Good habits I tried to maintain throughout both phases</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Guard the minimums.</strong> On exhausted days, I still did one CARS passage + Anki. These "floor" habits prevent backsliding.</li>
                <li><strong>Review beats re-read.</strong> If I didn't understand a miss, I wrote a one-liner "rule" or drew a tiny diagram. Your future self should be able to see exactly why you missed it.</li>
                <li><strong>Practice under test conditions.</strong> The MCAT is as much logistics as knowledge: pacing, break timing, snack strategy. Rehearse exam day early (the whole thing is ~7.5 hours).</li>
                <li><strong>Make peace with imperfect days.</strong> Consistency &gt; perfection. If a shift or life event cuts a block, slide it to the weekend. Definitely don't try to "catch up" at 1 a.m on a regular basis.</li>
              </ul>

              <p className="mt-6">
                This cadence let me keep my job, gym, and sanity. The trick wasn't heroic hours, but instead was showing up daily, keeping CARS/Anki consistent, and letting FLs drive the final 5-6 weeks.
              </p>

              <div className="mt-6 mb-6">
                <a href="/MCAT_SCHEDULE_MEDLINK.xlsx" download className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors no-underline">
                  <Download className="h-4 w-4" />
                  Download My MCAT Study Schedule (Excel)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Q&A */}
        <section className="bg-white">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-6">MCAT mini-Q&A (things I wish I had known earlier)</h2>

              <div className="not-prose space-y-4">
                {[
                  { q: "How long is the MCAT and how many questions per section?", a: "~7.5 hours total. CP/BB/PS are each 95 min with 59 questions. CARS is 90 min with 53 questions. All science sections mix passages + discretes, whereas CARS is all passages." },
                  { q: "What score do I need in Canada?", a: "It varies by school/stream and changes year-to-year. Some schools weigh specific sections (e.g., CARS), some just require minimums, and a few don't use the MCAT at all (notably some Quebec/Ottawa tracks). Always check current policies, as the way medical schools look at the MCAT is evolving over time." },
                  { q: "What's the best resource mix?", a: "A lean stack: one book set for content, Anki daily (esp. P/S), Jack Westin CARS daily, UWorld + AAMC QBs, and AAMC FLs in the final stretch. Add 1 or 2 non-distracting passive resources (podcasts, targeted videos) where applicable." },
                  { q: "How many full-lengths should I take?", a: "Aim for 5-8 total. I did 2 Blueprint early (to learn the ropes) and 4 AAMC FLs closer to test day. Space them weekly, with real-test timing and full reviews the day after." },
                  { q: "I'm working full-time (or in school). Is this realistic?", a: "Yes for sure! I can attest to this being realistic if you keep the daily floor (CARS + Anki), rotate two topics each night, and use weekends for FLs/review. My schedule was basically that and it was sustainable for me, especially if you don't oversubscribe your weekdays to studying or working too much." },
                  { q: "When should I switch from content to practice?", a: "As soon as you've skimmed core content once (even imperfectly). Your score grows most in the practice phase; don't wait to feel \"ready.\" Use practice to decide what content to polish." },
                  { q: "Day-of tips?", a: "Pack familiar snacks, hydrate, and use every break. Treat it like your practiced FL routine. The real thing feels like another practice test (seriously)." },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border bg-blue-50 p-5">
                    <h3 className="text-base font-semibold text-foreground mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final words */}
        <section className="bg-blue-50">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">Final words</h2>
              <p>
                An effective MCAT plan is specific, limited in scope, and repeatable. Decide on a study cadence that fits your actual week, choose a small set of resources you will finish, and let regular practice and structured review guide adjustments. Keep core habits daily, even on your lighter days, and use full-length exams to standardize timing, identify gaps, and rehearse test-day logistics. When the plan needs to change, update it and move on. Don't punish yourself because you were tired one night or wanted to enjoy some time with friends!
              </p>
              <p className="mt-4">
                On a personal note, what made my preparation sustainable while working full-time was accepting that progress would be uneven and designing around that reality. I protected a simple daily floor (one CARS passage and Anki), rotated two focused topics at night, and reserved weekends for full-lengths and targeted review. Some weeks went exactly as scheduled, while others didn't. The point was continuity, not perfection. By the last month, the process felt routine. My section timing, breaks, and review patterns felt familiar, and that reduced uncertainty more than any single resource did. From everyone at the MedLink Project: you've got this. Build a plan that respects your life, show up more days than you don't, and trust the compound effect. When test day comes, it'll just feel like the next rep.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default McatPrep;
