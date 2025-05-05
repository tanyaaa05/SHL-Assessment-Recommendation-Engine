
import { toast } from "sonner";

// Types
export interface AssessmentInput {
  jobRole: string;
  skills: string[];
  experienceLevel: "entry" | "mid" | "senior" | "executive";
}

export interface Assessment {
  id: string;
  name: string;
  description: string;
  targetJobRoles: string[];
  requiredSkills: string[];
  level: string;
  testFormat: string;
  score: number;
  reason: string;
}

// API Base URL - would come from environment variables in a real app
const API_BASE_URL = "http://localhost:3000/api";

/**
 * Get recommended assessments based on user input
 */
export const getRecommendations = async (input: AssessmentInput): Promise<Assessment[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/recommend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      // Handle HTTP errors
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch recommendations");
    }

    return await response.json();
  } catch (error) {
    toast.error("Failed to fetch recommendations. Please try again.");
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Mock function to simulate API responses during development
 * This would be removed when the actual backend is ready
 */
export const getMockRecommendations = (input: AssessmentInput): Promise<Assessment[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock data based on input
      const mockAssessments: Assessment[] = [
        {
          id: "SHL-001",
          name: "Verbal Reasoning Assessment",
          description: "Measures ability to understand and evaluate written information",
          targetJobRoles: ["Business Analyst", "Content Manager", "Legal Advisor"],
          requiredSkills: ["Critical Thinking", "Communication", "Analysis"],
          level: "mid",
          testFormat: "Multiple Choice",
          score: 0.92,
          reason: `Highly relevant for ${input.jobRole} roles requiring strong communication skills.`
        },
        {
          id: "SHL-023",
          name: "Numerical Reasoning Test",
          description: "Evaluates ability to interpret and work with numerical data",
          targetJobRoles: ["Financial Analyst", "Data Scientist", "Business Intelligence"],
          requiredSkills: ["Data Analysis", "Problem Solving", "Mathematics"],
          level: "mid",
          testFormat: "Interactive Problem-Solving",
          score: 0.87,
          reason: `Your skills in ${input.skills.includes("Data Analysis") ? "Data Analysis" : "Problem Solving"} align with this assessment.`
        },
        {
          id: "SHL-045",
          name: "Situational Judgment Assessment",
          description: "Assesses decision-making in workplace scenarios",
          targetJobRoles: ["Manager", "Team Lead", "HR Specialist"],
          requiredSkills: ["Decision Making", "Leadership", "Communication"],
          level: input.experienceLevel,
          testFormat: "Scenario-based Questions",
          score: 0.85,
          reason: `Matches your ${input.experienceLevel} level experience and targets leadership capabilities.`
        },
        {
          id: "SHL-067",
          name: "Technical Skills Assessment",
          description: "Evaluates specific technical competencies for specialized roles",
          targetJobRoles: ["Software Engineer", "IT Specialist", "Technical Support"],
          requiredSkills: ["Programming", "Troubleshooting", "Technical Knowledge"],
          level: input.experienceLevel,
          testFormat: "Practical Tasks",
          score: 0.78,
          reason: "Provides evaluation of technical competencies relevant to your role."
        },
        {
          id: "SHL-089",
          name: "Personality Profile",
          description: "Provides insights into work style and team fit",
          targetJobRoles: ["Any"],
          requiredSkills: ["Self-awareness", "Teamwork"],
          level: "any",
          testFormat: "Questionnaire",
          score: 0.75,
          reason: "Recommended as a supplementary assessment for cultural fit evaluation."
        }
      ];

      // Filter and sort based on input to mimic recommendation algorithm
      const filteredResults = mockAssessments
        .filter(assessment => {
          // Simple filtering logic based on job role and level
          const roleMatch = assessment.targetJobRoles.includes(input.jobRole) || 
                           assessment.targetJobRoles.includes("Any");
          const levelMatch = assessment.level === input.experienceLevel || 
                           assessment.level === "any";
          
          return roleMatch || levelMatch;
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5); // Return top 5 results

      resolve(filteredResults);
    }, 800);
  });
};
