import style from "./style.module.css";
import React, { useState } from "react";
// Components
import FormElement from "./FormElement";
import Summary from "./Summary/Summary";

const SelectStep = ({ dataForm, setDataForm }) => {
  const [step, setStep] = useState(0);
  switch (step) {
    case 0:
      return (
        <FormElement
          title={"Marka samochodu"}
          placeholder={"Wprowadź markę samochodu"}
          name="marka"
          dataForm={dataForm}
          setDataForm={setDataForm}
          setStep={setStep}
          step={step}
        />
      );
    case 1:
      return (
        <FormElement
          title={"Model samochodu"}
          placeholder={"Wprowadź model samochodu"}
          name="model"
          dataForm={dataForm}
          setDataForm={setDataForm}
          setStep={setStep}
          step={step}
        />
      );
    case 2:
      return (
        <FormElement
          title={"Rocznik samochodu"}
          placeholder={"Wprowadź rocznik samochodu"}
          name="rocznik"
          dataForm={dataForm}
          setDataForm={setDataForm}
          setStep={setStep}
          step={step}
        />
      );
    case 3:
      return <Summary dataForm={dataForm} />;
    default:
      return <></>;
  }
};

const NewRepairForm = () => {
  const [dataForm, setDataForm] = useState({
    marka: {
      value: "",
      isCompleted: false,
      step: 0,
    },
    model: {
      value: "",
      isCompleted: false,
      step: 1,
    },
    rocznik: {
      value: "",
      isCompleted: false,
      step: 2,
    },
  });
  return (
    <div className={style.container}>
      <p>
        Kreator tworzenia nowej naprawy. Wprowadzenie danych potrwa do 5 minut.
      </p>
      <SelectStep dataForm={dataForm} setDataForm={setDataForm} />
    </div>
  );
};

export default NewRepairForm;
