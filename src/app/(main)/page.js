import LeftSideBar from "@/components/hompage/news/LeftSideBar";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
}
export default async function Home() {

  const categoreis = await getCategories();
  

  return (
    <>
    <div className="grid grid-cols-12 gap-3 my-14">
        <div className="font-semibold col-span-3">
        <LeftSideBar categoreis={categoreis} activeId={"01"}></LeftSideBar>
        </div>
        <div className="font-semibold col-span-7">
      Dragon News 
    </div>
        <div className="font-semibold col-span-2">
      Login With
    </div>
    </div>
    </>
    );
}
