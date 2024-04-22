import BlogList from "./[ComposantIndex]/BLogList.js"

export default function Home() {
  return (

        <>

            <section className="">
            <form action="/search" method="get" className="">
                <div className="row w-100">
                    <div className="col-8 col-md-6 recherche">
                        <input type="button" value="Search" className="col-4 col-md-2" />
                        <input type="text" name="search" placeholder="" className="col-7 col-md-9" />
                    </div>
                    <div className="col-8 d-flex text-center col-md-6 trier">
                        <label className="col-8 col-md-6">Trier par :</label>
                        <select name="dropdown" className="col-10 col-md-6">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
            </form>
            </section>
            <BlogList></BlogList>
        </>
          
           
  );
}
