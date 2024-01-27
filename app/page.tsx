import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import BackgroundImage from "@/components/commons/Background/BackgroundImg";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/Hero";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <div className="opencore-bg min-h-screen ">
      <Navigation />
      <Hero />
      <Banner
        banner={{
          tag: "FREELANCING 101",
          author: "Joseph Patrick",
          title: "07 Ways to get Consistent Clients from Social Media",
          readTime: "15 Min Read",
          date: "23-05-2023",
        }}
        variant="default"
      />
      <div className="hidden sm:block">
        <BackgroundImage
          imageUrl="../../assets/Navbg.png"
          height="100px"
          showOnSmallScreen={true}
        />
      </div>
      <Blog />
      <Footer/>
    </div>
  );
}
