export default function Section({title, children}){
    return (
    <div className="mb-10">
        <div className="bg-yellow-700 justify-items-center">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <h3 className="text-2xl">Produtos em destaque</h3>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
    );
}