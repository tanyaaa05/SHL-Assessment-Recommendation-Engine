
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AssessmentInput } from '@/services/api';
import { Badge } from "@/components/ui/badge";
import { X } from 'lucide-react';

interface RecommendationFormProps {
  onSubmit: (data: AssessmentInput) => void;
  isLoading: boolean;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({ onSubmit, isLoading }) => {
  const [jobRole, setJobRole] = useState<string>('');
  const [currentSkill, setCurrentSkill] = useState<string>('');
  const [skills, setSkills] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState<"entry" | "mid" | "senior" | "executive">("mid");

  const handleAddSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (jobRole.trim() && skills.length > 0) {
      onSubmit({
        jobRole: jobRole.trim(),
        skills,
        experienceLevel
      });
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border-shl-blue-light/20">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700">
              Job Role
            </label>
            <Input 
              id="jobRole"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              placeholder="e.g., Business Analyst, Software Engineer"
              required
              className="border-shl-blue/20 focus:border-shl-blue-light"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
              Skills
            </label>
            <div className="flex">
              <Input 
                id="skills"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g., Data Analysis, Communication"
                className="border-shl-blue/20 focus:border-shl-blue-light"
              />
              <Button 
                type="button"
                onClick={handleAddSkill}
                className="ml-2 bg-shl-teal hover:bg-shl-teal/80 text-white"
              >
                Add
              </Button>
            </div>
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map(skill => (
                  <Badge 
                    key={skill} 
                    className="bg-shl-blue-light flex items-center gap-1 px-3 py-1"
                  >
                    {skill}
                    <X 
                      size={14} 
                      className="cursor-pointer hover:text-shl-yellow" 
                      onClick={() => handleRemoveSkill(skill)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">
              Experience Level
            </label>
            <Select 
              value={experienceLevel} 
              onValueChange={(value) => setExperienceLevel(value as any)}
            >
              <SelectTrigger id="experienceLevel" className="border-shl-blue/20 focus:border-shl-blue-light">
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="executive">Executive Level</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-shl-blue hover:bg-shl-blue-light text-white"
            disabled={isLoading || !jobRole.trim() || skills.length === 0}
          >
            {isLoading ? "Finding Assessments..." : "Get Assessment Recommendations"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RecommendationForm;
