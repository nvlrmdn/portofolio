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
    description: "Efficient in creating, managing, and deploying containerized apps using Docker."
  },
  {
    src: k8sImg,
    description: "Experienced in deploying and scaling applications using Kubernetes orchestration."
  },
  {
    src: gitlabImg,
    description: "Built robust CI/CD pipelines and managed Git repositories using GitLab."
  },
  {
    src: terraformImg,
    description: "Provisioned cloud resources declaratively using Terraform for reproducible infrastructure."
  },
  {
    src: awsImg,
    description: "Worked with AWS services like EC2, S3, IAM, and EKS for cloud-native deployments."
  },
  {
    src: argocdImg,
    description: "Implemented GitOps workflows and continuous deployment using ArgoCD."
  },
  {
    src: jenkinsImg,
    description: "Automated build and deployment pipelines using Jenkins across environments."
  },
  {
    src: harborImg,
    description: "Managed container image repositories securely with Harbor in private registries."
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