"use clint"
import Header from "@/components/ui/Header/header";


import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Sample Projects Array
const projects = [
  {
    id: 1,
    title: "Task Manager App",
    description: "A task management app built with Next.js and TailwindCSS.",
    image:"/2.jpg", // Replace with your correct image path
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "An e-commerce platform built with React and Node.js.",
    image: "/laptop1.jpg", // Replace with your correct image path
  },
  // Add more projects here...
];

export default function Cake() {
  return (
    <div className="bg-white text-black"> {/* Ensure full-page color consistency */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white py-20 text-center">
        <Header />
        <div className="flex flex-col items-center">
          <Image
            src='/image.jpg'//Ensure image is in public/images folder
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mb-4 shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-2">Kiran Naveed</h1>
          <p className="text-lg max-w-2xl">
            I am a web developer specializing in Next.js and TypeScript. I love building modern, scalable web applications.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="p-8">
        
        {/* About Section */}
        <section id="about" className="my-8 text-center  bg-purple-300  py-8"> {/* Added background color for better contrast */}
          <h2 className="text-3xl font-bold text-fuchsia-600 bg-purple-200">About Me</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto bg-purple-300">
            Passionate web developer with a strong focus on building performant web applications using modern technologies like Next.js, TypeScript, and TailwindCSS...
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-8 bg-purple-300 py-8"> {/* White background for consistency */}
          <h2 className="text-3xl font-bold text-fuchsia-600 text-center mb-6">
            My Projects
          </h2>

          {/* Responsive Grid for Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="p-4 shadow-lg hover:shadow-2xl transition-all duration-300">
               <Image
                  src='/laptop1.jpg'// Ensure this path is correct and image is in /public/images
                  alt={project.title}
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-bold mt-4">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-8">
            <Button className="hover:bg-purple-700 transition-colors duration-200"><a href="https://github.com/erumQaimkhani/erumproject.git">
       View All Projects
          </a>
              </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-8 text-center bg-gray-500 py-8"> {/* Another contrast background */}
          <h2 className="text-3xl font-bold text-fuchsia-500 mb-4 hover:text-pink-500">Contact Me</h2>
          <p className="text-lg">
            Feel free to reach out at{" "}
            <a href="mailto:kirannaveed523@gmail.com" className="text-fuchsia-500 underline hover:text-pink-400">
              kirannaveed523@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
