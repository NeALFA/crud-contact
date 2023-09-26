import React, { Component } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import ContactForm from "../components/ContactForm/ContactForm";
import SearchForm from "../components/search/SearchForm";
import Tablee from "../components/table/Tablee";

export class HomePage extends Component {
  state = {
    datas: [
      {
        id: 1,
        firstName: "c",
        lastName: "Shodiyev",
        number: "991234567",
        category: "friends",
        favorite: true,
      },
      {
        id: 2,
        firstName: "a",
        lastName: "Sharipov",
        number: "991235567",
        category: "family",
        favorite: true,
      },
      {
        id: 3,
        firstName: "b",
        lastName: "Shodiyev",
        number: "991234567",
        category: "other",
        favorite: false,
      },
    ],
    data: {
      firstName: "",
      lastName: "",
      number: "",
      category: "all",
      favorite: false,
      fullName: "",
    },
    selected: null,
    search: "",
    category: "all",
    abs: "",
  };
  render() {
    let { datas, data, selected, search, category, abs } = this.state;

    let allDatas = datas.filter((data) =>
      data.firstName.toLowerCase().includes(search)
    );

    if (category !== "all") {
      allDatas = datas.filter((todo) => todo.category === category);
    }
    const favoriteTab = allDatas.filter((data) => data.favorite);

    const submit = (e) => {
      e.preventDefault();
      let newDatas;
      let newData = { ...data };
      if (selected === null) {
        let newDatas = [...datas, { ...data, id: datas.length + 1 }];
        this.setState({
          datas: newDatas,
          data: {
            id: "",
            firstName: "",
            lastName: "",
            number: "",
            category: "other",
            favorite: false,
          },
        });
      } else {
        newDatas = datas.map((data) => {
          if (data.id === selected) {
            return newData;
          }
          return data;
        });
        this.setState({
          datas: newDatas,
          data: {
            id: "",
            firstName: "",
            lastName: "",
            number: "",
            category: "other",
            favorite: false,
          },
          selected: null,
        });
      }
    };

    const handleData = (e) => {
      let newData = { ...data, [e.target.id]: e.target.value };
      this.setState({ data: newData });
    };

    const handleLike = (e) => {
      let newData = { ...data, [e.target.id]: e.target.checked };
      this.setState({ data: newData });
    };

    const editContact = (id) => {
      const data = datas.find((data) => data.id === id);
      this.setState({ data, selected: id });
    };

    const handleSearch = (e) => {
      this.setState({ search: e.target.value.trim().toLowerCase() });
    };
    const filterCategory = (e) => {
      this.setState({ category: e.target.value });
    };
    let newAllDatas;

    const filterABC = (e) => {
      this.setState({ abs: e.target.value });
    };

    if (abs === "abc") {
      newAllDatas = allDatas.sort((a, b) => {
        const nameA = a.firstName.toUpperCase();
        const nameB = b.firstName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (abs === "cba") {
      newAllDatas = allDatas.sort((a, b) => {
        const nameA = a.firstName.toUpperCase();
        const nameB = b.firstName.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
    } else {
      newAllDatas = allDatas;
    }
    return (
      <Container>
        <ContactForm
          data={data}
          selected={selected}
          submit={submit}
          handleData={handleData}
          handleLike={handleLike}
        />

        <SearchForm
          data={data}
          handleSearch={handleSearch}
          filterABC={filterABC}
          filterCategory={filterCategory}
        />

        <Tabs defaultActiveKey="All" className="mb-3">
          <Tab eventKey="All" title="All">
            {newAllDatas.map((data, i) => (
              <Tablee key={i} no={i + 1} {...data} editContact={editContact} />
            ))}
          </Tab>
          <Tab eventKey="Favorite" title="Favorite">
            {favoriteTab.map((data, i) => (
              <Tablee key={i} no={i + 1} {...data} editContact={editContact} />
            ))}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default HomePage;
