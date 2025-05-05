
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import RecommendationForm from '@/components/RecommendationForm';
import RecommendationResults from '@/components/RecommendationResults';
import { Assessment, AssessmentInput, getMockRecommendations } from '@/services/api';
import { BrainCog, Lightbulb, ListChecks, Target } from 'lucide-react';

const Index = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = async (data: AssessmentInput) => {
    setIsLoading(true);
    try {
      // In a production environment, we'd use the real API call:
      // const results = await getRecommendations(data);
      
      // For now, use the mock function
      const results = await getMockRecommendations(data);
      setAssessments(results);
      setHasSearched(true);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-shl-blue mb-4">
          SHL Assessment Recommendation Engine
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find the perfect assessment for your needs based on job role, skills, and experience level
        </p>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-shl-blue mb-6">
              Get Personalized Assessment Recommendations
            </h2>
            <RecommendationForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
          <div className="bg-gradient-to-br from-shl-blue to-shl-blue-light p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-white text-shl-blue p-2 rounded-full">
                  <ListChecks size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Tell Us About Your Needs</h3>
                  <p className="opacity-90">Enter your job role, required skills, and experience level</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-white text-shl-blue p-2 rounded-full">
                  <BrainCog size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Our AI Works Its Magic</h3>
                  <p className="opacity-90">Our recommendation engine analyzes the perfect assessments for your context</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-white text-shl-blue p-2 rounded-full">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Get Tailored Results</h3>
                  <p className="opacity-90">Review your top assessment matches with detailed explanations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {hasSearched && (
        <section className="mb-12">
          <RecommendationResults assessments={assessments} />
        </section>
      )}

      {!hasSearched && (
        <section className="mb-12 py-12 bg-gray-50 rounded-lg">
          <div className="text-center max-w-3xl mx-auto px-4">
            <Lightbulb size={48} className="text-shl-yellow mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-shl-blue mb-4">
              Why Use Assessment Recommendations?
            </h2>
            <p className="text-gray-600 mb-8">
              Finding the right assessment tools can be challenging. Our recommendation engine
              uses advanced algorithms to match the perfect SHL assessments to your specific needs,
              saving you time and improving the quality of your talent decisions.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-bold text-shl-blue mb-2">Precision Matching</h3>
                <p className="text-sm text-gray-600">Get assessments perfectly tailored to your specific job roles and required skills</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-bold text-shl-blue mb-2">Time Savings</h3>
                <p className="text-sm text-gray-600">Quickly identify the most relevant assessments instead of searching through catalogs</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-bold text-shl-blue mb-2">Better Insights</h3>
                <p className="text-sm text-gray-600">Understand why each assessment is recommended for your specific context</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Index;
