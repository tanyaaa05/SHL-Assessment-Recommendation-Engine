
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, FileText } from 'lucide-react';
import { Assessment } from '@/services/api';

interface RecommendationResultsProps {
  assessments: Assessment[];
}

const RecommendationResults: React.FC<RecommendationResultsProps> = ({ assessments }) => {
  if (!assessments.length) {
    return null;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-shl-blue">
        Your Recommended Assessments
      </h2>
      
      <div className="space-y-6">
        {assessments.map((assessment) => (
          <Card 
            key={assessment.id} 
            className="overflow-hidden border-shl-blue/10 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="bg-gradient-to-r from-shl-blue to-shl-blue-light h-2" />
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-shl-blue flex items-center gap-2">
                    {assessment.name}
                    {assessment.score > 0.9 && (
                      <CheckCircle size={18} className="text-shl-teal" />
                    )}
                  </CardTitle>
                  <CardDescription className="mt-1">{assessment.description}</CardDescription>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">Match Score</span>
                  <div className="flex items-center gap-2">
                    <Progress value={assessment.score * 100} className="w-24 h-2" />
                    <span className="font-semibold">{Math.round(assessment.score * 100)}%</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Assessment Details</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <FileText size={16} className="text-shl-blue" />
                      <span><strong>Format:</strong> {assessment.testFormat}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} className="text-shl-blue" />
                      <span><strong>Level:</strong> {assessment.level.charAt(0).toUpperCase() + assessment.level.slice(1)}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Why It's Recommended</h4>
                  <p className="text-sm">{assessment.reason}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Target Job Roles</h4>
                <div className="flex flex-wrap gap-2">
                  {assessment.targetJobRoles.map((role) => (
                    <Badge key={role} variant="outline" className="bg-shl-blue/5">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {assessment.requiredSkills.map((skill) => (
                    <Badge key={skill} className="bg-shl-teal/10 text-shl-teal border-shl-teal/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendationResults;
