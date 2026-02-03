import React from "react";
import fs from "fs/promises";
import path from "path";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ProjectTable from "@/components/projects/ProjectTable";

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

  return (
    <div className=" bg-[#f8f9fa] min-h-screen">
      <div className="flex justify-between items-center  bg-white p-3">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-gray-800">Projects</h2>
          <p className="text-gray-400 text-sm mt-1">Home &gt; List</p>
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          
          className="h-20 !p-5 bg-blue-600"
        >
          CREATE PROJECT
        </Button>
      </div>
      <div className="p-5">
        <div className="bg-white p-4 rounded-lg shadow-sm ">
          <div className="flex justify-between items-center py-5 mx-">
            <div className="flex items-center gap-2">
              <p className="text-gray-500">Show</p>
              <select className="p-2 border border-gray-300 rounded-md">
                <option value="10">10</option>
                <option value="10">20</option>
                <option value="10">30</option>
                <option value="10">40</option>
                <option value="10">50</option>
              </select>
              <p className="text-gray-500">entries</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-gray-400">Search :</p>
              <input
                type="text"
                placeholder="Search..."
                className="text-gray-600 px-4 py-2.5 border border-gray-300 rounded-md outline-0"
              />
            </div>
          </div>
          <ProjectTable data={data} />
        </div>
      </div>
    </div>
  );
}
