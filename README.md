# Professional Portfolio Website

A modern, minimalist dark-mode portfolio website built with vanilla HTML, CSS, and JavaScript. Showcase your professional work, projects, lab challenges, and resume to potential employers, collaborators, and peers.

## Features

✨ **Modern Design**
- Dark mode theme with cyan and pink accents
- Minimalist, professional aesthetic
- Smooth animations and transitions
- Beautiful gradients and visual hierarchy

📱 **Fully Responsive**
- Mobile-first design
- Works perfectly on all devices (mobile, tablet, desktop)
- Responsive navigation with hamburger menu
- Optimized images and performance

🎯 **Core Sections**
1. **Home** - Hero section with profile info, tagline, and quick links
2. **Resume** - Education, work experience, certifications, and skills
3. **Projects** - Showcase 3+ projects with descriptions and technologies
4. **Challenges** - Lab challenges and CTF writeups with detailed information
5. **Contact** - Contact information and inquiry form

⚡ **Performance**
- No external dependencies (vanilla HTML/CSS/JS)
- Fast loading times
- Optimized for web performance
- SEO-friendly semantic HTML

🔧 **Easy Customization**
- All content uses clear placeholder tags like `[YOUR_NAME]`
- Single color scheme in CSS variables
- Simple file structure
- Well-commented code

## Project Structure

```
portfolio_data_science/
├── index.html                 # Home page
├── resume.html                # Resume/CV section
├── projects.html              # Projects showcase
├── challenges.html            # Lab challenges writeups
├── contact.html               # Contact information
├── css/
│   └── style.css              # Main stylesheet (dark mode theme)
├── js/
│   └── script.js              # Navigation and interactivity
├── assets/
│   ├── images/                # Store profile.jpg, project*.jpg, etc.
│   └── icons/                 # Optional social media icons
└── README.md                  # This file
```

## Getting Started

### Quick Start
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Follow the customization steps below to add your content

### Customization Guide

#### Step 1: Basic Information
Replace all `[PLACEHOLDER]` tags with your actual information. Key placeholders:

**Global Information** (appear on all pages):
- `[YOUR_NAME]` - Your full name
- `[YOUR_EMAIL]` - Your email address
- `[YOUR_PHONE]` - Your phone number
- `[YOUR_USERNAME]` - GitHub/LinkedIn username

**Home Page** (`index.html`):
- `[YOUR_PROFESSIONAL_TAGLINE]` - Your professional tagline (e.g., "Data Scientist | AI Enthusiast")
- `[YOUR_FIELD]` - Your field of expertise
- `[YOUR_EXPERTISE]` - What you're experienced in

#### Step 2: Add Your Profile Photo
1. Add your profile image to `assets/images/` folder
2. Name it `profile.jpg` (or update the filename in `index.html`)
3. The image should be square (e.g., 500x500px) for best results
4. Update the `src` attribute in `index.html` line with your image path

#### Step 3: Customize Resume (`resume.html`)
Fill in the following sections:

**Education:**
- `[DEGREE_NAME]` - Your degree (e.g., B.S. Computer Science)
- `[UNIVERSITY_NAME]` - University/College name
- `[GRADUATION_YEAR]` - Graduation year
- `[YOUR_GPA]` - GPA (if applicable)
- `[COURSE_1]`, `[COURSE_2]`, etc. - Relevant courses

**Work Experience:**
- `[JOB_TITLE_1]`, `[JOB_TITLE_2]`, etc. - Your job titles
- `[COMPANY_NAME_1]`, `[COMPANY_NAME_2]`, etc. - Company names
- `[START_DATE]`, `[END_DATE]` - Employment dates
- `[ACHIEVEMENT_1]`, `[ACHIEVEMENT_2]`, etc. - Your achievements

**Certifications:**
- `[CERTIFICATION_NAME]` - Certification name
- `[ISSUING_BODY]` - Who issued it
- `[CREDENTIAL_ID]` - Credential ID (if available)

**Skills:**
- Update the skill badges in both "Programming Languages", "Tools & Platforms", and other categories
- Modify categories to match your expertise

#### Step 4: Add Your Projects (`projects.html`)
For each of your 3+ projects, fill in:

**Featured Projects (Cards):**
- `[PROJECT_1_TITLE]` - Project title
- `[PROJECT_1_DESCRIPTION]` - Brief description
- `[PROJECT_1_DETAILED_DESCRIPTION]` - Longer description
- `[ACHIEVEMENT_1]`, etc. - Key achievements
- `[TECH_1]`, `[TECH_2]`, etc. - Technologies used
- Links to GitHub, live demos, or detailed writeups

**Other Projects (List):**
- Replace placeholder information with your actual projects

**Add Project Screenshots:**
1. Add images to `assets/images/` (e.g., `project1.jpg`, `project2.jpg`)
2. Update the `src` paths in the `<img>` tags

#### Step 5: Add Lab Challenges (`challenges.html`)
For each challenge, document:

**Challenge Details:**
- `[CHALLENGE_1_TITLE]` - Challenge title
- `[PLATFORM_1]` - Where it's from (HackTheBox, TryHackMe, CTFTime, etc.)
- `[DATE_1]` - When you completed it
- `[DIFFICULTY]` - Easy, Medium, or Hard
- `[CATEGORY]` - Web Security, Cryptography, Forensics, etc.

**Writeup Content:**
- `[CHALLENGE_1_PROBLEM_STATEMENT]` - What the challenge asks
- `[CHALLENGE_1_APPROACH]` - Your methodology
- `[TOOL_LIST]` - Tools you used (Burp Suite, Wireshark, Python, etc.)
- `[KEY_LESSON_1]`, `[KEY_LESSON_2]` - What you learned

**Optional: Add Screenshots**
1. Add challenge screenshots to `assets/images/`
2. Uncomment the challenge-gallery section (if present)
3. Add `<img>` tags for your screenshots

#### Step 6: Update Contact Info (`contact.html`)
- `[YOUR_EMAIL]` - Email address
- `[YOUR_PHONE]` - Phone number
- `[YOUR_CITY]`, `[YOUR_COUNTRY]` - Location
- `[TIMEZONE]` - Your timezone
- LinkedIn and GitHub URLs with your usernames

#### Step 7: Customize Colors (Optional)
Edit `css/style.css` to change the color scheme:

```css
:root {
  --bg-primary: #0f1419;          /* Dark navy background */
  --bg-secondary: #1a1f2e;        /* Slightly lighter */
  --text-primary: #e0e0e0;        /* Light text */
  --accent-primary: #00d4ff;      /* Cyan blue */
  --accent-secondary: #ff006e;    /* Pink/magenta */
  --accent-tertiary: #00e5a0;     /* Green */
}
```

## Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://username.github.io/portfolio_data_science`

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Deploy automatically
4. Custom domain options available

### Traditional Web Hosting
1. Upload all files to your hosting provider via FTP
2. Ensure all files maintain the same folder structure
3. Your site will be live at your domain

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips
- Keep images under 500KB each
- Use JPG for photos, PNG for graphics
- Test on mobile devices before publishing
- Use browser DevTools to check performance

## Features Explained

### Navigation
- Sticky header that stays at top while scrolling
- Smooth scroll to sections
- Mobile hamburger menu that collapses on small screens
- Active page indication

### Animations
- Fade-in animations on scroll
- Hover effects on buttons and cards
- Smooth transitions throughout
- Floating profile image animation

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px (tablet) and 480px (mobile)
- Hamburger menu on mobile devices
- Full-width sections on small screens
- Single-column layout on mobile

### Contact Form
- Client-side validation
- Success message on submission
- Ready for backend integration (PHP, Node.js, etc.)

## Customization Examples

### Adding a New Project
In `projects.html`, duplicate a project card and fill in:
```html
<div class="card project-card">
  <img src="assets/images/project-name.jpg" alt="Project Name" class="card-image">
  <h3>Project Title</h3>
  <!-- ... more content ... -->
</div>
```

### Changing the Color Scheme
In `css/style.css`, modify the CSS variables at the top:
```css
:root {
  --accent-primary: #your-color;
  --accent-secondary: #your-color;
  /* ... etc ... */
}
```

### Adding Social Media Links
Update the social links in the footer and contact page:
```html
<a href="https://twitter.com/your-handle" class="social-link">tw</a>
```

## Tips for Success

✅ **Do's**
- Keep descriptions concise but informative
- Use consistent formatting throughout
- Add actual achievements and metrics
- Update regularly with new projects/challenges
- Test on mobile devices
- Include links to GitHub and live demos
- Be specific about technologies and tools used

❌ **Don'ts**
- Don't leave placeholder text
- Don't add too many projects (3-5 is ideal for featured)
- Don't use low-quality images
- Don't change the HTML structure unless necessary
- Don't add external dependencies
- Don't neglect mobile responsiveness

## Troubleshooting

### Images Not Showing
- Check image filenames and paths
- Ensure images are in `assets/images/` folder
- Verify image format is JPG, PNG, or GIF
- Check file size (keep under 500KB)

### Links Not Working
- Check file names are spelled correctly
- Verify relative paths are correct (e.g., `../assets/images/file.jpg`)
- Test links in browser DevTools console for errors

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is being loaded (view page source)
- Verify CSS file path in HTML head tag
- Check for typos in CSS class names

### Mobile Menu Not Working
- Check JavaScript file is loaded
- Verify no JavaScript errors in console (F12)
- Test on actual mobile device, not just browser resize

## Future Enhancements

Consider adding these features:
- Dark/Light mode toggle
- Blog section for technical articles
- Downloadable resume as PDF
- Backend contact form (send emails)
- Project search/filter
- Comments on challenge writeups
- RSS feed
- Analytics tracking (Google Analytics)

## License
This portfolio template is free to use and modify. Feel free to customize it as needed.

## Support
For issues or questions:
1. Check the customization guide above
2. Review the code comments
3. Test in different browsers
4. Check browser console for JavaScript errors

---

**Made with ❤️ for your professional growth**

Good luck showcasing your amazing work! 🚀