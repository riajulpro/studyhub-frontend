import ClipSection from "@/components/home/ClipSection";
import HomeView from "@/views/HomeView";

export default function Home() {
  return (
    <main className="">
      <div className="layout_container">
        <HomeView />
      </div>
      <ClipSection />
    </main>
  );
}
