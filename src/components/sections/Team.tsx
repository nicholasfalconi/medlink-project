import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role?: string;
  bio: string;
  image?: string;
  initials?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ervis Musa",
    role: "Project Coordinator",
    bio: "Ervis is a medical student at the University of Ottawa. He completed his Bachelor of Health Sciences at Queen's University with a certificate in Disability and Physical Activity (DIPA). He values mentorship for its ability to turn experience into direction—something he benefited from himself and now aims to offer others. Don't pay for your mentorship! Outside of MedLink, he's currently training for a marathon.",
    image: "/lovable-uploads/f572a4c6-8aa5-4252-9310-71e2e36e6781.png",
    initials: "EM",
  },
  {
    name: "Matey Juric",
    role: "Mentorship Team Lead",
    bio: "Matey is a medical student at the University of Ottawa. He completed a degree in Biological Sciences at Drexel University in Philadelphia prior to medical school. He's passionate about mentorship because of the lifelong connections it fosters and believes there's nothing more fulfilling than helping someone work toward their goals.",
    image: "/lovable-uploads/41742e0a-3782-490f-8609-be96532f4fbd.png",
    initials: "MJ",
  },
  {
    name: "Alec Weller",
    role: "Undergraduate Outreach Lead",
    bio: "Alec is a medical student at the University of Ottawa. Outside of school, he enjoys playing soccer and staying active through sports. He values mentorship as a way to give students clarity and confidence when navigating a confusing and competitive path, and he's committed to making that journey feel more approachable for others.",
    image: "/lovable-uploads/ba8e00af-8c59-45e1-b795-26fe6d2cf17c.png",
    initials: "AW",
  },
  {
    name: "Braeden Hill",
    role: "Events & Programming Lead",
    bio: "Braeden is a medical student at the University of Toronto. Outside of his academic pursuits, he enjoys going to the gym, running, and playing sports. For him, mentorship is about sharing experience and encouragement during one of the most stressful and uncertain parts of a student's journey.",
    image: "/lovable-uploads/6e05aacf-2940-422e-9e80-da3f2bccb15b.png",
    initials: "BH",
  },
  {
    name: "Adam Levitan",
    role: "Inclusion & Access Lead",
    bio: "Adam is currently pursuing his Master's at the University of Toronto's Institute of Medical Science, with an undergraduate background in biology from Queen's University. Adam enjoys the reciprocal learning that comes with mentor-mentee relationships and is especially passionate about providing mentorship free of cost, the way all mentorship should be.",
    image: "/lovable-uploads/9e284c90-1db3-405f-a48b-8abbbfe5af2c.png",
    initials: "AL",
  },
  {
    name: "Nicholas Falconi",
    role: "Website & Tech Lead",
    bio: "Nick holds a degree in Computer Science with a specialization in Biomedical Computing from Queen's University. He built and maintains the MedLink website and supports the team with digital systems and infrastructure. He values mentorship for its ability to demystify complex paths and open doors that others might not know existed.",
    initials: "NF",
  },
];

export const Team = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The MedLink Project",
    url: "https://www.themedlinkproject.com/",
    member: teamMembers.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      description: m.bio,
    })),
  };

  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The people behind The MedLink Project who make mentorship accessible and meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, idx) => (
            <Card key={idx} className="border bg-card">
              <CardHeader className="flex flex-col items-center gap-4 text-center">
                <Avatar className="h-24 w-24">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={`${member.name} - ${member.role ?? 'Team member'} headshot`} />
                  ) : (
                    <AvatarFallback className="bg-secondary text-foreground">
                      {member.initials ?? member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <CardTitle className="text-lg text-foreground">{member.name}</CardTitle>
                  {member.role && (
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
};
