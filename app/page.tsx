import Blog from "@/components/blog/Blog";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <div className="opencore-bg min-h-screen ">
      <Navigation />
      {/* hero section */}
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
        <p
          className=" mt-4  text-sm sm:text-2xl font-medium sm:max-w-lg "
          style={{ color: "#667085" }}
        >
          "Immerse yourself in the latest knowledge and research from our team
          of software engineers and design professionals.
        </p>
      </div>
          {/* card section */}
      <div className="mt-7 max-w-80 m-auto sm:mt-16 sm:max-w-screen-md 	xl:max-w-screen-lg ">
      
        <div className=" p-2 sm:p-3">
          <div className="flex flex-col justify-center items-center rounded-2xl p-2 sm:flex sm:flex-row sm:sm:max-w-screen-lg m-auto sm:max-h-96 bg-white ">
            <div
              className="sm:flex sm:flex-row rounded-2xl"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <div className=" sm:w-11/12 ">
                <img
                  src="../assets/MacBook.png"
                  alt="macbook.png"
                  className="rounded-t-2xl  sm:rounded-l-2xl sm:rounded-r-none sm:w-full sm:h-full 	 "
                />
              </div>
              <div className=" flex flex-col justify-center items-center px-4 rounded-b-2xl sm:w-full sm:p-16 sm:justify-start  sm:items-start pb-4">
                <h5
                  className="mt-8 text-sm sm:mt-0"
                  style={{
                    color: "#667085",
                  }}
                >
                  FREELANCING 101 &#x2022;
                  <span> Joseph Patrick</span>
                </h5>

                <h2
                  className="text-2xl text-center mt-4 font-medium sm:text-left sm:max-w-sm sm:text-3xl "
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
        </div>
        </div>
        {/* background-bottom */}
        <div
        className="hidden sm:block"
        style={{
          backgroundImage: `url("../../assets/Navbg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          height: "100px",
        }}
      ></div>
      <Blog />
    </div>
  );
}
