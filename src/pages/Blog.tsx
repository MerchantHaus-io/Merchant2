import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: "vamp",
      title: "Visa's VAMP: A New Era for Fraud and Dispute Management",
      description: "The world of payment processing is always evolving, and staying ahead means understanding Visa's new Visa Acquirer Monitoring Program (VAMP). This global framework redefines how fraud and disputes are tracked and managed across the payment ecosystem.",
      date: "October 24, 2025",
      path: "blogs/vamp.html"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              MerchantHaus <span className="text-rose-500">Blog</span>
            </h1>
            <p className="text-lg text-slate-600">
              Insights, updates, and best practices for payment processing
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">
                    <a 
                      href={post.path} 
                      className="hover:text-rose-500 transition-colors"
                    >
                      {post.title}
                    </a>
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-500">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    {post.description}
                  </p>
                  <a 
                    href={post.path}
                    className="text-rose-500 hover:text-rose-600 font-medium transition-colors"
                  >
                    Read more →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
