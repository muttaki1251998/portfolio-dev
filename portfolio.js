import emoji from "react-easy-emoji";

export const greetings = {
	name: "Muhammad Muttaki",
	title: "Hi, I'm Muhammad",
	description:
		"A Full Stack Web Engineer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Angularjs and some other cool libraries and frameworks.",
	resumeLink: "https://drive.google.com/file/d/1Db1sEAQtBQU24Cm8RJIsSDI4jbJ9y-tY/view?usp=sharing",
};

export const openSource = {
	githubUserName: "muttaki1251998",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/don.khan.54540/",
	instagram: "https://www.instagram.com/_muttaki22/",
	twitter: "https://twitter.com/muttaki_khan",
	github: "https://github.com/muttaki1251998",
	linkedin: "https://www.linkedin.com/in/muhammad-muttaki/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase or Docker"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const educationInfo = [
	{
		schoolName: "University of Guelph",
		subHeader: "Bachelor's of Science in Computer Science",
		duration: "September 2019 - April 2023",
	}
];

export const experience = [
	{
		role: "Software Engineer",
		company: "IFS",
		companylogo: "/img/icons/common/google.svg",
		date: "Jan 2022 – Present",
		descBullets: [
			"Working on the front-end with Angular.js and React",
			"Writing various unit tests with Jasmine and Jest",
			"Working on the backend with Nodejs to develop validators and authentication",
			"Implemented React.js on an Angular.js app to upgrade usability and development",
			"Working on End to End tests with Protractor"
		],
	},
	{
		role: "Full Stack Mobile Developer",
		company: "We3 Inc.",
		companylogo: "/img/icons/common/google.svg",
		date: "Sept 2021 – Dec 2021",
		descBullets: [
			"Working with a team of three developers to maintain and update the We3 app that is on both Google and IOS app store.",
			"Working with Ionic-React on the front-end and Node and Postgres on the backend.",
			"Developed a new testing tool in JavaScript and Node.js that tests various edge cases before code gets pushed to the repo which reduced overall testing time by 90%.",
		],
	},
	{
		role: "Web developer Intern",
		company: "Ride Cycle",
		companylogo: "/img/icons/common/github.svg",
		date: "May 2021 – Aug 2021",
		descBullets: [
			"Collaborated remotely across a team of 4 developers for zero-to-prod initiatives.",
			"Developed and maintained the back-end server with Node.js and MongoDB  for a new booking system.",
			"Developed the front-end with React, react-redux and react-hooks.",
			"Tested site in various browsers and devices to ensure cross-browser compatibility and mobile reponsiveness"
		]
	}
];

export const projects = [
	{
		name: "GitHub Profiler",
		desc: "Made with Next.js and Styled components where a github user can see a summary of their profile. Used chat.js to style the charts. All the user needs to do is enter their username and it will fetch all the information.",
		link: "https://gitprofile-9cd430c60f1b.herokuapp.com/",
		github: "https://github.com/muttaki1251998/GitProfiles"
	},
	
	{	name: "Chat room",
		desc: "Chat room app where users can join from all over the world with a username and enjoy a conversion. User A and User be needs to select the same room number to be able to chat. User can invite friends by sharing the link and room number.",
		link: "https://chat-room-muhammad-f25a76ac9b26.herokuapp.com/",
		github: "https://github.com/muttaki1251998/GitProfiles"
	},
	{
		name: "File Decryptor",
		desc: "Taking inputs from files in binary format and then converting it to strings with C using Linked lists. Using the chi-square formula, the program decodes the encrypted string and writes the human readable string to a new file.",
		github: "https://github.com/muttaki1251998/File_Decryptor"
	},
];