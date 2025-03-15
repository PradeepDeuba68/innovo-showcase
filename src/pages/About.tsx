
import { motion } from "framer-motion";
import { Award, Clock, HeartHandshake, LineChart, Shield, Users } from "lucide-react";
import PageTransition from "../components/PageTransition";

const values = [
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Client Partnership",
    description: "We believe in building long-term relationships with our clients, working as partners rather than just service providers."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Quality Assurance",
    description: "We maintain rigorous quality standards across all projects, ensuring reliable, secure, and maintainable solutions."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Continuous Improvement",
    description: "We constantly evolve our skills, methodologies, and technologies to deliver the best possible outcomes."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaborative Innovation",
    description: "We foster a collaborative environment where diverse perspectives lead to innovative solutions."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Timely Delivery",
    description: "We respect deadlines and deliver high-quality work within agreed-upon timeframes."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Technical Excellence",
    description: "We strive for excellence in all technical aspects, from architecture to implementation to optimization."
  }
];

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    bio: "Alex founded Innovo with a vision to create software that combines technical excellence with intuitive design."
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    bio: "Sarah oversees our technical strategy and ensures we stay at the forefront of emerging technologies."
  },
  {
    name: "Miguel Rodriguez",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    bio: "Miguel brings products to life through thoughtful, user-centered design that enhances functionality."
  },
  {
    name: "Priya Patel",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    bio: "Priya leads our engineering team, implementing best practices and scalable architectures."
  }
];

const About = () => {
  return (
    <PageTransition>
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative mb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                  Crafting Digital Excellence Since 2015
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Innovo is a team of passionate engineers, designers, and problem solvers dedicated to creating impactful digital solutions. We combine technical expertise with creative thinking to build software that makes a difference.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  <div>
                    <p className="text-4xl font-display font-bold text-primary">200+</p>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold text-primary">50+</p>
                    <p className="text-muted-foreground">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold text-primary">15+</p>
                    <p className="text-muted-foreground">Team Members</p>
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold text-primary">8+</p>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent transform rotate-6 rounded-3xl scale-105"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-border">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                      alt="Our team collaborating"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Principles That Guide Our Work
              </h2>
              <p className="text-muted-foreground text-lg">
                These core values shape our approach to projects, client relationships, and our own internal culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Meet the Innovators
              </h2>
              <p className="text-muted-foreground text-lg">
                Our diverse team brings together expertise across technology, design, and strategy to create exceptional digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl mb-5 bg-secondary aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
