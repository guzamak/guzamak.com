import { Project, ProjectType } from "./types";
export const activityData = [
    {imagePath: "/tobeit.jpg", title: "ToBeIT'67 The Second", description:"By Information Technology (IT) KMITL.",},
    {imagePath: "/jwc.jpg", title: "JWC 13", description:"By THAI WEBMASTER & ONLINE MEDIA ASSOCIATION.",},
    {imagePath: "/itcamp.jpg", title: "IT Camp 19", description:"By Information Technology (IT) KMITL.",},
    {imagePath: "/jpc.jpg", title: "JPC16", description:"By School of Information Technology (SIT) KMUTT.",},
  ]
  
export const projectData:Project[] = [
    {
      imagePath: ["/snyth-co-1.png"],
      title: "Synth-Co",
      description:
        "Website that help you learn basic synthesizer from solving problem. ",
      type: "Website",
      url: {
        devpost: "https://devpost.com/software/synth-co",
        github: "https://github.com/guzamak/synth_co",
        www: "https://synth-co.vercel.app/",
      },
    },
    {
      imagePath: ["/mouth-ctrl-1.png"],
      title: "Mouth-Ctrl",
      description:
        "Website that allow you to draw with mouth and post your art to other user. ",
      type: "Website",
      url: {
        devpost: "https://devpost.com/software/mouth-ctrl",
        github: "https://github.com/guzamak/mouth_ctrl",
        www: "https://mouth-ctrl.vercel.app/",
      },
    },
    {
      imagePath: ["/ninju-1.png"],
      title: "Ninju",
      description:
        "Application that make you can use naruto hand sign to open file. ",
      type: "Other",
      url: {
        devpost: "https://devpost.com/software/ninju",
        github: "https://github.com/guzamak/Ninju",
      },
    },
    {
      imagePath: ["/todone-1.png"],
      title: "Todone",
      description:
        "Website that help you manage work by use node and link it together. ",
      type: "Website",
      url: {
        devpost: "https://devpost.com/software/todone",
        github: "https://github.com/guzamak/Todone",
        www: "https://todone01.vercel.app/",
      },
    },
    {
      imagePath: ["/rife-guard-1.png"],
      title: "Rife Guard",
      description:
        "Website that will predict rice diseases and classify it.",
      type: "Website",
      url: {
        devpost: "https://devpost.com/software/rife-guard",
        github: "https://github.com/guzamak/rife_guard",
        www: "https://pokenoi-rife-guard.hf.space/",
      },
    },
    {
      imagePath: ["/popchamp-1.png"],
      title: "POPCHAMP",
      description:
        "Game Like Popcat but Fire! I guess you are my little Popchamp. ",
      type: "Game",
      url: {
        itch: "https://pronwattana.itch.io/popchamp",
        github: "https://github.com/guzamak/POPCHAMP",
      },
    },
    {
      imagePath: ["/rentarou-simulator-1.png"],
      title: "Rentarou Simulator",
      description:
        "Game simulate life as Rentarou by separate Soulmates'favorite gift. ",
      type: "Game",
      url: {
        itch: "https://pronwattana.itch.io/rentarou-simulator",
        github: "https://github.com/guzamak/Rentarou_Simulator",
      },
    },
  ];
  
export const filterType:ProjectType[] = ["Website", "Game", "Other"];