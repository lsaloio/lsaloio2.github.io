export default function About() {
    return (
       <section class="about">
            
            <h1> 
            Hi, I'm Lauren.
                <br className="hidden lg:inline-block"/>
                I am a Technical Writer.
            </h1>
            
            <img className="object-cover object-center rounded"
                alt="hero"
                src="./headshot.JPG"
                 />
           <div class="space">
            <p class="fancy-text"><em>I am currently a senior at the University of Massachusetts Amherst, studying English with a Certificate in Professional Writing and Technical Communication.</em></p>
                <p> As someone that has always been interested in science/technology and reading/writing, I knew technical writing would be the perfect career path for me.
                    This semester, I interned as a Technical Writer for the Center for Data Science at UMass Amherst. Through my internship, I had the opportunity to apply skills in Git, Markdown, VS Code, command lines, and more in order to edit and write technical documentation. I also worked on writing and editing content for the Center's in-progress website. This has been a great opportunity for me to apply what I have learned in the PWTC certificate program, and has solidified my passion for this career path.
                </p>
                <p class="fancy-text"><em>After I graduate in May of 2023, I will be interning at NASA's Goddard Space Flight Center where I will be doing technical writing and documentation for their Spacecraft Telecomm Systems.</em></p>
            </div>
</section>
);
}