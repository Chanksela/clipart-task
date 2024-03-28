<template>
  <div class="lg:grid lg:grid-cols-8 lg:gap-x-8 xl:grid-cols-12">
    <SliderCard class="lg:col-span-8 xl:col-span-10">
      <div>
        <img
          src="../assets/pics/article1.jpeg"
          alt=""
          class="mb-4 rounded-[20px]"
        />
      </div>
      <div class="mb-2 flex gap-1">
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
    </SliderCard>
    <BaseCard class="max-h-[330px] min-h-[330px] lg:col-span-4 xl:col-span-2">
      <BaseCardTitle>ყველა სიახლე</BaseCardTitle>
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
    <BaseCard
      class="max-h-[330px] min-h-[330px] lg:col-span-4 xl:col-span-3 xl:flex-col xl:overflow-y-scroll"
    >
      <BaseCardTitle>პოპულარული</BaseCardTitle>
      <ul class="flex flex-col gap-4">
        <li
          class="flex items-center gap-2 border-b-2 border-dashed pb-4"
          v-for="article in articles"
        >
          <div>
            <img
              :src="article.image"
              alt=""
              class="max-h-[96px] min-h-[96px] min-w-[96px] max-w-[96px] rounded-lg object-cover"
            />
          </div>
          <p
            class="min-w-[224px] text-headline-3 font-normal leading-5 tracking-headline-3 text-black-900"
          >
            {{ article.title }}
          </p>
        </li>
      </ul>
    </BaseCard>
    <BaseCard class="lg:col-span-8 xl:col-span-9">
      <BaseCardTitle> ცნობილი ფაქტები</BaseCardTitle>
      <ul class="flex items-center gap-4">
        <li
          v-for="article in articles"
          class="flex min-w-[320px] flex-col gap-2 rounded-[20px] bg-primary-light p-12 pb-16 lg:min-w-[312px]"
        >
          <div>
            <img
              :src="article.image"
              :alt="article.title"
              class="max-h-[120px] min-h-[120px] min-w-[100%] rounded-[20px] object-cover"
            />
          </div>
          <p
            class="text-headline-mobile font-medium leading-text tracking-headline-3 text-black-900"
          >
            {{ article.title }}
          </p>
        </li>
      </ul>
    </BaseCard>
    <BaseCard
      v-for="(article, index) in articles"
      :key="index"
      :class="{
        'lg:col-span-8': index === 0,
        'lg:col-span-4': index !== 0,
      }"
      class="xl:col-span-4"
    >
      <div>
        <img
          :src="article.image"
          alt=""
          class="mb-4 w-full rounded-[20px] object-cover xl:h-[160px]"
          :class="{
            'lg:h-auto': index === 0,
            'lg:h-[160px]': index !== 0,
          }"
        />
      </div>
      <div class="mb-2 flex gap-1">
        <InfoSpan> {{ article.date }} </InfoSpan>
        <InfoSpan> {{ article.category }} </InfoSpan>
      </div>
      <div>
        <h2
          class="text-headline-mobile font-medium leading-headline-2 text-black-900"
        >
          {{ article.title }}
        </h2>
      </div>
    </BaseCard>
  </div>
</template>
<script>
import SliderCard from "./common/content/SliderCard.vue";
import BaseCard from "./common/content/BaseCard.vue";
import BaseCardTitle from "./common/content/BaseCardTitle.vue";
import InfoSpan from "./common/content/InfoSpan.vue";

import watchIcon from "../assets/svg/watch.svg";
export default {
  name: "Content",
  components: {
    SliderCard,
    BaseCard,
    BaseCardTitle,
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
          image: "../src/assets/pics/article3.jpeg",
          category: "პოლიტიკა",
        },
        {
          title: "სტატია 2 - ქართული ტექსტი - მეტი ინფორმაცია თემის შესახებ",
          date: "2023-08-13",
          time: "8:45",
          image: "../src/assets/pics/article4.jpeg",
          category: "საზოგადოება",
        },
        {
          title: "სტატია 3 - ქართული ტექსტი - მეტი ინფორმაცია თემის შესახებ",
          date: "2023-08-14",
          time: "10:15",
          image: "../src/assets/pics/article3.jpeg",
          category: "სამართალი",
        },
        {
          title: "სტატია 4",
          date: "2023-08-15",
          time: "12:30",
          image: "../src/assets/pics/article2.jpeg",
          category: "ბიზნესი & ეკონომიკა",
        },
        {
          title: "სტატია 5",
          date: "2023-08-16",
          time: "14:45",
          image: "../src/assets/pics/article5.jpeg",
          category: "ბიზნესი & ეკონომიკა",
        },
        {
          title: "სტატია 6",
          date: "2023-08-17",
          time: "16:00",
          image: "../src/assets/pics/article6.jpeg",
          category: "ეკონომიკა",
        },
        {
          title: "სტატია 7",
          date: "2023-08-18",
          time: "18:15",
          image: "../src/assets/pics/article1.jpeg",
          category: "რელიგია",
        },
        {
          title: "სტატია 8",
          date: "2023-08-19",
          time: "20:30",
          image: "../src/assets/pics/article4.jpeg",
          category: "პოლიტიკა",
        },
        {
          title: "სტატია 9",
          date: "2023-08-20",
          time: "22:45",
          image: "../src/assets/pics/article3.jpeg",
          category: "საზოგადოება",
        },
        {
          title: "სტატია 10",
          date: "2023-08-21",
          time: "9:00",
          image: "../src/assets/pics/article2.jpeg",
          category: "სამართალი",
        },
        {
          title: "სტატია 11",
          date: "2023-08-22",
          time: "11:15",
          image: "../src/assets/pics/article6.jpeg",
          category: "ბიზნესი & ეკონომიკა",
        },
      ],
    };
  },
};
</script>
