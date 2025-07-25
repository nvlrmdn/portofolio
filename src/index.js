import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import dockerImg from './assets/skills/docker.png';
import k8sImg from './assets/skills/kubernetes.png';
import gitlabImg from './assets/skills/gitlab.png';
import terraformImg from './assets/skills/terraform.png';
import awsImg from './assets/skills/aws.png';

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

document.addEventListener("DOMContentLoaded", () => {
  const skillImgEl = document.getElementById("skill-carousel");
  const skillDescEl = document.getElementById("skill-description");

  const skillImages = [
    {
      src: "./assets/skills/docker.png",
      description: "Experienced in containerization and image management using Docker."
    },
    {
      src: "./assets/skills/kubernetes.png",
      description: "Skilled in orchestrating scalable applications using Kubernetes."
    },
    {
      src: "./assets/skills/gitlab.png",
      description: "Configured CI/CD pipelines and GitOps workflows with GitLab."
    },
    {
      src: "./assets/skills/terraform.png",
      description: "Automated infrastructure provisioning with Terraform."
    },
    {
      src: "./assets/skills/aws.png",
      description: "Hands-on experience with EC2, EKS, and IAM on AWS for cloud deployment."
    }
  ];

  let currentSkill = 0;

  function showSkill(index) {
    skillImgEl.src = skillImages[index].src;
    skillDescEl.textContent = skillImages[index].description;
  }

  window.nextImage = () => {
    currentSkill = (currentSkill + 1) % skillImages.length;
    showSkill(currentSkill);
  };

  window.prevImage = () => {
    currentSkill = (currentSkill - 1 + skillImages.length) % skillImages.length;
    showSkill(currentSkill);
  };

  // Tampilkan skill pertama saat page load
  showSkill(currentSkill);
});