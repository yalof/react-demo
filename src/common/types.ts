import React from "react";
import { ArrayDestructuringAssignment } from "typescript";

/*type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  age: number;
};
type Users = User[];

const users: Users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    age: 23,
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    age: 20,
  },
];

type Product = {
  id: number;
  name: string;
  price: number;
  currency: string;
  ingredients: string[];
  type: string;
  available: boolean;
};

type Products = Product[];

const products: Products = [
  {
    id: 1,
    name: "Burger Premium",
    price: 6,
    currency: "euro",
    ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
    type: "burger",
    available: true,
  },
  {
    id: 2,
    name: "Burger Lite",
    price: 2.3,
    currency: "euro",
    ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
    type: "burger",
    available: true,
  },
];

type GetUser = (id: number, users: Users) => User | undefined;

const getUser: GetUser = (id, users) => {
  return users.find((user) => user.id === id);
};
*/

//// Задачи
/*
type Country = {
  country: string;
  abbreviation: string;
  city: string;
  currency_name: string;
  population: number;
};
type Countries = Country[];

const countries: Countries = [
  {
    country: "United Arab Emirates",
    abbreviation: "AE",
    city: "Abu Dhabi",
    currency_name: "Arab Emirates Dirham",
    population: 9630959,
  },
  {
    country: "Poland",
    abbreviation: "PL",
    city: "Warszawa",
    currency_name: "Polish Zloty",
    population: 37974750,
  },
  {
    country: "Russian Federation",
    abbreviation: "RU",
    city: "Moscow",
    currency_name: "Russian Ruble",
    population: 144478050,
  },
];

//1. Создать строку из названий стран через запятую

type StrConcat = (countries: Country[]) => string;
let strConcat: StrConcat = (item) => {
  let names = "";
  item.forEach((i) => {
    names += `${i.country}`;
  });
  return names;
};
strConcat(countries);

//2. Посчитать общее количество людей в данном массиве стран.

type SumPeople = (countries: Country[]) => number;
const sumPeople: SumPeople = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur.population, 0);
  return sum;
};
sumPeople(countries);

//3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.

type SortByName = (countries: Country[]) => object[];
const sortByName: SortByName = (arr) => {
  const sort = arr.sort((a, b) => {
    if (a.country < b.country) {
      return -1;
    }
    return 0;
  });
  return sort;
};
sortByName(countries);

//4. Получить массив валют.

type GetCurr = (countries: Country[]) => string[];
const getCurr: GetCurr = (arr) => {
  const result = arr.map((a) => a.currency_name);
  return result;
};
getCurr(countries);

//5. Получить массив городов, отсортированных в алвавитном порядке.

type GetSortCity = (countries: Country[]) => string[];
const getSortCity: GetSortCity = (arr) => {
  const result = arr.map((a) => a.city).sort();
  return result;
};
getSortCity(countries);

//6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

type GetMiddleSum = (countries: Country[]) => number;
const getMiddleSum: GetMiddleSum = (arr) => {
  const result =
    arr.map((a) => a.population).reduce((a, b) => a + b, 0) / arr.length;
  return result;
};
getMiddleSum(countries);

// Задачи №2

type User = {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
};

type Users = User[];
const users: Users = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

// 1. Создать строку из имен пользователей через запятую
type StrName = (users: User[]) => string;
const strName: StrName = (arr) => {
  return arr.map((i) => i.name).join(",");
};
strName(users);

// 2. Посчитать общее количeство машин у пользователей
type SumCars = (users: User[]) => number;
const sumCars: SumCars = (arr) => {
  const cars = arr.map((i) => i.cars).slice();
  return cars.length;
};
sumCars(users);

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

type FilterEdUsers = (users: User[]) => User[];
const filterEdUsers: FilterEdUsers = (arr) => {
  return arr.filter((i) => i.hasEducation);
};
filterEdUsers(users);

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
type FilterAnimalUsers = (users: User[]) => User[];
const filterAnimalUsers: FilterAnimalUsers = (arr) => {
  return arr.filter((i) => i.animals);
};
filterAnimalUsers(users);
// slice.sort
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

type StrCars = (users: User[]) => string[];
const strCars: StrCars = (arr) => {
  return arr.map((i) => `${i.cars}`);
};
strCars(users);*/

export type Card = {
  id?: string;
  image?: string;
  title: string;
  text: string;
  date: string;
  onClick?: () => void;
  likeStatus?: string | null;
  saved: boolean;
};
