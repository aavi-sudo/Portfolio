import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="p-6 space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.h1 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Hello, I'm a Computer Science & Biotechnology Enthusiast 🚀
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          I'm a CS student deeply involved in biotechnology research and sports analytics. I've worked on AI-driven gene variant classification, employee attrition prediction, and presented at ACM conferences.
        </p>
        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">SHH Gene Variant Classification</h3>
              <p>
                Built an AI model predicting the pathogenicity of SHH gene variants, using tools like decision trees, Random Forest, and PolyPhen/SIFT scores.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Sports Analytics (IPL)</h3>
              <p>
                Analyzed IPL data using SQL and machine learning algorithms to study the effect of player transfers on team performance.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Employee Attrition Prediction</h3>
              <p>
                Designed a model with complete data science workflow in SPSS and Python for a client project on attrition trends.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Achievements & Conferences</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Presented VUS classification research at ACM Mid-Southeast Conference.</li>
          <li>Selected for BioTrain Internship at HudsonAlpha Institute of Biotechnology.</li>
          <li>Sports Analytics Research Assistant at UNA's Center for Sports Analytics.</li>
          <li>Competed in National Collegiate Sports Analytics Championship 2025.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Feel free to reach out through the following platforms:</p>
        <ul className="space-y-1">
          <li>Email: your.email@example.com</li>
          <li>GitHub: github.com/yourusername</li>
          <li>LinkedIn: linkedin.com/in/yourprofile</li>
        </ul>
      </section>
    </main>
  );
}
