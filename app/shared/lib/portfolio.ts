const wix = "https://static.wixstatic.com/media/";
const image = (uri: string) =>
  `${wix}${uri}/v1/fill/w_1800,h_1300,al_c,q_90/${uri}`;
export type PortfolioProject = {
  name: string;
  category: "Custom Home" | "Remodel" | "In Progress";
  image: string;
};
export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Taylor Ridge",
    category: "Custom Home",
    image: image("81591a_22520529085741fb8b0064a636d53571~mv2.jpg"),
  },
  {
    name: "Hausman Residence",
    category: "Custom Home",
    image: image("81591a_e3916d6e18e345e6adde0562fa458982~mv2.jpg"),
  },
  {
    name: "Basse Canyon Residence",
    category: "Custom Home",
    image: image("81591a_921da0f0e93348768ab1111f9fa3d0e3~mv2.png"),
  },
  {
    name: "Abrego Lake Residence",
    category: "Custom Home",
    image: image("81591a_e815c616e88a4487aa2c6e01a7885d2b~mv2.png"),
  },
  {
    name: "Ashby Canyon",
    category: "Custom Home",
    image: image("81591a_5a440ff6ad4740e78c04469a3a7d3448~mv2.png"),
  },
  {
    name: "Oak Grove Remodel",
    category: "Remodel",
    image: image("nsplsh_67333970316b446a765359~mv2_d_6720_4480_s_4_2.jpg"),
  },
  {
    name: "Scattered Oaks Remodel",
    category: "Remodel",
    image: image("nsplsh_60c1c11e9ad54c3e9d5c79c80ec4edb3~mv2.jpg"),
  },
  {
    name: "Abrego Lake #2",
    category: "In Progress",
    image: image("81591a_995c1cca8bfd451a8325c87dd9523a57~mv2.jpg"),
  },
  {
    name: "Woodbridge Farms Residence",
    category: "Custom Home",
    image: image("81591a_561ad6ce834841bd8f5c8311fa0f3b5f~mv2.png"),
  },
  {
    name: "Osprey Way",
    category: "In Progress",
    image: image("81591a_e54db4f8a33a4eeaa50bb3da7b18bafd~mv2.jpg"),
  },
  {
    name: "West Oak Estates",
    category: "In Progress",
    image: image("81591a_b146a638a6f3472f9384773b8e627182~mv2.jpg"),
  },
  {
    name: "Carson St. Townhomes",
    category: "In Progress",
    image: image("81591a_e54db4f8a33a4eeaa50bb3da7b18bafd~mv2.jpg"),
  },
  {
    name: "Kendall Canyon Spec #1",
    category: "In Progress",
    image: image("81591a_e54db4f8a33a4eeaa50bb3da7b18bafd~mv2.jpg"),
  },
  {
    name: "Kendall Canyon Spec #2",
    category: "In Progress",
    image: image("81591a_e54db4f8a33a4eeaa50bb3da7b18bafd~mv2.jpg"),
  },
];
