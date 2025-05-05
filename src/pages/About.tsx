
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCog, Code2, FileText, GitCompare, Lightbulb, Network } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-shl-blue mb-4">
          About SHL Assessment Spark
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about our recommendation engine and how it helps you find the perfect assessments
        </p>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-shl-blue mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              The SHL Assessment Recommendation Engine aims to transform how organizations select assessment tools for their talent 
              acquisition and development processes. By combining cutting-edge technology with 
              deep expertise in psychometric assessments, we provide personalized recommendations 
              that save time and improve talent decision outcomes.
            </p>
            <p className="text-gray-600">
              Our platform addresses the challenge of selecting the right assessment from 
              SHL's extensive catalog by analyzing your specific requirements and finding 
              the perfect match based on job roles, required skills, and experience levels.
            </p>
          </div>
          <div className="bg-gradient-to-br from-shl-blue-light/10 to-shl-teal/10 p-8 rounded-lg border border-shl-blue/10">
            <h2 className="text-2xl font-bold text-shl-blue mb-6">Technology Stack</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="bg-shl-blue/10 text-shl-blue p-2 rounded-full">
                  <BrainCog size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">AI Recommendation Engine</h3>
                  <p className="text-gray-600">Hybrid approach combining rule-based filtering with semantic similarity</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="bg-shl-blue/10 text-shl-blue p-2 rounded-full">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">React + Node.js</h3>
                  <p className="text-gray-600">Modern full-stack application with a responsive interface</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="bg-shl-blue/10 text-shl-blue p-2 rounded-full">
                  <Network size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">REST API Architecture</h3>
                  <p className="text-gray-600">Clean, well-structured API for assessment recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-shl-blue mb-8 text-center">How Our Recommendation System Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-shl-blue/10 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <FileText size={20} className="text-shl-blue" />
                Rule-Based Filtering
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We first apply rule-based filters to match your job role, experience level, 
                and skills against our assessment catalog to identify potential matches.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-shl-blue/10 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <GitCompare size={20} className="text-shl-blue" />
                Semantic Similarity Scoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We use advanced natural language processing to calculate semantic similarity 
                between your requirements and assessment descriptions and skills.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-shl-blue/10 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Lightbulb size={20} className="text-shl-blue" />
                Explainable Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Each recommendation includes a clear explanation of why it's recommended for 
                your specific context, ensuring transparency in the selection process.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
