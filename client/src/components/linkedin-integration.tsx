import { LinkedinIcon, Users, ExternalLink, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Extend Window interface for LinkedIn tracking
declare global {
  interface Window {
    lintrk?: (action: string, data: { conversion_id: string }) => void;
  }
}

interface LinkedInIntegrationProps {
  variant?: "header" | "footer" | "content" | "share";
  showFollowerCount?: boolean;
  context?: string;
}

export default function LinkedInIntegration({ 
  variant = "content",
  showFollowerCount = false,
  context = ""
}: LinkedInIntegrationProps) {
  
  const companyUrl = "https://www.linkedin.com/company/control-origins";
  const companyName = "Control Origins";

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const summary = encodeURIComponent("Expert Microsoft Azure & ASP.NET consulting services for enterprise organizations");
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`;
    
    // Track LinkedIn share conversion
    if (typeof window !== 'undefined' && window.lintrk) {
      window.lintrk('track', { conversion_id: 'share_content' });
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
  };

  const handleLinkedInFollow = () => {
    // Track LinkedIn follow conversion
    if (typeof window !== 'undefined' && window.lintrk) {
      window.lintrk('track', { conversion_id: 'follow_company' });
    }
    
    window.open(companyUrl, '_blank', 'noopener,noreferrer');
  };

  // Header variant - minimal icon
  if (variant === "header") {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLinkedInFollow}
        className="text-muted-foreground hover:text-[#0077B5] transition-colors"
        title="Follow Control Origins on LinkedIn"
      >
        <LinkedinIcon className="w-4 h-4" />
      </Button>
    );
  }

  // Footer variant - company link
  if (variant === "footer") {
    return (
      <div className="flex items-center gap-4">
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-[#0077B5] transition-colors"
          onClick={handleLinkedInFollow}
        >
          <LinkedinIcon className="w-5 h-5" />
          <span>Follow {companyName}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    );
  }

  // Share variant - share button only
  if (variant === "share") {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={handleLinkedInShare}
        className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share on LinkedIn
      </Button>
    );
  }

  // Content variant - full featured
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <Button
        onClick={handleLinkedInFollow}
        className="bg-[#0077B5] hover:bg-[#005885] text-white transition-colors"
      >
        <LinkedinIcon className="w-4 h-4 mr-2" />
        Follow {companyName}
        {showFollowerCount && (
          <>
            <Users className="w-4 h-4 ml-2" />
            <span className="ml-1">500+</span>
          </>
        )}
      </Button>
      
      <Button
        variant="outline"
        onClick={handleLinkedInShare}
        className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share This Page
      </Button>
    </div>
  );
}

// Utility function for tracking LinkedIn conversions
export const trackLinkedInConversion = (conversionType: string) => {
  if (typeof window !== 'undefined' && window.lintrk) {
    window.lintrk('track', { conversion_id: conversionType });
  }
};
