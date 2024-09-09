import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";
import ArticleOne from "../../public/img/article-one.jpg";
import AeticleTwo from "../../public/img/article-two.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="w-full md:w-9/12 md:mx-auto grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {/* <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Share a real <Mark>testimonial</Mark>
              that hits some of your benefits from one of your popular customer.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div> */}
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <Image
            src={ArticleOne}
            objectFit="cover"
            width={225}
            height={300}
            className="h-80 w-full "
            alt="article-one"
          />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              2021 Նոյեմբեր - 2024 Դեկտեմբեր
            </time>
            <div className="mt-10" />
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                Զովունի, բարձրահարկ բնակելի շենք, 4-րդ կարգի բարդության։
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Զովեր Էկո Ռեզիդենս բնակելի թաղամասն առաջարկում է ոչ միայն
              քաղաքային աղմուկից և անբավարար մաքրության օդից հեռու հանգիստ,
              էկոլոգիապես մաքուր միջավայր, այլև իր նորարարական լուծումներով,
              առկա առավելություններով նոր էջ է բացում շուկայում ժամանակակից
              բնակարանաշինության և հարամարավետ ու անհոգ ապրելակերպի ճիշտ
              համադրությամբ։ Մեր նպատակն է ապահովել ոչ միայն մեր քաղաքացիների
              տարատեսակ պահանջմունքներն այս ոլորտում, այլև գոհացնել նույնիսկ
              ամենաքմահաճ գնորդներին։
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <Image
            src={AeticleTwo}
            objectFit="cover"
            width={225}
            height={300}
            className="h-80 w-full "
            alt="article-one"
          />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              2021 Նոյեմբեր 
            </time>
            <div className="mt-10" />
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                Լույսեր բնակելի համալիր &quot;Բ&quot; և &quot;Դ&quot; մասնաշենքեր, ք. Երևան, 4-րդ
                կարգի բարդության
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              «Լույսեր» բնակելի համալիրն իր անվանումը ստացել է ճարտարապետական
              նախագծման լուսավոր ու ազատ լուծումների շնորհիվ։ Համալիրը բաղկացած
              է չորս շենքից, որոնք ունեն տարբերվող ճարտարապետություն և
              պատուհաններից բացվող ազատ ու գեղեցիկ տեսարան, այդ թվում՝ դեպի
              Արարատ լեռ։
            </p>
          </div>
        </article>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
