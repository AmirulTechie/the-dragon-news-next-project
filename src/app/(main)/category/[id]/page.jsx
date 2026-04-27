import LeftSideBar from "@/components/hompage/news/LeftSideBar";
import RightSideBar from "@/components/hompage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";





export default async function NewsCategoryPage({params}) {
    const {id} = await params;
    const categoreis = await getCategories();

    const news = await getNewsByCategoryId(id)

    return (
        <>
            <div className="grid grid-cols-12 gap-3 my-14">
                <div className="font-semibold col-span-3">
                    <LeftSideBar categoreis={categoreis} activeId={id}></LeftSideBar>
                </div>
                <div className="font-semibold col-span-7">
                    All News
                    <div className="space-y-4">
                        
                        {
                           news.length > 0 ?  news.map(n => {
                                return <div key={n._id} className="p-6 rounded-md border">
                                    {n.title}
                                </div>
                            }) :
                            <h2 className="text-center mt-30 text-2xl">No news here</h2>
                        }
                    </div>
                </div>
                <div className="font-semibold col-span-2">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </>
    );
}
