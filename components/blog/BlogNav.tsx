import React from "react";

const BlogNav: React.FC = () => {
  const navigationItems = [
    {
      text: "All Blogs",
      href: "/",
      className: " px-3 py-2 rounded-full ",
      style: {
        backgroundColor: "#EDF2F5",
        color: "#294F74",
      },
      colSpan: 3,
    },
    {
      text: "Trends",
      href: "/",
      className: " px-2 text-left",
      style: { color: "#98A2B3" },
      colSpan: 3,
    },
    { text: "Research", href: "/", style: { color: "#98A2B3" } },
    { text: "Research", href: "/", style: { color: "#98A2B3" } },
    { text: "In-house knowledge", href: "/", style: { color: "#98A2B3" } },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-16 sm:flex-row sm:max-w-7xl sm:m-auto sm:mt-24  ">
      <h1
        className="text-5xl font-bold sm:w-full"
        style={{
          color: "#344054",
        }}
      >
        Blogs
      </h1>
      <ul
        className="grid grid-cols-6 max-w-sm m-auto text-xs justify-center items-center text-center mt-8 gap-6 sm:flex sm:flex-row sm:justify-between sm:max-w-3xl  sm:w-full sm:items-center"
        style={{
          color: "#98A2B3",
        }}
      >
        {navigationItems.map((item, index) => (
          <li
            key={index}
            className={`col-span-${item.colSpan || 2} ${item.className || ""}`}
          >
            <a
              className={`mt-8 text-sm sm:mt-0 ${
                item.text === "All Blogs"
                  ? "border-2 px-3 py-2 rounded-full"
                  : ""
              }`}
              href={item.href}
              style={item.style}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogNav;
