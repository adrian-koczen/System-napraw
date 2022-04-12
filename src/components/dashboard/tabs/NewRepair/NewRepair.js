import React from "react";
// Components
import TabLabel from "../TabLabel";
import NewRepairForm from "./NewRepairForm/NewRepairForm";

const NewRepair = () => {
  return (
    <div>
      <TabLabel name={"Nowa naprawa"} />
      <NewRepairForm />
    </div>
  );
};

export default NewRepair;
