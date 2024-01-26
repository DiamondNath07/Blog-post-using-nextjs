import Blog from "@/components/blog/Blog";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <div className="opencore-bg min-h-screen">
      <Navigation />
      <div className="mt-7 max-w-80 m-auto ">
        <h1 className="text-blue-950">
          Atlast Premier 
          <br />
          knowledge Blogs:
        </h1>
        <p>
          Immerse yourself in the latest knowledge and research from our team of
          software engineers and design professionals.
        </p>
      </div>
      <Blog />
    </div>
  );
}
