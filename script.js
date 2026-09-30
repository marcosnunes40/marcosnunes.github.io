const T = {
  pt: {
    nav_about:"sobre", nav_skills:"habilidades", nav_edu:"formação", nav_proj:"projetos", nav_contact:"contato",
    role:"Estudante de ADS · Front-End · Cibersegurança",
    lead:"Construindo minha base em tecnologia, um comando de cada vez.",
    cta1:"./conheca-meu-perfil", cta2:"./contato",
    h_about:"cat sobre.md",
    about1:"Sou Marcos Eliabe, apaixonado por tecnologia. Curso Análise e Desenvolvimento de Sistemas (ADS) no Senac.",
    about2:"Demorei a ter a oportunidade de estudar formalmente e agora estou construindo uma base sólida, aprendendo todos os dias.",
    about3:"Tenho interesse em Front-End, redes e cibersegurança. Busco minha primeira oportunidade na área.",
    h_skills:"ls habilidades/", skills_intro:"Tecnologias e conceitos que estou estudando.",
    s_html:"Estrutura de páginas e semântica.", s_css:"Estilização, layouts e responsividade.",
    s_py:"Lógica e fundamentos de programação.", s_java:"Primeiros passos em programação orientada a objetos.",
    s_net:"Conceitos básicos de redes com Cisco Packet Tracer.", s_sec:"Fundamentos de cibersegurança.",
    h_edu:"history | grep formação", t_now:"EM ANDAMENTO", t_cert:"CERTIFICAÇÃO", t_done:"CONCLUÍDO",
    e1:"Análise e Desenvolvimento de Sistemas", e2:"Conceitos básicos de redes, com Cisco Packet Tracer.",
    e3:"Programador Back-End", e3d:"Formação introdutória em desenvolvimento back-end.", e4:"Ensino Médio",
    h_proj:"ls projetos/", proj1:"Nenhum projeto publicado ainda. Em breve!",
    h_contact:"echo contato", contact_txt:"Aberto a oportunidades para aprender e entrar no mercado de tecnologia.",
    foot:"Feito com HTML, CSS e JavaScript."
  },
  en: {
    nav_about:"about", nav_skills:"skills", nav_edu:"education", nav_proj:"projects", nav_contact:"contact",
    role:"Systems Analysis student · Front-End · Cyber Security",
    lead:"Building my foundation in tech, one command at a time.",
    cta1:"./see-my-profile", cta2:"./contact",
    h_about:"cat about.md",
    about1:"I'm Marcos Eliabe, passionate about technology. I'm studying Systems Analysis and Development (ADS) at Senac.",
    about2:"It took me a while to get the chance to study formally, and now I'm building a solid base and learning every day.",
    about3:"I'm interested in Front-End, networking and cyber security. I'm looking for my first opportunity in the field.",
    h_skills:"ls skills/", skills_intro:"Technologies and concepts I'm currently studying.",
    s_html:"Page structure and semantics.", s_css:"Styling, layouts and responsiveness.",
    s_py:"Programming logic and fundamentals.", s_java:"First steps in object-oriented programming.",
    s_net:"Networking basics with Cisco Packet Tracer.", s_sec:"Cyber security fundamentals.",
    h_edu:"history | grep education", t_now:"IN PROGRESS", t_cert:"CERTIFICATION", t_done:"COMPLETED",
    e1:"Systems Analysis and Development", e2:"Networking basics, with Cisco Packet Tracer.",
    e3:"Back-End Programmer", e3d:"Introductory training in back-end development.", e4:"High School",
    h_proj:"ls projects/", proj1:"No published projects yet. Coming soon!",
    h_contact:"echo contact", contact_txt:"Open to opportunities to learn and enter the tech market.",
    foot:"Built with HTML, CSS and JavaScript."
  },
  es: {
    nav_about:"sobre mí", nav_skills:"habilidades", nav_edu:"formación", nav_proj:"proyectos", nav_contact:"contacto",
    role:"Estudiante de ADS · Front-End · Ciberseguridad",
    lead:"Construyendo mi base en tecnología, un comando a la vez.",
    cta1:"./ver-mi-perfil", cta2:"./contacto",
    h_about:"cat sobre-mi.md",
    about1:"Soy Marcos Eliabe, apasionado por la tecnología. Estudio Análisis y Desarrollo de Sistemas (ADS) en Senac.",
    about2:"Tardé en tener la oportunidad de estudiar formalmente y ahora estoy construyendo una base sólida, aprendiendo cada día.",
    about3:"Me interesan el Front-End, las redes y la ciberseguridad. Busco mi primera oportunidad en el área.",
    h_skills:"ls habilidades/", skills_intro:"Tecnologías y conceptos que estoy estudiando.",
    s_html:"Estructura de páginas y semántica.", s_css:"Estilos, diseños y responsividad.",
    s_py:"Lógica y fundamentos de programación.", s_java:"Primeros pasos en programación orientada a objetos.",
    s_net:"Conceptos básicos de redes con Cisco Packet Tracer.", s_sec:"Fundamentos de ciberseguridad.",
    h_edu:"history | grep formación", t_now:"EN CURSO", t_cert:"CERTIFICACIÓN", t_done:"COMPLETADO",
    e1:"Análisis y Desarrollo de Sistemas", e2:"Conceptos básicos de redes, con Cisco Packet Tracer.",
    e3:"Programador Back-End", e3d:"Formación introductoria en desarrollo back-end.", e4:"Educación Secundaria",
    h_proj:"ls proyectos/", proj1:"Aún no hay proyectos publicados. ¡Pronto!",
    h_contact:"echo contacto", contact_txt:"Abierto a oportunidades para aprender e ingresar al mercado tecnológico.",
    foot:"Hecho con HTML, CSS y JavaScript."
  }
};

function setLang(l) {
  document.documentElement.lang = l === "pt" ? "pt-BR" : l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = T[l][el.dataset.i18n];
    if (v) el.textContent = v;
  });
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
  try { localStorage.setItem("lang", l); } catch (e) {}
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
const links = document.getElementById("links");
document.getElementById("menu").addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

let saved = "pt";
try { saved = localStorage.getItem("lang") || (navigator.language || "pt").slice(0, 2); } catch (e) {}
setLang(T[saved] ? saved : "pt");
