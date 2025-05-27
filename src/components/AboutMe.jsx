import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="sobre" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* FOTO SIMPLES CIRCULAR */}
          <div className="flex justify-center">
            <div className="w-60 h-60 md:w-60 md:h-60 overflow-hidden rounded-full border-2 border-transparent hover:border-primary hover:shadow-lg transition-all duration-300">
              <img
                src="/projects/selfie.jpg"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXTO E CTAs */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-left">
              Desenvolvedor Web & Power Platform
            </h3>
            <p className="text-justify">
              Sou um desenvolvedor júnior apaixonado por criar soluções práticas
              em Power Apps, aprendi tudo de forma autodidata e já entreguei
              apps que automatizam processos, gerenciam treinamentos e geram
              relatórios. Tenho noções de React (ainda em evolução), mas já
              construí front-ends funcionais e responsivos. Estou sempre
              aprendendo e pronto para colaborar em projetos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contato" className="cosmic-button">
                Fale comigo
              </a>
              <a
                href="/projects/myCv.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
