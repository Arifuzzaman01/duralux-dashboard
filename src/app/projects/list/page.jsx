
import React from "react";
import fs from "fs/promises";
import path from "path";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ProjectTable from "@/components/projects/ProjectTable";
import PageReSize from "@/components/projects/PageReSize";

async function getProjects() {
  try {
    const filePath = path.join(process.cwd(), "data", "projects.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Data fetch error:", error);
    return [];
  }
}

export default async function ProjectListPage() {
  const data = await getProjects();
  // const pageRef = useRef(10)

  return (
    <div className=" bg-[#f8f9fa] min-h-screen">
      <div className="flex  justify-between items-center  bg-white p-3">
        <div className="flex items-center gap-2">
          <h2 className=" md:text-xl font-bold text-gray-800">Projects</h2>
          <p className="text-gray-400 text-sm mt-1">Home &gt; List</p>
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          
          className="h-20 md:!p-5 bg-blue-600"
        >
          CREATE PROJECT
        </Button>
      </div>
      <div className=" md:p-5">
        <div className="bg-white p-2 md:p-4 rounded-lg shadow-sm ">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center py-3 sm:py-5 gap-5 w-full ">
           <div className="w-full sm:w-fit">
             <PageReSize />
           </div>
            <div className="flex  items-center gap-4 w-full sm:w-fit">
              <p className="text-gray-400 hidden sm:block">Search :</p>
              <input
                type="text"
                placeholder="Search..."
                className="text-gray-600 px-4 py-2.5 border border-gray-300 rounded-md outline-0"
              />
              <p className="text-gray-400 sm:hidden" >Search</p>
            </div>
          </div>
          <ProjectTable data={data}  />
        </div>
      </div>
    </div>
  );
}
