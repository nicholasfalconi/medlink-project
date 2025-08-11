
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
    name: "First Last",
    role: "Co-Founder",
    bio: "Short bio goes here. Share background, interests, and what they bring to The MedLink Project.",
    initials: "FL",
  },
  {
    name: "First Last",
    role: "Co-Founder",
    bio: "Short bio goes here. Share background, interests, and what they bring to The MedLink Project.",
    initials: "FL",
  },
  {
    name: "First Last",
    role: "Operations Lead",
    bio: "Short bio goes here. Share background, interests, and what they bring to The MedLink Project.",
    initials: "FL",
  },
  {
    name: "First Last",
    role: "Programs Lead",
    bio: "Short bio goes here. Share background, interests, and what they bring to The MedLink Project.",
    initials: "FL",
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
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  {member.image ? (
                    <AvatarImage src={member.image} alt={`${member.name} headshot`} />
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

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Replace the placeholder names and bios with the real team details from your live site.
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
};
