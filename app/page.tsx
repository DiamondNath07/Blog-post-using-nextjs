import Blog from "@/components/blog/Blog";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <div className="opencore-bg min-h-screen ">
      <Navigation />
      <div className="mt-7 max-w-80 m-auto sm:max-w-screen-lg sm:flex sm:items-center sm:justify-center	xl:max-w-screen-2xl	gap-14 sm:mt-20 ">
        <h1
          className="text-3xl	font-bold  text-center sm:max-w-2xl sm:text-6xl	  "
          style={{
            color: "#10202E",
          }}
        >
          Atlast Premier
          <br />
          knowledge Blogs:
        </h1>
        <p className=" mt-4  text-sm sm:text-2xl font-medium sm:max-w-lg " style={{ color: "#667085" }}>
          "Immerse yourself in the latest knowledge and research from our team of
          software engineers and design professionals.
        </p>
      </div>

      <div className="mt-7 max-w-80 m-auto sm:mt-16 sm:max-w-screen-lg 	xl:max-w-screen-2xl ">
        <div className="flex flex-col justify-center items-center bg-white rounded-2xl p-2 sm:flex sm:flex-row sm:sm:max-w-screen-lg m-auto">
          <div className=" sm:w-11/12 ">
           <img 
            src="../assets/MacBook.png"
            alt="macbook.png"
            className="rounded-t-2xl  sm:rounded-l-2xl sm:rounded-r-none	 "
          

          />
          </div>
          <div
            className="p-4 flex flex-col justify-center items-center rounded-b-2xl sm:h-full "
            style={{
              backgroundColor: "#f4f4f4",
            
            }}
          >
            <h5
              className="mt-8 text-sm"
              style={{
                color: "#667085",
              }}
            >
              FREELANCING 101 &#x2022;
              <span> Joseph Patrick</span>
            </h5>

            <h2
              className="text-3xl text-center mt-4 font-medium"
              style={{ color: "#344054" }}
            >
              07 Ways to get Consistent Clients from Social Media
            </h2>
            <h5
              className="mt-10 text-sm"
              style={{
                color: "#667085",
              }}
            >
              15 Min Read &#x2022;
              <span> 23-05-2023</span>
            </h5>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
}
