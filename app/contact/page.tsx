"use client";
import { useEffect, useState } from "react";
import { FadeIn } from "../components/animations/PageTransition";
import BackgroundScene from "../components/animations/BackgroundScene";
import { Mail, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const ContactPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFeedback({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setFeedback({
          type: "error",
          message: data.error || "Failed to send message.",
        });
      }
    } catch (err) {
      setFeedback({ type: "error", message: "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackgroundScene />
      <div className="relative overflow-hidden min-h-screen">
        {/* Header With Parallax Effect */}
        <div
          className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, rgba(30, 41, 59, 0) 70%)",
          }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              opacity: Math.max(0, 1 - scrollY / 500),
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-blue-500/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-purple-500/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border border-indigo-500/20"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">Contact</span> Me
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Let's connect! Fill out the form or use the links below to reach
                out.
              </p>
            </FadeIn>
          </div>
        </div>
        {/* Main Content */}
        <div className="container-custom pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeIn direction="up">
                <div className="glass-effect p-8 rounded-2xl mb-12 border border-white/10 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  {feedback && (
                    <div
                      className={`mb-4 px-4 py-3 rounded text-sm font-medium ${
                        feedback.type === "success"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {feedback.message}
                    </div>
                  )}
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 font-semibold"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        autoComplete="name"
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 font-semibold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        autoComplete="email"
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 font-semibold"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={loading}
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-primary text-primary-foreground rounded font-semibold card-hover disabled:opacity-60 cursor-pointer"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn direction="left" delay={0.3}>
                <div className="glass-effect p-6 rounded-2xl mb-8 border border-white/10 shadow-lg sticky top-24">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src="/kevin-wanyonyi-fullstack-software-developer.jpg"
                          alt="Kevin Wanyonyi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-4">Kevin Wanyonyi</h3>
                    <p className="text-gray-300">Senior Software Engineer</p>
                  </div>
                  <div className="flex justify-center gap-4 mb-6">
                    <a
                      href="https://x.com/profnanguti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="https://instagram.com/kevin_nanguti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://github.com/nanguti1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://linkedin.com/in/kevin-w-wanyonyi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <a
                    href="mailto:g.nanguti@gmail.com"
                    className="flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-colors mb-2"
                  >
                    <Mail size={18} />
                    <span>Email Me</span>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
