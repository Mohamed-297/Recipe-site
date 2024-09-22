import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeList from "../../components/navbar/recipe-item"

export default function Home() {
    const { recipeList, loading } = useContext(GlobalContext)
    if (loading) return <div>Loading...Please wait!</div>
    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {
                recipeList && recipeList.length > 0 ?
                    recipeList.map(item => <RecipeList item={item} />)
                    :
                    <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        <p>Nothing to show. please search something else</p>
                    </div>
            }

        </div>
    )
}