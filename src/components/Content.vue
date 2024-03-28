<template>
  <BaseCard
    ><div>
      <img
        src="../assets/pics/article-photo.jpeg"
        alt=""
        class="rounded-[20px]"
      />
    </div>
    <div class="flex gap-1">
      <InfoSpan> 12.08.2023 </InfoSpan>
      <InfoSpan> პოლიტიკა </InfoSpan>
    </div>
    <div>
      <h2
        class="text-headline-2 font-semibold leading-headline-2 text-black-900"
      >
        ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული
        პროექტები დაიწყება
      </h2>
    </div>
  </BaseCard>
  <BaseCard class="max-h-[330px] min-h-[330px] overflow-y-scroll">
    <h3
      class="text-headline-mobile font-semibold leading-headline-2 tracking-headline-3 text-black-900"
    >
      ყველა სიახლე
    </h3>
    <ul class="flex flex-col gap-4 pt-4">
      <li v-for="article in articles" class="border-b-2 border-dashed pb-4">
        <div
          class="mb-2 flex items-center gap-[8px] text-small-text font-bold leading-small-text text-primary"
        >
          <span><img :src="watchIcon" alt="svg watch icon" /></span
          >{{ article.time }}<span>&#x2022;</span
          ><span>{{ article.date }}</span>
        </div>
        <p class="font-normal">{{ article.title }}</p>
      </li>
    </ul>
  </BaseCard>
</template>
<script>
import BaseCard from "./common/content/BaseCard.vue";
import InfoSpan from "./common/content/InfoSpan.vue";

import watchIcon from "../assets/svg/watch.svg";
export default {
  name: "Content",
  components: {
    BaseCard,
    InfoSpan,
  },
  data() {
    return {
      watchIcon,
      articles: [
        {
          title: "სტატია 1 - ქართული ტექსტი - მეტი ინფორმაცია თემის შესახებ",
          date: "2023-08-12",
          time: "7:30",
          image: "../assets/pics/article1.jpeg",
        },
        {
          title: "სტატია 2 - ქართული ტექსტი - მეტი ინფორმაცია თემის შესახებ",
          date: "2023-08-13",
          time: "8:45",
          image: "../assets/pics/article2.jpeg",
        },
        {
          title: "სტატია 3 - ქართული ტექსტი - მეტი ინფორმაცია თემის შესახებ",
          date: "2023-08-14",
          time: "10:15",
          image: "../assets/pics/article3.jpeg",
        },
        {
          title: "სტატია 4",
          date: "2023-08-15",
          time: "12:30",
          image: "../assets/pics/article4.jpeg",
        },
        {
          title: "სტატია 5",
          date: "2023-08-16",
          time: "14:45",
          image: "../assets/pics/article5.jpeg",
        },
        {
          title: "სტატია 6",
          date: "2023-08-17",
          time: "16:00",
          image: "../assets/pics/article6.jpeg",
        },
        {
          title: "სტატია 7",
          date: "2023-08-18",
          time: "18:15",
          image: "../assets/pics/article7.jpeg",
        },
        {
          title: "სტატია 8",
          date: "2023-08-19",
          time: "20:30",
          image: "../assets/pics/article8.jpeg",
        },
        {
          title: "სტატია 9",
          date: "2023-08-20",
          time: "22:45",
          image: "../assets/pics/article9.jpeg",
        },
        {
          title: "სტატია 10",
          date: "2023-08-21",
          time: "9:00",
          image: "../assets/pics/article10.jpeg",
        },
        {
          title: "სტატია 11",
          date: "2023-08-22",
          time: "11:15",
          image: "../assets/pics/article11.jpeg",
        },
      ],
    };
  },
};
</script>
