import { Service } from "@/types/services";
import { defineStore } from "pinia";

export const useServicesStore = defineStore("services", {
  state: () => ({
    services: services as Array<Service>,
  }),
  actions: {},
  getters: {},
});

const services: Array<Service> = [
  {
    title: "Roof Repair",
    image: "roof-repair.jpg",
    paragraphs: [
      "Cracked tiles, or missing tiles, are bad news. One thing we are rarely short of is rain, and it loves to find ways to get into your roof.",
      "Mold, peeling wallpaper or plaster, musty smells and a damp feeling in upstairs rooms are all signs of damp penetration through the roof.",
      "Fixing your roof is a specialised job. We can usually source matching tiles or slates and get your roof fixed quickly",
    ],
  },
  {
    title: "Roof Cleaning",
    image: "roof-cleaning.jpg",
    paragraphs: [
      "Moss and lichen growing on your roof is not just an aesthetic problem because it can cause damage and shorten the life of your roof.",
      "There are two main methods of removing the moss and dirt.",
      "Deep cleaning with water pressure",
      "Most of our customers prefer to have a deep clean with water pressure as this is the most effective method to remove all the dirt and moss spores. In just one or two days cleaning the roof looks fresh and completely clean. An environmentally friendly moss deterrent is then sprayed on to prevent new growth.",
      "Hand cleaning with brushes and biocide.",
      "Some roofs that are very fragile need to be hand cleaned with brushes and scrapers. This does not get rid of all the moss and dirt to the same extent as a deep clean so we use an environmentally friendly biocide to kill all the moss spores and then it becomes cleaner gradually over several months as the biocide continues to work.",
    ],
  },
  {
    title: "Gutter Cleaning",
    image: "gutter-cleaning.jpg",
    paragraphs: [
      "Stop damp problems before they start by keeping your gutters clean.",
      "Gutters and downpipes are there to move water rapidly off your roof and down the drain - but damp problems can start quickly when they get blocked.",
      "Cleaning them out is a hard job for householders, and dangerous without good ladders and the experience to use them.",
      "We'll do the job thoroughly and rapidly, with no disruption to your life.",
    ],
  },
];
