export default function ProductCard({title, price, image}){
    return (
        <div className={`flex items-center border rounded-lg p-4 border-red-700 shadow hover:scale-102 transition transform duration-200`}>
            <div className="justify-items-center">
                <h3 className="font-bold text-lg">{title}</h3>
                <img src={image} className="size-12" />
                <p className="text-gray-400 mt-2 font-bold">{price}</p>
            </div>
        </div>
    );
}