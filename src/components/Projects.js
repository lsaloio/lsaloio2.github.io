import React from "react";
import PDFPreview from "./PDFPreview";

export default function Projects() {
  return (
    <section id="projects">
      <div class="parallax"></div>
      
      <h2 class="projects">My Work</h2>
      

       <div class="resume">  
      <h2 class="resume-header">Resume</h2>
      <div class="preview">
      <PDFPreview pdfUrl="resumeweb.pdf"/>
      </div>
        <p class="portfolio-paragraph">
        My resume contains information about my education, courses, skills, and relevant experience.
        </p>
        <p class="portfolio-paragraph">If you have any further questions or inquiries, please feel free to <a href="#contact">contact me</a> below!</p>
        </div>
        
        <h2 class="sample-head">
                <a href="exercises/pdf/word-manual-381.pdf"> Using Microsoft Word for Engineers: Formatting a Test Report (PDF)</a>
            </h2>
            <div class="preview">
            <PDFPreview pdfUrl="resumeweb.pdf"/>
            </div>
                <p class="portfolio-paragraph">
                The following writing sample is a 25-page manual I wrote that documents Microsoft Word, specifically for novice engineers (or those who need a refresher) looking to format a test report. I produced this sample in my Professional Writing and Technical Communication 1 course during Fall of 2022.
                </p>
            
            
            <h2 class="portfolio-head">
                <a href="exercises/pdf/grant-proposal.pdf">Grant proposal for Ludlow Market Day (PDF)</a>
            </h2>
            <div class="preview">
            <PDFPreview pdfUrl="resumeweb.pdf"/>
            </div>
                <p class="portfolio-paragraph">
                    The following writing sample is a 20-page grant proposal I wrote for putting together a "Ludlow Market Day" in my hometown (Ludlow, Massachusetts), and was produced in my Introduction to Professional Writing course during Fall of 2022.
                </p>

            
            <h2 class="portfolio-head">
                <a href="exercises/pdf/internship-sample.pdf">Documentation for the UMass Center for Data Science and Red Cross project (PDF)</a>
            </h2>
            <div class="preview">
            <PDFPreview pdfUrl="resumeweb.pdf"/>
            </div>
                <p class="last-portfolio-paragraph">
                    The following writing sample consists of about 4 pages of work that I worked on for my internship with <a href="https://ds.cs.umass.edu/sites/default/files/redcross.pdf">The Center for Data Science and Red Cross project</a>. I updated, edited, and added to this documentation, which explains how to use one component (called the "Project Builder") of the satellite imagery labeling tool's user interface, specifically for a Red Cross use case (for building a project to label map imagery for building segmentation and damage assessment for timely and reliable disaster relief efforts).
                </p> 
        
        <div class="parallax"></div>

      </section>
  );
}

