import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

import { Select } from "chakra-react-select";
import { ColorOption, colorOptions } from "./ExampleSelect";

interface OtherInformation {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  techStack: { id: string; value: string }[];
}

const App: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth:'',
    techStack: [''],
  });

  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<OtherInformation>();

  const [selectedColors, setSelectedColors] = useState<readonly ColorOption[]>(
    []
  );

  const { fields, append, remove } = useFieldArray({
    control,
    name: "techStack",
  });

  const handleTechStackChange = (index: number, value: string) => {
    setValue(`techStack.${index}.value`, value);
  };

  const onSubmit: SubmitHandler<OtherInformation> = (
    data: OtherInformation
  ) => {
    console.log(data); // Log the form data first
    console.log("harsh");
    
  };

  const changeHandler =

  return (
    <>
      <Heading fontSize="xx-large" fontWeight="500" textAlign="center">
        User Details
      </Heading>
      <FormControl
        width="50%"
        marginLeft="30%"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div style={{ backgroundColor: "darkgray" }}>
          <div style={{ marginLeft: "20px" }}>
            <Heading fontSize="x-large" fontWeight={400} mt={5}>
              Basic Details
            </Heading>
            <div style={{ display: "flex", marginTop: "15px" }}>
              <div>
                <FormLabel>First name</FormLabel>
                <Input
                  style={{ borderColor: "gray", boxShadow: "none" }}
                  m={0}
                  marginRight={5}
                  width="80%"
                  onChange={changeHandler}
                  placeholder="First name"
                  {...register("firstName", {
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.firstName && <span>{errors.firstName.message}</span>}
              </div>
              <div>
                <FormLabel>Last Name:</FormLabel>
                <Input
                  {...register("lastName", {
                    required: "Last name is required.",
                  })}
                  style={{ borderColor: "gray", boxShadow: "none" }}
                />
              </div>
            </div>
          </div>

          <div style={{ marginLeft: "20px" }}>
            <Heading
              fontSize="x-large"
              fontWeight="400"
              marginBottom={5}
              marginTop={5}
            >
              Other Information
            </Heading>

            <div style={{ display: "flex" }}>
              <div style={{ width: "40%", marginRight: "40px" }}>
                <FormLabel>Gender</FormLabel>
                <Select
                  isMulti
                  options={colorOptions}
                  placeholder="Select some colors..."
                  closeMenuOnSelect={false}
                  value={selectedColors}
                  onChange={(selectedOptions) =>
                    setSelectedColors(selectedOptions)
                  }
                />
              </div>
              <div style={{ width: "38%" }}>
                <FormLabel>Date of Birth:</FormLabel>
                <Input
                  style={{ borderColor: "gray", boxShadow: "none" }}
                  type="date"
                  {...register("dateOfBirth", {
                    required: "Date of birth is required.",
                  })}
                />
              </div>
            </div>

            <div style={{ display: "flex", marginTop: 10 }}>
              <div style={{ width: "37%", marginTop: "25px" }}>
                <FormLabel>Tech Stack:</FormLabel>
              </div>
              <div>
                <Button
                  mt={4}
                  ml={-7}
                  colorScheme="teal"
                  type="button"
                  onClick={() =>
                    append({ id: Date.now().toString(), value: "" })
                  }
                >
                  +
                </Button>
              </div>
            </div>
            <div>
              <Input
                style={{ borderColor: "gray", boxShadow: "none" }}
                type="text"
                width="40%"
                margin={0}
                padding={0}
                marginTop={5}
              />
            </div>

            <div>
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  style={{ display: "flex", marginBottom: 8 }}
                >
                  <Input
                    style={{ borderColor: "gray", boxShadow: "none" }}
                    type="text"
                    onChange={(e) =>
                      handleTechStackChange(index, e.target.value)
                    }
                    width="40%"
                    margin={0}
                    padding={0}
                    marginTop={5}
                  />
                  {index > 0 && (
                    <Button
                      type="button"
                      onClick={() => remove(index)}
                      marginLeft={-10}
                      zIndex={1}
                      marginTop={5}
                    >
                      X
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <Button onClick={()=>{console.log('harsh');
              }}
                marginTop={5}
                marginBottom={6}
                style={{ marginLeft: "80%" }}
                colorScheme="teal"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </FormControl>
    </>
  );
};

export default App;
