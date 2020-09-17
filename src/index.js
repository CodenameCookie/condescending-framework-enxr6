import React, { Component } from "react";
import { render } from "react-dom";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

import "firebase/auth";
import "firebase/database";
import FruitAccess from "./DataAccess/Base/FruitAccess";
let globalThis;

console.clear();
console.log("console cleared");

// Data to be filled from database
let RemoteData = [];

const SortableItem = SortableElement((object, index) => (
  //console.warn(object.value.name)
  <li tabIndex={Object.keys(object)}>{object.value}</li>
));

const SortableList = SortableContainer(({ items }) => {
  // console.log("START: SortableList ");
  // console.log(items);
  //console.log("END: SortableList ");
  return (
    // console.log("###############################"),
    // console.table(Object.entries(items))

    <ul>
      {items.map((value, index) => (
        <SortableItem
          key={`item-$index{value.name}`}
          index={index}
          value={value.name}
        />
      ))}
    </ul>
  );
});

async function FruitItems() {
  await FruitAccess.subscribe((data) => {
    console.log("Start: fruits");
    // console.table(fruits);
    // console.log("End: fruits");
    RemoteData = data;
    globalThis.setState({
      items: RemoteData
    });

    // global.setState(updater, [callback])
    return;
  });
}

class SortableComponent extends Component {
  constructor(props) {
    super(props);
    console.log("START: Test");
    FruitItems();
    globalThis = this;

    console.log("END: Test");

    globalThis.state = {
      items: RemoteData
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    globalThis.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };

  render() {
    //  console.log("START FRUIT LOG");

    //  console.log("END FRUIT LOG");
    return (
      <SortableList
        items={globalThis.state.items}
        onSortEnd={globalThis.onSortEnd}
      />
    );
  }
}

render(
  <>
    <SortableComponent fruits={"blabla"} />
  </>,
  document.getElementById("root")
);
