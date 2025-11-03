import { LinkedinIcon, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trackLinkedInConversion } from "@/components/linkedin-integration";

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  linkedinUrl: string;
  image: string;
  bio: string;
  location?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mark Hazleton",
    role: "Principal Consultant & Founder",
    expertise: [
      "Microsoft Azure Architecture",
      "ASP.NET Core Development", 
      "SOX Compliance",
      "Cloud Migration",
      "Enterprise Consulting",
      "Regulatory Technology"
    ],
    linkedinUrl: "https://www.linkedin.com/in/markhazleton/",
    image: "/assets/portfolio/MarkHazleton.jpg",
    bio: "Expert Microsoft technology consultant with 20+ years of experience in enterprise solutions, regulatory compliance, and business transformation. Specializes in guiding organizations through complex technology initiatives while ensuring compliance with critical regulatory requirements.",
    location: "United States"
  }
  // Additional team members can be added here as the company grows
];

export default function TeamSection() {
  const handleLinkedInProfileView = (memberName: string, linkedinUrl: string) => {
    // Track LinkedIn profile view conversion
    trackLinkedInConversion(`profile_view_${memberName.toLowerCase().replace(' ', '_')}`);
    
    // Open LinkedIn profile in new tab
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Control Origins is maintained by Mark Hazleton as a portfolio brand showcasing decades of 
            experience in enterprise consulting, Microsoft technology solutions, regulatory compliance, 
            and strategic business transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              data-testid={`team-member-${index}`}
            >
              <CardContent className="p-0">
                {/* Member Photo */}
                <div className="relative h-48 bg-gradient-to-br from-accent/20 to-primary/20">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-accent">
                            <span class="text-4xl font-bold text-accent-foreground">
                              ${member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        `;
                      }
                    }}
                  />
                  
                  {/* Location Badge */}
                  {member.location && (
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{member.location}</span>
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold text-lg">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Areas of Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={() => handleLinkedInProfileView(member.name, member.linkedinUrl)}
                      className="w-full bg-[#0077B5] hover:bg-[#005885] text-white transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      All business inquiries should be made through LinkedIn for both company and individual connections.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Expansion Note */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-background rounded-xl p-8 shadow-lg border border-accent/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Professional Contact & Network
            </h3>
            <p className="text-muted-foreground mb-4">
              Control Origins is a portfolio brand maintained by Mark Hazleton and is not currently 
              accepting new business engagements. This site serves as a showcase of professional 
              experience and past project work. For professional networking and inquiries, 
              please connect through LinkedIn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  trackLinkedInConversion('company_page_view');
                  window.open("https://www.linkedin.com/company/control-origins", '_blank', 'noopener,noreferrer');
                }}
                className="bg-[#0077B5] hover:bg-[#005885] text-white"
              >
                <LinkedinIcon className="w-4 h-4 mr-2" />
                Follow Company Page
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  trackLinkedInConversion('mark_hazleton_profile_view');
                  window.open("https://www.linkedin.com/in/markhazleton/", '_blank', 'noopener,noreferrer');
                }}
                className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4 mr-2" />
                Connect with Mark
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export team data for use in other components if needed
export { teamMembers };
export type { TeamMember };
