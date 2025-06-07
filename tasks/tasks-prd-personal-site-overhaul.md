## Relevant Files

- `src/pages/index.jsx` - The homepage, where the "Featured Projects" and "Full-Stack & AI Work" sections will be added.
- `src/pages/about.jsx` - The about page, where the "Engineering Philosophy" section will be added.
- `src/pages/uses.jsx` - The page to be deleted and replaced by the Work History page.
- `src/pages/work-history.jsx` - The new page that will serve as a narrative-driven resume.
- `src/components/Header.jsx` - The site header, which will need navigation links updated (removing "Uses", adding "Work History").
- `src/pages/articles/lessons-from-building-two-full-stack-side-projects-in-6-months.mdx` - The new blog post to be created.
- `src/components/AiWork.jsx` - The new component for the "Full-Stack & AI Work" section on the homepage.
- `public/images/projects/` - A directory to store new visual assets like screenshots for projects.

### Notes

- This task list assumes that the text content and visual assets (screenshots, video links) for projects will be provided when needed.

## Tasks

- [x] 1.0 Foundational Changes: Update Site Structure
  - [x] 1.1 Delete the `src/pages/uses.jsx` file.
  - [x] 1.2 Create a new file `src/pages/work-history.jsx` with basic placeholder content.
  - [x] 1.3 Update the navigation in `src/components/Header.jsx` to remove the "Uses" link and add a new "Work History" link pointing to `/work-history`.

- [x] 2.0 Homepage Overhaul: Implement "Featured Projects" Section
  - [x] 2.1 Create a new component `src/components/FeaturedProjects.jsx`.
  - [x] 2.2 Define the data structure for the projects (Hey Brevity, Wrapped) including title, description, screenshots, video link, stack, live URL, and GitHub link.
  - [x] 2.3 Build the UI for a single project card within the `FeaturedProjects` component, ensuring it aligns with the existing site design.
  - [x] 2.4 Add visual elements like badges or tooltips to highlight key technologies (e.g., OpenAI, Serverless).
  - [x] 2.5 Integrate the `FeaturedProjects` component into `src/pages/index.jsx`, placing it prominently near the top.

- [x] 3.0 Homepage Overhaul: Add "Full-Stack & AI Work" Section
  - [x] 3.1 Create a new component, e.g., `src/components/AiWork.jsx`.
  - [x] 3.2 Add a section title (e.g., "Full-Stack & AI Work") and the narrative content as specified in the PRD.
  - [x] 3.3 Style the section to be consistent with the homepage's design.
  - [x] 3.4 Integrate the new component into `src/pages/index.jsx`, likely below the "Featured Projects" section.

- [ ] 4.0 Content Enhancement: Update About Page and Create Work History Page
  - [ ] 4.1 Add the "Engineering Philosophy" paragraph to `src/pages/about.jsx`.
  - [ ] 4.2 Populate the `src/pages/work-history.jsx` page with the narrative-driven content about work experience, focusing on impact.

- [ ] 5.0 Content Creation: Write and Publish New Blog Post
  - [ ] 5.1 Create a new file: `src/pages/articles/lessons-from-building-two-full-stack-side-projects-in-6-months.mdx`.
  - [ ] 5.2 Add the title and body content for the blog post to the new `.mdx` file.
  - [ ] 5.3 Verify that the new post renders correctly on the main articles page and is included in the homepage list of recent articles. 