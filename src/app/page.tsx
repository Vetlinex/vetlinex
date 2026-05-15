import HeroVideo from "@/components/HeroVideo";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <div className="">
       <HeroVideo primaryVideo="/videos/video_portada.mp4" secondaryVideo="/videos/shampoos.mp4" />
       <div id="about">
        <MainSection/>
       </div>
    </div>
  );
}
