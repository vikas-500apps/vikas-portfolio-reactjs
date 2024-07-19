# Personal Portfolio Website

Welcome to my Personal Portfolio Website! This project showcases my skills, education, experience, and includes a contact form for reaching out. The website is built with HTML, CSS, JavaScript, ReactJs and uses `emailjs` for sending messages directly from the contact form.

## Components

1. **Header**
   - Contains the navigation menu and branding.

2. **Footer**
   - Provides additional links and contact information.

3. **MenuList-**
   **AboutMe**
   - Shared my experience

   **Project**
   - Displays a list of projects, showcasing work and achievements.
   
   **Education and Experience**
   - Highlights educational background and professional experience.
   
   **Skills**
   - Lists technical and soft skills.
   
   **Contact Form**
   - Allows users to get in touch via email using `emailjs`.

## How to Use EmailJS

EmailJS is used in the contact form to send emails directly from the website without exposing server-side email handling. Below is a brief overview of how `emailjs` is integrated:

### Contact Form

1. **Setup EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/) and obtain your user ID and service ID.

2. **Include EmailJS Library**
   - Add the EmailJS library to your project by including the script tag in your HTML:
     ```html
     <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
     ```

3. **Initialize EmailJS**
   - Initialize EmailJS with your user ID in your JavaScript file:
     ```javascript
     emailjs.init('YOUR_USER_ID');
     ```

4. **Sending Emails**
   - Configure the contact form to send emails using the `emailjs.send` method:
     ```javascript
     function sendEmail(event) {
       event.preventDefault();
       
       emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target)
         .then((result) => {
           console.log('Email sent successfully:', result);
         }, (error) => {
           console.error('Email sending failed:', error);
         });
     }
     ```

5.  **Replace Placeholder Values:**
   - Replace `'YOUR_USER_ID'`, `'YOUR_SERVICE_ID'`, and `'YOUR_TEMPLATE_ID'` with your actual EmailJS user ID, service ID, and template ID.

6. **Form HTML**
   - Your contact form HTML should have the necessary fields and use the `sendEmail` function to handle form submission:
     ```html
     <form onsubmit="sendEmail(event)">
       <input type="text" name="name" placeholder="Your Name" required />
       <input type="email" name="email" placeholder="Your Email" required />
       <textarea name="message" placeholder="Your Message" required></textarea>
       <button type="submit">Send</button>
     </form>
     ```

## ErrorPage
- The ErrorPage component displays a user-friendly error page for handling 404 errors, indicating that the requested page could not be found. This component is styled to be responsive and visually appealing, ensuring a good user experience even in error scenarios.

**Features**
- Full-Screen Layout: The error page covers the entire viewport height and width.
- Centered Content: The content is centered both vertically and horizontally.
- Customizable Background: Optionally, a video background can be used (currently commented out).
- Error Message: Clearly communicates the 404 error and the possible reasons for the error.
- Navigation Link: Provides a button to redirect users to the homepage.

**Installation**
- Ensure you have react and react-router-dom installed in your project.
- Import the ErrorPage component into your React application where needed.

## Connect with Me
- LinkedIn: [Vikas Kulari](https://www.linkedin.com/in/vikas-kulari-16013b198)
- Portfolio: https://vikas-kulari.netlify.app
