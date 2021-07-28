import CodeIcon from '@material-ui/icons/Code';
import DevicesIcon from '@material-ui/icons/Devices';
import ReorderIcon from '@material-ui/icons/Reorder';
import BuildIcon from '@material-ui/icons/Build';

import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const data = {
  fullName: 'Kanav Bhardwaj',
  dobString: '2 September, 2002',
  phoneNo: '+1 902 329-8438',
  email: 'kanavb9999@gmail.com',
  dobmmddyyyy: '09/02/2002',
  academicLife: [
    {
      college: 'Dalhousie University, Halifax, NS, Canada',
      degree: 'Bachelors of Applied Computer Science',
      year: '1st',
    },
  ],
  socialMedia: [
    {
      site: 'Email',
      url: 'mailto:kanavb9999@gmail.com?subject=I wanna hire you!',
      icon: [<EmailIcon />],
      button: [
        <EmailShareButton size={32} url={'www.kanjurer.com'}>
          {' '}
          <EmailIcon />
        </EmailShareButton>,
      ],
    },
    {
      site: 'Facebook',
      url: 'www.kanjurer.com',
      icon: [<FacebookIcon />],
      button: [
        <FacebookShareButton size={32} url={'www.kanjurer.com'}>
          {' '}
          <FacebookIcon />
        </FacebookShareButton>,
      ],
    },

    {
      site: 'LinkedIn',
      url: 'www.kanjurer.com',
      icon: [<LinkedinIcon />],
      button: [
        <LinkedinShareButton size={32} url={'www.kanjurer.com'}>
          {' '}
          <LinkedinIcon />
        </LinkedinShareButton>,
      ],
    },
    {
      site: 'Twitter',
      url: 'https://www.twitter.com/kan_bardj?s=08',
      icon: [<TwitterIcon />],
      button: [
        <TwitterShareButton
          size={32}
          url={'https://www.twitter.com/kan_bardj?s=08'}
        >
          {' '}
          <TwitterIcon />
        </TwitterShareButton>,
      ],
    },
  ],
  aboutMe:
    'I am Kanav, currently an undergraduate CS student. And as a student, I seek for knowledge, and practical experience of everything that I put my hands on. My curiosity and excitement lie in the enormous possibilities that technology has brought and I am happy to be a part of such a dynamic and versatile field. My current interests are in freelancing, though I am completely open to working with people - flourishing with everyone and building connections. Work aside, I play guitar too. Also, from past couple of years I have been walking on the path of self development and enhancing myself daily.  :D ',
  strengths: [
    'Learning and Positive Attitude',
    'Good Communication Skills',
    'Perfectionist',
  ],
  weaknesses: ['Procrastination', 'Time Management'],
  skills: [
    {
      skillName: 'Website From Scratch',
      skillDetails:
        'Building beautiful websites with knowledge and experience, catering to all your needs. ',
      icon: [<CodeIcon />],
    },
    {
      skillName: 'Responsive Web Design',
      skillDetails: 'Website runs smoothly on all devices, no bugs.',
      icon: [<DevicesIcon />],
    },
    {
      skillName: 'Fullstack Website',
      skillDetails: 'Websites with frontend and/or backend, all rapid fast!',
      icon: [<ReorderIcon />],
    },
    {
      skillName: 'Miscellaneous Services',
      skillDetails:
        'Provide DNS, CDN and hosting services integration along with website as a complete package.',
      icon: [<BuildIcon />],
    },
  ],
  languages: [
    { name: 'English', progress: 90 },
    { name: 'Hindi', progress: 100 },
  ],
  workExperience: [
    {
      name: 'Where Dreams Connect',
      designation: 'Web Developer',
      description: '',
      from: '27 July, 2020',
      to: '05 January, 2021',
      reviews: [
        {
          name: 'Amy Thomson - CEO',
          review: `Kanav Bhardwaj has been doing a marvelous job volunteering with my team and I on a project over the past few months. It is a website to help connect users with resources and people to complete their projects & goals. Kanav has been leading the website team and he is a real treasure to work with. He is passionate, intelligent, and self-motivated. He also communicates clearly and thoroughly. He has patience & understanding with team members who aren’t as tech savvy, and has no problem teaching people on the team valuable website building & maintenance skills.


          I have worked with many people on many projects, and have found Kanav to be one of the best among them. He is easy to work with and always a pleasure to see and hear from.
          
          I would strongly recommend him for any endeavor he wishes to pursue, because I know he is going to soar high in anything he does; plus he would be a valuable asset to any company or school.`,
        },
      ],
      usefulLinks: ['https://www.wheredreamsconnect.com'],
    },
  ],
  hireMe: [
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/o/profiles/users/~0162dc9450bb9dc830/',
    },
    {
      name: 'Freelancer',
      url: 'https://www.freelancer.com/u/kanavbhardwaj/',
    },
  ],
};

export default data;
