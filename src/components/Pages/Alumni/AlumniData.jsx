import { faker } from "@faker-js/faker";

const sir = [
  {
    image: '',
    name: 'Dr. Bade Mukund',
    position: 'Faculty Advisor',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    gmail: 'u21ee081@eed.svnit.ac.in',
  }
]

const generateAlumniData = (num) => {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({
      image: faker.image.avatarLegacy(),
      name: faker.person.fullName(),
      position: faker.person.jobType(),
      linkedin: faker.internet.url(),
      github: faker.internet.url(),
    });
  }
  return data;
};

const alumni2019 = generateAlumniData(10);
const alumni2018 = generateAlumniData(10);
// const alumni2019 = [
//     {
//       image: 'src/assets/bg.jpg',
//       name: 'John Doe',
//       position: 'Software Engineer',
//       linkedin: 'https://www.linkedin.com/in/johndoe',
//       github: 'https://github.com/johndoe',
//     },
//     {
//       image: 'src/assets/bg.jpg',
//       name: 'Jane Smith',
//       position: 'Product Manager',
//       linkedin: 'https://www.linkedin.com/in/janesmith',
//       github: 'https://github.com/janesmith',
//     },
//     {
//         image: 'src/assets/bg.jpg',
//         name: 'Jane Smith',
//         position: 'Product Manager',
//         linkedin: 'https://www.linkedin.com/in/janesmith',
//         github: 'https://github.com/janesmith',
//       },
//       {
//         image: 'src/assets/bg.jpg',
//         name: 'John Doe',
//         position: 'Software Engineer',
//         linkedin: 'https://www.linkedin.com/in/johndoe',
//         github: 'https://github.com/johndoe',
//       },
//       {
//         image: 'src/assets/bg.jpg',
//         name: 'John Doe',
//         position: 'Software Engineer',
//         linkedin: 'https://www.linkedin.com/in/johndoe',
//         github: 'https://github.com/johndoe',
//       },
//       {
//         image: 'src/assets/bg.jpg',
//         name: 'John Doe',
//         position: 'Software Engineer',
//         linkedin: 'https://www.linkedin.com/in/johndoe',
//         github: 'https://github.com/johndoe',
//       },
//       {
//         image: 'src/assets/bg.jpg',
//         name: 'John Doe',
//         position: 'Software Engineer',
//         linkedin: 'https://www.linkedin.com/in/johndoe',
//         github: 'https://github.com/johndoe',
//       },
//       {
//         image: 'src/assets/bg.jpg',
//         name: 'John Doe',
//         position: 'Software Engineer',
//         linkedin: 'https://www.linkedin.com/in/johndoe',
//         github: 'https://github.com/johndoe',
//       },
//       {
//         image: 'src/assets/bg.jpg',
//         name: 'John Doe',
//         position: 'Software Engineer',
//         linkedin: 'https://www.linkedin.com/in/johndoe',
//         github: 'https://github.com/johndoe',
//       },
//       {
//         image: 'src/assets/bg.jpg',
//         name: 'John Doe',
//         position: 'Software Engineer',
//         linkedin: 'https://www.linkedin.com/in/johndoe',
//         github: 'https://github.com/johndoe',
//       },
//     // Add more alumni objects as needed
//   ];

export { alumni2019, alumni2018, sir };
