import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { useForm, Controller } from "react-hook-form";

export default function DateCheck() {
  const { control, handleSubmit } = useForm();
  const [submittedDate, setSubmittedDate] = useState();
  const months = ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"]

  const onSubmit = ({ date }) => {
    setSubmittedDate(date);
  };

  return (
    <>
      <form className="font-sans-caption" onSubmit={handleSubmit(onSubmit)}>
      <p>Izabran datum:  {submittedDate?.format?.("DD MM YYYY")}</p>
        <Controller
          
          control={control}
          name="date"
          rules={{ required: true }} 
          render={({
            field: { onChange, name, value },
            
            formState: { errors }, 
          }) => (
            <>
              <DatePicker
                weekStartDayIndex={1}
                weekDays={["NE", "PO", "UT","SR","ČE","PE", "SU"]}
                months={months}
                value={value || ""}
                onChange={(date) => {
                  onChange(date?.isValid ? date : "");
                }}
                format={"DD/MM/YYYY"}
              />
              {errors && errors[name] && errors[name].type === "required" && (
               
                <span>Molimo unesite datum.</span>
              )}
            </>
          )}
        />
        <button type="submit" className="bg-red-500  text-white px-2  font-medium  hover:bg-red-600 transition duration-200 each-in-out mt-8 ml-12"  style={{ position: "absolute", left: "0" }}>Rezervirajte termin</button>
      </form>
      
    </>
  )
}

        


 

