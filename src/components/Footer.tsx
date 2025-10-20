import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const paymentServices = [
    { label: "Payment Services Overview", target: "" },
    { label: "Omnichannel Payments", target: "omnichannel" },
    { label: "Mobile Commerce", target: "mobile" },
    { label: "Modern POS", target: "pos" },
    { label: "AI-Powered Fraud Detection", target: "fraud" },
    { label: "Recurring Billing & Subscriptions", target: "recurring" },
    { label: "Payments Analytics", target: "analytics" },
    { label: "Developer Solutions", target: "developer" },
  ];

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        toast({
          title: "Message sent!",
          description: "We'll get back to you shortly.",
        });
        form.reset();
        setIsContactOpen(false);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      });
  };

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        toast({
          title: "Quote request sent!",
          description: "Our team will contact you soon.",
        });
        form.reset();
        setIsQuoteOpen(false);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send request. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h3 className="font-ubuntu font-bold text-foreground mb-4">PAYMENT SERVICES</h3>
            <ul className="space-y-2">
              {paymentServices.map(({ label, target }) => {
                const to = target ? `/services#${target}` : "/services";
                return (
                  <li key={label}>
                    <Link to={to} className="text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div id="contact" className="mt-12 pt-8 border-t border-border space-y-2">
          <div className="text-muted-foreground">
            <span className="text-muted-foreground">Call:</span>{" "}
            <a href="tel:1-505-600-6042" className="text-primary hover:underline">
              1-505-600-6042
            </a>
          </div>
          <div className="text-muted-foreground">
            <span className="text-muted-foreground">Email:</span>{" "}
            <a href="mailto:support@merchanthaus.io" className="text-primary hover:underline">
              support@merchanthaus.io
            </a>
          </div>
          <div className="text-muted-foreground">
            <span className="text-muted-foreground">Address:</span> 1209 Mountain Road Pl NE Ste N, Albuquerque, NM 87110 US
          </div>
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4 w-full sm:w-auto">
                Contact Support
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Support</DialogTitle>
              </DialogHeader>
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleContactSubmit} className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <Input name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <Input name="email" type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Textarea name="message" placeholder="How can we help?" required rows={4} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* CTA Buttons */}
        <div id="quote" className="mt-8 flex flex-col sm:flex-row gap-4">
          <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Get a Quote
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get a Quote</DialogTitle>
              </DialogHeader>
              <form name="quote" method="POST" data-netlify="true" onSubmit={handleQuoteSubmit} className="space-y-4">
                <input type="hidden" name="form-name" value="quote" />
                <div>
                  <Input name="company" placeholder="Company Name" required />
                </div>
                <div>
                  <Input name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <Input name="email" type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Input name="phone" type="tel" placeholder="Phone Number" required />
                </div>
                <div>
                  <Textarea name="details" placeholder="Tell us about your payment processing needs" required rows={4} />
                </div>
                <Button type="submit" className="w-full">Submit Request</Button>
              </form>
            </DialogContent>
          </Dialog>

          <Button size="lg" variant="outline" asChild>
            <a href="#hero">Get Started</a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
