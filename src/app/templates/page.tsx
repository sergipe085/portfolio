import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { Title } from "@/components/ui/title";

export default function TemplatesHome() {
    return (
        <div className="h-[100vh]">
          {/* <HeroParallax products={products} /> */}
          <div className="fixed pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_75%,black)]"></div>
          <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.05] h-full flex flex-col items-center justify-start pb-40 overflow-x-hidden">
            
            <div className="w-full h-full items-center justify-center flex gap-8 flex-col mt-16">
              <Title>Want to create an <FlipWords words={["funny", "imerssive", "beautiful"]}/> game?</Title>
              <Button>Contact me</Button>
            </div>
          </div>
        </div>
    );
}