import { Link
    
 } from "react-router-dom";
function Dashboard () {
    return (
        <div className="flex">
            <div className="w-48 p-3 flex flex-col items-center gap-2">
                <h1 className=" mb-2">
                    NAVBAR
                </h1>
                <Link to="/user" className=" btn w-100 rounded-0 text-decoration-none">
                        User info
                </Link>
                <Link to="/items-in" className=" btn w-100 rounded-0 text-decoration-none">
                        Items in
                </Link>
                <Link to="/items-sold" className=" btn w-100 rounded-0 text-decoration-none">
                        Items Sold
                </Link>
                <Link to="/sales" className=" btn w-100 rounded-0 text-decoration-none">
                        Sales
                </Link>
                <Link to="/suppliers" className=" btn w-100 rounded-0 text-decoration-none">
                        Suppliers
                </Link>
                <Link to="/settings" className=" btn w-100 rounded-0 text-decoration-none">
                        Settings
                </Link>
                <Link to="/" className=" btn rounded-0 text-decoration-none">
                        Logout
                </Link>
            </div>
            <div className="flex flex-col p-3 gap-3 items-center h-screen bg-gray-200 w-full">
                <h2 className="text-4xl font-bold leading-10">
                    MORIAH dashboard
                </h2> 
                <div className="bg-white w-full h-72">
                    <form action="">
                        <div className="flex gap-2">
                            <div className="">
                                <label htmlFor="">
                                    <strong>Item</strong>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Item name"
                                    className="form-control"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="">
                                    <strong>Quantity</strong>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Enter Quantity ml"
                                    className="form-control"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="">
                                    <strong>Pieces</strong>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Total pcs"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bg-white w-full h-screen">
                    items sold
                </div>
            </div>
        </div>
    )
}

export default Dashboard;