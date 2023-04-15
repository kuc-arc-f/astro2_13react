const prmServer = Common.getServerConfig();
console.log(prmServer);
const useState = React.useState;
const useEffect = React.useEffect;
//
const App = () => {
    const [items, setItems] = useState([])
    //
    useEffect(async() => {
        const testItems = await Crud.getList(prmServer);
        setItems(testItems);
        console.log(testItems);
    }, []);  
    //
    return (
        <div>
        {items.map((item, index) => {
            return (
            <div key={item.id}>
                <h3>{item.title}</h3>
                ID: {item.id}
                <span class="mx-2">
                    <a href={`/gpt2/show/${item.id}`} class="btn btn-sm btn-outline-primary"
                    >Show</a>					
                </span>
                <hr class="my-2" />
            </div>
            )
        })}             
        </div>
    )
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

