import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      {/* <Hero /> */}
      <SectionTitle
        preTitle=""
        title=" ԷԼԼԻՊՍ ՇԻՆ"
      >
        «ԷԼԼԻՊՍ ՇԻՆ» ՍՊԸ-ն քաղաքաշինության բնագավառում շինարարության որակի տեխնիկական
        հսկողություն իրականացնող կազմակերպությունը:
      </SectionTitle>

      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        preTitle=""
        title="ԷԼԼԻՊՍ ՇԻՆ"
      >
        Քաղաքաշինության բնագավառում ունի բնակելի, հասարակական և արտադրական ոլորտի
        շինարարության որակի տեխնիկական հսկողության համապատասխան լիցենզիա:
      </SectionTitle>

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}

      <Testimonials />

      <SectionTitle preTitle="" title="Էլլիպս Շին">
      «Էլլիպս Շին» ՍՊ ընկերությունը համալրված է փորձառու մասնագետներով։
      </SectionTitle>

      {/* <Faq /> */}
      {/* <Cta /> */}
    </Container>
  );
}
