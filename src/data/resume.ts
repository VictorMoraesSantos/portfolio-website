export const resumeData = {
    personalInfo: {
        name: "Victor Moraes dos Santos",
        role: "Desenvolvedor Full-Stack",
        location: "São Vicente, SP",
        phone: "(13) 98107-1403",
        email: "victormoraes2704@gmail.com",
        linkedin: "https://linkedin.com/in/victormoraesdossantos",
        github: "https://github.com/victormoraessantos",
    },
    summary: "Desenvolvedor Fullstack com experiência sólida em Frontend e Backend, especializado em .NET, Blazor, React, C# e JavaScript. Atuação em APIs RESTful, interfaces responsivas, testes unitários e automatizados (BDD/TDD, Selenium, xUnit), metodologias ágeis e bancos de dados SQL e NoSQL. Forte capacidade de entregar soluções escaláveis, robustas e de alta qualidade, alinhadas às melhores práticas de DevOps, CI/CD e Docker.",
    experience: [
        {
            company: "NIU TECH",
            role: "Desenvolvedor Full-Stack .NET / Blazor",
            period: "Jan/2024 – Fev/2025",
            description: [
                "Desenvolvi um aplicativo customizado para nutricionista, permitindo o gerenciamento de clientes e métricas de saúde em tempo real, utilizando ASP.NET, MAUI (WebView) e arquitetura de microsserviços.",
                "Estruturei APIS RESTful e integrações backend escaláveis, aumentando a confiabilidade de processos e a eficiência operacional da plataforma.",
                "Colaborei na criação de uma plataforma de avaliações de empresas e serviços, ampliando a experiência dos usuários e gerando insights de engajamento.",
                "Reduzi em 20% bugs em produção com testes unitários (BDD, TDD, xUnit), garantindo maior estabilidade e qualidade."
            ]
        },
        {
            company: "SIMIOS GROUP",
            role: "Desenvolvedor Frontend",
            period: "Jan/2024 – Jul/2024",
            description: [
                "Aumentei o engajamento de usuários em 15% ao criar interfaces web responsivas com React, HTML, CSS e JavaScript.",
                "Melhorei em 10% a arrecadação de doações ao integrar sistemas de pagamento Mercado Pago.",
                "Executei testes manuais e automatizados, aplicando QA ágil e assegurando melhoria contínua do produto."
            ]
        }
    ],
    education: [
        {
            institution: "UNIVESP",
            degree: "Tecnologia da Informação",
            period: "Jul/2025 – Jul/2028"
        }
    ],
    languages: [
        { language: "Inglês", level: "Intermediário" },
        { language: "Espanhol", level: "Básico" }
    ],
    skills: {
        languages: ["C#", "JavaScript", "Python", "Java"],
        frameworks: ["React", "Tailwind CSS", "ASP.NET", "Blazor"],
        databases: ["PostgreSQL", "Redis", "MongoDB", "SQL Server", "MySQL"],
        testing: ["Selenium", "Robot Framework", "xUnit", "BDD", "TDD"],
        cloud: ["Azure DevOps", "AWS Lambda"]
    },
    projects: [
        {
            title: "LifeSync",
            description: "Sistema de gerenciamento pessoal focado em produtividade e organização.",
            tech: [".NET", "Blazor"],
            github: "https://github.com/VictorMoraesSantos/LifeSync",
            link: "https://github.com/VictorMoraesSantos/LifeSync"
        },
        {
            title: "NutriVeda",
            description: "Aplicativo customizado para nutricionistas, permitindo gerenciamento de clientes e métricas de saúde em tempo real.",
            tech: [".NET MAUI", "ASP.NET", "C#"],
            github: "",
            link: "https://play.google.com/store/apps/details?id=com.niutech.nutriveda&hl=pt_BR"
        },
        {
            title: "InfoMarcas",
            description: "Plataforma de avaliações de empresas e serviços, gerando insights de engajamento e experiência do usuário.",
            tech: ["Blazor", ".NET", "SQL Server"],
            github: "",
            link: "https://infomarcas.com/"
        }
    ]
};
