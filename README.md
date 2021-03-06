# Where To Mug

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Introduction">Introduction</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#Tech-Stack">Tech Stack</a></li>
    <li><a href="#Documentation">Documentation</a>
    <ul>
        <li><a href="#Folder-Structure">Folder Structure</a></li>
      </ul>
    </li>
    <li><a href="#Run-Locally">Run Locally</a></li>
    <li><a href="#Deployment">Deployment</a></li>
    <li><a href="#Environment-Variables">Environment Variables</a></li>
    <li><a href="#API-Reference">API Reference</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#Feedback">Feedback</a></li>
    <li><a href="#Authors">Authors</a></li>
  </ol>
</details>

# Introduction

Ever wonder which tutorial room is free\* and which is not? ๐คจ

This tool could help you find out your dream tutorial room ๐ฅณ

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

### Folder Structure

```
    which-room-free/
    โโ๐ data
    โ โโ rooms_with_cluster.json        //Rooms with cluster info
    โ โโ room_ids.json                  //Rooms with IDs info
    โ โโ room_occupancy.json            //Rooms with occupancy info
    โโ๐ public
    โ โโ๐ assets
    โ โ โโ room_not_found_image.svg     //Svg image for room not found
    โ โ โโ study_modal_image.svg        //Svg image for intro modal
    โโ๐ src
    โ โโ๐ components
    โ โ โโ ScrollToTop.js               //Scroll to top button
    โ โ โโ DisclaimerModel.tsx
    โ โ โโ Feedback.js                  //Feedback form
    โ โ โโ FilterOptions.tsx            //Room filter
    โ โ โโ FreeRoomCard.tsx             //Individual room card
    โ โ โโ FreeRoomsCardList.tsx        //List of room cards
    โ โ โโ Main.tsx                     //Component for main page
    โ โ โโ RoomNotFound.tsx             //Room not found component
    โ โโ๐ pages
    โ โ โโ๐ api
    โ โ โ โโ index.js                   //API to filter rooms
    โ โ โโ index.tsx                    //Main page
    โ โโ theme.tsx                      //Styling for the website
    โโREADME.md
```

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

- <img src="https://avatars.githubusercontent.com/u/3090380?s=50&v=4" alt="kendrik" height="50px" width="50px" /> [Kenrick95](https://github.com/kenrick95/plan/tree/master/back_end/data/parsed/json) for the rooms data
- <img src="https://avatars.githubusercontent.com/u/29200919?s=50&v=4" alt="raymond" height="50px" width="50px" /> [Raymond](https://github.com/Cozinater) for the project idea
- <img src="https://avatars.githubusercontent.com/u/37650399?s=50&v=4" alt="kyle" height="50px" width="50px" /> [Kyle](https://github.com/HJunyuan) for improvement suggestions
- <img src="https://avatars.githubusercontent.com/u/48309567?s=50&v=4" alt="jiayin" height="50px" width="50px" /> [JiaYin](https://github.com/lhinjy) for helping test and provide ui related feedback

## Feedback

If you have any feedback, please raise an issue in this repository

or

Write in to us using the feedback from, located at the bottom right of the [website](https://wheretomug.ml/)

## Authors

- <img src="https://avatars.githubusercontent.com/u/70012669?s=50&v=4" alt="yingsheng"  /> [YingSheng](https://yeowys.com)
- <img src="https://avatars.githubusercontent.com/u/24297303?s=50&v=4" alt="okkar"  /> [OkkarMin](https://okkarm.in)
