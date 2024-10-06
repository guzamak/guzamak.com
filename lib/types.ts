export interface Position {
    x: number;
    y: number;
  }

export interface WindowDimensions {
    innerWidth: number,
    innerHeight: number,
}

export interface Size {
    w: number;
    h: number;
}

export type Project= {
    imagePath: string[]; // Array of image paths
    title: string;
    description: string;
    type: ProjectType; // Limited to the known types
    url: {
      devpost?: string;
      github?: string ;
      www?: string;
      itch?: string;
    };
};

export type ProjectType = "Website" | "Game" | "Other";
