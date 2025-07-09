
import { Briefcase, Code, DollarSign, User } from "lucide-react";

export const AboutSection = () => {
    return ( <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-2-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Creative Designer | Social Media & Sales Specialist</h3>
                    <p className="text-muted-foreground">I’m a creative multimedia designer with proven experience in social media management, sales strategy, 
                        and website administration. With over three years of hands-on expertise in graphic design, video editing, and digital marketing, I bring a 
                        multidisciplinary approach that blends creativity with business insight.. </p>
                    <p className="text-muted-foreground">My career started in design but has since expanded into areas such as creative direction, sales management, 
                        and backend operations, giving me a well-rounded perspective on how design drives overall business success. I’ve collaborated with diverse 
                        teams and projects, crafting compelling visual content and effective campaign strategies that deliver measurable results.
                    </p>
                    <p className="text-muted-foreground">Whether I’m designing a brand identity, producing engaging video content, managing social media platforms,
                         or optimizing website performance, I prioritize clarity, consistency, and impact. I’m passionate about continuous growth and welcome new
                          challenges. Currently, I’m available for freelance projects, helping businesses transform ideas into powerful, strategic creative solutions..</p>
                    
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                        Get in Touch
                        </a>   
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                        </a>  
                        
                    </div>    
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-card gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Multimedia Design</h4>
                                <p className="text-muted-foreground">Creating engaging visuals and videos that tell compelling stories.</p>
                            </div>

                        </div>
                    </div>

                    <div className="bg-card gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Social Media Handle</h4>
                                <p className="text-muted-foreground">Managing social platforms to grow audience engagement and brand presence.</p>
                            </div>

                        </div>
                    </div>
                    
                    <div className="bg-card gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <DollarSign className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Sales Manager</h4>
                                <p className="text-muted-foreground">Building strong client relationships and driving revenue through effective communication and strategy.</p>
                            </div>

                        </div>
                    </div>

                    <div className="bg-card gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Website Management</h4>
                                <p className="text-muted-foreground">Ensuring websites run smoothly with regular updates and optimization.</p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section> 
);
};