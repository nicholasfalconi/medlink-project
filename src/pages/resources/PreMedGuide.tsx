import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const PreMedGuide = () => {
  useEffect(() => {
    document.title = "Trying to Do It All: A Real Guide for Undergrads | MedLink Resources";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'A real guide for undergrads navigating pre-med life: managing time, expectations, and yourself.');
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
                    <BreadcrumbLink href="/resources">Blogs</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Pre-Med Guide</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <header className="mt-6 text-center animate-fade-in">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">Trying to Do It All: A Real Guide for Undergrads Navigating Pre-Med Life</h1>
                <p className="mt-3 text-sm text-muted-foreground">Written by Ervis Musa &middot; April 3, 2026</p>
              </header>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <p>If you're an undergraduate thinking about medicine, you've probably felt it already: that pressure to improve everything.</p>
              <p>Your GPA. Your extracurriculars. Your research. Your volunteering. Your MCAT. Your sleep, your workouts, your diet... your entire life.</p>
              <p>And underneath all of that, one quiet question: "Am I doing enough?"</p>
              <p>This post isn't going to give you a perfect formula - because honestly, there isn't one. Instead, this is about how to manage your time, your expectations, and yourself while you're figuring things out. A huge disclosure - this is just the opinion of one medical student!</p>
            </div>
          </div>
        </section>

        {/* What your life looks like */}
        <section className="bg-blue-50">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">What Your Life Might Actually Look Like Right Now</h2>
              <p>A lot of pre-meds think they just need to "study more." But your reality probably looks more like this:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full course load (often heavy science courses)</li>
                <li>Extracurriculars (clubs, exec roles, volunteering)</li>
                <li>Research or trying to get research</li>
                <li>MCAT prep (at some point... looming in the background)</li>
                <li>Mentorship / networking</li>
                <li>Trying to stay healthy (working out, eating properly)</li>
                <li>And still trying to have a life</li>
              </ul>
              <p>That's a lot. And research shows that undergraduate students pursuing competitive career paths (like medicine) experience significant academic pressure and stress related to performance expectations.<sup>1</sup></p>
              <p>So if it feels like a lot - it is.</p>
            </div>
          </div>
        </section>

        {/* Perfectionism + Studying */}
        <section className="bg-white">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">The "I Need to Be Perfect" Mindset</h2>
              <p>One of the biggest traps in pre-med is this: "If I just manage my time perfectly, I can do everything perfectly."</p>
              <p>So you try to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Build the perfect study schedule</li>
                <li>Optimize every hour</li>
                <li>Wake up early, work out, meal prep, study efficiently, volunteer, research...</li>
                <li>And never fall behind</li>
              </ul>
              <p>But perfectionism, especially in high-achieving students, is strongly linked to burnout, anxiety, and emotional exhaustion.<sup>2</sup></p>
              <p>And here's the honest part: trying to be perfect usually makes things worse, not better.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Studying vs. "Doing Enough"</h2>
              <p>You might sit down to study and think: "Other people are probably doing more than me."</p>
              <p>So you:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Study longer than you planned</li>
                <li>Feel guilty taking breaks</li>
                <li>Question if your methods are "good enough"</li>
              </ul>
              <p>But effective studying isn't about hours, it's about consistency and strategy.</p>
              <p>Translation: You don't need the perfect study plan, you need one you can actually stick to.</p>
            </div>
          </div>
        </section>

        {/* Applications + Health + Comparison */}
        <section className="bg-blue-50">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">Trying to Build a "Good Application" (While Not Knowing What You Want)</h2>
              <p>This is one of the hardest parts. You might feel like you need to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pick the "right" extracurriculars</li>
                <li>Get research early</li>
                <li>Show commitment to a specific path</li>
                <li>Know what kind of doctor you want to be</li>
              </ul>
              <p>But at the same time... You might have:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>No physicians in your life</li>
                <li>No clear idea what different specialties look like</li>
                <li>No idea what you actually enjoy yet</li>
              </ul>
              <p>That's normal. Career development research shows that exploration, not early certainty, is a key part of forming long-term professional identity.<sup>3</sup></p>
              <p>So if you feel like: "I don't know what I'm doing yet" - You're actually doing exactly what you're supposed to be doing.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Working Out, Eating Well... and Feeling Like You're Failing at Both</h2>
              <p>Let's be real. You probably want to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Work out consistently</li>
                <li>Eat healthy</li>
                <li>Sleep well</li>
              </ul>
              <p>But in reality:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>You squeeze in a workout when you can</li>
                <li>You eat quickly between classes</li>
                <li>You stay up later than you planned</li>
              </ul>
              <p>And then you think: "I should be better at this."</p>
              <p>But even moderate physical activity has been shown to improve mood, reduce stress, and support academic performance.<sup>4</sup></p>
              <p>Not perfect workouts. Not perfect diets. Just something. A short run. A quick lift. A walk between classes. It counts.</p>
            </div>
          </div>
        </section>

        {/* Comparison + What helps */}
        <section className="bg-white">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Hidden Pressure: Comparing Yourself to Everyone</h2>
              <p>You see:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Someone with a 4.0</li>
                <li>Someone doing research already</li>
                <li>Someone volunteering every weekend</li>
                <li>Someone who "knows" they want surgery or pediatrics</li>
              </ul>
              <p>And it feels like: "I'm behind."</p>
              <p>But what you're seeing is a highlight reel, not the full picture. And constant comparison is associated with increased stress and lower well-being in students.<sup>5</sup></p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Actually Helps (From Both Research and Experience)</h2>
              <p>Here are a few things that consistently make a difference:</p>
              <div className="not-prose grid sm:grid-cols-2 gap-4 mt-6">
                <div className="rounded-xl border bg-blue-50 p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">1. Focus on what matters right now</h3>
                  <p className="text-sm text-muted-foreground">Not everything needs to be optimized at once. Sometimes your priority is exams. Other times: applications. Other times: your health. You can't max everything at the same time.</p>
                </div>
                <div className="rounded-xl border bg-blue-50 p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">2. Build structure - but keep it flexible</h3>
                  <p className="text-sm text-muted-foreground">Rigid schedules often fail. A better approach: Plan your day. Expect it to change. Adjust without guilt.</p>
                </div>
                <div className="rounded-xl border bg-blue-50 p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">3. Let go of "perfect days"</h3>
                  <p className="text-sm text-muted-foreground">You will have unproductive days, missed workouts, times where you feel off-track. That doesn't mean you're failing.</p>
                </div>
                <div className="rounded-xl border bg-blue-50 p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">4. Talk to people who are just ahead of you</h3>
                  <p className="text-sm text-muted-foreground">This is huge. Near-peer mentorship has been shown to improve confidence, reduce stress, and help with decision-making and direction.<sup>6</sup> Because those people remember what it felt like to be where you are. That's what the MedLink Project is built on.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final advice + CTA + References */}
        <section className="bg-blue-50">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">What I'd Tell You If You Were Sitting Right In Front of Me</h2>
              <p>You don't need to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Have your entire path figured out</li>
                <li>Be perfect</li>
                <li>Do everything at once</li>
              </ul>
              <p>You do need to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Stay consistent</li>
                <li>Keep exploring</li>
                <li>Be okay with uncertainty</li>
                <li>Ask for help</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">If You're Feeling Overwhelmed</h2>
              <p>That feeling of: "I don't know if I'm doing this right" - Almost everyone feels it. Seriously.</p>
              <p>So reach out: To a mentor. To a friend. Through MedLink. Because this process is hard enough, you don't have to do it alone.</p>

              <div className="mt-8 text-center">
                <Link to="/services/mentees" className="inline-block bg-[#007AFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors no-underline">
                  Get Mentored
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="bg-white">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4 prose prose-sm md:prose-base text-muted-foreground">
              <h2 className="text-xl font-bold text-foreground mb-4">References</h2>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-muted-foreground">
                <li>Beiter R, Nash R, McCrady M, et al. The prevalence and correlates of depression, anxiety, and stress in a sample of college students. <em>J Affect Disord</em>. 2015;173:90-96.</li>
                <li>Hill AP, Curran T. Multidimensional perfectionism and burnout: A meta-analysis. <em>Pers Soc Psychol Rev</em>. 2016;20(3):269-288.</li>
                <li>Savickas ML. Career construction theory and practice. In: Brown SD, Lent RW, eds. <em>Career Development and Counseling</em>. 2nd ed. Wiley; 2013.</li>
                <li>Gosadi IM. Protective Effect of Exercise Against Depression, Anxiety, and Stress Among University Students Based on Their Level of Academic Performance. <em>Medicina (Kaunas)</em>. 2024;60(10):1706.</li>
                <li>Vogel EA, Rose JP, Roberts LR, Eckles K. Social comparison, social media, and self-esteem. <em>Psychol Pop Media Cult</em>. 2014;3(4):206-222.</li>
                <li>Sambunjak D, Straus SE, Marusic A. Mentoring in academic medicine: A systematic review. <em>JAMA</em>. 2006;296(9):1103-1115.</li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PreMedGuide;
