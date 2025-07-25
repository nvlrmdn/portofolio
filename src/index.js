import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import dockerImg from "./assets/skills/docker.png";
import k8sImg from "./assets/skills/kubernetes.png";
import gitlabImg from "./assets/skills/gitlab.png";
import terraformImg from "./assets/skills/terraform.png";
import awsImg from "./assets/skills/aws.png";
import argocdImg from "./assets/skills/argocd.png";
import jenkinsImg from "./assets/skills/jenkins.png";
import harborImg from "./assets/skills/harbor.png";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const skillImages = [
  {
    src: dockerImg,
    description: "Experienced in containerization and image management using Docker."
  },
  {
    src: k8sImg,
    description: "Skilled in orchestrating scalable applications using Kubernetes."
  },
  {
    src: gitlabImg,
    description: "Configured CI/CD pipelines and GitOps workflows with GitLab."
  },
  {
    src: terraformImg,
    description: "Automated infrastructure provisioning with Terraform."
  },
  {
    src: awsImg,
    description: "Hands-on experience with EC2, EKS, and IAM on AWS for cloud deployment."
  },
    {
    src: argocdImg,
    description: "Configured CI/CD pipelines and GitOps workflows with GitLab."
  },
  {
    src: jenkinsImg,
    description: "Automated infrastructure provisioning with Terraform."
  },
  {
    src: harborImg,
    description: "Hands-on experience with EC2, EKS, and IAM on AWS for cloud deployment."
  }
];

let currentSkill = 0;
const skillImgEl = document.getElementById("skill-carousel");
const skillDescEl = document.getElementById("skill-description");

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

// Tampilkan pertama kali
showSkill(currentSkill);