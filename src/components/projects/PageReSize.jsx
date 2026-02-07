"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function PageReSize() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageSize = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("limit", e.target.value); 
    
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <p className="text-gray-500">Show</p>
      <select 
        onChange={handlePageSize} 
        defaultValue={searchParams.get("limit") || "10"}
        className="p-2 border border-gray-300 rounded-md outline-none"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
      <p className="text-gray-500">entries</p>
    </div>
  );
}