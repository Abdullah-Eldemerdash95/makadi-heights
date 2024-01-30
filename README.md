# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-- start with npm create vite continue with setup steps
-- edit eslintrc.json file
-- edit vite.config.js
-- start planning to choose your folders structure and css libraries
-- due to company usage for tailwind we will start by going to tailwind framework guide vite setup and follow steps
https://tailwindcss.com/docs/guides/vite

-- we created almost everything static then transformed into react components with no libraries as it's single page.
-- i tried to find designed fonts but failed to get SharpSansNo1_Medium but i found the rest. 
-- there's more than a comment on figma file.
-- in animation part we used intersection oberver package npm install react-intersection-observer --save
-- using the ref and inView we achieved to put animation on sections small interaction due to time 
-- there's some design points missing in figma file or may u mean it like that but anyway u should provided fonts files 
and the font weight in 2nd part in heading it's different as eyesight but in design it's same numbers frontend developer need the design rules 
he understand and that's all from my pov.
-- wish u enjoyed animation and loading screen i tried not to use libraries to show my skills.

## Project Structure 
-- needed components in features folder
-- svg icons that need hover and coloring is inside icons folder so we can fill the color.
-- fonts that i tried to load i in font's folder cause there is font missing  i edit some numbers so shape be same.

## Project Explanation 
-- first we created const for slider data 
-- second we created state for slider cause we needed as liftup props .
-- related to animation the useEffect for timers and loaders then the useInView for onScroll animations

 - we created 4 folders 
 - form which contain form and modal 
 - header which contain header we going use it again in rest of project if it has different pages
 - loader for loader animations and in future if we going continue we will need spinner for data fetching
 - slider have 3 comps one for bullets , one for images and the last one for icons they all related to each other to meet slideNumber.
