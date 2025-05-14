import manchurian from "./assets/manchurian.webp";
import paneer from "./assets/paneer-chilli.webp";
import rice from "./assets/fried-rice.webp";
import noodles from "./assets/noodles.jpg";
import soup from "./assets/manchow-soup.jpg";
import bhel from "./assets/potato-chilli.jpg";

export const menuItems = [
  {
    id: "item-1",
    name: "Manchurian",
    image: manchurian,
    itemList: {
      base: [
        {
          itemName: "Manchurian Dry",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Manchurian Gravy",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Boiling Manchurian",
          itemPrice: { halfPrice: null, fullPrice: 100 },
        },
        {
          itemName: "Schezwan Manchurian Dry",
          itemPrice: { halfPrice: null, fullPrice: 100 },
        },
        {
          itemName: "Garlic Manchurian Dry",
          itemPrice: { halfPrice: null, fullPrice: 100 },
        },
        {
          itemName: "Dragon Manchurian Dry",
          itemPrice: { halfPrice: null, fullPrice: 120 },
        },
      ],
    },
  },
  {
    id: "item-2",
    name: "Paneer",
    image: paneer,
    itemList: {
      base: [
        {
          itemName: "65",
          itemPrice: { halfPrice: 80, fullPrice: 100 },
        },
        {
          itemName: "Finger Chilli",
          itemPrice: { halfPrice: 80, fullPrice: 130 },
        },
        {
          itemName: "Chilli Dry",
          itemPrice: { halfPrice: 80, fullPrice: 130 },
        },
        {
          itemName: "Paneer Crispy",
          itemPrice: { halfPrice: 80, fullPrice: 130 },
        },
        {
          itemName: "Red Coke",
          itemPrice: { halfPrice: 80, fullPrice: 130 },
        },
      ],
      special: [
        {
          itemName: "Special Chilli Dry",
          itemPrice: { halfPrice: 100, fullPrice: 150 },
        },
        {
          itemName: "Special Chilli Gravy",
          itemPrice: { halfPrice: 100, fullPrice: 150 },
        },
        {
          itemName: "Special Manchurian Dry",
          itemPrice: { halfPrice: 100, fullPrice: 150 },
        },
        {
          itemName: "Special 65",
          itemPrice: { halfPrice: 100, fullPrice: 150 },
        },
        {
          itemName: "Special Pakoda Dry",
          itemPrice: { halfPrice: 100, fullPrice: 150 },
        },
        {
          itemName: "Special Schezwan Dry",
          itemPrice: { halfPrice: 100, fullPrice: 150 },
        },
        {
          itemName: "Special Red Coke",
          itemPrice: { halfPrice: 100, fullPrice: 150 },
        },
      ],
    },
  },
  {
    id: "item-3",
    name: "Rice",
    image: rice,
    itemList: {
      base: [
        {
          itemName: "Jira Rice",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Fried Rice",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Schezwan Fried Rice",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Manchurian Fried Rice",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Singapore Fried Rice",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Malaysian Fried Rice",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Combination Fried Rice",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Garlic Fried Rice",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
      ],
      special: [
        {
          itemName: "Hong Kong Rice",
          itemPrice: { halfPrice: 100, fullPrice: 140 },
        },
        {
          itemName: "Triple Fried Rice",
          itemPrice: { halfPrice: 100, fullPrice: 140 },
        },
        {
          itemName: "Cheese Fried Rice",
          itemPrice: { halfPrice: 100, fullPrice: 140 },
        },
        {
          itemName: "Paneer Fried Rice",
          itemPrice: { halfPrice: 100, fullPrice: 140 },
        },
      ],
    },
  },
  {
    id: "item-4",
    name: "Soup",
    image: soup,
    itemList: {
      base: [
        {
          itemName: "Manchow Soup",
          itemPrice: { halfPrice: null, fullPrice: 60 },
        },
        {
          itemName: "Hot & Sour Soup",
          itemPrice: { halfPrice: null, fullPrice: 60 },
        },
        {
          itemName: "Manchurian Soup",
          itemPrice: { halfPrice: null, fullPrice: 60 },
        },
        {
          itemName: "Garlic Soup",
          itemPrice: { halfPrice: null, fullPrice: 60 },
        },
      ],
      special: [
        {
          itemName: "Paneer Soup",
          itemPrice: { halfPrice: null, fullPrice: 60 },
        },
        {
          itemName: "Special Maggie Soup",
          itemPrice: { halfPrice: null, fullPrice: 60 },
        },
      ],
    },
  },
  {
    id: "item-5",
    name: "Bhel",
    image: bhel,
    itemList: {
      base: [
        {
          itemName: "Chinese Bhel",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Bombay Bhel",
          itemPrice: { halfPrice: 90, fullPrice: 120 },
        },
        {
          itemName: "American Chopsy",
          itemPrice: { halfPrice: 90, fullPrice: 120 },
        },
        {
          itemName: "Chinese Chopsy",
          itemPrice: { halfPrice: 90, fullPrice: 120 },
        },
      ],
      special: [
        {
          itemName: "Potato Chilli",
          itemPrice: { halfPrice: 100, fullPrice: 130 },
        },
      ],
    },
  },
  {
    id: "item-6",
    name: "Noodles",
    image: noodles,
    itemList: {
      base: [
        {
          itemName: "Hakka Noodles",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Schezwan Noodles",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Singapore Noodles",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Malaysian Noodles",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Manchurian Noodles",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Paneer Noodles",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
        {
          itemName: "Garlic Noodles",
          itemPrice: { halfPrice: 70, fullPrice: 100 },
        },
      ],
      special: [
        {
          itemName: "Special Noodles",
          itemPrice: { halfPrice: 90, fullPrice: 120 },
        },
      ],
    },
  },
];
