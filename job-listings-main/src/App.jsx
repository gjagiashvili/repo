import JobItem from "./components/JobItem";
import "./App.css";
import data from "./data.json";
import Modal from "./components/Modal";
import { useState } from "react";

const App = () => {
  const [searchJob, setSearchJob] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newData, setNewData] = useState(data);
  const [addData, setAddData] = useState([
    {
      name: "company",
      value: "",
    },
    {
      name: "position",
      value: "",
    },
    {
      name: "role",
      value: "",
    },
    {
      name: "level",
      value: "",
    },
    {
      name: "postedAt",
      value: "",
    },
    {
      name: "contract",
      value: "",
    },
    {
      name: "location",
      value: "",
    },
    {
      name: "languages",
      value: ""
    }
  ]);

  const addNewDataValue = (event, index) => {
    setAddData((prevData) => {
      const oldData = [...prevData];
      oldData[index] = {
        ...oldData[index],
        value: event.target.value,
      };
      return oldData;
    });
  };

  const addInputData = () => {
    setNewData([
      ...newData,
      {
        id: newData.length+100,
        company: addData[0].value,
        logo: null,
        new: true,
        featured: false,
        position: addData[1].value,
        role: addData[2].value,
        level: addData[3].value,
        postedAt: `${new Date().getHours()}:${new Date().getMinutes()}`,
        contract: addData[5].value,
        location: addData[6].value,
        languages: addData[7].value.split(" "),
        tools: [],
      },
    ]);
  };



  const clickHandler = (value) => {
    if (!searchJob.includes(value)) {
      setSearchJob([...searchJob, value]);
    }
  };

  const clearHandler = () => {
    setSearchJob([]);
  };

  const removeHandler = (item) => {
    const filteredArr = searchJob.filter((element) => element !== item);
    setSearchJob([...filteredArr]);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const seachArr = searchJob.map((item, index) => {
    return (
      <div key={index} className="searchjob-box">
        <p className="searchjob-text">{item}</p>
        <button
          className="searchjob-button"
          onClick={() => {
            removeHandler(item);
          }}
        >
          X
        </button>
      </div>
    );
  });

  const dataArr = newData.sort((a,b) => Number(b.new) - Number(a.new)).map((item, index) => {
    return (
      <JobItem
        key={index}
        company={item.company}
        logo={item.logo}
        new={item.new}
        featured={item.featured}
        position={item.position}
        postedAt={item.postedAt}
        contract={item.contract}
        location={item.location}
        role={item.role}
        level={item.level}
        languages={item.languages}
        clickHandler={clickHandler}
        searchJob={searchJob}
      />
    );
  });

  return (
    <>
      <div className="container-wrapper">
        <div className="img-box">
          <img src="/images/bg-header-desktop.svg" alt="" />
        </div>
        {searchJob.length > 0 && (
          <div className="input-box">
            <div className="input-box-child">{seachArr}</div>
            <p className="input-box-text" onClick={clearHandler}>
              clear
            </p>
          </div>
        )}
      </div>
      <div className="parent-container">{dataArr}</div>
      <button onClick={showModal} className="addButton">
        +
      </button>
      {modalVisible && (
  <Modal
    closeModal={closeModal}
    addNewDataValue={addNewDataValue}
    addInputData={addInputData}

  />
)}

    </>
  );
};


export default App