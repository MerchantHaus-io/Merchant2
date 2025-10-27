import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ShieldCheck, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import vampHeader from "@/assets/vamp_header.webp";
import vampMetrics from "@/assets/vamp_metrics.webp";
import vampSecurity from "@/assets/vamp_security.webp";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  to: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
};

const featuredPost: BlogPost = {
  id: "vamp",
  title: "Visa's VAMP: A New Era for Fraud and Dispute Management",
  excerpt:
    "Discover how Visa's unified monitoring program reshapes risk scoring for acquirers and merchants, and the steps ISOs should take now to stay compliant.",
  to: "/blog/vamp",
  date: "October 24, 2025",
  readTime: "8 min read",
  category: "Risk & Compliance",
  image: vampHeader,
};

const supportingPosts: BlogPost[] = [
  {
    ...featuredPost,
    id: `${featuredPost.id}-metrics`,
    title: "How to Model Your VAMP Ratio Before Visa Does",
    excerpt:
      "Use MerchantHaus' analytics workbook to simulate monthly VAMP ratios, catch double counted fraud and dispute events, and communicate findings to sponsors.",
    image: vampMetrics,
  },
  {
    ...featuredPost,
    id: `${featuredPost.id}-playbook`,
    title: "A Playbook for Enumeration Attacks in 2025",
    excerpt:
      "Enumeration is now a named risk vector inside VAMP. Learn how to harden checkout flows, velocity limits, and 3DS routing before issuers escalate alerts.",
    image: vampSecurity,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-light text-neutral-dark">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-light to-neutral-light">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
            <div className="flex-1 space-y-6">
              <Badge className="bg-crimson text-white/90 uppercase tracking-wide">MerchantHaus Blog</Badge>
              <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                Plug in. Play. Process.
              </h1>
              <p className="max-w-2xl text-lg text-neutral-dark/80">
                Merchant-focused briefings on payments, sponsor bank compliance, and the tooling ISOs need to keep portfolios healthy. Fresh analysis every month from the MerchantHaus team.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="rounded-full bg-crimson hover:bg-crimson/90">
                  <Link to={featuredPost.to}>
                    Read the latest insight
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="flex items-center gap-3 text-sm text-neutral-dark/70">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-cyber-teal" />
                    <span>ISO-first security research</span>
                  </div>
                  <div className="hidden sm:inline-flex h-4 w-px bg-silver-grey/60" aria-hidden="true" />
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-cyber-teal" />
                    <span>Portfolio growth tactics</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden rounded-3xl bg-purple-dark/90 shadow-xl ring-1 ring-purple-light/40">
              <img
                src={featuredPost.image}
                alt="Abstract global payment network"
                className="h-full w-full object-cover mix-blend-screen"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-silver-grey/40 bg-white/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[2fr,1fr] lg:gap-16">
            <article className="space-y-6">
              <Badge className="bg-cyber-teal/10 text-cyber-teal">Featured Insight</Badge>
              <h2 className="text-3xl font-semibold text-neutral-dark sm:text-4xl">{featuredPost.title}</h2>
              <p className="text-lg text-neutral-dark/75">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-silver-grey">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-crimson" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-crimson" />
                  {featuredPost.readTime}
                </span>
                <Badge variant="outline" className="border-crimson/50 text-crimson">
                  {featuredPost.category}
                </Badge>
              </div>
              <Button asChild className="rounded-full bg-neutral-dark text-white hover:bg-neutral-dark/90">
                <Link to={featuredPost.to}>
                  Dive into the article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>

            <aside className="space-y-6">
              <h3 className="text-lg font-semibold text-neutral-dark">Inside this edition</h3>
              <ul className="space-y-4">
                {supportingPosts.map((post) => (
                  <li key={post.id} className="group rounded-2xl border border-silver-grey/40 bg-neutral-light/80 p-4 transition hover:-translate-y-1 hover:border-crimson/60 hover:shadow-lg">
                    <Link to={post.to} className="flex flex-col gap-3">
                      <img
                        src={post.image}
                        alt="VAMP insights"
                        className="h-32 w-full rounded-xl object-cover"
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-crimson uppercase tracking-wide">{post.category}</p>
                        <h4 className="text-lg font-semibold text-neutral-dark group-hover:text-crimson">
                          {post.title}
                        </h4>
                        <p className="text-sm text-neutral-dark/70">{post.excerpt}</p>
                      </div>
                      <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-crimson">
                        Continue reading
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-neutral-light/80">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-neutral-dark">Never miss an update</h2>
              <p className="text-neutral-dark/70">
                Subscribe for monthly deep dives on sponsor bank compliance, dispute reduction playbooks, and go-to-market tactics for ISOs operating at scale.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="you@company.com"
                  className="h-11 flex-1 rounded-full border border-silver-grey/60 bg-white px-5 text-sm outline-none transition focus:border-crimson/70 focus:ring-2 focus:ring-crimson/20"
                />
                <Button type="submit" className="rounded-full bg-crimson hover:bg-crimson/90">
                  Join the list
                </Button>
              </form>
              <p className="text-xs text-neutral-dark/60">
                By subscribing you agree to receive MerchantHaus communications. Unsubscribe at any time.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-silver-grey/50 bg-white/80 p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-crimson">For ISOs</h3>
                <p className="mt-3 text-neutral-dark/80">
                  Monitor portfolio health with actionable dashboards and ready-to-send sponsor narratives.
                </p>
              </div>
              <div className="rounded-3xl border border-silver-grey/50 bg-white/80 p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-crimson">For PayFacs</h3>
                <p className="mt-3 text-neutral-dark/80">
                  Streamline onboarding and reduce risk exposure with MerchantHaus' compliance accelerators.
                </p>
              </div>
              <div className="rounded-3xl border border-silver-grey/50 bg-white/80 p-6 shadow-sm sm:col-span-2">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-crimson">For Sponsors</h3>
                <p className="mt-3 text-neutral-dark/80">
                  Align with modern ISO partners focused on strong controls, positive merchant experiences, and proactive communication.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
