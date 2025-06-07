# PRD: Personal Site Content Overhaul

## 1. Introduction/Overview

This document outlines the requirements for a comprehensive content overhaul of a personal marketing website. The subject is a Senior Software Engineer with 5+ years of experience, specializing in efficient, scalable web applications and AI development.

The primary goal is to strategically position the user for high-paying senior engineering roles by showcasing their talent, expertise, and a proven ability to ship end-to-end products. The overhaul will emphasize product ownership, innovation, and autonomous work.

## 2. Goals

- **Primary:** Attract and secure interviews for high-paying senior engineering roles that value product ownership and initiative.
- **Secondary:**
    - Clearly showcase end-to-end product development skills, from backend architecture to front-end UX.
    - Highlight recent, practical experience with AI development and integration.
    - Position the user as a product-minded engineer who can independently build, ship, and iterate on complex projects.
    - Create a compelling narrative that differentiates the user from other candidates.

## 3. User Stories

- **As a Recruiter/Hiring Manager:** I want to quickly see concrete examples of projects the candidate has built and shipped, so I can assess their practical skills and initiative in under 30 seconds.
- **As a Technical Lead/Engineering Manager:** I want to understand the candidate's technical depth and experience with modern technologies (especially AI), so I can determine if they are a strong fit for my team's challenges.
- **As a Potential Colleague:** I want to get a sense of the candidate's engineering philosophy and approach to work, so I can understand if they would be a collaborative and high-impact team member.

## 4. Functional Requirements

### 4.1. Featured Projects Section (Homepage)

-   **FR1:** A "Featured Projects" section must be added to the homepage, placed prominently above the fold or directly below the initial hero introduction.
-   **FR2:** This section must showcase two key projects:
    -   **Hey Brevity:** "An AI-powered writing assistant for personal and professional communication."
    -   **Wrapped:** "A thoughtful relationship app with smart reminders and lightweight recipient profiles."
-   **FR3:** Each project card must include:
    -   The project title and a 1-2 sentence blurb (as above).
    -   1-2 high-quality static screenshots.
    -   A link to a short (30-60 second) Loom-style video walkthrough.
    -   A list of the main technologies used (e.g., Next.js, Vercel, Supabase, OpenAI).
    -   Live URL and GitHub repository links (if public).
-   **FR4:** Impressive technologies (e.g., "OpenAI API", "Serverless") should be visually highlighted with badges, icons, or tooltips.

### 4.2. Full-Stack & AI Work Section (Homepage)

-   **FR5:** A new section titled "Full-Stack & AI Work" will be added to the homepage to provide supporting credibility.
-   **FR6:** The content must frame the user as someone with real-world, self-directed experience building complete applications.
-   **FR7:** The narrative should explicitly state: "I've built everything from backend APIs to front-end interactions to prompt engineering and AI API integrations."

### 4.3. Engineering Philosophy (About Page)

-   **FR8:** A short paragraph titled "My Approach" or "Engineering Philosophy" will be added to the `About` page.
-   **FR9:** The content must convey:
    -   A balance of pragmatism with product-thinking.
    -   Use of AI tools (Cursor, GPT) to accelerate delivery and quality.
    -   A passion for *shipping* products, not just building them.

### 4.4. New Blog Post

-   **FR10:** One new blog post will be authored and published.
-   **FR11:** The title will be: "Lessons from Building Two Full-Stack Side Projects in 6 Months."
-   **FR12:** The post must be created as an `.mdx` file and integrated into the existing blog structure at `/articles`.

### 4.5. Work History Page

-   **FR13:** The existing `/uses` page will be removed.
-   **FR14:** A new `/work-history` page will be created to serve as a lean, narrative-driven resume.
-   **FR15:** The content must focus on impact, not just responsibilities, highlighting:
    -   Team impact during layoffs at SmartRent.
    -   Experience working cross-functionally and shipping under pressure.
    -   Examples of stepping up (ownership of documentation, mentoring, etc.).

## 5. Non-Goals (Out of Scope)

-   A complete visual redesign of the website. All changes will adhere to the existing design system.
-   Building complex, interactive demos for the featured projects. Static assets (images, videos) are sufficient.
-   Building a new blogging platform. The existing infrastructure will be used.
-   Authoring more than one new blog post in this iteration.

## 6. Design & Technical Considerations

-   **Design:** All new components and sections must match the existing website's aesthetic (typography, color palette, spacing).
-   **Tech Stack Display:** Use badges or tooltips to make specific technologies in the "Featured Projects" section stand out. Mention `Cursor` and `OpenAI API` (e.g., for summarization, rewrite tools) as part of the narrative.
-   **Assets:** User will provide static screenshots and links to video walkthroughs for "Hey Brevity" and "Wrapped."
-   **File Structure:**
    -   New sections will be added to `src/pages/index.jsx`.
    -   Philosophy will be added to `src/pages/about.jsx`.
    -   New blog post will be at `src/pages/articles/lessons-from-side-projects.mdx`.
    -   The `/uses` page/component will be removed and a `/work-history` page/component will be created.

## 7. Success Metrics

-   Increase in the quantity and quality of inbound inquiries from recruiters for senior-level roles.
-   Positive feedback on the portfolio and project narratives during interviews.
-   The user feels the website is a significantly more accurate and powerful representation of their skills and career ambitions.

## 8. Open Questions

-   What is the specific content for the new "Work History" page?
-   Where can the screenshots and video links for the projects be accessed? 