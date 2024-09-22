import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeList from "../../components/navbar/recipe-item"

export default function Favorites() {
    const { favoritesList } = useContext(GlobalContext)
    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {
                favoritesList && favoritesList.length > 0 ?
                    favoritesList.map((item) => <RecipeList key={item.id} item={item} />)
                    :
                    <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        <p>Nothing to show add favorites</p>
                    </div>
            }

        </div>
    )
}