import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { benefitThree } from "../../components/data";
import Contact from "@/components/Contact";


export default function About() {

    /**
     *  About Hooks.
     */

  return (
    <>
      <Container>
        <div className="max-w-screen">
          <SectionTitle preTitle="" title="ԷԼԼԻՊՍ ՇԻՆ">
            «ԷԼԼԻՊՍ ՇԻՆ» ՍՊԸ-ն քաղաքաշինության բնագավառում շինարարության որակի
            տեխնիկական հսկողություն իրականացնող կազմակերպությունը:
          </SectionTitle>
          <div className="mt-10" />
          <div className="flex flex-col w-full">
            <div className="mb-8">
              <p className="text-xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight  xl:leading-tight dark:text-white mb-2">
                Ընկերություն է ստեղծվել է 2020 թվականին: Քաղաքաշինության
                բնագավառում ունի բնակելի, հասարակական և արտադրական ոլորտի
                շինարարության որակի տեխնիկական հսկողության համապատասխան
                լիցենզիա:
              </p>
              <div className="mt-5" />
              <p className="text-xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight  xl:leading-tight dark:text-white mb-2">
                Ստեղծման օրվանից մինչ օրս կազմակերպությունը մասնակցել է մի շարք
                շինարարական ծրագրերին այդ թվում՝
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8" />
        <div className="max-w-screen">
          <div className="flex  items-center justify-center dark:text-gray-100 px-6 md:px-60">
            <div className="space-y-6 border-l-2 border-dashed">
              <div className="relative w-full h-20">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg> */}
                <div className="ml-6">
                  <h4 className="font-bold text-base dark:text-gray-100">1.</h4>
                  <p className="mt-2 max-w-screen-sm text-sm dark:text-gray-100">
                    «Զինվորի Տուն» բարեգործական հասարակական կազմակերպության
                    կողմից իրականացվող հին մասնաշենքի վերակառուցման
                    աշխատանքներին,
                  </p>
                </div>
              </div>
              <div className="relative w-full h-20">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg> */}
                <div className="ml-6">
                  <h4 className="font-bold text-base dark:text-gray-100">2.</h4>
                  <p className="mt-2 max-w-screen-sm text-sm dark:text-gray-100">
                    «Հայոց ցեղասպանության թանգարանի» տարածքի բարեկարգման
                    աշխատանքներին:
                  </p>
                </div>
              </div>
              <div className="relative w-full h-20">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg> */}
                <div className="ml-6">
                  <h4 className="font-bold text-base dark:text-gray-100">3.</h4>
                  <p className="mt-2 max-w-screen-sm text-sm dark:text-gray-100">
                    Ներկայումս կազմակերպության կողմից իրականացվում է չորրորդ
                    կարգի բարդության բարձրահարկ բազմաբնակարան բնակելի շենքերի,
                    այդ թվում «Լույսեր բնակելի համալիրի» շինարարության որակի
                    տեխնիկական հսկողության աշխատանքներ:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
            <Contact />
        </div>
      </Container>
    </>
  );
}
