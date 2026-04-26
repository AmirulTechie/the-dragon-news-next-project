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
          <p>All Categories</p>
        <ul className="flex flex-col gap-3 mt-5">
            {
              categoreis.map((catagory) => {
                return <li key={catagory.catagory_id} 
                className="bg-slate-100 p-4 text-center rounded-md"
                >{catagory.category_name}</li>
              })
            }
        </ul>  
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
