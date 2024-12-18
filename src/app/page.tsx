import FormSection from "@/components/FormSection";
import SideBar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex'>
      <SideBar/>
      <FormSection/>
    </div>
  );
}
``