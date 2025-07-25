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
import ansibleImg from "./assets/skills/ansible.png";
import bashImg from "./assets/skills/bash.png";
import grafanaImg from "./assets/skills/grafana.png";
import lokiImg from "./assets/skills/loki.png";
import prometheusImg from "./assets/skills/prometheus.png";

import work1Img from "./assets/work/work1.png";
import work2Img from "./assets/work/work2.png";
import work3Img from "./assets/work/work3.png";
import work4Img from "./assets/work/work4.png";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

/* === SKILLS CAROUSEL === */
const skillImages = [
  {
    src: dockerImg,
    description: "Proficient in building, managing, and deploying containerized applications using Docker."
  },
  {
    src: k8sImg,
    description: "Experienced in orchestrating, scaling, and managing applications with Kubernetes."
  },
  {
    src: gitlabImg,
    description: "Designed CI/CD pipelines and managed repositories effectively using GitLab."
  },
  {
    src: terraformImg,
    description: "Implemented infrastructure as code by provisioning resources with Terraform."
  },
  {
    src: awsImg,
    description: "Hands-on experience with AWS services including EC2, IAM, and EKS for scalable deployments."
  },
  {
    src: argocdImg,
    description: "Applied GitOps principles and automated deployments using ArgoCD."
  },
  {
    src: jenkinsImg,
    description: "Developed automated build and deployment pipelines using Jenkins."
  },
  {
    src: harborImg,
    description: "Managed secure container image registries and access control with Harbor."
  },
  {
    src: ansibleImg,
    description: "Automated server provisioning and configuration management using Ansible."
  },
  {
    src: bashImg,
    description: "Created Bash scripts for task automation and Linux system operations."
  },
  {
    src: grafanaImg,
    description: "Built intuitive dashboards and visualized real-time metrics using Grafana."
  },
  {
    src: lokiImg,
    description: "Collected and queried logs efficiently using Loki for centralized log management."
  },
  {
    src: prometheusImg,
    description: "Configured Prometheus for system monitoring and proactive alerting."
  }
];

let currentSkill = 0;
const skillImgEl = document.getElementById("skill-carousel");
const skillDescEl = document.getElementById("skill-description");

function showSkill(index) {
  skillImgEl.src = skillImages[index].src;
  skillDescEl.textContent = skillImages[index].description;
}

window.nextSkill = () => {
  currentSkill = (currentSkill + 1) % skillImages.length;
  showSkill(currentSkill);
};

window.prevSkill = () => {
  currentSkill = (currentSkill - 1 + skillImages.length) % skillImages.length;
  showSkill(currentSkill);
};

showSkill(currentSkill);

/* === WORK EXPERIENCE CAROUSEL === */
const workImages = [
  {
    src: work1Img,
    description: "DevOps Engineer, Full Time, January 2024 - Present."
  },
  {
    src: work2Img,
    description: "System Engineer, Full Time, August 2023 - January 2024."
  },
  {
    src: work3Img,
    description: "Data Center System and Operation, Contract Employee, April 2022 - August 2023."
  },
  {
    src: work4Img,
    description: "Technical Support, Contract Employee, April 2021 - April 2022."
  }
];

let currentWork = 0;
const workImgEl = document.getElementById("work-carousel");
const workDescEl = document.getElementById("work-description");

function showWork(index) {
  workImgEl.src = workImages[index].src;
  workDescEl.textContent = workImages[index].description;
}

window.nextWork = () => {
  currentWork = (currentWork + 1) % workImages.length;
  showWork(currentWork);
};

window.prevWork = () => {
  currentWork = (currentWork - 1 + workImages.length) % workImages.length;
  showWork(currentWork);
};

showWork(currentWork);

const ctx = document.getElementById('softSkillChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Communication',
      'Collaboration',
      'Adaptability',
      'Problem Solving',
      'Time Management'
    ],
    datasets: [{
      label: 'Soft Skill Proficiency',
      data: [90, 85, 80, 88, 75],
      backgroundColor: [
        '#aef1f0',
        '#6be2dc',
        '#49c9f0',
        '#2f88d8',
        '#1d4a89'
      ],
      borderRadius: 8,
      barThickness: 30,
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        max: 100,
        ticks: {
          color: '#555',
          font: {
            size: 12
          }
        },
        grid: {
          color: '#f0f0f0'
        }
      },
      y: {
        ticks: {
          color: '#222',
          font: {
            weight: 'bold'
          }
        },
        grid: {
          display: false
        }
      }
    }
  }
});