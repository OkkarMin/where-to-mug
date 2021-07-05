# Table of Contents

1. [Where To Mug](#where-to-mug)

2. [Demo](#demo)

3. [Tech Stack](#Tech-Stack)

4. [Documentation](#Documentation)

5. [Run Locally](#Run-Locally)

6. [Deployment](#Deployment)

7. [Environment Variables](#Environment-Variables)

8. [API Reference](#API-Reference)

9. [Acknowledgements](#Acknowledgements)

10. [Feedback](#Feedback)

11. [Authors](#Authors)

# Where To Mug

Ever wonder which tutorial room is free\* and which is not? 🤨

This tool could help you find out your dream tutorial room 🥳

Search which tutorial room is free by:

- day of the week
- room name
- time slot
- cluster

The website is mobile respondsive too!!

Link to website:
[https://wheretomug.ml/](https://wheretomug.ml/)

## Demo

![Demo](./doc/where-to-mug-demo.gif)

## Tech Stack

**Client:** NextJs, ChakraUI

**Server:** NextJs API routes, Vercel

**Others:** EmailJs, SentryIO

We used EmailJs to collect feedbacks and SentryIO to log errors encountered by users.

## Documentation

which-room-free/  
├─📁 data  
│ ├─ rooms_with_cluster.json  
│ ├─ room_ids.json  
│ ├─ room_occupancy.json  
├─📁 public  
│ ├─📁 assets  
│ │ ├─ room_not_found_image.svg  
│ │ ├─ study_modal_image.svg  
│ │ └─ weekend_chill.svg  
├─📁 src  
│ ├─📁 components  
│ │ ├─📁 autoScrollTop  
│ │ │ └─ ScrollToTop.js  
│ │ ├─ DisclaimerModel.tsx  
│ │ ├─ Feedback.js  
│ │ ├─ FilterOptions.tsx  
│ │ ├─ FreeRoomCard.tsx  
│ │ ├─ FreeRoomsCardList.tsx  
│ │ ├─ Main.tsx  
│ │ └─ RoomNotFound.tsx  
│ ├─📁 pages  
│ │ ├─📁 api  
│ │ │ └─ index.js  
│ │ ├─ index.tsx  
│ │ ├─ \_app.tsx  
│ │ └─ \_document.tsx  
│ └─ theme.tsx  
├─ next-env.d.ts  
├─ next.config.js  
├─ package-lock.json  
├─ package.json  
├─ README.md  
├─ sentry.client.config.js  
├─ sentry.server.config.js  
└─ tsconfig.json

## Run Locally

Clone the project

```bash
  git clone https://github.com/OkkarMin/where-to-mug
```

Go to the project directory

```bash
  cd where-to-mug
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Deployment

3 step process to deploying the site properly on vercel

- Fork this repository into your own GitHub account.
- Using vercel, deploy the repository. [Learn how to deploy on vercel](https://vercel.com/docs/introduction)
- Put in the following enviornment variables. [Learn how to add env variables on vercel](https://vercel.com/docs/environment-variables)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`EMAILJS_TEMPLATE_ID`

`EMAILJS_USER_ID`

`EMAILJS_SERVICE_ID`

`SENTRY_SERVER_INIT_PATH`

`SENTRY_UR`

`SENTRY_ORG`

`SENTRY_PROJECT`

`SENTRY_AUTH_TOKEN`

## API Reference

#### Get filtered rooms

```http
  GET /api?currentDay=${currentDay}&timeSlot=${timeSlot}&searchText=${encodedSearchText}&cluster=${cluster}
```

| Parameter    | Type     | Description     |
| :----------- | :------- | :-------------- |
| `currentDay` | `string` | target day      |
| `timeSlot`   | `string` | target timeSlot |
| `searchText` | `string` | target Room     |
| `cluster`    | `string` | target cluster  |

## Acknowledgements

- [@kenrick95](https://github.com/kenrick95/plan/tree/master/back_end/data/parsed/json) for the rooms data
- [@Raymond](https://github.com/Cozinater) for the project idea
- [@Kayle](https://github.com/HJunyuan) for improvement suggestions
- [@JiaYin](https://github.com/lhinjy) for helping test and provide ui related feedback

## Feedback

If you have any feedback, please raise an issue in this repository

or

Write in to us using the feedback from, located at the bottom right of the [website](https://wheretomug.ml/)

## Authors

- [@YingSheng](https://yeowys.com)
- [@OkkarMin](https://okkarm.in)
