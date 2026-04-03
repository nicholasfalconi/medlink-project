import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  responsibilities: string;
  image?: string;
  initials: string;
  activeMentor?: boolean;
}

interface TeamSection {
  title: string;
  description: string;
  members: TeamMember[];
}

const teamSections: TeamSection[] = [
  {
    title: "Leadership",
    description: "Setting the vision and direction of the MedLink Project.",
    members: [
      {
        name: "Ervis Musa",
        role: "Project Coordinator",
        bio: "Ervis is a medical student at the University of Ottawa. He completed his Bachelor of Health Sciences at Queen's University with a certificate in Disability and Physical Activity (DIPA). He values mentorship for its ability to turn experience into direction - something he benefited from himself and now aims to offer others. Outside of MedLink, he is currently training for a marathon.",
        responsibilities: "Oversees the overall direction of the project, including partnerships, team structure, and long-term planning, while supporting all team members.",
        image: "/lovable-uploads/f572a4c6-8aa5-4252-9310-71e2e36e6781.png",
        initials: "EM",
        activeMentor: true,
      },
    ],
  },
  {
    title: "Mentorship & Community",
    description: "Connecting mentors and mentees to build meaningful relationships.",
    members: [
      {
        name: "Matey Juric",
        role: "Mentorship Lead",
        bio: "Matey is a medical student at the University of Ottawa. He completed a degree in Biological Sciences at Drexel University in Philadelphia prior to medical school. He is passionate about mentorship because of the lifelong connections it fosters and believes there is nothing more fulfilling than helping someone work toward their goals.",
        responsibilities: "Leads mentor recruitment, onboarding, and mentor-mentee matching, while continuously improving the mentorship experience through feedback.",
        image: "/lovable-uploads/41742e0a-3782-490f-8609-be96532f4fbd.png",
        initials: "MJ",
        activeMentor: true,
      },
      {
        name: "Parth Arora",
        role: "Undergraduate Outreach Lead",
        bio: "Parth is a medical student at the University of Ottawa. Before medical school, he worked as Assistant to Presidential Affairs with the McMaster Students Union, where he developed strong skills in building campus connections and understanding student needs. As the first in his family to pursue medicine, he is committed to making the path feel more navigable and human for students figuring it out as they go. Outside of academics, he enjoys going to the gym.",
        responsibilities: "Connects with undergraduate students and organizations, manages mentee engagement and sign-ups, and ensures students feel supported throughout their experience.",
        image: "/lovable-uploads/parth-arora.png",
        initials: "PA",
        activeMentor: true,
      },
      {
        name: "Adam Levitan",
        role: "Graduate Studies Advisor",
        bio: "Adam is currently pursuing his Master's at the University of Toronto's Institute of Medical Science, with an undergraduate background in biology from Queen's University. He values the reciprocal learning that comes with mentorship and is especially passionate about keeping mentorship accessible and free.",
        responsibilities: "Provides guidance on graduate pathways and application strategy while supporting the accuracy of MedLink's academic content.",
        image: "/lovable-uploads/9e284c90-1db3-405f-a48b-8abbbfe5af2c.png",
        initials: "AL",
      },
    ],
  },
  {
    title: "Operations & Growth",
    description: "Expanding MedLink's reach and building the infrastructure behind the scenes.",
    members: [
      {
        name: "Grant Luke",
        role: "Events Coordinator",
        bio: "I completed my undergraduate degree in Kinesiology at Western University (BSc), where I developed a strong interest in human physiology and clinical medicine. During my time there, I became actively involved in academic and extracurricular initiatives, including organizing and participating in events that connected students with opportunities in healthcare and mentorship. These experiences sparked an interest in building meaningful, accessible programming that brings people together. As an Events Coordinator, I aim to create engaging, supportive spaces that foster connection, mentorship, and professional growth for students navigating the path to medicine.",
        responsibilities: "Plans and executes workshops, panels, and live sessions, while coordinating logistics and ensuring a smooth experience for participants.",
        image: "/lovable-uploads/grant-luke.jpg",
        initials: "GL",
        activeMentor: true,
      },
      {
        name: "Braeden Hill",
        role: "Partnerships & Growth Lead",
        bio: "Braeden is a medical student at the University of Toronto. Outside of his academic pursuits, he enjoys going to the gym, running, and playing sports. He sees mentorship as a way to share experience and encouragement during one of the most uncertain parts of a student's journey.",
        responsibilities: "Leads external partnerships and expansion efforts, building relationships with student groups and institutions while supporting MedLink's long-term growth and visibility.",
        image: "/lovable-uploads/6e05aacf-2940-422e-9e80-da3f2bccb15b.png",
        initials: "BH",
        activeMentor: true,
      },
      {
        name: "Nicholas Falconi",
        role: "Tech Lead",
        bio: "Nicholas Falconi holds a Bachelor's degree in Computer Science with a specialization in Biomedical Computing from Queen's University. He has worked with Sanofi as a Digital Strategy Analyst and has experience in data pipelines, front-end development, and generative AI systems. Outside of work, he leads innovative projects including a React-based GenAI platform and runs Falconi Labs, a full-stack innovation company.",
        responsibilities: "Built and maintains the MedLink platform, overseeing website functionality, forms, and technical infrastructure while supporting the team with digital tools and systems.",
        initials: "NF",
        activeMentor: true,
      },
    ],
  },
];

const MeetTheTeam = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The MedLink Project",
    url: "https://www.themedlinkproject.com/",
    member: teamSections.flatMap((s) =>
      s.members.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        description: m.bio,
      }))
    ),
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-[#007AFF]">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MedLink is organized around three core areas: leadership, mentorship & community, and operations & growth. Each team works together to ensure students receive accessible, high-quality mentorship without barriers.
            </p>
          </div>

          {teamSections.map((section) => (
            <div key={section.title} className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600">{section.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {section.members.map((member) => (
                  <Card
                    key={member.name}
                    className="border bg-white hover:shadow-lg transition-shadow cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setSelected(member);
                      setOpen(true);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelected(member);
                        setOpen(true);
                      }
                    }}
                  >
                    <CardContent className="pt-6 flex flex-col items-center text-center">
                      <Avatar className="h-24 w-24 mb-4">
                        {member.image ? (
                          <AvatarImage
                            src={member.image}
                            alt={`${member.name} - ${member.role} headshot`}
                            className="object-cover"
                          />
                        ) : (
                          <AvatarFallback className="bg-blue-100 text-[#007AFF] text-lg font-semibold">
                            {member.initials}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sm text-[#007AFF] font-medium">
                        {member.role}
                      </p>
                      {member.activeMentor && (
                        <span className="mt-2 inline-block text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          Active Mentor
                        </span>
                      )}
                      <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-xl">
              {selected && (
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    {selected.image ? (
                      <AvatarImage
                        src={selected.image}
                        alt={`${selected.name} - ${selected.role} headshot`}
                      />
                    ) : (
                      <AvatarFallback className="bg-blue-100 text-[#007AFF] text-lg font-semibold">
                        {selected.initials}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {selected.name}
                  </h3>
                  <p className="text-sm text-[#007AFF] font-medium">
                    {selected.role}
                  </p>
                  {selected.activeMentor && (
                    <span className="mt-1 inline-block text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      Active Mentor
                    </span>
                  )}
                  <p className="mt-4 text-sm leading-6 text-gray-600 max-w-prose">
                    {selected.bio}
                  </p>
                  <div className="w-full mt-6 text-left bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Responsibilities
                    </h4>
                    <p className="text-sm text-gray-600">
                      {selected.responsibilities}
                    </p>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MeetTheTeam;
