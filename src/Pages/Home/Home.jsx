import { React, useState, useEffect } from "react";
import Images from "../../img/imgaes.json";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.scss";
import { AiOutlineColumnWidth } from "react-icons/ai"
import { BiBed, BiBath } from "react-icons/bi"
import PopUp from "../../components/Popup/PopUp"
import FilterButton from "../../components/FilterButtons/FilterButton";
import SearchBar from "../../components/SearchBar/SearchBar"


const Home = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);


  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("all");
  const [popup, setPopup] = useState([])
  const [closeToggle, setCloseToggle] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const changePopup = (Estate) => {
    setPopup([Estate])
    setCloseToggle(!closeToggle)

  }

  useEffect(() => {
    const data = Images;

    setData(data);
    setSearchData(data);
    setFiltered(data)
  }, []);






  return (
    <>
      <div className="home-page">


        <div className="hero-section">

          <FilterButton data={data} setFiltered={setFiltered} active={active}
            setActive={setActive} className="hero-filter" />



          <SearchBar data={data} setFiltered={setFiltered} active={active}
            setActive={setActive} setSearchTerm={setSearchTerm} className="hero-search" />
        </div>




        {/* MAN LAYOUT  START */}
        <motion.div layout

          className="fetch-items">
          <AnimatePresence>
            {filtered.filter((Estate) => {
              if (searchTerm == "") {
                return Estate 
               
              } else if (Estate.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return Estate
              }
            }).map((Estate) => {
              const {
                id,
                title,
                img,
                address,
                builtup,
                rent,
                bathroom,
                bedroom,
              } = Estate;

              return (
                <motion.div layout  animate={{ opacity: 1, }}
                  
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ scale: 1.07 }}

                  className="item-container" key={id}
                  onClick={() => changePopup(Estate)} >
                  <div className="wrapper"  >           
                    <img src={img} alt="" />
                    <div className="details">
                      <h3>{rent}<span>/month</span> </h3>
                      <h4>{title}</h4>
                      <p>{address}</p>
                      <div className="flex-wrap">
                        <p><span><BiBed /></span>{bedroom}</p>
                        <p><span><BiBath /></span>{bathroom}</p>
                        <p><span><AiOutlineColumnWidth /></span>{builtup}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        <PopUp popup={popup} closeToggle={closeToggle} changePopup={changePopup} />

      </div>


    </>
  );
};

export default Home;
