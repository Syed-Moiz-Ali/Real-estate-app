
import {React,useEffect} from 'react'
import "./FilterButton.scss"
function FilterButton({active,setActive,setFiltered,data}) {


  useEffect(() => {
    if (active === "none") {
      setFiltered(data);
      return;
    }
  const filtered = data.filter((item)=>
  item.category.includes(active)
  )
  setFiltered(filtered)
    
  }, [active])
  
  
  return (
    <div>
       <div className="filter-buttons">
          <button className={active === "none" ? "active btn" :  "btn"} onClick={() => setActive("none")}>
            all
          </button>
          <button className={active === "rent" ? "active btn" : "btn"} onClick={() => setActive("rent")}>
            rent
          </button>
          <button className={active === "buy" ? "active btn" : "btn"} onClick={() => setActive("buy")}>
            buy
          </button>
          <button className={active === "sell" ? "active btn" : "btn"} onClick={() => setActive("sell")}>
            sell
          </button>
          

        </div>
    </div>
  )
}

export default FilterButton
