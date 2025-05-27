import {
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className=" py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary ">contato</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Para conversarmos sobre serviços, entre em
          contato comigo através das opções abaixo
        </p>
        <div className=" flex justify-center gap-12">
          <div className="space-y-8">
            <h3 className=" text-2xl font-semibold mb-6"></h3>
            <div className="flex justify-center gap-5">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <a
                    href="mailto:alaindersonsouza@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-6 w-6 text-primary hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <a
                    href="https://wa.me/5561992720914"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-6 w-6 text-primary hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <a
                    href="https://www.linkedin.com/in/alainderson-de-souza-813997180/"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-primary hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
