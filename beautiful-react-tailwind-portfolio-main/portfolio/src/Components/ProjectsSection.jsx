import { ArrowRight, ExternalLinkIcon, GithubIcon, Instagram } from "lucide-react";

const projects = [
    {
     id: 1,
     title: "Kunyo Gears Web & Social Media",
     description:"Created engaging graphics and videos for social media, designed promotional banners, and managed the website to enhance brand visibility and user experience.",   
     image: "/projects/kunyogears.png",
     tags: ["Graphics Designing", "Social Media", "Website Handling", "Sales Strategy"],
     demoUrl: "https://gears.kunyo.co",
     githubUrl: "https://www.instagram.com/kunyo_gears",
    },
    {
     id: 2,
     title: "4Merical Esports Web & Social Media",
     description:"Designed compelling graphics and managed website content to ensure smooth functionality and engaging user interaction.",   
     image: "/projects/4merical.png",
     tags: ["Graphics Designing", "Social Media", "Website Management", "Esports Growth"],
     demoUrl: "https://4merical.gg",
     githubUrl: "https://www.instagram.com/4merical.esports",
    },
    {
     id: 3,
     title: "Kunyo Is Marketing Website & Social Media",
     description:"Developed multimedia content and assisted in marketing campaigns to strengthen brand outreach.",   
     image: "/projects/kunyois.png",
     tags: ["Promotional Banner", "Marketing Campaign", "Meta Marketing"],
     demoUrl: "https://www.kunyoismarketing.com/?fbclid=PAZXh0bgNhZW0CMTEAAaerra5tABiRqu9CRrn66nPMfyQaJjrlg7jMPKZPd6kUcizkMNwPWjkg9Vpy9Q_aem_NqB4lvT1S3nvhqonDXuprQ",
    githubUrl: "https://www.instagram.com/kunyoismarketing",
    },
    {
     id: 4,
     title: "Kunyo Co Social Media & Website",
     description:"Managed social media and website platforms, including content creation, scheduling, and audience engagement.",   
     image: "/projects/kunyoco.png",
     tags: ["SocialMediaManagement", "AudienceEngagement ", "BrandGrowth "],
     demoUrl: "https://kunyo.co",
     githubUrl: "https://www.instagram.com/kunyo.co",
    },
     {
     id: 5,
     title: "Pinches Artcore Social Media",
     description:"Delivered multimedia design solutions and assisted with digital marketing efforts to elevate brand awareness.",   
     image: "/projects/pinches.png",
     tags: ["ArtDesign ", "CreativeBranding ", "MultimediaDesign ", "VisualStorytelling"],
     demoUrl: "https://www.instagram.com/pinches_artcore",
     githubUrl: "https://www.instagram.com/pinches_artcore",
    },
    {
     id: 6,
     title: "Failure GG website and Social Media",
     description:"Produced dynamic visual content and coordinated for website and social media activities to engage gaming communities.",   
     image: "/projects/failue.png",
     tags: ["EsportsMarketing", "GamingCommunity ", "VisualContent"],
     demoUrl: "https://failure.gg",
     githubUrl: "https://www.instagram.com/failure.gg_",
    },
    
   

]


export const ProjectsSection= () =>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured<span className="text-primary"> Projects </span> </h2>
            <p className="text-center text-mutedforeground mb-12 max-w-2xl mx-auto">
                I’ve worked with brands like Kunyo Gears, Kunyo Co, 4Merical Esports, Autonomous Technology, Yv Gaming Store, Pchub Nepal, 
                Gopali G.G International, Gadget Oasis, KunyoIsMarketing, 4MericalVibes Esports, Pinches Artcore, Kunyo Gamingzone, Failure GG and manymore, handling multimedia design, social media management, sales strategy, and website management to boost brand presence and engagement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-hover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="_blank" 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLinkIcon size={20}/></a>
                                <a href={project.githubUrl} target="_blank" 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Instagram size={20}/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank"
                 href="https://www.behance.net/trishalbashi">Check My Behance<ArrowRight size={16}/></a>
                 <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank"
                 href="https://github.com/Beckhamx23">Check My Github <ArrowRight size={16}/></a>
            </div>
        </div>

    </section>
};